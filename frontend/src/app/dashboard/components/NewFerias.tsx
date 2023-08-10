import { useCreateUser } from '@/app/hooks/useCreateUser';
import React,{useEffect,useState,FormEvent} from 'react'
import { Inter,Roboto } from 'next/font/google';
import { useGlobalContext } from '@/app/context/store'

import { VACANTY_LIST_TYPE } from '@/app/context/typesVacantis';
import { useFormatDate } from '@/app/hooks/useFormatDate';
import { useCreateVacanty } from '@/app/hooks/useCreateVacancy';
const inter = Inter({style:"normal",subsets:[]})
const roboto = Roboto({style:"normal",subsets:[],weight:"400"})
interface Vacanty{
  start: string,
  end: string,
  days: number,
  userId: null | string,
  userName:null | string,
  imageUrl:null | string,
} 

function NewFerias() {
  const {setAtualPage,setDashboardPage,setTextNavTop} = useGlobalContext();
  const [vacanty, setVacanty] = useState<Vacanty>({
    start: '',
    end: '',
    days:0,
    userId: localStorage.getItem('userId'),
    userName: localStorage.getItem('userName'),
    imageUrl: localStorage.getItem('userImage'),
  });
  
  function EnvioFormulario(e: FormEvent) {
    e.preventDefault();
    localStorage.getItem('userId')
    const startDate = new Date(vacanty.start);
    const endDate = new Date(vacanty.end);
    // const timeDifferenceInDays = Math.ceil((endDate - startDate) / (24 * 60 * 60 * 1000));
    const days = useFormatDate(startDate,endDate)
    // const days = timeDifferenceInDays;
    // console.log(days)
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    const imageUrl = localStorage.getItem('userImage');
    setVacanty({...vacanty,userId: userId,days: days,imageUrl: imageUrl,userName: userName})
    if (userId !== null) {
      useCreateVacanty(vacanty)
      setDashboardPage(VACANTY_LIST_TYPE)
    }    // Call your function to handle form submission
    else{
      return
    }
  }
  return (
          <form className={`${inter.className} flex w-full `} onSubmit={EnvioFormulario}>
            
            <div className='mt-[39px] ml-[247px] flex flex-col justify-start w-[572px] h-[572px]'>
              <div className='w-[100%] py-2 h-[43px] text-gray-500  text-2xl'>Escolha as datas da Férias</div>
              <div className='h-[68px] mt-4'>
                <label htmlFor="" className='text-gray-400 text-xs font-normal focus:border-none'>Data inicial</label>
                <div className='mt-2'>
                  <input 
                    type="date" 
                    className="w-[572px] h-[42px] rounded-md border border-[#F9FAFB] bg-[#F9FAFB]" 
                    value={vacanty.start}
                    onChange={(e)=>setVacanty({...vacanty,start: e.target.value})}    
                  />
                </div>
              </div>
              <div className='h-[68px] mt-4'>
                <label htmlFor="" className='text-gray-400 text-xs font-normal focus:border-none'>Data Final</label>
                <div className='mt-2'>
                  <input 
                    type="date" 
                    className="w-[572px] h-[42px] rounded-md border border-[#F9FAFB] bg-[#F9FAFB]" 
                    value={vacanty.end}
                    onChange={(e)=>setVacanty({...vacanty,end: e.target.value})}    
                  />
                </div>
              </div>
              <div className='flex mt-8 justify-end w-full '>
                <div onClick={()=>{setTextNavTop("Users Ferias List");setDashboardPage(VACANTY_LIST_TYPE)}} className={`${roboto.className} hover:cursor-pointer w-[99px] mr-6 h-[44px] py-[7px] text-[16px] px-[15px] border border-[#000] flex justify-center items-center rounded-[20px]`}>Cancel</div>
                <button type='submit' className={`${roboto.style.fontFamily} hover:cursor-pointer text-[16px] text-white bg-[#9747FF] w-[210px] h-[44px] rounded-[20px] flex justify-center items-center`}>Save</button>
              </div>
            </div>
          </form>
  )
}

export default NewFerias