import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import MainHeader from '@/components/MainHeader'

import Products from '@/components/Products'
import Testimonial from '@/components/Testimonial'
import TopHeader from '@/components/TopHeader'
import Image from 'next/image'
import { Suspense } from 'react'

export default function Home() {
  return (
  
<div>

<Suspense>

  


    <Hero></Hero>

      {/* @ts-expect-error Async */}
     <Products/>
</Suspense>
    
  
</div>
     
  )
}
