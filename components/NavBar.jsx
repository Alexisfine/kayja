import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import LogoImage from '@logos/kayja.png'
import Image from 'next/image'
import NavItems from './NavItems'

function NavBar() {
  return (
    <div className='bg-white sticky z-40 top-0 inset-x-0 h-16'>
        <header className='relative bg-white'>
            <MaxWidthWrapper>
                <div className='border-b border-gray-200'>
                    <div className='flex h-16 items-center'>
                        <div className='ml-4 flex lg:ml-0'>
                            <Link href="/">
                            <Image priority src={LogoImage} alt="logo" className="h-10 w-20 md:w-28"/>
                            </Link>
                        </div>
                        <div className='hidden z-40 lg:ml-8 lg:block lg:self-stretch'>
                            <div className='flex relative items-center h-full'>
                                <NavItems/>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default NavBar