// src/components/portfolio/HeroSection.tsx
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const imageSrc = "/Alwin.png"; // image in public folder

  const clippedBg: React.CSSProperties = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    // Adjust vertical offset so head aligns inside the text mask. Tweak if needed.
    backgroundPosition: "center -8%",
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden rounded-3xl"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      {/* top-right arrow */}
      <div className="absolute top-6 right-6 z-50">
        <span className="text-[#e8d9c0] text-2xl">→</span>
      </div>

      {/* decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-10 w-64 h-64 border border-[#e8d9c04d] rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-[#e8d9c02a] rounded-full opacity-15 blur-lg" />
      </div>

      <div className="w-full max-w-7xl px-8 relative z-10">
        <div className="py-14 relative">
          {/* 1) Background solid cream text */}
          <h1 className="text-[12vw] md:text-[11.5rem] leading-none font-extrabold text-[#e8d9c0] tracking-tight select-none">
            PORTFOLIO
          </h1>

          {/* 2) Clipped text layer showing image inside letters (head portion) */}
          <h1
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 text-[12vw] md:text-[11.5rem] leading-none font-extrabold tracking-tight pointer-events-none"
            style={{
              ...clippedBg,
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextStroke: "1px rgba(255,255,255,0.05)",
              zIndex: 20,
            }}
          >
            PORTFOLIO
          </h1>

          {/* 3) Image element in FRONT of the text so body overlaps letters */}
          <img
            src={imageSrc}
            alt="Alwin"
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              height: "72vh", // controls how much of body appears above text
              maxHeight: "980px",
              objectFit: "cover",
              transform: "translateY(6%) translateX(-50%)",
              zIndex: 40,
            }}
            draggable={false}
          />

          {/* outline/stroke layer for hollow look */}
          <h1
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 text-[12vw] md:text-[11.5rem] leading-none font-extrabold tracking-tight pointer-events-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(233,229,218,0.12)",
              mixBlendMode: "overlay",
              zIndex: 50,
            }}
          >
            PORTFOLIO
          </h1>
        </div>

        {/* bottom-left and bottom-right small info */}
        <div className="flex justify-between items-center mt-6 relative z-60">
          <p className="text-[#e8d9c0] text-lg font-medium">Alwin Jose George</p>

          <a
            href="https://alwinportfolio.vercel.app/"
            className="text-[#e8d9c0] hover:underline text-base"
            target="_blank"
            rel="noreferrer"
          >
            https://alwinportfolio.vercel.app/
          </a>
        </div>

        {/* subtitle + CTA */}
        <div className="mt-12 flex flex-col items-center gap-6 text-center relative z-60">
          <p className="text-xl md:text-2xl text-[#cfc3aa] font-mono">
            Computer Science Engineer
          </p>
          <p className="max-w-3xl text-sm md:text-base text-[#bfb6a1] leading-relaxed">
            "Turning Code into Creativity" — Passionate about AI, web dev and creative problem solving.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#e8d9c0]/15 to-[#e8d9c0]/10 text-[#e8d9c0] px-7 py-3 rounded-full hover:scale-105 transition-all"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>

          <div className="flex gap-3 mt-2">
            <Button variant="outline" size="icon" className="rounded-full border-[#e8d9c04d]">
              <Mail className="w-4 h-4 text-[#e8d9c0]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-[#e8d9c04d]">
              <Github className="w-4 h-4 text-[#e8d9c0]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-[#e8d9c04d]">
              <Linkedin className="w-4 h-4 text-[#e8d9c0]" />
            </Button>
          </div>
        </div>
      </div>

      {/* bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-60">
        <div className="w-6 h-10 border-2 border-[#e8d9c04d] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#e8d9c0] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
