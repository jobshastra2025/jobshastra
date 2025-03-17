"use server";
export async function handleRecruiterLogin(formData) {
  console.log(formData.get("email"));
  console.log(formData.get("password"));
}

export async function handleRecruiterSignUp(formData) {
  console.log(formData.get("fullname"));
  console.log(formData.get("email"));
  console.log(formData.get("password"));
}
