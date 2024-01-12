'use client'
import React from 'react'
import ProductSearchCard from './ProductSearchCard'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from './ui/select'
import { SelectValue } from '@radix-ui/react-select'
import { PRODUCTS } from '@/config'
import Card from './Card'
import LightMicro from '@others/light-micro.jpg'


const ProductSearchList = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
            <span>1-15 (321)</span>
            <div className='flex items-center'>
                <span className='pr-3 text-nowrap text-center'>排序方法</span>
                <Select defaultValue='name'>
                    <SelectTrigger>
                        <SelectValue placeholder="产品名称"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value='name'>产品名称</SelectItem>
                            <SelectItem value='category'>产品类别</SelectItem>
                            <SelectItem value='date_desc'>产品推出时间（由新到旧）</SelectItem>
                            <SelectItem value='date_asc'>产品推出时间（由旧到新）</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <div className='mt-3 grid grid-cols-2 md:grid-cols-3 items-center justify-around gap-x-5 gap-y-5'>
            {PRODUCTS?.map(category => (
                category.products?.map((product, index) => (
                    <ProductSearchCard key={index} title={product.name} 
                        tag={category.name} imgSrc={LightMicro} 
                        tagStyle={"bg-gradient-to-r from-pink-200 via-orange-100 to-amber-200"}
                        hoverStyle={"hover:shadow-custom2"}
                        link='/products/id'/>
                ))
            ))}
        </div>
    </div>
  )
}

export default ProductSearchList