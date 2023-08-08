export const useApi = async()=>{
  const getData = await fetch('http://localhost:8080/users')
  const json = await getData.json()
  return json
}