'use client'
import { Accordion } from '@radix-ui/react-accordion'
import React, { useState } from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Checkbox } from './ui/checkbox'

const ProductFilterBar = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const handleOpen = (index) => {
    if (activeIndex === index) {
        setActiveIndex(null)
    } else {
        setActiveIndex(index)
    }
  } 
  return (
    <Accordion type='single' collapsible>
        <AccordionItem value="item-1" className="w-full" onClick={() => handleOpen(1)}>
            <AccordionTrigger className='py-2 flex items-center w-full justify-between'>
                <span className='font-semibold text-base'>推出时间</span>
                <ChevronDown className={cn("h-6 w-6 transition-all text-white", {
                    "-rotate-180":activeIndex === 1
                })}/>
            </AccordionTrigger>
            <AccordionContent>
                <div className='text-sm flex flex-col gap-y-5 items-start'>
                    <div className='flex items-center'>
                        <input type='checkbox' className='h-4 w-4'/>
                        <label className='pl-3 text-center'>2024至今</label>
                    </div>
                    <div className='flex items-center'>
                        <input type='checkbox' className='h-4 w-4'/>
                        <label className='pl-3 text-center'>2023</label>
                    </div>
                    <div className='flex items-center'>
                        <input type='checkbox' className='h-4 w-4'/>
                        <label className='pl-3 text-center'>2022</label>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="w-full" onClick={() => handleOpen(1)}>
            <AccordionTrigger className='py-2 flex items-center w-full justify-between'>
                <span className='font-semibold text-base'>产品类别</span>
                <ChevronDown className={cn("h-6 w-6 transition-all text-white", {
                    "-rotate-180":activeIndex === 1
                })}/>
            </AccordionTrigger>
            <AccordionContent>
                <div className='text-sm flex flex-col gap-y-5 items-start'>
                    <div className='flex items-center'>
                        <input type='checkbox' className='h-4 w-4'/>
                        <label className='pl-3 text-center'>光学操控</label>
                    </div>
                    <div className='flex items-center'>
                        <input type='checkbox' className='h-4 w-4'/>
                        <label className='pl-3 text-center'>光学显微成像系统</label>
                    </div>
                    <div className='flex items-center'>
                        <input type='checkbox' className='h-4 w-4'/>
                        <label className='pl-3 text-center'>光源</label>
                    </div>
                    <div className='flex items-center'>
                        <input type='checkbox' className='h-4 w-4'/>
                        <label className='pl-3 text-center'>光学解决方案</label>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}

export default ProductFilterBar