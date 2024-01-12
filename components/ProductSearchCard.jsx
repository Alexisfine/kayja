import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ProductSearchCard = ({title, description, link, imgSrc, tag, tagStyle, hoverStyle}) => {
  return (
    <Link className={cn('relative flex flex-col items-start p-5 justify-start group w-full h-96 rounded-2xl bg-gray-100 text-black', hoverStyle)} href={link}>
        <div className={cn(tagStyle, 'rounded-md')}>
            <span className='p-2 text-sm font-semibold'>{tag ? tag : '集成光学系统'}</span>
        </div>
        <h2 className='mt-3 text-2xl font-semibold text-blue-600'>{title}</h2>
        {description && <p className='text-sm'>{description}</p>}
        <Image className='mt-2 w-64 object-contain' src={imgSrc} alt=''/>
        <ArrowRight className='absolute mt-2 bottom-2'/>
    </Link>
  )
}

export default ProductSearchCard