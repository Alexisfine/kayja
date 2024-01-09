'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import AboutUs from '@/components/AboutUs'
import {ALLPRODUCTS, PARTNERS, PRODUCTS } from '@/config'
import MediumCard from '@/components/MediumCard'
import { useState } from 'react'
import Image from 'next/image'

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
  return (
    <div className='relative'>
      <div className='bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-200 via-green-200 to-rose-300'>
        <MaxWidthWrapper>
          <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
            <h1 className='text-4xl font-bold  text-black-900 sm:text-6xl z-10'>
              智造开启微观世界的
              <span className='text-blue-600'>&apos;眼&apos;</span>
              &
              <span className='text-blue-600'>&apos;手&apos;</span>
            </h1>
            <p className='mt-6 text-2xl z-10 text-muted-foreground'>
              自主研发先进光学微显成像系统、光学操控系统以及提供光学技术解决方案的专攻
              <span className='text-blue-600 whitespace-nowrap'>&quot;硬科技&quot;</span>
              的高科技企业
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-6 z-10'>
              <Link href='/products' className={buttonVariants()}>了解更多</Link>
              <Button variant="outline">联系我们</Button>
            </div>
          </div>
        </MaxWidthWrapper>
        <main>
          <section className='border-t border-gray-200 bg-gray-50'>
            <MaxWidthWrapper className="py-10">
              <AboutUs/>
            </MaxWidthWrapper>
          </section>
          <section className='px-8 sm:px-16 bg-gradient-to-r from-sky-500 via-sky-400 to-blue-300 '>
            <MaxWidthWrapper className='pt-6'>
            <h2 className='text-3xl font-semibold pb-5'>产品中心</h2>
            <h3 className='text-base sm:text-xl font-semibold pb-5 text-gray-200'>提供光学操控、光学微显成像系统、光源、光学系统解决方案等高科技产品</h3>
            <h4 className='text-base sm:text-xl font-semibold text-gray-200'>产品类别</h4>
            <div className='flex mt-1 space-x-3 overflow-scroll scrollbar-hide p-3 -m-3'>
                {PRODUCTS?.map(item => (
                  <MediumCard key={item.name} img={item.img} name={item.name}/>
                ))}
            </div>

            <h4 className='mt-2 text-base sm:text-xl font-semibold text-gray-200'>产品列表</h4>
            <div className='flex mt-1 space-x-3 overflow-scroll scrollbar-hide p-3 -m-3'>
                {ALLPRODUCTS?.map(item => (
                  <MediumCard key={item.name} img={item.img} name={item.name}/>
                ))}
            </div>
            </MaxWidthWrapper>
          </section>

          <section className='px-8 sm:px-16 pb-4 bg-gradient-to-r from-sky-500 via-sky-400 to-blue-300 '>
            <MaxWidthWrapper className='pt-6'>
            <h2 className='text-3xl font-semibold pb-5'>应用案例</h2>
              <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3'>
                  {PRODUCTS?.map(item => (
                    <MediumCard key={item.name} img={item.img} name={item.name}/>
                  ))}
              </div>
            </MaxWidthWrapper>
          </section>

          <section className='bg-white'>
            <MaxWidthWrapper className="pt-6 flex flex-col">
                <h2 className='text-3xl font-semibold pb-5'>合作伙伴</h2>
                <h3 className='text-2xl font-semibold pb-3 text-blue-400'>产学研合作者</h3>
                <div className='items-center px-3 py-5 grid grid-cols-3 
                  md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10'>
                    {PARTNERS?.map((item, index) => (
                      <div key={index} className='w-full'>
                        <Image src={item}  alt=""/>
                      </div>
                      
                    ))}
                </div>
                <h3 className='text-2xl font-semibold pb-3 text-blue-400'>科研客户</h3>
                <div className='items-center px-3 py-5 grid grid-cols-3 
                  md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10'>
                    {PARTNERS?.map((item, index) => (
                      <div key={index} className='w-full'>
                        <Image src={item}  alt=""/>
                      </div>
                      
                    ))}
                </div>
                <h3 className='text-2xl font-semibold pb-3 text-blue-400'>国内和国际合作企业</h3>
                <div className='items-center px-3 py-5 grid grid-cols-3 
                  md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10'>
                    {PARTNERS?.map((item, index) => (
                      <div key={index} className='w-full'>
                        <Image src={item}  alt=""/>
                      </div>
                      
                    ))}
                </div>
                <h3 className='text-2xl font-semibold pb-3 text-blue-400'>企业客户</h3>
                <div className='items-center px-3 py-5 grid grid-cols-3 
                  md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10'>
                    {PARTNERS?.map((item, index) => (
                      <div key={index} className='w-full'>
                        <Image src={item}  alt=""/>
                      </div>
                      
                    ))}
                </div>
            </MaxWidthWrapper>
          </section>
        </main>
      </div>
    </div>
  )
}

