export const useGetVacations = async()=>{
  const getData = await fetch('http://localhost:8080/vacations')
  const json = await getData.json()
  return json
}