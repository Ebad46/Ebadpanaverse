import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  Nav  from "../Components/Nav";
import  Body  from '../Components/Body';
import Footer from '../Components/Footer';



const Home: NextPage = () => {
  return (
  <>
    <div className=' pb-8 '>
    <Body/>
    </div>
    <div className='bg-gradient-to-r from-fuchsia-500 to-purple-900'><Footer/></div>
    </>
  )
}

export default Home
