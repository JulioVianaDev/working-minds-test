import React from 'react'
import { useGlobalContext } from '@/app/context/store'
import { NEW_USER_TYPE } from '@/app/context/typesPages'

function ButtonTop() {
  const {setAtualPage,setTextNavTop} = useGlobalContext()
  return (
    <div className=' w-nav-top h-button-content flex justify-end items-center pr-8' >
      <div onClick={()=>{setAtualPage(NEW_USER_TYPE);setTextNavTop('New User')}} className='hover:cursor-pointer rounded-buttonTop flex items-center text-white bg-purple px-padding-button-sides py-padding-button-top'>ADD NEW
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19 12.3158H13V18H11V12.3158H5V10.421H11V4.73682H13V10.421H19V12.3158Z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

export default ButtonTop