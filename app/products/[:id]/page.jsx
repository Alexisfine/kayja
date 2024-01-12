import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Image1 from '@others/p101.jpg'
import Image2 from '@others/p102.jpg'
import Image3 from '@others/p103.jpg'
import Image4 from '@others/p104.jpg'
import Image5 from '@others/p105.jpg'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

const Page = () => {
  return (
    <div className='flex flex-col'>
        <div className='sticky top-0 bg-gray-50'>
            <MaxWidthWrapper className='flex text-black'>
                {/* TODO Change to Dropdown menu for mobile */}
                <div className='px-8 py-3 md:px-0 flex justify-start items-center gap-x-6 font-semibold'>
                    <span className='text-lg'>
                        双光阱光镊系统 GW-DOT
                    </span>
                    <div className='flex justify-start gap-x-8 text-base'>
                        <span className='px-2 hover:text-blue-600'>概览</span>
                        <span className='px-2 hover:text-blue-600'>技术指标与功能</span>
                        <span className='px-2 hover:text-blue-600'>应用案例</span>
                        <span className='px-2 hover:text-blue-600'>更多资料</span>
                        <span className='px-2 hover:text-blue-600'>FAQ</span>

                    </div>
                </div>
            </MaxWidthWrapper>
        </div>

        <div className='bg-gradient-bg bg-400% animate-bg text-black'>
            <MaxWidthWrapper className='flex flex-col justify-between py-5 min-h-72'>
                <div className='my-5 flex items-center justify-start'>
                    <span className='text-center border-b-2 border-b-black cursor-pointer hover:font-semibold'>
                        光学操控
                    </span>
                    <span className='ml-3 text-center'>&gt;</span>
                    <span className='ml-3 text-center'>双光阱光镊系统 GW-DOT</span>
                </div>

                <div className='flex flex-col gap-y-5'>
                    <h2 className='font-bold text-5xl'>双光阱光镊系统 GW-DOT</h2>
                    <span className='text-xl'>基于扫描振镜光学元件，对偏振态相互垂直两个独立光阱分别独立控制，
                        实现对两个微粒在二维空间的捕获与操纵，
                        可对双光阱操控的微粒进行独立动态操控
                    </span>
                    <Button className='max-w-36'>联系我们</Button>
                </div>

            </MaxWidthWrapper>
        </div>

        <div className='bg-black text-white flex flex-col'>
            <MaxWidthWrapper className='flex flex-col my-5'>
                <h2 className='font-semibold text-3xl'>产品图片</h2>
                <div className='flex mt-1 space-x-5 overflow-scroll scrollbar-hide p-3 px-6 md:px-3 -m-3 h-52'>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Image src={Image1} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className=''>
                            <Image src={Image1} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Image src={Image2} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className=''>
                            <Image src={Image2} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Image src={Image3} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className=''>
                            <Image src={Image3} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Image src={Image4} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className=''>
                            <Image src={Image4} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Image src={Image5} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className=''>
                            <Image src={Image5} alt='' className='object-cover rounded-lg cursor-pointer'/>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className='py-5'>
                    <h2 className='font-semibold text-3xl'>产品详情</h2>
                    <p className='py-2 leading-8'>光镊(Optical Tweezers)是利用光与物质相互作用时的力学效应进行工作的。一定光强分布的光束可以产生捕获微小粒子的皮牛量级的力，因而可以像“镊子”一样夹持、搬运微粒而不会引起机械损伤。基于光的穿透特性，它还可以不破坏粒子表面而深入其内部操作组分粒子。
                        光镊具有非机械接触、低损伤、可操纵对象丰富、可高精度测量微小位移量和作用力等特点，已被广泛应用于生命科学、物理化学以及气溶胶科学等交叉学科的基础研究上，并在微纳加工、传感测量等应用中展现出了巨大的潜力。
                        特别地,光镊已成为表征生物物理/生物力学特性的必备工具,其发明人Ashkin因光镊在生物学研究中的巨大成功而获得了2018年的诺贝尔物理学奖。光镊被广泛应用于生物学研究主要是因为以下几个特点:使用近红外激光波长(常用1064nm)的光镊被证明对生物样品基本是无损的;光镊可实施的作用力在飞牛 (10^-15N)至数百皮牛(10^-10N)之间,与生物的微观作用力范围基本一致。
                        双光阱光镊(Dual-well Optical Tweezers, DOT)系统是一款高精密力学测量光学仪器。凯佳光科的双光阱光镊系统GW-DOT,基于扫描振镜光学元件,对偏振态相互垂直两个独立光阱分别独立控制，实现对两个微粒在二维空间的捕获与操纵，可对双光阱操控的微粒进行独立动态操控。</p>
                </div>

                <div className='py-5'>
                    <h2 className='font-semibold text-3xl'>产品特点</h2>
                </div>

                <div className='py-5'>
                    <h2 className='font-semibold text-3xl'>应用领域</h2>
                </div>

                <div className='py-5'>
                    <h2 className='font-semibold text-3xl'>客户案例</h2>
                </div>
            </MaxWidthWrapper>
        </div>
    </div>
  )
}

export default Page