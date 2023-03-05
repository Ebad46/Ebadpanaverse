import '../styles/globals.css'
import Footer from '../Components/Footer';
import  Nav  from "../Components/Nav";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) { 

  return <>
  <header className=' bg-gradient-to-r from-fuchsia-500 to-purple-900 '> 
    <Nav/>
    </header>
    
  <Component {...pageProps} />
  
  </>
}

export default MyApp
