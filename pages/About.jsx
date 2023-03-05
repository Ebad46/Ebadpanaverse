import Image from 'next/image';
import React from 'react'
import Footer from '../Components/Footer';






const About = () => {
  return (
    <div>
      <div className='justify-center flex'>
        <Image
         src="/red-p-logo-text_dao_croped.png"
         alt="Karachi_image"
         width={600}
         height={100}
        />

      </div>
        <div className="  text-center text-6xl pb-8">
        <h1  className='pb-8  '>About Panaverse Program</h1>
        <div className='justify-center flex'>
        <Image
         src="/download.png"
         alt="Karachi_image"
         width={800}
         height={100}
        />

      </div>
        </div>
      <div  className='text-3xl text-center'>
      Panaverse DAO is a movement to spread Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
      </div>
      
    <div className='bg-gradient-to-r from-fuchsia-500 to-purple-900 place-items-end  mt-4'><Footer/></div>
    </div>
  )
}

export default About