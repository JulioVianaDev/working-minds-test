import { useCreateUser } from '@/app/hooks/useCreateUser';
import React,{useEffect,useState,FormEvent} from 'react'
import { Inter,Roboto } from 'next/font/google';
import { useGlobalContext } from '@/app/context/store'
import { USER_LIST_TYPE } from '@/app/context/typesPages';
const inter = Inter({style:"normal",subsets:[]})
const roboto = Roboto({style:"normal",subsets:[],weight:"400"})
interface User{
  name: string,
  hiring: string,
  days: number,
  image: string | File
}

function NewUser() {
  const {setAtualPage,setTextNavTop} = useGlobalContext();
  useEffect(()=>{
    const fileInput:any = document.getElementById("image");
    const imageLabel:any = document.getElementById("imageLabel");
    const imageAdd:any = document.getElementById("imageAdd");
    fileInput.addEventListener("change",function(){
      if(fileInput.files.length >0 && fileInput.files[0].type.startsWith("image/")){
        const reader = new FileReader();
        reader.onload = function (event) {
          if (event.target) {
            const target = event.target as FileReader;
            imageAdd.innerHTML = ``;
            imageAdd.style.backgroundImage = `url(${target.result})`;
          }
        };
        reader.readAsDataURL(fileInput.files[0])
      }else{
        imageAdd.style.backgroundImage = "";
        imageAdd.innerHTML = ''
        
      }
    })
  },[])
  const [newUser, setNewUser] = useState<User>({
    name: '',
    hiring: '',
    image:'',
    days:0
  });
  
  function EnvioFormulario(e: FormEvent) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('image', newUser.image instanceof File ? newUser.image : '');
    formData.append('name', newUser.name);
    formData.append('days', newUser.days.toFixed());
    formData.append('hiring', newUser.hiring);
    
    // Call your function to handle form submission
    useCreateUser(formData)
    setAtualPage(USER_LIST_TYPE)
  }
  return (
          <form className={`${inter.className} flex w-full `} onSubmit={EnvioFormulario}>
            <div className='w-[262px] h-[366px] ml-[154px] flex justify-center items-center'>
              <label htmlFor='image' id="imageLabel" className='imageLabel flex flex-col'>
                <div className='mb-[35px]'>Photo Profile</div>
                <div id="imageAdd" className='w-[210px] h-[210px] rounded-full bg-[#F9FAFB] flex justify-center items-center'>
                  <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 0C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3L0 18C0 18.7956 0.31607 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.31607 21.7956 0 21 0L3 0ZM21 18H3L9 6L13.5 15L16.5 9L21 18Z" fill="#6B7280"/>
                  </svg>
                </div>
              </label>
              <input
                type='file'
                id="image"
                className='hidden'
                required
                accept='image/*'
                onChange={(e) => {
                  const input = e.target as HTMLInputElement;
                  if (input.files && input.files[0]) {
                    setNewUser({ ...newUser, image: input.files[0] });
                  }
                }}
              />
            </div>
            <div className='mt-[39px] ml-[247px] flex flex-col justify-start w-[572px] h-[572px]'>
              <div className='w-[100%] py-2 h-[43px] text-gray-500 text-sm font-medium'>Profile</div>
              <div className='h-[68px] mt-4'>
                <label htmlFor="" className='text-gray-400 text-xs font-normal focus:border-none'>Full Name *</label>
                <div className='mt-2'>
                  <input 
                    type="text" 
                    className="w-[572px] h-[42px] rounded-md border border-[#F9FAFB] bg-[#F9FAFB]" 
                    value={newUser.name}
                    onChange={(e)=>setNewUser({...newUser,name: e.target.value})}  
                  />
                </div>
              </div>
              <div className='h-[68px] mt-4'>
                <label htmlFor="" className='text-gray-400 text-xs font-normal focus:border-none'>Hiring Date</label>
                <div className='mt-2'>
                  <input 
                    type="date" 
                    className="w-[572px] h-[42px] rounded-md border border-[#F9FAFB] bg-[#F9FAFB]" 
                    value={newUser.hiring}
                    onChange={(e)=>setNewUser({...newUser,hiring: e.target.value})}    
                  />
                </div>
              </div>
              <div className='flex mt-8 justify-end w-full '>
                <div onClick={()=>{setTextNavTop("Lista de usuários");setAtualPage(USER_LIST_TYPE);}} className={`${roboto.className} hover:cursor-pointer w-[99px] mr-6 h-[44px] py-[7px] text-[16px] px-[15px] border border-[#000] flex justify-center items-center rounded-[20px]`}>Cancel</div>
                <button type='submit' className={`${roboto.style.fontFamily} hover:cursor-pointer text-[16px] text-white bg-[#9747FF] w-[210px] h-[44px] rounded-[20px] flex justify-center items-center`}>Save</button>
              </div>
            </div>
          </form>
  )
}

export default NewUser