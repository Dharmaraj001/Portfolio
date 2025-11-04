import React from 'react'
import {Link} from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='flex flex-col bg-black items-center justify-center h-screen text-white text-center overflow-hidden'>
        {/* Heading */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 leading-snug'>
            <span className='text-4xl sm:text-5xl md:text-6xl'>🌐</span>Welcome to <span className='text-indigo-400'>Space</span> <br className='block sm:hidden'/> themed portfolio
        </h1>

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
        <div className='mt-5 bg-white/10 border border-white/40 rounded-2xl p-3 text-sm sm:text-base md:text-lg text-gray-300 mb-5 backdrop-blur-sm shadow-md'>
                React • HTML • CSS • Tailwind • JavaScript
        </div>

        
        <div className='mt-1'>
            <Link to="/about" className=' border border-white/30 rounded-md py-2 px-5 bg-white/10 hover:bg-white/30 transition duration-300 text-sm sm:text-base'>
                Enter
            </Link>
        </div>
    </div>
  )
}

export default Hero
