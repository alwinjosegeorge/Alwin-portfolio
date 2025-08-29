import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code, Rocket } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/alwin-jose-george', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/alwin-jose-george', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alwin.jose.george@example.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-primary/20 glass">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold text-gradient-neon">
              Alwin Jose George
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Computer Science Engineer passionate about AI, innovation, and creating 
              solutions that make a difference in the world.
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary">
              <Code className="w-4 h-4" />
              <span>Built with React & Three.js</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-secondary">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Events', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-accent">Let's Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass border border-primary/30 flex items-center justify-center text-primary hover:text-secondary transition-colors hover:glow-soft"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-foreground/70">
              <Rocket className="w-4 h-4 text-accent" />
              <span>Always ready for new opportunities</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-foreground/70">
            <span>© {currentYear} Alwin Jose George. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-sm text-primary cursor-pointer"
          >
            Scroll to top ↑
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
