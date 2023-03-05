import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='h-[7rem]  '>  
    
    <div className="text-2xl ml-8 font-bold flex ">For more information visit</div>
      <div className='flex justify-center space-x-8 '>

       <Link href='https://www.tiktok.com/@piaicofficial' target='_blank'> <div className=" mt-1 rounded-4xl"> <Image
       src="/61377685cfd85d00045d1546.png"
       alt="Karachi_image"
       width={40}
       height={100}
       /></div></Link>
       <Link href='https://www.youtube.com/@panaverse/streams 'target='_blank'> <div className=" mt-[-9px]  pt-5"><Image
       src="/pngkey.com-youtube-png-56165.png"
       alt="Karachi_image"
       width={25}
       height={10}
       /></div></Link>
       <Link href='https://www.facebook.com/groups/panaverse 'target='_blank'> <div className=" mt-[-28px] pt-6"><Image
       src="/pngkey.com-social-media-logos-png-7821.png "
       alt="Karachi_image"
       width={55}
       height={10}
       /></div></Link>
       <Link href='https://twitter.com/Panaverse_edu 'target='_blank'> <div className=" mt-2"><Image
       src="/pngkey.com-white-twitter-png-1486300.png"
       alt="Karachi_image"
       width={35}
       height={10}
       /></div></Link>
       <Link href='https://github.com/panaverse 'target='_blank'> <div className=" mt-[-22px] pt-8 "><Image
       src="/pngkey.com-linkedin-icon-png-111456.png"
       alt="Karachi_image"
       width={35}
       height={10}
       /></div></Link>
        
      </div>
      <div className='text-right text-1xl'>© 2022 Panaverse Dao. All rights reserved</div>
    </div>
  )
}

export default Footer