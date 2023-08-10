export async function useDeleteVacanty(id:string) {
  try {
    const response = await fetch(`http://localhost:8080/vacations/deleteVacation/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Férias deleted successfully');
    } else {
      console.error('Failed to create user');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}