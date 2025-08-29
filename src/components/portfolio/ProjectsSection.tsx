import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import galleryImg from '@/assets/project-gallery.jpg';
import ecoImg from '@/assets/project-eco.jpg';
import attendanceImg from '@/assets/project-attendance.jpg';

const projects = [
  {
    id: 1,
    title: "Modern Photo Gallery Website",
    description: "A responsive photo gallery with advanced filtering, lightbox functionality, and smooth animations. Built with React and modern web technologies.",
    image: galleryImg,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    links: {
      live: "#",
      github: "#",
    }
  },
  {
    id: 2,
    title: "Eco Travel Mate",
    description: "Hackathon-winning sustainable travel companion app that helps users find eco-friendly transportation and accommodations with carbon footprint tracking.",
    image: ecoImg,
    technologies: ["React Native", "Node.js", "MongoDB", "AI/ML"],
    category: "Mobile App",
    links: {
      live: "#",
      github: "#",
    }
  },
  {
    id: 3,
    title: "Smart Attendance System",
    description: "AI-powered attendance system using facial recognition and IPR technology. Features real-time tracking, analytics dashboard, and automated reporting.",
    image: attendanceImg,
    technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "React"],
    category: "AI/ML",
    links: {
      live: "#",
      github: "#",
    }
  }
];

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gradient-neon mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group perspective-1000"
            >
              <Card 
                variant="glass" 
                className={`h-full transform transition-all duration-500 hover:scale-105 ${
                  hoveredProject === project.id ? 'glow-soft' : ''
                }`}
                style={{
                  transform: hoveredProject === project.id 
                    ? 'rotateY(5deg) rotateX(5deg) translateZ(20px)' 
                    : 'rotateY(0deg) rotateX(0deg) translateZ(0px)'
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass border border-primary/30 text-sm font-medium">
                    {project.category}
                  </div>
                  
                  {/* Floating Action Buttons */}
                  <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                    <Button variant="glass" size="icon" className="w-8 h-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="glass" size="icon" className="w-8 h-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="glass" size="icon" className="w-8 h-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-muted/50 border border-primary/20 text-primary hover:border-primary/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button variant="default" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button variant="neon" size="lg" className="floating">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
