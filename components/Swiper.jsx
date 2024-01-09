import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from 'next/image'

function Swiper({data, plugins, loop, opts}) {
  return (
    <Carousel 
        className="w-full items-center"
        plugins={plugins} opts={opts}>
            <CarouselPrevious className="left-0 z-50"/>
            <CarouselContent>
                {data?.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 
                        cursor-pointer md:hover:scale-105 transform translation duration-300 ease-out">
                        <Image src={item.img} alt={item.name} className='h-5/6 object-cover rounded-md'/>
                        <span className='text-xl text-gray-100'>{item.name}</span>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="right-0 z-50"/>
    </Carousel>
  )
}


export default Swiper