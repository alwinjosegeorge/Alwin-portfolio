import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center relative"
      style={{
        background: "linear-gradient(135deg, #0a1836 0%, #192b46 100%)", // dark blue gradient
        overflow: "hidden",
      }}
    >
      <div className="container mx-auto px-6 flex flex-row items-end justify-between relative z-10" style={{height: "100vh"}}>
        {/* Left Content - shifted more to right */}
        <div className="flex-1 flex flex-col justify-center items-start" style={{paddingLeft: "8vw", paddingBottom: "8vh"}}>
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
        {/* Right: Profile Image - bottom left, not in a box, not zoomed */}
        <div className="flex-1 flex items-end justify-end relative" style={{height: "100%"}}>
          <img
            src="/Alwin.png"
            alt="Alwin Jose George"
            className="object-contain"
            style={{
              width: "420px",
              height: "auto",
              position: "absolute",
              left: "52%",
              bottom: "0",
              zIndex: 10,
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.37))"
            }}
          />
        </div>
      </div>
      {/* Optional: radial effect for depth */}
      <div
        className="absolute left-0 bottom-0 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle at 30% 80%, rgba(0,97,255,0.18) 0%, rgba(25,43,70,0) 100%)",
          filter: "blur(20px)",
          zIndex: 1
        }}
      />
    </section>
  );
};

export default HeroSection;
