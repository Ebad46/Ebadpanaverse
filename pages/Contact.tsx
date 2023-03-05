import React from 'react'
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div className='h-screen flex flex-col'>
      <h1 className='text-4xl '>Locations</h1>
      <p className="text-center font-bold text-3xl ">PIAIC Helpline</p>
      <p className="text-2xl flex-grow  ">
        Contact us on:+92-308-2220203 (WhatsApp as well)</p>
    <div className='bg-gradient-to-r from-fuchsia-500 to-purple-900 place-items-end'><Footer/></div>
      
    </div>
  )
}

export default Contact