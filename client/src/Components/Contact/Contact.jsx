import React from "react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiUser, FiMessageSquare, FiSend  } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-white mt-15">
        <h1 className="text-4xl font-bold mb-8">Get in Touch ✨</h1>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg">
          <h2 className="text-md font-semibold text-white-400 mb-4"> <span className="text-sm">🔴🟡🟢 </span>&nbsp; ~/Contact Terminal</h2>

          <form className="space-y-5">
            <div>
              <label className="text-sm mb-1.5 flex"> &nbsp; <FiUser size={22}/> &nbsp; Name</label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="text-sm mb-1.5 flex"> &nbsp; <FiMail size={22}/> &nbsp; Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="text-sm mb-1.5 flex"> &nbsp; <FiMessageSquare size={22}/> &nbsp; Mesage</label>
              <textarea
                placeholder="Transmit your message..."
                rows="4"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" flex text-center justify-center w-full bg-gradient-to-r from-purple-500 to-blue-400 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-500 transition-all duration-300" 
                > <span className="mt-1"><FiSend/></span> &nbsp; Send Message
            </button>
          </form>
        </div>

        {/* Right: Info Section */}
        <div className="flex flex-col gap-6">
          {/* Email & Location */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <FiMail size={22} className="text-gray-400" />
              <h3 className="font-semibold text-lg">Email</h3>
            </div>
            <p className="text-sm text-gray-300">dharmarajs877@gmail.com</p>

            <div className="flex items-center gap-3 mb-3 mt-8">
              <FaDiscord  size={22} className="text-blue-400" />
            <a href="https://discord.gg/VuPrazSsJY" target="_blank">  <h3 className="font-bold text-sky-200 underline underline-offset-3 hover:text-sky-400 text-lg">Discord</h3> </a>
            </div>
             <p className="text-sm text-gray-300">Ping me on Discord 🚀 </p>
          </div>

          {/* Social Links */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <h3 className="font-semibold text-lg mb-4">Connect Across the Universe</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <FiGithub size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Availability Status</h3>
            <div className="flex items-center gap-2 text-green-400">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
              <p>Available for new projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
