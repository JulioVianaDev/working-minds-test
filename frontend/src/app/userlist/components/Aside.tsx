import React from 'react'
import { useGlobalContext } from '@/app/context/store'
import { USER_LIST_TYPE } from '@/app/context/typesPages';
import Link from 'next/link';
function Aside() {
  const {setTextNavTop,setAtualPage} = useGlobalContext();
  return (
    <aside className='w-128 z-10 h-screen bg-aside text-white pt-20 '>
    <div className='flex w-nav-aside h-nav-aside pl-icons-left items-center'>
      <div className='mr-icons-right'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.99996 2.5L1.66663 10H4.16663V16.6667H9.16663V11.6667H10.8333V16.6667H15.8333V10H18.3333L9.99996 2.5ZM14.1666 15H12.5V10H7.49996V15H5.83329V8.49167L9.99996 4.74167L14.1666 8.49167V15Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M5.83337 8.4917V15H7.50004V10H12.5V15H14.1667V8.4917L10 4.7417L5.83337 8.4917Z" fill="#28A745" fillOpacity="0.3"/>
        </svg>
      </div>
      <div onClick={()=>setTextNavTop('Cadastrar Férias')}><Link href='/dashboard'>Dashboard</Link></div>
    </div>
    <div className='flex w-nav-aside h-nav-aside pl-icons-left items-center'>
      <div  className='mr-icons-right'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fillRule="evenodd" clipRule="evenodd" d="M12.5 5.83337V9.16671H13.3333V10.8334H10.8333V4.16671H12.5L10 0.833374L7.5 4.16671H9.16667V10.8334H6.66667V9.10837C7.25 8.80004 7.66667 8.20837 7.66667 7.50004C7.66667 6.49171 6.84167 5.66671 5.83333 5.66671C4.825 5.66671 4 6.49171 4 7.50004C4 8.20837 4.41667 8.80004 5 9.10837V10.8334C5 11.7584 5.74167 12.5 6.66667 12.5H9.16667V15.0417C8.575 15.35 8.16667 15.9584 8.16667 16.6667C8.16667 17.6834 8.99167 18.5 10 18.5C11.0083 18.5 11.8333 17.6834 11.8333 16.6667C11.8333 15.9584 11.425 15.35 10.8333 15.0417V12.5H13.3333C14.2583 12.5 15 11.7584 15 10.8334V9.16671H15.8333V5.83337H12.5Z" fill="white"/>
        </svg>

      </div>
      <div>Network</div>
    </div>
    <div className='flex w-nav-aside h-nav-aside pl-icons-left items-center'>
      <div  className='mr-icons-right'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 5.83337H15.8333V14.1667H12.5V5.83337Z" fill="#28A745" fillOpacity="0.3"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M2.5 10.8333H9.16667V12.5H2.5V10.8333ZM2.5 14.1666H9.16667V15.8333H2.5V14.1666ZM2.5 7.49996H9.16667V9.16663H2.5V7.49996ZM2.5 4.16663H9.16667V5.83329H2.5V4.16663ZM10.8333 4.16663V15.8333H17.5V4.16663H10.8333ZM15.8333 14.1666H12.5V5.83329H15.8333V14.1666Z" fill="white"/>
        </svg>
      </div>
      <div>List Doc</div>
    </div>
    <div onClick={()=>{setTextNavTop('User List');setAtualPage(USER_LIST_TYPE)}} className='hover:cursor-pointer flex w-nav-aside h-nav-aside pl-icons-left items-center bg-purple rounded-r-choose'>
      <div  className='mr-icons-right'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.16666 9.16667C4.39166 9.16667 4.59999 9.075 4.75833 8.91667C5.08333 8.58333 5.08333 8.06667 4.74999 7.74167C4.59166 7.59167 4.38333 7.5 4.16666 7.5C3.94166 7.5 3.73333 7.59167 3.57499 7.75C3.24999 8.08333 3.24999 8.6 3.58333 8.925C3.74166 9.075 3.94999 9.16667 4.16666 9.16667ZM15 7.5H9.16666V9.16667H16.6667C16.6667 8.25 15.9167 7.5 15 7.5Z" fill="#28A745" fillOpacity="0.3"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.16663 10.8333C4.81663 10.8333 5.45829 10.5833 5.94996 10.0833C6.91663 9.09165 6.89996 7.51665 5.91663 6.54998C5.42496 6.07498 4.79163 5.83331 4.16663 5.83331C3.51663 5.83331 2.87496 6.08331 2.38329 6.58331C1.41663 7.57498 1.43329 9.14998 2.41663 10.1166C2.90829 10.5916 3.54163 10.8333 4.16663 10.8333ZM3.57496 7.74998C3.73329 7.59165 3.94163 7.49998 4.16663 7.49998C4.38329 7.49998 4.59163 7.58331 4.74996 7.73331C5.08329 8.05831 5.08329 8.57498 4.76663 8.90831C4.59996 9.07498 4.39163 9.16665 4.16663 9.16665C3.94996 9.16665 3.74163 9.08331 3.58329 8.93331C3.24996 8.59998 3.24996 8.08331 3.57496 7.74998ZM15 5.83331H7.49996V10.8333H18.3333V9.16665C18.3333 7.32498 16.8416 5.83331 15 5.83331ZM9.16663 9.16665V7.49998H15C15.9166 7.49998 16.6666 8.24998 16.6666 9.16665H9.16663ZM1.66663 13.3333H6.66663V15H13.3333V13.3333H18.3333V11.6666H1.66663V13.3333Z" fill="white"/>
        </svg>

      </div>
      <div><Link href="/userlist" >User List</Link></div>
    </div>
    <div className='flex w-nav-aside h-nav-aside pl-icons-left items-center'>
      <div  className='mr-icons-right'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.5 13.3334V11.6667L10.8333 7.50002V2.91669C10.8333 2.22502 10.275 1.66669 9.58329 1.66669C8.89163 1.66669 8.33329 2.22502 8.33329 2.91669V7.50002L1.66663 11.6667V13.3334L8.33329 11.25V15.8334L6.66663 17.0834V18.3334L9.58329 17.5L12.5 18.3334V17.0834L10.8333 15.8334V11.25L17.5 13.3334Z" fill="white"/>
        </svg>
      </div>
      <div>Deliveries</div>
    </div>
  </aside>
  )
}

export default Aside