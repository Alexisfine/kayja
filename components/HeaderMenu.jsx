'use client'

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


function HeaderMenu() {
  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Link href="/about_us" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About Us
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="position:relative">
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className="position:absolute">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <ListItem href="/optical_imaging_system" title="Optical Imaging System">
                  Wide-field multi-spectral fluorescence microscopy
                </ListItem>
                <ListItem href="/optical_system_solutions" title="Optical Manipulation">
                  Wide-field multi-spectral fluorescence microscopy
                </ListItem>
                <ListItem href="/light_source" title="Light Source">
                  Wide-field multi-spectral fluorescence microscopy
                </ListItem>
                <ListItem href="/optical_system_solutions" title="Optical System Solutions">
                  Wide-field multi-spectral fluorescence microscopy
                </ListItem>
              </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <NavigationMenuTrigger>News</NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
          className)}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem"
export default HeaderMenu
