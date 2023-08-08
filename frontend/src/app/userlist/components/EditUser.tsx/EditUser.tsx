import React,{useEffect,useState,FormEvent} from 'react'
import { Inter,Roboto } from 'next/font/google';
import { useGlobalContext } from '@/app/context/store'
import { USER_LIST_TYPE } from '@/app/context/typesPages';
import { useEditUser } from '@/app/hooks/useEditUser';
import DatePicker from '../DatePicker';

const inter = Inter({style:"normal",subsets:[]})
const roboto = Roboto({style:"normal",subsets:[],weight:"400"})


function editUser() {
  const {setAtualPage,atualUserEditing,setAtualUserEditin} = useGlobalContext();
  const [datePicker,setDatePicker] = useState(false)
  const formattedBirthday = new Date(atualUserEditing.hiring).toISOString().split('T')[0];
  useEffect(()=>{
    const fileInput:any = document.getElementById("image");
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
    imageAdd.style.backgroundImage = `url(${atualUserEditing.imageUrl})`;
    setAtualUserEditin({...atualUserEditing,hiring: formattedBirthday})
  },[])
  function EnvioFormulario(e: FormEvent) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('image', atualUserEditing.image instanceof File ? atualUserEditing.image : '')
    formData.append('name', atualUserEditing.name);
    formData.append('hiring', atualUserEditing.hiring);
    const id = atualUserEditing._id
    // Call your function to handle form submission
    useEditUser({formData,id})
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
                name='image'
                accept='image/*'
                onChange={(e) => {
                  const input = e.target as HTMLInputElement;
                  if (input.files && input.files[0]) {
                    setAtualUserEditin({ ...atualUserEditing, image: input.files[0] });
                  }
                }}
              />
            </div>
            <div className='mt-[0px] ml-[247px] flex flex-col justify-start w-[604px] h-[744px]'>
              <div className='w-[100%] py-2 h-[43px] text-gray-500 text-sm font-medium'>Profile</div>
              <div className='h-[68px] mt-4'>
                <label htmlFor="" className='text-gray-400 text-xs font-normal focus:border-none'>Full Name *</label>
                <div className='mt-2'>
                  <input 
                    type="text" 
                    name='name'
                    className="w-[572px] h-[42px] rounded-md border border-[#F9FAFB] bg-[#F9FAFB]" 
                    value={atualUserEditing.name}
                    onChange={(e)=>setAtualUserEditin({...atualUserEditing,name: e.target.value})}  
                  />
                </div>
              </div>
              <div className=''>
                <label htmlFor="" className='text-gray-400 text-xs font-normal focus:border-none'>Hiring Date</label>
                <div className='mt-2 relative'>
                  <input 
                    type="date" 
                    name='hiring'
                    readOnly  
                    onSelect={()=>setDatePicker(true)}
                    className="w-[572px] h-[42px] rounded-md border border-[#F9FAFB] bg-[#F9FAFB]" 
                    value={atualUserEditing.hiring}
                    onChange={(e)=>setAtualUserEditin({...atualUserEditing,hiring: e.target.value})}    
                  />
                  {
                    datePicker ? <DatePicker  atualUserEditing={atualUserEditing} setAtualUserEditin={setAtualUserEditin} setDatePicker={setDatePicker}/>: null
                  }
                    
                </div>
              </div>
              
              <div className='flex mt-8 justify-end w-full '>
                <div onClick={()=>setAtualPage(USER_LIST_TYPE)} className={`${roboto.className} hover:cursor-pointer w-[99px] mr-6 h-[44px] py-[7px] text-[16px] px-[15px] border border-[#000] flex justify-center items-center rounded-[20px]`}>Cancel</div>
                <button type='submit' className={`${roboto.style.fontFamily} hover:cursor-pointer text-[16px] text-white bg-[#9747FF] w-[210px] h-[44px] rounded-[20px] flex justify-center items-center`}>Save Changes</button>
              </div>
            </div>
          </form>
  )
}

export default editUser