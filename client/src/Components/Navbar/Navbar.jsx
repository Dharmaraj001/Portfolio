import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiCode, FiMail } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const items = [
  { id: "home", icon: <FiHome size={18} />, label: "Home", path: "/" },
  { id: "profile", icon: <FiUser size={18} />, label: "Profile", path: "/about" },
  { id: "work", icon: <FiBriefcase size={18} />, label: "Work", path: "/projects" },
  { id: "code", icon: <FiCode size={18} />, label: "Skills", path: "/skills" },
  { id: "mail", icon: <FiMail size={18} />, label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [bounce, setBounce] = useState(false);
   const controls = useAnimation();

  useEffect(() => {
    const currentItem = items.find((it) => it.path === location.pathname);
    if (currentItem) setActive(currentItem.id);
  }, [location.pathname]);

  
  // Trigger animation every time route changes
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      scale: [0.9, 1],
      y: [-20, 0],
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [location, controls]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      // transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-10 left-0 w-full flex justify-center md:justify-center z-[9999] backdrop-blur-md bg-transparent"
    >
      <motion.div    
        layout
        className="fixed flex items-center justify-between gap-4 sm:gap-6 px-5 sm:px-8 py-4
                rounded-2xl border border-white/20
                bg-white/10 backdrop-blur-[4px] backdrop-saturate-120
                shadow-[0_4px_30px_rgba(0,0,0,0.2)]
                hover:bg-white/11 hover:shadow-[0_3px_20px_rgba(255,255,255,0.01)]
                transition-all duration-500
                w-full max-w-xs sm:max-w-md md:max-w-lg"
              role="menubar"
      >
        {items.map((it) => {
          const isActive = it.id === active;
          return (
            <Link key={it.id} to={it.path}>
              <motion.button
                role="menuitem"
                aria-pressed={isActive}
                onClick={() => {
                  setActive(it.id);
                  if (it.id === "profile") {
                    setBounce(true);
                    setTimeout(() => setBounce(false), 500);
                  }
                }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.93 }}
                animate={
                  bounce && it.id === "profile"
                    ? { scale: [1, 1.2, 1], boxShadow: "0 0 20px rgba(99,102,241,0.6)" }
                    : {}
                }
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative flex h-10 w-10 sm:h-11 sm:w-14 items-center justify-center
                  text-gray-300 hover:text-white rounded-lg cursor-pointer select-none
                  transition-all duration-300 ease-out group focus:outline-none"
                title={it.label}
              >
                {isActive && (
                  <motion.span
                    layoutId="active"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500/90 to-pink-500/90
                               shadow-[0_0_15px_rgba(99,102,241,0.4)] ring-1 ring-white/20"
                  />
                )}
                <span className="relative z-10 flex flex-col items-center justify-center text-[10px] sm:text-xs text-center">
                  <span
                    className={`text-lg sm:text-[18px] mb-1 transition-all duration-200 ${
                      isActive
                        ? "text-white drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {it.icon}
                  </span>
                  <span
                    className={`font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 group-hover:text-white"
                    }`}
                  >
                    {it.label}
                  </span>
                </span>
              </motion.button>
            </Link>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
