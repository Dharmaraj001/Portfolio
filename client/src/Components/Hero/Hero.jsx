import React from 'react'
import {BrowserRouter, Link} from "react-router-dom"

const Hero = () => {
    return(
        <div className='flex items-center justify-center'>
            <button className='bg-white/10 text-xl text-red-400'>
            <Link to="/about">Enter the universe</Link>
            </button>
        </div>
    )
}

export default Hero