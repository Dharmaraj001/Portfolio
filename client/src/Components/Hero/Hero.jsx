import React from 'react'
import {Link} from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='flex start flex-col bg-black items-center justify-center h-screen text-white text-center overflow-hidden'>
        {/* Heading */}
        <motion.h1 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 leading-snug'>
            <span className='text-4xl sm:text-5xl md:text-6xl' style={{display:"inline-block", animation: "spin 6s linear infinite"}}>🌐</span>Welcome to <span className='relative bg-gradient-to-r from-yellow-200 via-orange-400 to-pink-500200%_200%] animate-gradientMove bg-clip-text text-transparent font-extrabold'>Space</span> <br className='block sm:hidden'/> themed portfolio
        </motion.h1>

        {/* Tag lines */}
        <TypeAnimation
        sequence = {[
            "Where skills shine like stars ✨", 1500,
            "Exploring the universe of web development 🚀", 1500,
            "Crafting galaxies of clean code 🌠", 1500,
            "Orbiting around creativity and logic 🪐", 1500,
            "Turning ideas into constellations 💫", 1500,
            "Expanding the frontiers of innovation 🌌", 1500,
        ]}
        wrapper='span'
        cursor = {true}
        repeat={Infinity}
        className='text-sm sm:text-base md:text-lg textt-gray=300 mt-2'
            />

        {/* Skills */}

        <motion.div 
            initial={{opacity:0, y:-30}}
            animate={{opacity:1, y:0}}
            transition={{duration:1.2}}
        className='mt-5 bg-white/10 border border-white/40 rounded-2xl p-3 text-sm sm:text-base md:text-lg text-gray-300 mb-5 backdrop-blur-sm shadow-md hover:bg-white/15'>
            Built with <span className='text-[#75C2D9] font-bold'>React </span> <span className='font-bold'>+</span> <span className='text-yellow-300 font-bold'> Framer Motion </span><span className='font-bold'>+</span> <span className='font-bold text-[#4EB9FA]'>Tailwind</span>
        </motion.div>

        
        <motion.div 
            initial={{opacity:0, y:30}}
            animate={{opacity:1}}
            transition={{duration:1.2}}
        className='mt-3'>
            <Link 
            to="/about"
            className="border border-indigo-400/30 text-white rounded-md py-2 px-5 bg-indigo-400/5 hover:bg-indigo-400/20 hover:shadow-[0_0_2px_rgba(99,102,241,0.6)] transition-all duration-300"
            >
            Enter
            </Link>
        </motion.div>

        <div className=''>
            <h1 className='mt-30'></h1>
        </div>

        <motion.div 
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:1.2, delay:1}}
        className="absolute bottom-3 text-xs sm:text-sm text-gray-500 tracking-wide">
        Built with <span className="text-red-500">❤️</span> by <span className="text-gray-400 font-bold hover:text-gray-300">Dharmaraj</span>
        </motion.div>

    </div>
  )
}

export default Hero
