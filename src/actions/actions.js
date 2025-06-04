"use server"
// new code
export async function handleSearchAction(formData){
    console.log(formData.get("role"));
    console.log(formData.get("exp"));
    console.log(formData.get("location"));
} 