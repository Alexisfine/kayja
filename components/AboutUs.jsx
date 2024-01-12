import React from 'react'
import { Microscope, Trophy, Cpu} from 'lucide-react'
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

function AboutUs() {
  return (
    <div className='m-3 p-5 w-full rounded-lg bg-white'>
      

        <div>
          <h1 className='top-1 font-semibold md:pl-0 text-2xl sm:text-3xl'>
              关于凯佳光科
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
                  <div className="flex flex-col items-center mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 justify-center">
                    <h3 className='font-semibold'>{perk.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                  
                </div>
              </div>
              ))}
        </div>
        
    </div>
    
  )
}



export default AboutUs