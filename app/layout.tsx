import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopHeader from '@/components/TopHeader'
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import MobNavbar from '@/components/MobNavbar'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shopify Template',
  description: 'Storefron App for Shopify In Nextjs13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scrool-smooth'>
      <body className={inter.className} >
      
      
     <TopHeader></TopHeader>
        <MainHeader></MainHeader>
        
        <NavBar></NavBar>
        <MobNavbar></MobNavbar> 
        
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
