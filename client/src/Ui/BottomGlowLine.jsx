import React, { useEffect, useState } from "react";

const BottomGlowLine = () => {
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      // When user scrolls to bottom (with small margin)
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setShowGlow(true);
      } else {
        setShowGlow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full h-[3px] transition-opacity duration-500 ${
        showGlow ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent blur-[3px]" />
    </div>
  );
};

export default BottomGlowLine;
