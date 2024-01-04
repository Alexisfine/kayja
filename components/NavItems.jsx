'use client'
import { NavigationMenu, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import React from 'react'
import { NavigationMenuItem} from './ui/navigation-menu'
import { NAV_MENU_ITEMS } from '@/config'
import NavItem from './NavItem'

function NavItems() {
  return (
    <div className='flex justify-center'>
        <NavigationMenu>
            <NavigationMenuList>
                <ul className='flex flex-row'>
                    {NAV_MENU_ITEMS.map(category => (
                        <NavigationMenuItem key={category.name} className=''>
                            <NavItem category={category}/>
                        </NavigationMenuItem>
                    ))}
                </ul>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default NavItems