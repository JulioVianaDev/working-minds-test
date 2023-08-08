import React from 'react'
import PaginationControls from './Pagination/PaginationControl'
import {Poppins} from 'next/font/google'

const poppins = Poppins({weight: '400',subsets: ["latin"]})
interface Footer {
  currentPage: number;
  goToPage: (pageNumber: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  setUsersPerPage: (perPage: number) => void,
  usersPerPage:number,
  getTotalPages: ()=>number,
  displayedUserCount: number
}
const Footer: React.FC<Footer> =({
  currentPage,
  goToPage,
  nextPage,
  previousPage,
  setUsersPerPage,
  usersPerPage,
  getTotalPages,
  displayedUserCount
}) =>{
  return (
    <footer className=' flex items-center justify-between z-0 pr-4 h-footer-h absolute pl-128 bg-white w-screen bottom-0 border'>
       <p className={`text-footer-text font-features text-letterFooter ${poppins.style}`}>Showing {displayedUserCount} entries</p>
       <PaginationControls
          currentPage={currentPage}
          totalPages={getTotalPages()}
          goToPage={goToPage}
          nextPage={nextPage}
          setUsersPerPage={setUsersPerPage}
          usersPerPage={usersPerPage}
          previousPage={previousPage}
        />
      </footer>
  )
}

export default Footer