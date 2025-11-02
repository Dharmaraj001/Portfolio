import React, { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const numStars = 500;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; 
    };
    resize();
    window.addEventListener("resize", resize);

    // ✅ Create stars randomly across the whole canvas
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.2, // small variation
        speedX: (Math.random() - 0.5) * 0.25, // tiny drift X
        speedY: (Math.random() - 0.5) * 0.25, // tiny drift Y
        brightness: Math.random() * 180 + 75, // soft brightness range
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];

        // Move star slightly in random direction
        star.x += star.speedX;
        star.y += star.speedY;

        // Twinkle effect
        star.brightness += Math.sin(Date.now() * 0.002 + i) * 0.15;
        const brightness = Math.min(255, Math.max(100, star.brightness));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
        ctx.fill();

        // Respawn stars that move off-screen
        if (
          star.x < -10 ||
          star.x > canvas.width + 10 ||
          star.y < -10 ||
          star.y > canvas.height + 10
        ) {
          // New random side re-entry
          if (Math.random() > 0.5) {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() > 0.5 ? -5 : canvas.height + 5;
          } else {
            star.y = Math.random() * canvas.height;
            star.x = Math.random() > 0.5 ? -5 : canvas.width + 5;
          }

          // Reset drift direction
          star.speedX = (Math.random() - 0.5) * 0.25;
          star.speedY = (Math.random() - 0.5) * 0.25;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default Starfield;
