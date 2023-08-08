export async function useEditUser({formData,id}:{id: string,formData: FormData}) {
  try {
    const response = await fetch(`http://localhost:8080/users/editUser/${id}`, {
      method: 'PATCH',
      body: formData,
    });

    if (response.ok) {
      console.log('User created successfully');
    } else {
      console.error('Failed to create user');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}