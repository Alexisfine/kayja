'use client'
import React, { useRef } from 'react'
import {motion, useInView, useScroll, useTransform} from 'framer-motion'
import { useAnimate, stagger } from 'framer-motion'

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}
function VideoPage() {
  const ref = useRef(null) 
  const isInView = useInView(ref, {once:true})
  return (
    <motion.div className='relative w-full h-screen overflow-hidden' ref={ref}>
        <motion.div className="h-full p-5 flex flex-col gap-20" >
            <motion.h3 variants={textVariants} initial='initial' animate='animate' className="text-2xl text-white z-20" >KAYJA OPTICS</motion.h3>
            <motion.h2 variants={textVariants} initial='initial' animate='animate' className="text-3xl text-white z-20">智造开起微观世界的‘眼‘和‘手’</motion.h2>
            <motion.h1 variants={textVariants} initial='initial' animate='animate' className="text-4xl text-white z-20">光学显微成像和光学操控系统</motion.h1>
        </motion.div>
        <video src="/tissue.mp4" autoPlay muted loop
              className='h-screen w-screen absolute top-0 right-0 object-cover 
                 z-10'>
        </video> 
        
    </motion.div>
  )
}

export default VideoPage

