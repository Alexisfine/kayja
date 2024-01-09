'use client'
import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import LogoImage from '@logos/kayja.png'
import Image from 'next/image'
import NavItems from './NavItems'
import { Globe, MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)  
  const handleMenuIconClick = () => {
    setIsMobileMenuOpen(state => !state)
  }
  return (
    <div className='bg-white sticky z-40 top-0 inset-x-0 h-16'>
        <header className={cn('relative', !isMobileMenuOpen ? 'bg-white' : 'bg-gray-100')}>
            <MaxWidthWrapper>
                {!isMobileMenuOpen && (<div className='border-b border-gray-200'>
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
                        <div className='flex flex-1 items-center justify-end space-x-4'>
                            <div className='cursor-pointer'>
                                <Globe/>
                            </div>
                            <div className='md:hidden cursor-pointer'>
                                <MenuIcon className="" onClick={handleMenuIconClick}/>
                            </div>
                            
                        </div>
                    </div>
                </div>)}
                {isMobileMenuOpen && (
                    <div className='h-screen bg-gray-100 overflow-hidden py-5'>
                        <div className='top-10 flex justify-end'>
                            <MenuIcon onClick={handleMenuIconClick} className='cursor-pointer'/>
                        </div>
                        <div className='flex flex-col font-bold text-3xl text-gray-700 py-10 space-y-5 items-center'>
                            <div className='hover:text-gray-900 hover:scale-110 transform translation duration-300 ease-out'>
                                <span>首页</span>
                            </div>
                            <div className='hover:text-gray-900 hover:scale-110 transform translation duration-300 ease-out'>
                                <span>关于我们</span>
                            </div>
                            <div className='hover:text-gray-900 hover:scale-110 transform translation duration-300 ease-out'>
                                <span>产品</span>
                            </div>
                            <div className='hover:text-gray-900 hover:scale-110 transform translation duration-300 ease-out'>
                                <span>解决方案</span>
                            </div>
                            <div className='hover:text-gray-900 hover:scale-110 transform translation duration-300 ease-out'>
                                <span>新闻动态</span>
                            </div>

                        </div>
                    </div>
                )}
            </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default NavBar