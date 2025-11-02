import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-10 over ">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10">
        {/* ===== Left Section (Astronaut + Glow) ===== */}
        <div className="relative flex justify-center items-center md:basis-[40%]">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-[0_0_50px_rgba(120,80,255,0.4)] hover:bg-amber-200">
            <img
              src="/astronaut.png" // your astronaut image path
              alt="Astronaut"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Optional outer glow effect */}
          <div className="absolute inset-0 blur-3xl bg-purple-500/20 rounded-full -z-10"></div>
        </div>

        {/* ===== Right Section (Identity, Role, Mission) ===== */}
        <div className="relative flex flex-col gap-6 md:basis-[40%] z-0">
          <div></div>
          {/* Identity Card */}
          <div className="bg-white/10 p-7 rounded-2xl backdrop-blur-md border-[1px] border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.15)] mt-35">
            <h3 className="text-purple-400 font-semibold text-lg">💫 Identity</h3>
            <p className="text-xl font-bold mt-1">Alex Cosmos</p>
            <p className="text-gray-300 mt-2">
              A digital explorer navigating the infinite possibilities of code
            </p>
          </div>

          {/* Role Card */}
          <div className="bg-white/10 p-7 rounded-2xl backdrop-blur-md border-[1px] border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.15)]">
            <h3 className="text-purple-400 font-semibold text-lg">🚀 Role</h3>
            <p className="text-xl font-bold mt-1">Full-Stack Developer</p>
            <p className="text-gray-300 mt-2">
              Crafting seamless experiences from frontend to backend,
              transforming ideas into reality
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/10 p-7 rounded-2xl backdrop-blur-md border-[1px] border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.15)]">
            <h3 className="text-purple-400 font-semibold text-lg">🌌 Mission</h3>
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
