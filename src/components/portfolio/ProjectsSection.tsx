import { ExternalLink, Github, Image as ImageIcon, Camera, Leaf, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Photo Gallery Website",
      description: "A responsive and interactive photo gallery with advanced filtering, search capabilities, and smooth animations. Features include image optimization, lazy loading, and a clean user interface.",
      icon: ImageIcon,
      technologies: ["JavaScript", "CSS3", "HTML5", "Responsive Design"],
      features: ["Interactive UI", "Image Optimization", "Search & Filter", "Mobile-First"],
      status: "Completed",
      github: "https://github.com/alwinjosegeorge/Alwins-modern-gallery",
      demo: "https://alwins-modern-gallery.vercel.app/"
    },
    {
      id: 2,
      title: "Eco Travel Mate",
      description: "Hackathon project that promotes sustainable tourism through AI-powered travel recommendations, carbon footprint tracking, and eco-friendly accommodation suggestions.",
      icon: Leaf,
      technologies: ["Python", "Machine Learning", "React", "Node.js", "MongoDB"],
      features: ["AI Recommendations", "Carbon Tracking", "Eco-Routes", "Community Features"],
      status: "Participant",
      github: "https://github.com/alwinjosegeorge/Eco-Travel-Mate",
      demo: "https://eco-travel-mate.vercel.app/"
    },
    {
      id: 3,
      title: "True Shade – Hackathon Project",
      description: "A project designed to assist colour blind individuals by providing real-time image analysis to accurately identify, distinguish, and name colours, enhancing their visual experience and daily life. Organized by Department of Computer Science & Engineering, MBC College of Engineering & Technology (MBCET).",
      icon: Camera,
      technologies: ["Python", "OpenCV", "TensorFlow", "React Native", "Supabase"],
      features: ["Real-Time Colour Identification", "Colour Difference Tool", "Colour Name Pronunciation", "Accessibility Mode"],
      status: "Participant",
      github: "https://github.com/alwinjosegeorge/True_shade",
      demo: "#"
    },
    {
      id: 4,
      title: "LoveCapsule – Time Capsule 💌",
      description: "A secure and interactive web application that allows users to create, preserve, and schedule digital wishes in text, audio, or video format. Users can send messages to themselves or loved ones at a future date, making it a personal time capsule for memories and legacy communication.",
      icon: Brain,
      technologies: ["CSS3", "HTML5", "React", "JavaScript", "Node.js", "MongoDB", "Responsive Design"],
      features: ["Multi-format wishes (text, audio, video)", "Schedule one-time or recurring deliveries", "Secure encrypted storage", "Notifications for delivered wishes", "Legacy mode for trusted contacts", "User-friendly interface"],
      status: "Completed",
      github: "https://github.com/alwinjosegeorge/LoveCapsule",
      demo: "https://lovecapsule.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-offset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions that showcase technical expertise and creative problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] neon-glow ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="grid lg:grid-cols-3 gap-6 p-6">
                  {/* Project Icon & Status */}
                  <div className="flex flex-col items-center justify-center space-y-4 lg:col-span-1">
                    <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                      <project.icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`
                        px-3 py-1 font-semibold
                        ${project.status === 'Award Winner' ? 'border-secondary/50 text-secondary' : ''}
                        ${project.status === 'IPR Registered' ? 'border-accent/50 text-accent' : ''}
                        ${project.status === 'Completed' ? 'border-primary/50 text-primary' : ''}
                      `}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl text-primary group-hover:text-primary-glow transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-secondary">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-secondary">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-primary hover:opacity-90 text-primary-foreground transition-all duration-300"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 neon-glow transition-all duration-300"
              onClick={() => window.open('https://github.com/alwinjosegeorge', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
