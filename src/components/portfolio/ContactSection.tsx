import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alwinjosegeorge2028@cs.sjcetpalai.ac.in",
      href: "mailto:alwinjosegeorge2028@cs.sjcetpalai.ac.in",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "alwinjosegeorge",
      href: "https://github.com/alwinjosegeorge",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "alwin-jose-george-5b204032b",
      href: "https://www.linkedin.com/in/alwin-jose-george-5b204032b",
      color: "text-primary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "alwin_jose_george",
      href: "https://www.instagram.com/alwin_jose_george/",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 scroll-offset">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and explore opportunities to collaborate on innovative projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/50 border-primary/20 neon-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
                  <CardDescription>
                    Ready to discuss your next project or opportunity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/10 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow">
                        <contact.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{contact.label}</p>
                        <p className={`text-sm ${contact.color} group-hover:underline`}>
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="bg-card/50 border-secondary/20 green-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-semibold text-sm">Location</p>
                      <p className="text-sm text-muted-foreground">Kottayam, Kerala</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-semibold text-sm">Availability</p>
                      <p className="text-sm text-muted-foreground">Open to opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-primary/10 border-primary/30">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2 text-primary">Let's Build Something Amazing</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm always interested in discussing new projects and opportunities
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:border-primary hover:bg-primary/10 w-full neon-glow"
                    onClick={() => window.open('mailto:alwin-alwinjosegeorge2028@cs.sjcetpalai.ac.in', '_blank')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Quick Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 border-primary/20 neon-glow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your full name" 
                                  {...field}
                                  className="border-muted/50 focus:border-primary transition-colors duration-300"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="your.email@example.com" 
                                  {...field}
                                  className="border-muted/50 focus:border-primary transition-colors duration-300"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="What's this about?" 
                                {...field}
                                className="border-muted/50 focus:border-primary transition-colors duration-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell me about your project or opportunity..."
                                className="min-h-[120px] border-muted/50 focus:border-primary transition-colors duration-300"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold neon-glow transition-all duration-300 hover:scale-[1.02]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Alwin Jose George. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
