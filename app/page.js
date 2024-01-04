import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='relative'>
      <MaxWidthWrapper>
        <video src="/tissue.mp4" autoPlay muted loop
              className='absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50'/>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold  text-gray-100 sm:text-6xl z-10'>
            智造开启微观世界的
            <span className='text-orange-400'>&apos;眼&apos;</span>
            &
            <span className='text-orange-400'>&apos;手&apos;</span>
          </h1>
          <p className='mt-6 text-2xl z-10 text-gray-200'>
            自主研发先进光学微显成像系统、光学操控系统以及提供光学技术解决方案的专攻
            <span className='text-orange-400 whitespace-nowrap'>&quot;硬科技&quot;</span>
            的高科技企业
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6 z-10'>
            <Link href='/products' className={buttonVariants()}>了解更多</Link>
            <Button variant="outline">联系我们</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
