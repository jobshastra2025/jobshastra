"use server";


export async function handleJobSeekerLogin(formData) {
  console.log(formData.get("email"));
  console.log(formData.get("password"));
}

export async function handleJobSeekerSignUp(formData) {
  console.log(formData.get("fullname"));
  console.log(formData.get("email"));
  console.log(formData.get("password"));
}




import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
// import { useRouter } from 'next/router';
// import { router } from 'json-server';

// import { router } from 'json-server';

export async function login(formData) {
  const supabase = await createClient();

  const userData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const { data, error } = await supabase.auth.signInWithPassword(userData);

  if (error) {
    console.error("Login failed:", error.message);
    throw new Error("Invalid credentials");
    // redirect('/jobseeker/signup') // redirect to signup page if login fails
  }

  console.log("Login successful:", data);

  revalidatePath('/', 'layout');
  redirect('/profileSetup'); // ✅ Redirect works correctly here
}

export async function signup(formData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/jobseeker/login')
 
}