import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:your@email.com",
    label: "Email",
  },
  {
    icon: Github,
    href: "https://github.com/alwinjosegeorge",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/alwinjosegeorge",
    label: "LinkedIn",
  },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#64748b]">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-full blur-3xl opacity-70 animate-blob1"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-2xl opacity-60 animate-blob2"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mx-auto mb-10">
            <div className="relative w-48 h-48 mx-auto rounded-full shadow-xl border-4 border-primary/30 bg-white/10 backdrop-blur-lg overflow-hidden animate-fade-in-up">
              {/* Replace src with your image URL */}
              <img
                src="/profile.jpg"
                alt="Alwin Jose George"
                className="w-full h-full object-cover rounded-full"
              />
              {/* Fallback initials if no image */}
              {/* <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary bg-muted/60">AJG</div> */}
            </div>
          </div>

          {/* Glass Card Content */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-10 border border-white/20 animate-fade-in-up transition-all duration-700">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-5 tracking-tight text-white drop-shadow-lg">
              <span className="block text-primary">Alwin Jose</span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">George</span>
            </h1>
            <div className="mb-6">
              <p className="text-xl md:text-2xl font-mono text-secondary mb-2">
                Computer Science Engineer
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-3 italic">
                "Turning Code into Creativity"
              </p>
              <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
                Passionate about developing innovative solutions with cutting-edge technologies. <br />
                Specializing in AI, web development, and creative problem-solving.
              </p>
            </div>

            {/* Social Links with Tooltip */}
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={label}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/70 hover:border-primary bg-white/10 hover:bg-primary/10 transition-all duration-300 neon-glow shadow-lg"
                  >
                    <Icon className="w-6 h-6 text-primary group-hover:text-secondary" />
                  </Button>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black/80 text-white text-xs rounded px-2 py-1 transition duration-200 pointer-events-none">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-4 flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-10 py-5 text-xl rounded-full neon-glow shadow-xl transition-all duration-300 hover:scale-105 hover:from-secondary hover:to-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowDown className="ml-2 w-6 h-6 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-14 border-2 border-primary/60 rounded-full flex justify-center items-start bg-white/5 backdrop-blur-md animate-bounce shadow-md">
          <div className="w-2 h-4 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
