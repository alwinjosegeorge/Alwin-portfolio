import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Python", level: 88, category: "Programming" },
    { name: "C/C++", level: 85, category: "Programming" },
    { name: "JavaScript", level: 60, category: "Programming" },
    { name: "React", level: 68, category: "Programming" },
    { name: "Node.js", level: 60, category: "Programming" },
    { name: "Machine Learning", level: 50, category: "AI/ML" },
    { name: "Computer Vision", level: 70, category: "AI/ML" },
    { name: "Image Processing", level: 90, category: "AI/ML" },
    { name: "SQL", level: 70, category: "Database" },
    { name: "Git", level: 85, category: "Tools" }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Leadership", 
    "Creative Thinking",
    "Project Management",
    "Communication",
    "Adaptability"
  ];

  const categories = ["Programming", "AI/ML", "Database", "Tools"];

  return (
    <section id="skills" className="py-20 scroll-offset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Technical Skills */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 border-primary/20 neon-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Technical Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {categories.map((category) => (
                    <div key={category} className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-primary"></div>
                        {category}
                      </h4>
                      <div className="space-y-3">
                        {technicalSkills
                          .filter(skill => skill.category === category)
                          .map((skill) => (
                            <div key={skill.name} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              </div>
                              <Progress 
                                value={skill.level} 
                                className="h-2 bg-muted/20"
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Soft Skills & Certifications */}
            <div className="space-y-8">
              {/* Soft Skills */}
              <Card className="bg-card/50 border-secondary/20 green-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="border-secondary/50 text-secondary hover:bg-secondary/10 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card className="bg-card/50 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Key Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Hackathon Participant</p>
                        <p className="text-sm text-muted-foreground">Eco Travel Mate</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Hackathon Participant</p>
                        <p className="text-sm text-muted-foreground">HashItUp – True Shade</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Workshop Participant</p>
                        <p className="text-sm text-muted-foreground">3D Gaming at NIT Calicut</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning Goals */}
              <Card className="bg-gradient-primary/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Currently Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Deep Learning</span>
                      <div className="w-16 h-2 bg-muted/20 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-primary animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Cloud Computing</span>
                      <div className="w-16 h-2 bg-muted/20 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-gradient-secondary animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
