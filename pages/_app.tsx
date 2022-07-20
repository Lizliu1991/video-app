import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google'
import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true)
  useEffect(() => {
    setIsSSR(false)
  }, [])
  if (isSSR) return null
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
     
        <Navbar />

        <div className='flex gap-6 md:gap-20'>
          <div className='h-[92vh] bg-green-500  over-flow-hidden xl:hover:overflow-auto xl:w-[400px]'>
            <Sidebar />
          </div>
          <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh]'>
            <Component {...pageProps} />
          </div>
        </div>

    
    </GoogleOAuthProvider>
  )
}

export default MyApp
