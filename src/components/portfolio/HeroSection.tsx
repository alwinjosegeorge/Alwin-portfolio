import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#15161a] via-[#181920] to-[#23242a]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-start">
          <span className="text-lg font-semibold text-white mb-2">HI, I'M ALWIN</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            I&apos;M A WEB<br />DESIGNER
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-md">
            Turning Code into Creativity. Passionate about developing innovative solutions with cutting-edge technologies. Specializing in AI, web development, and creative problem-solving.
          </p>
          <Button
            size="lg"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg bg-transparent hover:bg-white hover:text-black transition"
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
          <div className="w-80 h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-[#23242a] bg-[#181920] flex items-center justify-center">
            <img
              src="/src/components/portfolio/alwin.png"
              alt="Alwin Jose George"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
