import React from 'react'
import Logo from './Logo'
import DarkModeToggle from "./DarkModeToggle" 
import HeaderMenu from './HeaderMenu'

function Header() {
  return (
    <header className='sticky top-0 z-50 bg:white '>
      <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white
         mx-auto'>
        <Logo/>
        <div className='flex-1 flex items-center justify-start space-x-4 gap-x-4'>
          <HeaderMenu/>
        </div>
        <div className='flex-1 flex items-center justify-end space-x-4'>
          <DarkModeToggle/>
        </div>
      </nav>
    </header>
  )
}

export default Header