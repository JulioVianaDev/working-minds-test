import { useGlobalContext } from '@/app/context/store'
import { getUsersWithVacanties } from '@/app/hooks/getUsersWithVatanties'
import React,{useEffect,useState} from 'react'
import { Roboto } from 'next/font/google';

import { useApi } from '@/app/hooks/useApi';
import VacantiesRow from './VacantiesRow';
import { User } from './VacantiesRow';
import { useGetVacations } from '@/app/hooks/useGetVacations';
const roboto = Roboto({weight: "500",subsets: ["latin"], style: "normal"})
function VacanciesList() {
  const {} = useGlobalContext()
  const [users,setUsers] = useState<User[]>([])
  useEffect(()=>{
    let usersApi = useGetVacations().then(res=>setUsers(res))
  },[])

  const deleteOfState=(id:string)=>{
    setUsers(users.filter(u=>u._id !== id))
  }
  return (
    <div>
    <div className={`flex items-center ${roboto.className}`}>
      <div className="flex items-center justify-center">
        <svg width="58" height="50" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="58" height="50" fill="white"/>
        <rect x="0.5" y="48.5" width="57" height="1" fill="#EAEAEA" stroke="#DFDFDF"/>
        <rect x="19.5" y="15.5" width="19" height="19" rx="1.5" fill="white" stroke="#6C757D"/>
        </svg>
      </div>
      <div className='flex items-center h-nav-aside w-profile border-b-2 border-gray-300'>Profile</div>
      <div className='flex relative justify-between items-center h-nav-aside w-nome border-b-2 border-gray-300'>
        <div>Nome</div> 
        <div className='absolute top-2 right-4'>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.84873 8.48438H2.15185C1.92099 8.48438 1.79209 8.24063 1.93506 8.07422L5.78349 3.61172C5.89365 3.48398 6.10576 3.48398 6.21709 3.61172L10.0655 8.07422C10.2085 8.24063 10.0796 8.48438 9.84873 8.48438Z" fill="#343A40"/>
          </svg>
        </div>
      </div>
      <div className='flex items-center h-nav-aside w-birth border-b-2 border-gray-300'>Dias Gastados</div>
     
      <div className='flex justify-center items-center h-nav-aside w-status border-b-2 border-gray-300'>Status</div>
      <div className='flex justify-center items-center h-nav-aside w-action border-b-2 border-gray-300'>Action</div>
    </div>
    <div className='overflow-y-scroll h-[500px]'>

      {
        users.map(u=><VacantiesRow key={u._id} {...u} deleteOfState={deleteOfState} />)
      }
    </div>
    </div>
  )
}

export default VacanciesList