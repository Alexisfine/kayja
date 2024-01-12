import { PRODUCTS, USE_CASES } from '@/config'
import React from 'react'
import Card from '../Card'

const HomeUseCases = () => {
  return (
    <div className='my-20 md:mx-3 p-5w-full rounded-lg text-white bg-black flex flex-col'>
      <h1 className='font-semibold md:pl-0 text-2xl sm:text-3xl pb-5'>
          应用案例
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center 
        justify-between gap-x-5 gap-y-5 mt-2'>
        {USE_CASES?.map(item => (
          <Card key={item.name} title={item.name} imgSrc={item.img} 
            description={item.description} tag={item.tech}
            hoverStyle={"hover:shadow-custom"}
            tagStyle={"bg-gradient-to-r from-purple-800 via-blue-600 to-cyan-600"} link='/product'/>
        ))}
      </div>

    </div>
  )
}

export default HomeUseCases