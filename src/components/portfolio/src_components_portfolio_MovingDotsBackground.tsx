import React, { useEffect, useRef } from "react";

const MovingDotsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Dots setup
    const dotsCount = Math.floor(width / 25);
    const dots = Array.from({ length: dotsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    }));

    function drawGrid() {
      ctx.save();
      ctx.strokeStyle = "rgba(100,255,255,0.07)";
      ctx.lineWidth = 1;
      for (let i = 0; i < height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }
      for (let i = 0; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawDots() {
      dots.forEach(dot => {
        ctx.save();
        ctx.globalAlpha = dot.opacity;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      drawDots();
      dots.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;
        // Bounce off edges
        if (dot.x < 0 || dot.x > width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > height) dot.dy *= -1;
      });
      requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        display: "block",
        pointerEvents: "none",
        background: "radial-gradient(ellipse at center, #0a1823 0%, #050a12 100%)"
      }}
      aria-hidden="true"
    />
  );
};

export default MovingDotsBackground;