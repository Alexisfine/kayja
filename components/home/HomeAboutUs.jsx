import React from 'react'
import { Microscope, Trophy, Cpu} from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import TechOneImgOne from '@others/tech0101.png'
import TechOneImgTwo from '@others/tech0102.png'
import TechOneImgThree from '@others/tech0103.gif'
import TechOneImgFour from '@others/tech0104.gif'
import TechTwoImgOne from '@others/tech0201.gif'
import TechTwoImgTwo from '@others/tech0202.png'
import TechTwoImgThree from '@others/tech0203.gif'
import TechTwoImgFour from '@others/tech0204.png'
import TechTwoImgFive from '@others/tech0205.png'
import TechThreeImgOne from '@others/tech0301.png'
import TechThreeImgTwo from '@others/tech0302.png'
import TechThreeImgThree from '@others/tech0303.png'
import TechThreeImgFour from '@others/tech0304.png'

import Image from 'next/image'
const perks = [
  {
    name:"自主研发",
    Icon:Microscope,
    description:"公司走自主研发的技术路线，打破国际技术垄断，多项产品实现国产仪器零突破，原创光学技术达到国际领先水平"
  },
  {
    name:"核心技术",
    Icon:Cpu,
    description:"高端精密光学系统国际领先，实现终端光学成像系统国产化，工业集成精密光学系统达到铣刨机视觉识别和精确操控筛选"
  },
  {
    name:"公司荣誉",
    Icon:Trophy,
    description:"承接国家重大科研仪器研项目, 2023年国家高新技术企业审核通过，广州市硬科技企业培育百强榜单"
  },
]

