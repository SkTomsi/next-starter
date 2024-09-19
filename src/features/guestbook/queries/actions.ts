"use server";

export async function createGuestbookEntry(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  console.log(data);

  return null;
}
