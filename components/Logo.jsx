import Link from 'next/link'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import LogoImage from '@logos/kayja.png'
import Image from 'next/image'

function Logo() {
  return (
    <Link href='/' className='overflow-hidden' prefetch={false}>
        <div className='flex items-center w-72 h-14'>
            <AspectRatio ratio={16/9} className='flex items-center justify-center'>
                <Image priority src={LogoImage} alt="logo" className="dark:filter dark:invert"/>
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo