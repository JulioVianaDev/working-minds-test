"use client"

import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-black w-[100vw] h-[100vh] fixed top-0 left-0 text-white flex items-center justify-center">
      <div className='w-64 h-64 flex justify-center items-center bg-purple rounded-md'>
        <Link  href={"./userlist"}>Clique para ir pro userlist</Link>
      </div>
    </main>
  )
}
