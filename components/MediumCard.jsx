import Image from 'next/image';
import React from 'react'

function MediumCard({img, name}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform translation duration-300 ease-out'>
        <div className='relative h-60 md:w-96 w-72'>
            <Image src={img} alt="" fill className='object-cover md:rounded-xl'/>
        </div>
        <h3 className='text-xl text-gray-100'>{name}</h3>
    </div>
  )
}

export default MediumCard;