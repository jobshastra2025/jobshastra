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