"use client"
import React, { useEffect, useState } from 'react'
import Aside from '../userlist/components/Aside'
import NavbarTop from '../userlist/components/NavbarTop'
import ButtonTop from './components/ButtontopVacanty'
import {User} from '../userlist/components/Pagination/UserList'
import UserListComponent from '../userlist/components/Pagination/UserList'
// import {mockUsers} from '../mock/mockUsers'
import {Poppins} from 'next/font/google'
import Footer from '../userlist/components/Footer'
import { useGlobalContext } from '../context/store'
import { useApi } from '../hooks/useApi'
import { NEW_VACANTY_TYPE,VACANTY_LIST_TYPE,EDIT_VACANTY_TYPE } from '../context/typesVacantis'
import NewUser from '../userlist/components/NewUser/NewUser'
import EditUser from '../userlist/components/EditUser.tsx/EditUser'
import VacanciesList from './components/VacanciesList'

function Dashboard() {
  const [users,setUsers] = useState([])
  const [usersPerPage,setUsersPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const {dashboardAtualPage} = useGlobalContext()
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
  if (dashboardAtualPage == VACANTY_LIST_TYPE) {
    currentPageComponent = <VacanciesList/> ;
  } else if (dashboardAtualPage === NEW_VACANTY_TYPE) {
    currentPageComponent = <p>Criar ferias</p>;
  } else if (dashboardAtualPage === EDIT_VACANTY_TYPE) {
    currentPageComponent = <p>Editar</p>;
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

export default Dashboard

