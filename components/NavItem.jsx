'use client'
import React, { useState } from 'react'
import { NavigationMenuContent, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ScrollArea } from './ui/scroll-area'

function NavItem({category}) {
  const [selectedItem, setSelectedItem] = useState(0)
  
  return (
    <>
      {category.data && (<>
        <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
        <NavigationMenuContent>
            <div className='absolute w-[50vw] top-[52px] rounded border-0 bg-white'>
                <div className='flex flex-row'>
                    <div className='flex-none border-r border-gray-300'>
                      <ScrollArea className='max-h-full'>
                      <ul className='inset-y-10'>
                          {category.data.map((subcategory, index) => (
                              <li 
                                key={subcategory.name} 
                                className={cn('p-4', index === selectedItem ? "text-amber-600 bg-slate-200" : "")}
                                onMouseEnter={() => setSelectedItem(index)}>
                                  {subcategory.name}
                              </li>
                          ))}
                      </ul>
                      </ScrollArea>
                    </div>
                    <ul className='inset-y-10 flex-1 ml-3'>
                        <ScrollArea className="h-[380px]">
                          {category.data[selectedItem].products.map((subcategory, index) => (
                              <li key={subcategory.name} className='p-4'>
                                  {subcategory.name}
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