import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
      {/* Background geometric elements (Keeping these for the aesthetic) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-secondary/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-accent/10 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder (Removed to match video, as the video doesn't show one) */}

          {/* Main Content: Name */}
          <h1 className="text-6xl md:text-9xl font-bold mb-4 animate-fade-in-up">
            <span className="text-foreground">Alwin Jose George</span>
          </h1>
          
          {/* Title and Taglines */}
          <div className="space-y-4 mb-8 animate-fade-in-up [animation-delay:0.2s]">
            {/* Title */}
            <p className="text-xl md:text-3xl text-primary font-mono tracking-widest">
              Computer Science Engineer
            </p>
            
            {/* Taglines from video */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-semibold">
              <span className="text-accent/80 font-bold">AI Enthusiast</span> | <span className="text-accent/80 font-bold">Innovation Driver</span> | <span className="text-accent/80 font-bold">Tech Explorer</span>
            </p>
            
            {/* Description from video */}
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
              Crafting artificial intelligence solutions through code, exploring the frontiers of <br/> artificial intelligence, and building the future one project at a time.
            </p>
          </div>

          {/* Social Links (Removed to match video, as video only shows CTA buttons) */}

          {/* CTA Buttons (Matching video content and structure) */}
          <div className="flex justify-center gap-4 animate-fade-in-up [animation-delay:0.6s]">
            
            {/* "Explore My Journey" Button (Gradient) */}
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 text-md rounded-lg neon-glow transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Journey
            </Button>

            {/* "Get In Touch" Button (Outline/Dark) */}
            <Button
              variant="outline" // Use outline variant for the dark button style
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-4 text-md rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator (Removed to match video, as the video doesn't show one) */}
      {/* The scroll-down effect is often implicitly understood or handled differently */}
    </section>
  );
};

export default HeroSection;
