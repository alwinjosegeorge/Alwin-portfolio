import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-[#15161a] relative"
      style={{
        overflow: "hidden"
      }}
    >
      {/* Background light effect */}
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.10) 0%, rgba(21,22,26,0.91) 70%)",
          filter: "blur(40px)",
          zIndex: 0
        }}
      />
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <span className="text-base font-semibold text-white mb-4">HI, I'M ALWIN</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            I&apos;M A WEB<br />DESIGNER
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-md">
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
        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <div className="w-80 h-80 flex items-center justify-center relative z-10">
            <img
              src="/src/components/portfolio/alwin.png"
              alt="Alwin Jose George"
              className="object-contain w-full h-full"
              style={{
                background: "none",
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
                borderRadius: "1.5rem"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
