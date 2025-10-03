import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id === 'hero' ? 'hero' : item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionId === 'hero' 
      ? document.body 
      : document.getElementById(sectionId);
    
    if (element) {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-bold text-xl tracking-wide">
              <span className="text-foreground">Alwin</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-primary",
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-colors duration-300",
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Floating Navigation Dots (Desktop) */}
      
      {/* <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "group relative w-3 h-3 rounded-full border-2 transition-all duration-300",
                activeSection === item.id
                  ? "bg-primary border-primary scale-125"
                  : "border-primary/50 hover:border-primary hover:scale-110"
              )}
              title={item.label}
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap border border-primary/20">
                  {item.label}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      */}
      {/* Scroll to Top Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-8 right-8 z-40 rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 neon-glow transition-all duration-300 hover:scale-110"
        onClick={() => scrollToSection('hero')}
      >
        <Home className="w-5 h-5" />
      </Button>
    </>
  );
};

export default Navigation;
