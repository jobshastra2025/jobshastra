"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function login(formData) {
  const supabase = await createClient();

  const userData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const { data: authData, error } = await supabase.auth.signInWithPassword(userData);

  if (error) {
    console.error("Login failed:", error.message);
    throw new Error("Invalid credentials");
  }

  const user = authData.user;

  // Fetch full profile
  const { data: profile, error: profileError } = await supabase
    .from('profile')
    .select(`
      full_name, email, phone, gender, dob, location, linkedin,
      jobTitle, experience, companyName, portfolioLink, skills,
      resume, industryType, duration, noticePeriod, annualSalary,
      degree, collegeName, startYear, endYear, grade, certification, specialization,
      language, hobbies, achivement, reference, workLocation, preferedSalary
    `)
    .eq('user_id', user.id)
    .single();

  // 🚨 If profile doesn't exist, it's a new user — redirect to profile setup
  if (!profile || profileError?.code === 'PGRST116') {
    revalidatePath('/', 'layout');
    redirect('/profileSetup');
  }

  // Step 1: Check personal info
  const isPersonalInfoComplete =
    profile.full_name &&
    profile.email &&
    profile.phone &&
    profile.gender &&
    profile.dob &&
    profile.location &&
    profile.linkedin;

  if (!isPersonalInfoComplete) {
    revalidatePath('/', 'layout');
    redirect('/profileSetup');
  }

  // Step 2: Check professional info
  const isProfessionalInfoComplete =
    profile.jobTitle &&
    profile.experience &&
    profile.companyName &&
    profile.portfolioLink &&
    profile.skills &&
    profile.resume &&
    profile.industryType &&
    profile.duration &&
    profile.noticePeriod &&
    profile.annualSalary;

  if (!isProfessionalInfoComplete) {
    revalidatePath('/', 'layout');
    redirect('/profileSetup/professionalInfo');
  }

  // Step 3: Educational info
  const isEducationalInfoComplete =
    profile.degree &&
    profile.collegeName &&
    profile.startYear &&
    profile.endYear &&
    profile.grade &&
    profile.specialization &&
    profile.certification;

  if (!isEducationalInfoComplete) {
    revalidatePath('/', 'layout');
    redirect('/profileSetup/educationalInfo');
  }

  // Step 4: Additional info
  const isAdditionalInfoComplete =
    profile.language &&
    profile.hobbies &&
    profile.achivement &&
    profile.reference &&
    profile.workLocation &&
    profile.preferedSalary;

  if (!isAdditionalInfoComplete) {
    revalidatePath('/', 'layout');
    redirect('/profileSetup/additionalInfo');
  }

  // All steps complete
  revalidatePath('/', 'layout');
  redirect('/');
}
