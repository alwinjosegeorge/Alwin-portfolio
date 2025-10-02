import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center relative"
      style={{
        background: "linear-gradient(135deg, #111827 0%, #192b46 100%)",
        overflow: "hidden",
      }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <span className="text-base font-semibold text-white mb-4">HI, I'M ALWIN</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            I&apos;M A WEB<br />DESIGNER
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-md">
            Turning Code into Creativity. Passionate about developing innovative solutions with cutting-edge technologies. Specializing in AI, web development, and creative problem-solving.
          </p>
          <Button
            size="lg"
            className="border-2 border-white text-white font-semibold px-6 py-2 rounded-lg bg-transparent hover:bg-white hover:text-black transition"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            VIEW MY PROJECTS
            <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
          </Button>
        </div>
        {/* Right: Profile Image - positioned bottom right, spanning up */}
        <div className="flex-1 flex justify-end items-end mt-10 md:mt-0 relative" style={{ minHeight: "500px" }}>
          <img
            src="/Alwin.png"
            alt="Alwin Jose George"
            className="object-contain"
            style={{
              width: "400px",
              height: "auto",
              position: "absolute",
              right: 0,
              bottom: 0,
              zIndex: 10,
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.37))"
            }}
          />
        </div>
      </div>
      {/* Subtle radial effect for depth */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle at 80% 80%, rgba(0,97,255,0.15) 0%, rgba(25,43,70,0) 100%)",
          filter: "blur(20px)",
          zIndex: 1
        }}
      />
    </section>
  );
};

export default HeroSection;
