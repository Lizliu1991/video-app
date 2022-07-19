import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR]=useState(true) 
  useEffect(()=>{
    setIsSSR(false)
  },[])
  if(isSSR) return null
  return (
    <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]'>
     <Navbar />

      <div className='flex gap-6 md:gap-20'>
    <div className='h-[92vh] bg-green-500  over-flow-hidden xl:hover:overflow-auto xl:w-[400px]'>
<Sidebar />
    </div>
<div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh]'>
<Component {...pageProps} />
</div>
      </div>
      
    </div>
  )
}

export default MyApp
