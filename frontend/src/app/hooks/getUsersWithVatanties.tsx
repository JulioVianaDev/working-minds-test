export const getUsersWithVacanties = async()=>{
  const getData = await fetch('http://localhost:8080/vacations/usersWithVacations')
  const json = await getData.json()
  return json
}