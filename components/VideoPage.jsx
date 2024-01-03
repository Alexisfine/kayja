'use client'
import React from 'react'
import {motion} from 'framer-motion'

const textVariants = {
    initial:{
        x:-500,
        y:0,
        opacity:0,
    },
    animate: {
        x:0,
        y:0,
        opacity:1,
        transition: {
            duration: 1,
            staggeredChildren: 0.1
        }
    }
}
function VideoPage() {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
        <div className="h-full w-1/2 flex flex-col items-center content-between mx-auto gap-10 z-20" 
            variants={textVariants} initial='initial' animate='animate'>
            <h1>Hello world</h1>    
            <motion.h3 variants={textVariants} className="text-2xl text-black">KAYJA OPTICS</motion.h3>
            <motion.h2 variants={textVariants} className="text-3xl text-white">智造开起微观世界的‘眼‘和‘手’</motion.h2>
            <motion.h1 variants={textVariants} className="text-4xl text-white">光学显微成像和光学操控系统</motion.h1>
        </div>
        <video src="/tissue.mp4" autoPlay muted loop
              className='h-screen w-screen absolute top-0 right-0 object-cover 
                 z-10'>
        </video> 
        
    </div>
  )
}

export default VideoPage

