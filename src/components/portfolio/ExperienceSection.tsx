import { Calendar, MapPin, Award, Users, Code, Shield, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      type: "Workshop",
      title: "3D Gaming Development Workshop",
      organization: "Tathva24",
      duration: "3 Days Intensive",
      location: "NIT Calicut, Kerala",
      description: "Participated in an intensive workshop focused on 3D game development, learning advanced graphics programming, game engine architecture, and interactive design principles.",
      skills: ["Unity 3D", "C# Programming", "Game Physics", "3D Modeling", "Interactive Design"],
      icon: Code,
      color: "primary",
      certificate: "https://media.licdn.com/dms/image/v2/D4E22AQFFfd7wU0SemQ/feedshare-shrink_800/B4EZcxIIjwHkAg-/0/1748875915051?e=1761782400&v=beta&t=ThfEzojZSUA5-1e1bUDBGWu-jNrMoLhLREKZYLLML9c"
    },
    {
      id: 2,
      type: "Workshop",
      title: "Cybersecurity Workshop",
      organization: "Tesseract 8.0",
      duration: "2 Days",
      location: "SJCET Palai",
      description: "Comprehensive cybersecurity training covering ethical hacking, network security, vulnerability assessment, and digital forensics techniques.",
      skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "Digital Forensics", "Security Analysis"],
      icon: Shield,
      color: "primary",
      certificate: "https://media.licdn.com/dms/image/v2/D4E22AQFcA2H0SqbasA/feedshare-shrink_800/B4EZcx1GNQG4Ak-/0/1748887698630?e=1761782400&v=beta&t=RulWtPn0UyCg32ThGlzndaQ9l8xQI9a4wEOnrzC6fr0"
    },
    {
      id: 3,
      type: "Hackathon",
      title: "Eco Travel Mate",
      organization: "Regional Hackathon",
      location: "Participant",
      description: "Participated in a hackathon to develop an AI-powered sustainable travel platform. Collaborated with team members, managed project timeline, and presented to judges.",
      skills: ["Team Collaboration", "Project Management", "AI/ML", "Full-Stack Development", "Presentation"],
      icon: Award,
      color: "accent"
    },
    {
      id: 4,
      type: "Internship",
      title: "AI & Data Science Internship",
      organization: "SRAI Smart Solutions Pvt Ltd & STEM Robotics Internationals",
      duration: "5 Days",
      location: "Kochi",
      description: "Hands-on AI project experience covering artificial intelligence, data science, and Python programming. Participated in workshops, quizzes, and contributed to real-world AI/data science project tasks.",
      skills: ["Artificial Intelligence", "Data Science", "Python Programming", "Problem Solving", "Teamwork"],
      icon: Code,
      color: "accent",
      certificates: [
        "https://media.licdn.com/dms/image/v2/D4E22AQHKmRKGnyyAcg/feedshare-shrink_800/B4EZgn9lm6HgAk-/0/1753017116788?e=1761782400&v=beta&t=bWfEQPxUC5el-eIcAPVcoFEa3AKamWU21hbyY_ChowE",
        "https://media.licdn.com/dms/image/v2/D4E22AQFX1wabVmLXDA/feedshare-shrink_800/B4EZgn.faoGYAg-/0/1753017356859?e=1761782400&v=beta&t=9N6vp4t-nQ3bJNyyO2gTxsSSfYC_Rv6yfoEMJtayCm0",
        "https://media.licdn.com/dms/image/v2/D4E22AQHVLc9KfIHVxw/feedshare-shrink_2048_1536/B4EZgn_AkVGcAs-/0/1753017495545?e=1761782400&v=beta&t=9a0O1wpADIa-G_G90SF59J62BqnnKMRGM503qjCzP0E"
      ]
    },
    {
      id: 5,
      type: "Hackathon",
      title: "HashItUp – True Shade",
      organization: "MBC College of Engineering & Technology (MBCET)",
      duration: "24 Hours",
      location: "Kuttikkanam",
      description: "Developed a project to assist colour blind individuals by providing real-time image analysis to accurately identify, distinguish, and name colours. Department of Computer Science & Engineering hackathon.",
      skills: ["Python", "OpenCV", "TensorFlow", "React Native", "Accessibility Design"],
      icon: Award,
      color: "primary",
      certificate: "https://github.com/alwinjosegeorge/alwinjosegeorge/blob/main/certificate/hashitup%20certificates.jpg"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Participant",
      description: "Participated in multiple hackathons including Eco Travel Mate and HashItUp – True Shade",
      icon: Award,
      color: "text-secondary"
    },
    {
      title: "Workshop Participation",
      description: "Attended 3D Gaming Development workshop at NIT Calicut and Cybersecurity workshop",
      icon: Shield,
      color: "text-primary"
    },
    {
      title: "Technical Leadership",
      description: "Led project teams and collaborated on technical initiatives",
      icon: Users,
      color: "text-accent"
    }
  ];

  return (
    <section id="experience" className="py-20 scroll-offset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous learning through workshops, competitions, and hands-on projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Experience Timeline */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card 
                    key={exp.id} 
                    className={`
                      group bg-card/50 transition-all duration-500 hover:scale-[1.02]
                      ${exp.color === 'primary' ? 'border-primary/20 hover:border-primary/40 neon-glow' : ''}
                      ${exp.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/40 green-glow' : ''}
                      ${exp.color === 'accent' ? 'border-accent/20 hover:border-accent/40' : ''}
                    `}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          ${exp.color === 'primary' ? 'bg-gradient-primary' : ''}
                          ${exp.color === 'secondary' ? 'bg-gradient-secondary' : ''}
                          ${exp.color === 'accent' ? 'bg-accent/20' : ''}
                        `}>
                          <exp.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="outline" className={`
                              ${exp.color === 'primary' ? 'border-primary/50 text-primary' : ''}
                              ${exp.color === 'secondary' ? 'border-secondary/50 text-secondary' : ''}
                              ${exp.color === 'accent' ? 'border-accent/50 text-accent' : ''}
                            `}>
                              {exp.type}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                          <CardTitle className={`
                            text-xl mb-1 group-hover:text-opacity-90 transition-colors duration-300
                            ${exp.color === 'primary' ? 'text-primary' : ''}
                            ${exp.color === 'secondary' ? 'text-secondary' : ''}
                            ${exp.color === 'accent' ? 'text-accent' : ''}
                          `}>
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground font-medium">
                            {exp.organization}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Skills Developed</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {/* Certificate Links */}
                      {(exp.certificate || exp.certificates) && (
                        <div className="pt-2">
                          <h4 className="font-semibold mb-2 text-sm text-secondary">Certificate{exp.certificates ? 's' : ''}</h4>
                          {exp.certificate && (
                            <a 
                              href={exp.certificate} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View Certificate
                            </a>
                          )}
                          {exp.certificates && (
                            <div className="flex flex-wrap gap-3">
                              {exp.certificates.map((cert, idx) => (
                                <a 
                                  key={idx}
                                  href={cert} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors duration-300"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Certificate {idx + 1}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements Sidebar */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-primary/20 neon-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Key Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center flex-shrink-0">
                        <achievement.icon className={`w-4 h-4 ${achievement.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Leadership Roles */}
              <Card className="bg-card/50 border-secondary/20 green-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div>
                        <p className="font-medium text-sm">Project Team Leader</p>
                        <p className="text-xs text-muted-foreground">Led development teams in multiple projects</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div>
                        <p className="font-medium text-sm">Technical Mentor</p>
                        <p className="text-xs text-muted-foreground">Guided junior developers and peers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <div>
                        <p className="font-medium text-sm">Workshop Organizer</p>
                        <p className="text-xs text-muted-foreground">Organized technical learning sessions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Future Goals */}
              <Card className="bg-gradient-primary/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Future Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm">Join leading MNCs like TATA or Google</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm">Pursue MBA for business acumen</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm">Continue contributing to open source</p>
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

export default ExperienceSection;
