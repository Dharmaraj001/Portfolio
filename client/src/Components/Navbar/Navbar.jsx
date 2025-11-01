import React, { useState,  } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiCode, FiMail } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const items = [
  { id: "home", icon: <FiHome size={18} />, label: "Home", path:"/" },
  { id: "profile", icon: <FiUser size={18} />, label: "Profile",  path: "/about" },
  { id: "work", icon: <FiBriefcase size={18} />, label: "Work", path:"/projects" },
  { id: "code", icon: <FiCode size={18} />, label: "Skills", path:"/skills" },
  { id: "mail", icon: <FiMail size={18} />, label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
const [active, setActive] = useState("");

React.useEffect(() => {
  const currentItem = items.find((it) => it.path === location.pathname);
  if (currentItem) setActive(currentItem.id);
}, [location.pathname]);


const [bounce, setBounce] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center md:justify-end 
                p-3 mt-6 md:mt-10 md:mr-[250px] 
                lg:p-2 lg:mt-8 lg:mr-[200px]"
    >
      <div
        className="relative flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 py-3 sm:py-4
          rounded-2xl border border-white/10
          bg-gradient-to-br from-[#2a2a40]/80 via-[#1e1e2f]/70 to-black/40
          backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.45)]
          w-full max-w-xs sm:max-w-md md:max-w-lg
          transition-all duration-500 ease-in-out"
        role="menubar"
      >
        {items.map((it) => {
          const isActive = it.id === active;

          return (
             <Link key={it.id} to={it.path}>
            <motion.button
              key={it.id}
              role="menuitem"
              aria-pressed={isActive}
              onClick={() => {
                setActive(it.id);
                if (it.id === "profile") {
                  setBounce(true);
                  setTimeout(() => setBounce(false), 500); // reset bounce animation
                }
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={
                bounce && it.id === "profile"
                  ? { scale: [1, 1.15, 1], boxShadow: "0 0 20px rgba(99,102,241,0.6)" }
                  : {}
              }
              transition={{ type: "spring", stiffness: 250, damping: 12 }}
              className="relative flex h-10 w-10 sm:h-11 sm:w-14 items-center justify-center
                text-gray-300 hover:text-white rounded-lg cursor-pointer select-none
                transition-all duration-300 ease-out group focus:outline-none"
              title={it.label}
            >
              {isActive && (
                <motion.span
                  layoutId="active"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500/90 to-pink-500/90
                             shadow-[0_6px_25px_rgba(99,102,241,0.35)] ring-1 ring-white/20"
                />
              )}
              <span className="relative z-10 flex flex-col items-center justify-center text-[10px] sm:text-xs text-center">
          <span
          className={`text-lg sm:text-[18px] mb-1 transition-colors duration-200 ${
          isActive ? "text-white" : "text-white/70 group-hover:text-white"
          }`}
          >
          {it.icon}
          </span>
          <span
          className={`font-medium transition-colors duration-200 ${
           isActive ? "text-white" : "text-white/60 group-hover:text-white"
          }`}
          >
    {it.label}
  </span>
</span>

            </motion.button>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;
