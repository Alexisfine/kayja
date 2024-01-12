import React from 'react'
import { PRODUCTS } from '@/config'
import Card from '../Card'
const HomeProducts = () => {
  return (
    <div className='my-20 md:mx-3 p-5w-full rounded-lg text-white bg-black flex flex-col'>
      <h1 className='font-semibold md:pl-0 text-2xl sm:text-3xl pb-5'>
          产品
      </h1>
      <h3 className='text-base sm:text-xl font-semibold pb-5 text-gray-200'>
        提供光学操控、光学微显成像系统、光源、光学系统解决方案等高科技产品
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center 
        justify-between gap-x-5 gap-y-5 mt-2'>
        {PRODUCTS?.map(product => (
          <Card key={product.name} title={product.name} imgSrc={product.img} 
            description={product.description} 
            tagStyle={"bg-gradient-to-r from-purple-800 via-blue-600 to-cyan-600"} 
            hoverStyle={"hover:shadow-custom"}
            link='/product'/>
        ))}
      </div>

    </div>
  )
}

export default HomeProducts