import React from 'react'
import ParticleBackground from '../ParticlesBackground'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'

const HomeWelcome = ({title, subtitle, buttonOneTitle, buttonTwoTitle}) => {
  return (
    <div className='relative justify-center h-full py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <ParticleBackground/>
        <div className='md:self-start'>
          <h1 className='text-4xl font-bold sm:text-6xl z-10 bg-gradient-to-r from-blue-800 via-blue-500 to-sky-500 text-transparent bg-clip-text'>
            凯佳光科
          </h1>
          <h2 className='text-xl font-bold sm:text-2xl z-10 bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500 text-transparent bg-clip-text'>
            KAYJA-OPTICS
          </h2>
          <div className='mt-2 w-full h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500'></div>
        </div>
        <h1 className='mt-8 text-4xl font-bold  text-white sm:text-6xl z-10'>
              {title}
        </h1>
        <p className='mt-6 text-2xl z-10 text-gray-200'>
            {subtitle}
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6 z-10'>
            <Link href='/products' className={buttonVariants()}>{buttonOneTitle}</Link>
            <Button variant="outline">{buttonTwoTitle}</Button>
        </div>
    </div>
  )
}

export default HomeWelcome

