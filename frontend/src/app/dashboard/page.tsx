"use client"
import React, { useEffect, useState } from 'react'
import Aside from '../userlist/components/Aside'
import NavbarTop from '../userlist/components/NavbarTop'
import ButtonTop from './components/ButtontopVacanty'
import { useGlobalContext } from '../context/store'
import { NEW_VACANTY_TYPE,VACANTY_LIST_TYPE,EDIT_VACANTY_TYPE } from '../context/typesVacantis'
import VacanciesList from './components/VacanciesList'
import NewFerias from './components/NewFerias'
import { getUsersWithVacanties } from '../hooks/getUsersWithVatanties'

function Dashboard() {
  const [users,setUsers] = useState([])
  const [usersPerPage,setUsersPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const {dashboardAtualPage} = useGlobalContext()
  useEffect (()=>{
    let getData = getUsersWithVacanties().then(res=>setUsers(res)).catch(err=>console.error("erro no hook api"))
  },[users])

  var currentPageComponent;
  if (dashboardAtualPage == VACANTY_LIST_TYPE) {
    currentPageComponent = <VacanciesList/> ;
  } else if (dashboardAtualPage === NEW_VACANTY_TYPE) {
    currentPageComponent = <NewFerias/>;
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
            <div>
              {currentPageComponent}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
  
  
}

export default Dashboard

