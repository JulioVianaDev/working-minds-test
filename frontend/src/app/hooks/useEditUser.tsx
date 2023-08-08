export async function useEditUser({formData,id}:{id: string,formData: FormData}) {
  console.log(formData)
  console.log(id)
  try {
    const response = await fetch(`http://localhost:8080/users/editUser/${id}`, {
      method: 'PATCH',
      body: formData,
    });

    if (response.ok) {
      console.log('User edited successfully');
    } else {
      console.error('Failed to create user');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}