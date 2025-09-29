import { Code, Lightbulb, Target, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Skills",
      description: "Proficient in C, Python, Web Development, AI, and Image Processing"
    },
    {
      icon: Target,
      title: "Career Goal",
      description: "Build a successful career in top tech companies using AI and software expertise, while pursuing an MBA to enhance business and leadership skills."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about creating solutions that bridge creativity and technology"
    },
    {
      icon: Trophy,
      title: "Achievement",
      description: "Active in hackathons, workshops, and leadership development"
    }
  ];

  return (
    <section id="about" className="py-20 scroll-offset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate Computer Science Engineer dedicated to innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Bio */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a Computer Science Engineering student with a passion for building innovative and interactive websites. While I have explored areas like AI and image processing, my primary focus is on web development, creating user-friendly and responsive digital experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I enjoy transforming ideas into functional websites, combining clean design with efficient code. My experience includes developing projects, participating in hackathons, and leading small technical initiatives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Looking ahead, I aim to contribute to leading multinational technology companies, leveraging my web development skills and future business knowledge through an MBA.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Education & Growth</h4>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                      <div>
                        <p className="font-semibold">Computer Science Engineering</p>
                        <p className="text-sm text-muted-foreground">Current • Undergraduate Student</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-secondary rounded-full border-4 border-background"></div>
                      <div>
                        <p className="font-semibold">Specialized Training</p>
                        <p className="text-sm text-muted-foreground">Web Development, with foundational exposure to AI and image processing</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                      <div>
                        <p className="font-semibold">Focus Areas</p>
                        <p className="text-sm text-muted-foreground">Building responsive websites, implementing interactive web features, and improving user experience</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                      <div>
                        <p className="font-semibold">Continuous Learning</p>
                        <p className="text-sm text-muted-foreground">Actively attending workshops, hackathons, and technical events to enhance skills, gain practical experience, and stay updated with industry trends</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 neon-glow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2 text-primary">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;