export async function useDeleteUser(id:string) {
  try {
    const response = await fetch(`http://localhost:8080/users/deleteUser/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('User deleted successfully');
    } else {
      console.error('Failed to create user');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}