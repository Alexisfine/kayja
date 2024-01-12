'use client'
import React, { useState } from 'react'
import KayJaQRCodeImg from '@others/kayja-qr-code.jpg'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionTrigger } from '@radix-ui/react-accordion'
import { AccordionItem } from './ui/accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

function Footer() {
  const [activeIndex, setActiveIndex] = useState(null)
  const handleOpen = (index) => {
    if (activeIndex === index) {
        setActiveIndex(null)
    } else {
        setActiveIndex(index)
    }
  } 
  return (
    <>
        <div className='hidden md:inline flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-10 px-32 py-14'>
                <div className='space-y-4 text-xs md:text-sm text-gray-100'>
                    <h5 className='font-bold'>关于我们</h5>
                    <p className='cursor-pointer'>凯佳简介</p>
                    <p className='cursor-pointer'>凯佳能力</p>
                    <p className='cursor-pointer'>人才招聘</p>
                </div>
                <div className='space-y-4 text-xs md:text-sm text-gray-100'>
                    <h5 className='font-bold'>产品中心</h5>
                    <p className='cursor-pointer'>光学显微成像系统</p>
                    <p className='cursor-pointer'>光学操控</p>
                    <p className='cursor-pointer'>光源</p>
                </div>        
                <div className='space-y-4 text-xs md:text-sm text-gray-100'>
                    <h5 className='font-bold'>技术与服务</h5>
                    <p className='cursor-pointer'>系统方案</p>
                    <p className='cursor-pointer'>软件服务</p>
                    <p className='cursor-pointer'>应用案例</p>
                    <p className='cursor-pointer'>技术支持</p>
                </div>
                <div className='space-y-4 text-xs md:text-sm text-gray-100'>
                    <h5 className='font-bold'>新闻动态</h5>
                    <p className='cursor-pointer'>行业新闻</p>
                    <p className='cursor-pointer'>公司新闻</p>
                    <p className='cursor-pointer'>展会信息</p>
                </div>
                <div className='space-y-4 text-xs md:text-sm text-gray-100'>
                    <h5 className='font-bold'>联系我们</h5>
                    <div className='pb-2'>
                        <p className='font-semibold'>电话：</p>
                        <p>18022312137 13360597118</p>
                    </div>
                    <div className='pb-2'>
                        <p className='font-semibold'>邮箱：</p>
                        <p>sales@kayjaopt.com service@kayjaopt.com</p>
                    </div>
                    <div className='pb-2'>
                        <p className='font-semibold'>地址：</p>
                        <p className='font-semibold'>深圳市凯佳光学科技有限公司：</p>
                        <p>深圳市南山区粤兴一道9号香港科大深圳产学研大楼3楼315-A</p>
                        <p className='font-semibold'>广州市凯佳光学科技有限公司：</p>
                        <p>广州市南沙区环市大道南2号南沙资讯科技园科技楼</p>
                        <p className='font-semibold'>北京凯佳光科技术有限公司：</p>
                        <p>北京市海淀区丹棱街18号1号楼19层19016号</p>
                    </div>
                </div>
                <div className='items-center justify-center'>
                    <Image className="px-2" src={KayJaQRCodeImg} alt="KayJa QR code"/>
                </div>
            </div>
            <div className='bg-gray-100 items-center justify-center'>
                <h5 className='mx-2 text-gray-800 text-xs mx-auto'>
                    版权所有：凯佳光科 电话：18022312137 13360597118 | 备案号 苏ICP备19027403号
                </h5>
            </div>
        </div>
        <div className='px-5 py-10 md:hidden bg-gray-800 text-white'>
            <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value="item-1" className="w-full" onClick={() => handleOpen(1)}>
                    <AccordionTrigger className='w-full py-2 flex items-center justify-between'>
                        <span className='font-bold text-base'>关于我们</span>
                        <ChevronDown className={cn("h-6 w-6 transition-all text-white -my-2", {
                            "-rotate-180":activeIndex === 1
                        })}/>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='text-sm space-y-3 py-2'>
                            <p className='cursor-pointer'>凯佳简介</p>
                            <p className='cursor-pointer'>凯佳能力</p>
                            <p className='cursor-pointer'>人才招聘</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="w-full" onClick={() => handleOpen(2)}>
                    <AccordionTrigger className='py-2 flex items-center w-full justify-between'>
                        <span className='font-bold text-base'>产品中心</span>
                        <ChevronDown className={cn("h-6 w-6 transition-all text-white", {
                            "-rotate-180":activeIndex === 2
                        })}/>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='text-sm space-y-3 py-2'>
                            <p className='cursor-pointer'>光学显微成像系统</p>
                            <p className='cursor-pointer'>光学操控</p>
                            <p className='cursor-pointer'>光源</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>


                <AccordionItem value="item-3" className="w-full" onClick={() => handleOpen(3)}>
                    <AccordionTrigger className='py-2 flex items-center w-full justify-between'>
                        <span className='font-bold text-base'>技术与服务</span>
                        <ChevronDown className={cn("h-6 w-6 transition-all text-white", {
                            "-rotate-180":activeIndex === 3
                        })}/>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='text-sm space-y-3 py-2'>
                            <p className='cursor-pointer'>系统方案</p>
                            <p className='cursor-pointer'>软件服务</p>
                            <p className='cursor-pointer'>应用案例</p>
                            <p className='cursor-pointer'>技术支持</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="w-full" onClick={() => handleOpen(4)}>
                    <AccordionTrigger className='py-2 flex items-center w-full justify-between'>
                        <span className='font-bold text-base'>新闻动态</span>
                        <ChevronDown className={cn("h-6 w-6 transition-all text-white", {
                            "-rotate-180":activeIndex === 4
                        })}/>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='text-sm space-y-3 py-2'>
                            <p className='cursor-pointer'>行业新闻</p>
                            <p className='cursor-pointer'>公司新闻</p>
                            <p className='cursor-pointer'>展会信息</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="w-full" onClick={() => handleOpen(5)}>
                    <AccordionTrigger className='py-2 flex items-center w-full justify-between'>
                        <span className='font-bold text-base'>联系我们</span>
                        <ChevronDown className={cn("h-6 w-6 transition-all text-white", {
                            "-rotate-180":activeIndex === 5
                        })}/>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='text-sm space-y-3 py-2'>
                            <div className='pb-2'>
                                <p className='font-semibold'>电话：</p>
                                <p>18022312137 13360597118</p>
                            </div>
                            <div className='pb-2'>
                                <p className='font-semibold'>邮箱：</p>
                                <p>sales@kayjaopt.com service@kayjaopt.com</p>
                            </div>
                            <div className='pb-2'>
                                <p className='font-semibold'>地址：</p>
                                <p className='font-semibold'>深圳市凯佳光学科技有限公司：</p>
                                <p>深圳市南山区粤兴一道9号香港科大深圳产学研大楼3楼315-A</p>
                                <p className='font-semibold'>广州市凯佳光学科技有限公司：</p>
                                <p>广州市南沙区环市大道南2号南沙资讯科技园科技楼</p>
                                <p className='font-semibold'>北京凯佳光科技术有限公司：</p>
                                <p>北京市海淀区丹棱街18号1号楼19层19016号</p>
                            </div>
                            <div className='items-center justify-center'>
                            <Image className="px-2 w-1/3" src={KayJaQRCodeImg} alt="KayJa QR code"/>
                        </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </>
    
  )
}

export default Footer