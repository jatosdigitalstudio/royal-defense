'use client'
import '../styles/globals.css';
import React, { useState, useEffect } from "react"
import { Montserrat, Hind } from 'next/font/google';
import Head from './head';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ParticlesComponent from '@/components/UI/Particles';
import Loading from './loading';
import ScrollToTopButton from '../components/UI/ScrollToTopButton'

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
})
 
export const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600','700'],
  display: 'swap',
  variable: '--font-text',
})

// const custom = localFont({src : '../styles/Supermolot.ttf'})


export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <Head/>
      <body className={`${hind.variable} font-text`}>
        {isLoading ? (<Loading/>) : (
          <>
          {/* <FlareCursor /> */}
          <ParticlesComponent/>
          <ScrollToTopButton/>
          <Header/>
          {children}
          <Footer/>
          </>
        )}    
      </body>
    </html>
  );
}
