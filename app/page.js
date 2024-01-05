'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import AboutUs from '@/components/AboutUs'
import {PRODUCTS } from '@/config'
import MediumCard from '@/components/MediumCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

export default function Home() {
  return (
    <div className='relative'>
      <div className='bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-200 via-green-100 to-rose-200'>
        <MaxWidthWrapper>
          {/* <video src="/tissue.mp4" autoPlay muted loop poster={LandingPageBackupImage}
                className='absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50'/> */}
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
            <h3 className='text-2xl font-semibold pb-5'>提供光学操控、光学微显成像系统、光源、光学系统解决方案等高科技产品</h3>
              <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3'>
                  {PRODUCTS?.map(item => (
                    <MediumCard key={item.name} img={item.img} name={item.name}/>
                  ))}
              </div>
            </MaxWidthWrapper>
          </section>

          <section className='px-8 sm:px-16 bg-gradient-to-r from-sky-500 via-sky-400 to-blue-300 '>
            <MaxWidthWrapper className='pt-6'>
            <h2 className='text-3xl font-semibold pb-5'>应用案例</h2>
              <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3'>
                  {/* {PRODUCTS?.map(item => (
                    <MediumCard key={item.name} img={item.img} name={item.name}/>
                  ))} */}
              </div>
            </MaxWidthWrapper>
          </section>

          <section className='border-t border-gray-200 bg-gray-50'>
            <MaxWidthWrapper className="py-10">
            <h2 className='text-3xl font-semibold pb-5'>合作伙伴</h2>
            </MaxWidthWrapper>
          </section>
         
        </main>
      </div>
    </div>
  )
}

