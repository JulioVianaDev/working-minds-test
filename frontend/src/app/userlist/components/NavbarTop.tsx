import React from 'react'
import { useGlobalContext } from '@/app/context/store'
function NavbarTop() {
  const {textNavTop} = useGlobalContext()

  return (
    <div className='shadow-3xl shadow-[rgba(0, 0, 0, 0.15);] flex h-nav-top items-center justify-between w-nav-top pl-5 pr-p-top-right'>
      <div>
        <h4 className="text-gray-800 font-roboto font-medium text-lg leading-6 font-features">{textNavTop}</h4>
      </div>
      <div className='relative pl-3 rounded-choose flex items-center w-search-w h-search-h bg-searchBackground'>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.04167 8.16667H8.58083L8.4175 8.00917C8.98917 7.34417 9.33333 6.48083 9.33333 5.54167C9.33333 3.4475 7.63583 1.75 5.54167 1.75C3.4475 1.75 1.75 3.4475 1.75 5.54167C1.75 7.63583 3.4475 9.33333 5.54167 9.33333C6.48083 9.33333 7.34417 8.98917 8.00917 8.4175L8.16667 8.58083V9.04167L11.0833 11.9525L11.9525 11.0833L9.04167 8.16667ZM5.54167 8.16667C4.08917 8.16667 2.91667 6.99417 2.91667 5.54167C2.91667 4.08917 4.08917 2.91667 5.54167 2.91667C6.99417 2.91667 8.16667 4.08917 8.16667 5.54167C8.16667 6.99417 6.99417 8.16667 5.54167 8.16667Z" fill="#9FA2AB"/>
          </svg>
          <input type="text" className='appearance-none focus:border-0 ml-2 bg-searchBackground' placeholder='Search...' />
        
      </div>
      <div>
        <img 
          src="https://s3-alpha-sig.figma.com/img/ec0f/5e67/8b7e8ac9a4dbe1fd49ce1547c1a02637?Expires=1691971200&Signature=iMFf5pjYENdd4oFcYl1S2bQNB-XxB2UgM~vxEqSNOVdSuEaIQ4YpAaEZ4sgIr2tq6qf0voVPjtT1VCBwupKm2fMf07WJ9-Y7~mnxlA978AbS3c4bqaQreON6Re8rKi39GKWRDK54~Da-94tGwuFKI4P-tPWPShFR9~q~3Mzqs9xqA2DsjGPfOCFYHBm8hNesZpmAPvKKQzkhDXjb9qPLqXQczHBl0DhHHArM~yo8mE8zsCG3lgnue82qoMD9h90~qqLoe-tuA4vnpKOcv4NiLt3IUK6FzVyiAtt8cERxNf-3e9HQfFG2884AhLfFqvUFAXCXbq6Pyo62qL2wJkb2sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" 
          className='w-9 rounded-full'  
        />
      </div>
    </div>
  )
}

export default NavbarTop