'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import {ALLPRODUCTS, HOME_PAGE_WELCOME, PARTNERS, PRODUCTS, } from '@/config'
import { useRef, useState } from 'react'
import HomeWelcome from '@/components/home/HomeWelcome'
import AboutUs from '@/components/AboutUs'
import MediumCard from '@/components/MediumCard'
import Image from 'next/image'
import Footer from '@/components/Footer'
import useFooterVisibility from '@/hooks/userFooterVisibility'
import HomeAboutUs from '@/components/home/HomeAboutUs'
import HomeProducts from '@/components/home/HomeProducts'
import HomeUseCases from '@/components/home/HomeUseCases'

export default function Home() {
  const initialContextValue = {
    show: false,
    x:0,
    y:0
  }
  const [contextMenu, setContextMenu] = useState(initialContextValue)
  const handleContextMenu = (e) => {
    e.preventDefault()
    const {pageX, pageY} = e
    setContextMenu({show:true, x:pageX, y:pageY})
  }
  const closeContextMenu = () => {
    setContextMenu(initialContextValue)
  }

  const footerRef = useRef(null)
  useFooterVisibility(footerRef)

  return (
    <div className='relative'>
      {/* Home welcome page */}
      <section className='h-screen w-screen'>
        <MaxWidthWrapper className="h-full">
          <HomeWelcome 
            title={HOME_PAGE_WELCOME.title} 
            subtitle={HOME_PAGE_WELCOME.subtitle}
            buttonOneTitle={HOME_PAGE_WELCOME.buttonOneTitle}
            buttonTwoTitle={HOME_PAGE_WELCOME.buttonTwoTitle}
            />
        </MaxWidthWrapper>
      </section>

      {/* Home about us page */}
      <section className='relative'>
        <MaxWidthWrapper className='relative'>
          <HomeAboutUs />
        </MaxWidthWrapper>
      </section>

      <section className='pb-10'>
        <MaxWidthWrapper>
          <HomeProducts/>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <HomeUseCases/>
        </MaxWidthWrapper>
      </section>


      <div className=''>
        {/* <MaxWidthWrapper>

          <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <ParticlesBackground/>

            <h1 className='text-4xl font-bold  text-white sm:text-6xl z-10'>
              智造开启微观世界的
              <span className='text-blue-600'>&apos;眼&apos;</span>
              &
              <span className='text-blue-600'>&apos;手&apos;</span>
            </h1>
            <p className='mt-6 text-2xl z-10 text-gray-200'>
              自主研发先进光学微显成像系统、光学操控系统以及提供光学技术解决方案的专攻
              <span className='text-blue-600 whitespace-nowrap'>&quot;硬科技&quot;</span>
              的高科技企业
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-6 z-10'>
              <Link href='/products' className={buttonVariants()}>了解更多</Link>
              <Button variant="outline">联系我们</Button>
            </div>
          </div>
        </MaxWidthWrapper> */}

        

      </div>
    </div>
  )
}

