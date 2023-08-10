import axios from 'axios'

export async function useCreateVacanty(json:any) {
  axios.post('http://localhost:8080/vacations/createVacation',json)
    .then(res=>console.log("usuario criado com sucesso",res))
    .catch(erro=>console.log(erro))
    
}