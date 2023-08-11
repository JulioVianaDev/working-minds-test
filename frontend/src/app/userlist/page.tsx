"use client"
import React, { useEffect, useState } from 'react'
import Aside from './components/Aside'
import NavbarTop from './components/NavbarTop'
import ButtonTop from './components/ButtonTop'
import {User} from './components/Pagination/UserList'
import UserListComponent from './components/Pagination/UserList'
// import {mockUsers} from '../mock/mockUsers'
import {Poppins} from 'next/font/google'
import Footer from './components/Footer'
import { useGlobalContext } from '../context/store'
import { useApi } from '../hooks/useApi'
import { USER_LIST_TYPE,NEW_USER_TYPE,EDIT_USER_TYPE } from '../context/typesPages'
import NewUser from './components/NewUser/NewUser'
import EditUser from './components/EditUser.tsx/EditUser'

function UserList() {
  const [users,setUsers] = useState([])
  const [usersPerPage,setUsersPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const {textNavTop,atualPage} = useGlobalContext()
  useEffect (()=>{
    let getData = useApi().then(res=>setUsers(res)).catch(err=>console.error("erro no hook api"))
  },[users])

  const displayUsersOnCurrentPage = (): User[] => {
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return users.slice(startIndex, endIndex);
  };
  const goToPage = (pageNumber: number): void => {
    if (pageNumber >= 1 && pageNumber <= getTotalPages()) {
      setCurrentPage(pageNumber);
    }
  }
  const nextPage = (): void => {
    if (currentPage < getTotalPages()) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const getTotalPages = (): number => {
    return Math.ceil(users.length / usersPerPage);
  };
  const usersOnCurrentPage = displayUsersOnCurrentPage();
  const displayedUserCount = usersOnCurrentPage.length; // Calculate displayed user count

  var currentPageComponent;
  if (atualPage == USER_LIST_TYPE) {
    currentPageComponent = <UserListComponent users={usersOnCurrentPage} /> ;
  } else if (atualPage === NEW_USER_TYPE) {
    currentPageComponent = <NewUser />;
  } else if (atualPage === EDIT_USER_TYPE) {
    currentPageComponent = <EditUser />;
  } else {
    // Handle cases for other pages or a default component
    currentPageComponent = <div>404 - Page not found</div>;
  }
  return (
    <div className='h-screen primary	relative  flex flex-col'>
      <div className="flex ">
        <Aside/>

        <div>
          <main className="">
            <NavbarTop/>
            <ButtonTop/>
            <div>
              {currentPageComponent}
            </div>
          </main>
        </div>
      </div>
      <Footer
        currentPage={currentPage}
        goToPage={goToPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setUsersPerPage={setUsersPerPage}
        usersPerPage={usersPerPage}
        getTotalPages={getTotalPages}
        displayedUserCount={displayedUserCount}
      />
      
      
    </div>
  )
  
  
}

export default UserList

