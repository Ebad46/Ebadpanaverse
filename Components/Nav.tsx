import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export const Nav = () => {
  return (
    <>
      <nav className=' flex justify-between   '>
        <div className='ml-4'>
        <Image
            src="/red-p-logo-text_dao_croped.png"
            alt="Karachi_image"
            width={100}
            height={100}
            />
        </div>
        <ul className=' flex pr-28 py-4 justify-evenly text-white '>

          <Link href=' /'><li className='cursor-pointer mx-8 active:animate-ping hover:text-black  hover:skew-y-3'>Home</li></Link>
          <Link href='/About'><li className='cursor-pointer mx-8 active:animate-ping hover:text-black   hover:skew-y-3'>About</li></Link>
          <Link href='/Contact'><li className='cursor-pointer mx-8 active:animate-ping hover:text-black  hover:skew-y-3'>Contact</li></Link>
          <Link href='/Help'><li className='cursor-pointer mx-8 active:animate-ping hover:text-black  hover:skew-y-3'>Help</li></Link>
        </ul>
      </nav>
    </>
  )
}
export default Nav