import AboutUs from '@/components/AboutUs'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import MediumCard from '@/components/MediumCard'
import { ALLPRODUCTS, PARTNERS, PRODUCTS } from '@/config'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
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
  )
}

export default page