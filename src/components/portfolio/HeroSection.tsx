import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-secondary/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-accent/10 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-primary p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                  Alwin
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Alwin Jose</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">George</span>
          </h1>

          <div className="space-y-4 mb-8 animate-fade-in-up [animation-delay:0.2s]">
            <p className="text-xl md:text-2xl text-primary font-mono">
              Computer Science Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              "Turning Code into Creativity"
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about developing innovative solutions with cutting-edge technologies. 
              Specializing in AI, web development, and creative problem-solving.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8 animate-fade-in-up [animation-delay:0.4s]">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 neon-glow transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 neon-glow transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 neon-glow transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up [animation-delay:0.6s]">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full neon-glow transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
