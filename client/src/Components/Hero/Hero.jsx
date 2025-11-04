import React from 'react'
import {BrowserRouter, Link} from "react-router-dom"
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return(
        <>
         <div class="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">

            <div>
                <h1 className='text-3xl mb-4 font-semibold'> <span className='text-4xl'>🌐</span> Welcome to Space themed portfolio</h1>
            </div>

            <div className='mt-5'>React, Html, Css, Tailwind css, JavaScript</div>

            <button className='mt-5'> <a href="/about" className='border rounded-sm py-1 px-2 bg-white/10 hover:bg-white/40 '>Enter</a></button>
</div>

        </>
    )
}

export default Hero