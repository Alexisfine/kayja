import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import LandingPageBackupImage from '@others/landing-video-backup.jpg'
export default function Home() {
  return (
    <div className='relative'>
      <div className='bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-200 via-green-100 to-rose-200'>
        <MaxWidthWrapper>
          {/* <video src="/tissue.mp4" autoPlay muted loop poster={LandingPageBackupImage}
                className='absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50'/> */}
          <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
            <h1 className='text-4xl font-bold  text-black-900 sm:text-6xl z-10'>
              智造开启微观世界的
              <span className='text-blue-600'>&apos;眼&apos;</span>
              &
              <span className='text-blue-600'>&apos;手&apos;</span>
            </h1>
            <p className='mt-6 text-2xl z-10 text-muted-foreground'>
              自主研发先进光学微显成像系统、光学操控系统以及提供光学技术解决方案的专攻
              <span className='text-blue-600 whitespace-nowrap'>&quot;硬科技&quot;</span>
              的高科技企业
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-6 z-10'>
              <Link href='/products' className={buttonVariants()}>了解更多</Link>
              <Button variant="outline">联系我们</Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}
