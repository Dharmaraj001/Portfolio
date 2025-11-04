import React from "react";
import { GiGalaxy, GiPlanetCore, GiStarProminences, GiSpaceSuit, GiRocketFlight, GiProcessor } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava} from "@fortawesome/free-brands-svg-icons";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import js1 from "../../assets/js1.png";
import nodejs2 from "../../assets/nodejs2.png"

const skills = [
  "Full Stack Developer",
  "MERN Developer",
  "Backend Engineer",
  "UI/UX Enthusiast",
];

const About = () => {

   const [index, setIndex] = useState(0);

     useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2500); // change every 2.5 seconds
    return () => clearInterval(timer);
  }, []);

    const current = skills[index];

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-10 over mb-20">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10">
        {/* ===== Left Section (Astronaut + Glow) ===== */}
        <div className="relative flex flex-col justify-center items-center md:basis-[40%] mt-40">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-[0_0_30px_rgba(50,60,150,0.4)]">
            <img
              src={""} // your astronaut image path
              alt="Profile image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Optional outer glow effect */}
          <div className="absolute inset-0 blur-3xl bg-white-50/10 rounded-full -z-10"></div>

      {/* Skills section */}
          <div className="relative flex justify-center items-center">
      {/* background blur / glow */}
      <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-400/10 rounded-xl -z-10" />

 
    {/* 3D Top-Rolling Skill Box */}
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        rotateX: 60,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      className="mt-5 text-center text-lg font-bold px-6 py-3 rounded-2xl 
                 bg-white/10 backdrop-blur-md border border-white/20
                 shadow-[0_0_25px_rgba(255,255,255,0.15)]
                 [transform-style:preserve-3d] [perspective:1000px]"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{
            opacity: 0,
            rotateX: 90,
            y: 10,
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
            y: 0,
          }}
          exit={{
            opacity: 0,
            rotateX: -90,
            y: -10,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className={`block bg-gradient-to-r ${
            index === 0
              ? "from-blue-400 via-purple-400 to-pink-400"
              : index === 1
              ? "from-emerald-400 via-cyan-400 to-sky-400"
              : index === 2
              ? "from-amber-300 via-pink-400 to-rose-500"
              : "from-indigo-400 via-sky-400 to-cyan-300"
          } bg-clip-text text-transparent`}
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </motion.div>
    </div>
          
      <div className="relative flex justify-center items-center top-5  rounded-sm p-1 gap-6 text-2xl mb-2">

          <div className="flex items-center justify-center gap-3 px-3 py-2
             rounded-xl border border-white/20 
             bg-white/20 
             text-center transition-all duration-300 
             hover:shadow-[0_0_1px_rgba(56,189,248,0.4)] hover:border-sky-400/10 
             hover:scale-[1]">
          <FontAwesomeIcon 
          icon={faReact} 
          className="text-sky-400 text-3xl animate-pulse-slow
               drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] 
               transition-all duration-300 
               hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.9)] hover:-translate-y-1"/>
          </div>

          <div className="flex items-center justify-center gap-3 px-3 py-2
             rounded-xl border border-white/20 
             bg-white/20 
             text-center transition-all duration-300 
             hover:shadow-[0_0_1px_rgba(56,189,248,0.4)] hover:border-sky-400/10 
             hover:scale-[1]">
              <img src={js1} alt="js logo" className="w-7.5 h-7.5 animate-pulse-slow
               drop-shadow-[0_0_10px_rgba(247,223,30,0.6)]
               transition-all duration-300 
               hover:drop-shadow-[0_0_25px_rgba(247, 223, 30, 0.6)] hover:-translate-y-1" />
          </div>

          <div className="flex items-center justify-center gap-3 px-3 py-2
             rounded-xl border border-white/20 
             bg-white/20 
             text-center transition-all duration-300 
             hover:shadow-[0_0_1px_rgba(56,189,248,0.4)] hover:border-sky-400/10 
             hover:scale-[1]">
          <FontAwesomeIcon 
          icon={faJava} 
          className=" text-3xl animate-pulse-slow
              drop-shadow-[0_0_10px_rgba(240,81,51,0.6)]
               transition-all duration-300 
               hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.9)] hover:-translate-y-1"/>
          </div>

          <div className="flex items-center justify-center gap-3 px-3 py-2
             rounded-xl border border-white/20 
             bg-white/20 
             text-center transition-all duration-300 
             hover:shadow-[0_0_1px_rgba(56,189,248,0.4)] hover:border-sky-400/10 
             hover:scale-[1]">
          <img src={nodejs2} alt="node js icon" className="h-7.5 w-7.5 animate-pulse-slow
               drop-shadow-[0_0_10px_rgba(94,186,125,0.6)] 
               transition-all duration-300 
               hover:drop-shadow-[0_0_25px_rgba(247, 223, 30, 0.6)] hover:-translate-y-1"/> 
        
          </div>
    </div>
        
        <div className="flex justify-center gap-4 mt-6">
    
              {/* Resume Button */}
          <a
           href="/resume.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium shadow-[0_0_10px_rgba(56,189,248,0.5)] hover:scale-105 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)] transition-all duration-300"
            >
           Resume
            </a>
                
               {/* LinkedIn Button */}
            <a
            href="https://www.linkedin.com/in/dharmarajs001/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#0077B5]/90 rounded-lg text-white font-medium shadow-[0_0_10px_rgba(0,119,181,0.5)] hover:bg-[#0077B5] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,119,181,0.7)] transition-all duration-300"
            >
             LinkedIn
            </a>
          </div>
  
      </div>

        {/* ===== Right Section (Identity, Role, Mission) ===== */}
        <div className="relative flex flex-col gap-6 md:basis-[40%] z-0">
          <div></div>
          {/* Identity Card */}
          <div className="bg-white/10 p-7 rounded-2xl backdrop-blur-md border-[1px] border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.15)] mt-35">
            <div className="flex items-center gap-2 text-sky-400">
              <motion.div
                animate={{ y: [3, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)] hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.9)] transition-transform"
              >
                <GiSpaceSuit size={28} />
              </motion.div>
              <span className="font-semibold text-lg">Callsign</span>
            </div>
            <p className=" mt-2 ml-1 text-2xl font-bold bg-gradient-to-r from-[#ffffff] via-[#1429ea] to-[#38BDF8] bg-clip-text text-transparent">Dharmaraj</p>
            <p className="text-gray-300 mt-2">
              A digital explorer navigating the infinite possibilities of code
            </p>
          </div>

          {/* Role Card */}
          <div className="bg-white/10 p-7 rounded-2xl backdrop-blur-md border-[1px] border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.15)]">
            <div className="flex items-center gap-2 text-sky-400">
              <motion.div
                animate={{ y: [3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)] hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.9)] transition-transform"
              >
                <GiRocketFlight size={28} />
              </motion.div>
              <span className="font-semibold text-lg">Role</span>
            </div>

            <p className="mt-2 ml-1 text-2xl font-bold bg-gradient-to-r from-[#ffffff] via-[#1429ea] to-[#38BDF8] bg-clip-text text-transparent">Full-Stack Developer</p>
            <p className="text-gray-300 mt-2">
              Crafting seamless experiences from frontend to backend,
              transforming ideas into reality
            </p>
          </div>


          {/* Mission Card */}
          <div className="bg-white/10 p-7 rounded-2xl backdrop-blur-md border-[1px] border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.15)]">
            <div className="flex items-center gap-2 text-sky-400">
              <motion.div
                animate={{ y: [3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.7)] hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.9)] transition-transform"
              >
                <GiGalaxy size={28} />
              </motion.div>
              <span className="font-semibold text-lg">Cosmic Vision.</span>
            </div>

            <p className="text-gray-300 mt-2">
              To push the boundaries of web development, creating innovative
              solutions that inspire and empower users across the digital
              universe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
