'use client'
import React, { useState } from 'react'
import { NavigationMenuContent, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ScrollArea } from './ui/scroll-area'

function NavItem({category}) {
  const [selectedItem, setSelectedItem] = useState(0)
  const [selectedSubItem, setSelectedSubItem] = useState(null)

  
  return (
    <>
      {category.data && (<>
        <Link href={category.href}>
          <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
        </Link>
        <NavigationMenuContent>
            <div className='absolute w-[50vw] top-[52px] rounded-xl border-0 bg-white'>
                <div className='flex flex-row'>
                    <div className='flex-none border-r border-gray-300'>
                      <ScrollArea className='h-[350px]'>
                      <ul className='inset-y-10'>
                          {category.data.map((subcategory, index) => (
                              <li 
                                key={subcategory.name} 
                                className={cn('p-4 cursor-pointer', index === selectedItem ? "text-amber-600 bg-slate-200" : "")}
                                onMouseEnter={() => setSelectedItem(index)}>
                                  {subcategory.name}
                              </li>
                          ))}
                      </ul>
                      </ScrollArea>
                    </div>
                    <ul className='inset-y-10 flex-1 ml-3'>
                        <ScrollArea className="h-[350px]">
                          {category.data[selectedItem].products.map((subcategory, index) => (
                              <li key={subcategory.name} className='mx-1 my-2'>
                                  <div className={cn(index === selectedSubItem ? "bg-slate-100" : "", "rounded pl-2")}>
                                    <Link href='' onMouseEnter={() => setSelectedSubItem(index)}>
                                      <h2 className={cn(index === selectedSubItem ? "text-amber-600" : "")}>{subcategory.name}</h2>
                                      <span className='text-gray-400 text-sm'>{subcategory.briefDesc}</span>
                                    </Link>
                                  </div>
                              </li>
                          ))}
                        </ScrollArea>
                    </ul>
                </div>
            </div>
        </NavigationMenuContent>
      </>)}
      {!category.data && (
          <Link href={category.href} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {category.name}
          </NavigationMenuLink>
        </Link>
      )}
    </>
  )
}

export default NavItem