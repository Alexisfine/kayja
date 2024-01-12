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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuSeparator } from './ui/dropdown-menu'

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)  
  const handleMenuIconClick = () => {
    setIsMobileMenuOpen(state => !state)
  }
  return (
    <div className={cn(' sticky z-40 top-0 inset-x-0 h-16', isMobileMenuOpen ? 'bg-black' : 'bg-white')}>
        <header className={cn('relative', !isMobileMenuOpen ? 'bg-white' : 'bg-black', 
            "")}>
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
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Globe/>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='w-full bg-white p-3 rounded-sm'>
                                    <DropdownMenuLabel className='font-semibold'>语言</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem className='p-2 rounded-md hover:bg-slate-200'>
                                        中文 🇨🇳
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='p-2 rounded-md hover:bg-slate-200'>
                                        English 🇺🇸
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className='md:hidden cursor-pointer'>
                                <MenuIcon className="" onClick={handleMenuIconClick}/>
                            </div>
                            
                        </div>
                    </div>
                </div>)}
                {isMobileMenuOpen && (
                    <div className='h-screen bg-black overflow-hidden py-5'>
                        <div className='top-10 flex justify-end'>
                            <MenuIcon onClick={handleMenuIconClick} className='cursor-pointer text-white'/>
                        </div>
                        <div className='flex flex-col font-bold text-3xl text-gray-100 py-10 space-y-5 items-center'>
                            <div className='hover:text-white hover:scale-110 transform translation duration-300 ease-out'>
                                <span>首页</span>
                            </div>
                            <div className='hover:text-white hover:scale-110 transform translation duration-300 ease-out'>
                                <span>关于我们</span>
                            </div>
                            <div className='hover:text-white hover:scale-110 transform translation duration-300 ease-out'>
                                <span>产品</span>
                            </div>
                            <div className='hover:text-white hover:scale-110 transform translation duration-300 ease-out'>
                                <span>解决方案</span>
                            </div>
                            <div className='hover:text-white hover:scale-110 transform translation duration-300 ease-out'>
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