function HomeAboutUs() {
  return (
    <div className='my-5 md:mx-3 p-5 w-full rounded-lg bg-white'>
      

        <div>
          <h1 className='top-1 font-semibold md:pl-0 text-2xl sm:text-3xl bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500 text-transparent bg-clip-text'>
              关于凯佳光学
          </h1>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col'>
              <p className='pt-2 text-base sm:text-xl bg-gradient-to-l from-fuchsia-400 via-fuchsia-600 to-purple-700 text-transparent bg-clip-text'>
                专业从事精密光学显微成像和光学操控系统研发的高科技企业
              </p>
              <p className='mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground'>
                凯佳光科是一家海外留学归国团队创建的高科技企业；公司致力于自主研发先进光学显微成像系统、光学操控系统以及提供光学技术解决方案的专攻“硬科技”的高科技企业。应用领域：生物科技、医疗器械、化学分析、先进材料、环境科学等领域。公司企业理念-“打造精品，成就客户；开拓进取，协作共赢”。目前在深圳南山、广州南沙、北京海淀和香港均设立办公地点
              </p>
            </div>
          </div>
        </div>
        <div className='mt-3 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
          {perks.map(perk => (
              <div key={perk.name} className=''>
                <div className='md:flex-shrink-0 flex flex-col items-center justify-center mx-auto'>
                  <div className='md:flex-shrink-0 flex justify-center'>
                    <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-300 text-blue-900'>
                      {<perk.Icon className="w-1/3 h-1/3"/>}
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-6  md:mt-0 lg:ml-0 lg:mt-6 justify-center">
                    <h3 className='font-semibold'>{perk.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </div>
              ))}
        </div>

        <div className='mt-3'>
          <h1 className='pt-2 text-xl sm:text-2xl bg-gradient-to-l
           from-fuchsia-400 via-fuchsia-600 to-purple-700 text-transparent bg-clip-text'>
            核心技术
          </h1>
          <p className='text-gray-700 flex flex-col mt-1 sm:mt-2 text-sm sm:text-base space-y-2 font-semibold'>
            打破国际&quot;卡脖子&quot;,实现国产化;原创光学技术达到国际领先水平;将先进科研技术应用应用到工业和民生
          </p>

          <div className='my-3 flex flex-col font-semibold'>
            <h2 className='text-xl sm:text-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500 text-transparent bg-clip-text'>
              光学显微成像技术
            </h2>
            <div className='mt-2 grid gap-y-12 grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8'>
              <div className='flex flex-col items-center text-center justify-between mx-auto max-h-72 overflow-hidden cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'>
                <span className='h-16'>多光谱显微成像技术(宽场)</span>
                <Image src={TechOneImgOne} width='' height='' alt='' className='mx-auto'/>
              </div>
              <div className='flex flex-col items-center text-center justify-between mx-auto max-h-72 overflow-hidden cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'>
                <span className='h-16'>近红外活体成像技术(宽场,light-sheet,SIM)</span>
                <Image src={TechOneImgTwo} width='' height='' alt='' className='mx-auto'/>
              </div>
              <div className='flex flex-col items-center text-center justify-between mx-auto max-h-72 overflow-hidden cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'>
                <span className='h-16'>共聚焦(VIS-NIR)、多模态显微成像(图1)</span>
                <Image src={TechOneImgThree} width='' height='' alt='' className='mx-auto'/>
              </div>
              <div className='flex flex-col items-center text-center justify-between mx-auto max-h-72 overflow-hidden cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'>
                <span className='h-16'>共聚焦(VIS-NIR)、多模态显微成像(图2)</span>
                <Image src={TechOneImgFour} width='' height='' alt='' className='mx-auto'/>
              </div>
            </div>

            <h2 className='my-3 text-xl sm:text-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500 text-transparent bg-clip-text'>
              光学操控技术
            </h2>
            <div className='mt-2 grid gap-y-12 grid-cols-1  sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 items-center'>
              <div className='flex flex-col items-center text-center justify-between mx-auto max-h-72 overflow-hidden cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'>
                <span className='h-16 mb-4'>光场调控光镊技术(全息光镊)</span>
                <div className='flex'>
                  <Image src={TechTwoImgOne} width='' height='' alt='' className='mx-auto object-contain'/>
                  <Image src={TechTwoImgTwo} width='' height='' alt='' className='mx-auto object-contain'/>
                </div>
              </div>
              <div className='flex flex-col items-center text-center justify-between mx-auto max-h-72 overflow-hidden cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'>
                <span className='h-16 mb-4'>电场/热场辅助光镊技术</span>
                <div className='flex'>
                  <Image src={TechTwoImgThree} width='' height='' alt='' className='mx-auto object-contain'/>
                  <Image src={TechTwoImgFour} width='' height='' alt='' className='mx-auto object-contain'/>
                </div>
              </div>
              
              <div className='flex flex-col items-center text-center justify-between mx-auto max-h-96 overflow-hidden cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'>
                <span className='lg:mt-4 h-16'>多场耦合光镊技术 单细胞筛选仪</span>
                <Image src={TechTwoImgFive} width='' height='' alt='' className='mx-auto object-cover'/>
              </div>
            </div>

            <h2 className='mt-5 text-xl sm:text-2xl bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500 text-transparent bg-clip-text'>
              光学技术解决方案
            </h2>
            <p>市场导向交叉学科技术、客户定制化、高度工业集成化</p>
            <div className='mt-2 grid gap-y-12 grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 items-center'>
              <Image src={TechThreeImgOne} width={200} height={150} alt='' className='mx-auto object-cover cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'/>
              <Image src={TechThreeImgTwo} width={200} height={150} alt='' className='mx-auto object-cover cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'/>
              <Image src={TechThreeImgThree} width='' height='' alt='' className='mx-auto object-cover cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'/>
              <Image src={TechThreeImgFour} width='' height='' alt='' className='mx-auto object-cover cursor-pointer md:hover:scale-102 lg:hover:scale-105 transform translation duration-300 ease-out'/>
            </div>

          </div>

        </div>
        <Button className="mt-2">了解更多</Button>
        
    </div>
    
  )
}



export default HomeAboutUs