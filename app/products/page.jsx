import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductCard from '@/components/ProductCard'
import ProductFilterBar from '@/components/ProductFilterBar'
import ProductSearchList from '@/components/ProductSearchList'
import { Input } from '@/components/ui/input'
import { Joystick, Lightbulb, Microscope, PackageCheck, Search} from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='text-white w-full px-10 md:px-0 py-10 mx-auto bg-gradient-bg bg-400% animate-bg'>
            <MaxWidthWrapper>
              <h2 className='font-bold text-4xl pb-5 '>凯佳产品</h2>
              <span className=''>凯佳光学提供全球领先的光学操控、光学显微成像、光学模组、光学技术解决方案，助力海内外科研院所及科技公司发展
              </span>
            </MaxWidthWrapper>
        </div>

        <div className='text-black  w-full flex flex-col py-5 '>
          <MaxWidthWrapper>
            <div className='hidden md:flex flex-col'>
              <h2 className='font-bold text-2xl py-3 border-b-2 border-b-gray-200'>探索不同类别的产品</h2>
              <div className='flex items-center justify-around gap-3 my-3'>
                <ProductCard Icon={Joystick} title="光学操控"/>
                <ProductCard Icon={Microscope} title="光学显微成像系统"/>
                <ProductCard Icon={Lightbulb} title="光源"/>
                <ProductCard Icon={PackageCheck} title="光学解决方案"/>
              </div>
            </div>

            <div className='flex flex-col'>
              <h2 className='font-bold text-2xl py-3'>搜索全部产品</h2>
              <div className='relative flex items-center'>
                <Input type="search" placeholder="搜索凯佳产品或服务" className='pl-10'/>
                <Search className='absolute left-2 text-gray-600'/>
              </div>

              <div className='flex py-5'>
                <div className='flex flex-col'>
                  <ProductFilterBar/>
                </div>
                <div className='pl-10 flex flex-col flex-grow ml-5'>
                  <ProductSearchList/>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
    </div>
  )
}

export default page