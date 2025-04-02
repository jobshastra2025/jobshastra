"use server";

export async function handleJobSeekerLogin(formData){
    console.log(formData.get("email"));
    console.log(formData.get("password"));
}

export async function handleJobSeekerSignUp(formData){
    console.log(formData.get("fullname"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
}


// 'use server'

// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'

// import { createClient } from '@/utils/supabase/server'


// export async function login(formData) {
//   const supabase = await createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') ,
//     password: formData.get('password') ,
//   }

//   const { error } = await supabase.auth.signInWithPassword(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/')
// }

// export async function signup(formData) {
//   const supabase = await createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') ,
//     password: formData.get('password') ,
//   }

//   const { error } = await supabase.auth.signUp(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/')
// }