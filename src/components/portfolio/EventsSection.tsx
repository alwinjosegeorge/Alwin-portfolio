import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Trophy, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "3D Gaming Development Workshop",
    venue: "NIT Calicut",
    year: "2024",
    icon: "🎮",
    description: "Intensive workshop on 3D game development using Unity and Unreal Engine. Learned advanced graphics programming and game physics.",
    highlights: ["Unity 3D Development", "Game Physics", "3D Modeling", "Real-time Rendering"],
    color: "from-primary to-secondary"
  },
  {
    id: 2,
    title: "Cybersecurity Workshop - Tesseract 8.0",
    venue: "SJCET Palai",
    year: "2024",
    icon: "🔒",
    description: "Comprehensive cybersecurity training covering ethical hacking, penetration testing, and network security protocols.",
    highlights: ["Ethical Hacking", "Network Security", "Penetration Testing", "Security Protocols"],
    color: "from-secondary to-accent"
  },
  {
    id: 3,
    title: "Hackathon - Eco Travel Mate",
    venue: "Tech Summit",
    year: "2024",
    icon: "🌱",
    description: "Developed sustainable travel application that won first place. Focused on eco-friendly transportation and carbon footprint reduction.",
    highlights: ["1st Place Winner", "Sustainable Tech", "Mobile Development", "Environmental Impact"],
    color: "from-accent to-primary"
  },
  {
    id: 4,
    title: "AI/ML Workshop Series",
    venue: "University Tech Fest",
    year: "2024",
    icon: "🤖",
    description: "Series of workshops on machine learning algorithms, neural networks, and practical AI applications in industry.",
    highlights: ["Machine Learning", "Neural Networks", "Data Science", "AI Applications"],
    color: "from-primary to-accent"
  }
];

export function EventsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

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
          <h2 className="text-5xl font-bold text-gradient-neon mb-4">Events & Workshops</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through workshops, hackathons, and technical events
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full glow-soft" />
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card variant="glass" className="hover-lift group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        {/* Event Icon */}
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {event.icon}
                        </div>
                        
                        <div className="flex-1">
                          {/* Year Badge */}
                          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-sm font-medium mb-3">
                            {event.year}
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                            {event.title}
                          </h3>
                          
                          {/* Venue */}
                          <div className="flex items-center text-sm text-muted-foreground mb-4">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.venue}
                          </div>
                          
                          {/* Description */}
                          <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            {event.description}
                          </p>
                          
                          {/* Highlights */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-secondary">Key Highlights:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {event.highlights.map((highlight) => (
                                <div key={highlight} className="flex items-center text-xs">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mr-2" />
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary glow-soft border-4 border-background" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground" />
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          <Card variant="glass" className="text-center p-6 hover-lift">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Workshops Attended</div>
          </Card>
          
          <Card variant="glass" className="text-center p-6 hover-lift">
            <Trophy className="w-8 h-8 text-secondary mx-auto mb-3" />
            <div className="text-2xl font-bold text-secondary">3</div>
            <div className="text-sm text-muted-foreground">Awards Won</div>
          </Card>
          
          <Card variant="glass" className="text-center p-6 hover-lift">
            <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-accent">2024</div>
            <div className="text-sm text-muted-foreground">Active Year</div>
          </Card>
          
          <Card variant="glass" className="text-center p-6 hover-lift">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Venues Visited</div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
