import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FloatingOrb } from '@/components/3d/FloatingOrb';

const skills = [
  { name: 'Python', color: '#3776ab', position: [-3, 2, 0] as [number, number, number] },
  { name: 'C/C++', color: '#00599c', position: [3, 2, 0] as [number, number, number] },
  { name: 'Web Dev', color: '#e34f26', position: [-3, -1, 0] as [number, number, number] },
  { name: 'AI/ML', color: '#ff6b6b', position: [3, -1, 0] as [number, number, number] },
  { name: 'React', color: '#61dafb', position: [0, 0.5, 0] as [number, number, number] },
];

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

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
          <h2 className="text-5xl font-bold text-gradient-neon mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[600px] relative"
        >
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
            <pointLight position={[-10, -10, 10]} intensity={0.5} color="#b84dff" />
            
            <Suspense fallback={null}>
              {skills.map((skill, index) => (
                <FloatingOrb
                  key={skill.name}
                  position={skill.position}
                  color={skill.color}
                  label={skill.name}
                  size={0.6}
                />
              ))}
            </Suspense>
          </Canvas>
          
          {/* Interactive Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <p className="text-sm text-muted-foreground text-center">
              Drag to rotate • Scroll to zoom
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          <div className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
            <h3 className="text-xl font-semibold text-primary mb-4">Programming</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Python</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-gradient-to-r from-primary to-secondary" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>C/C++</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-primary to-secondary" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>JavaScript</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-gradient-to-r from-primary to-secondary" />
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all">
            <h3 className="text-xl font-semibold text-secondary mb-4">Web Technologies</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>React.js</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-gradient-to-r from-secondary to-accent" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>HTML/CSS</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-secondary to-accent" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Node.js</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-3/5 h-full bg-gradient-to-r from-secondary to-accent" />
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-all">
            <h3 className="text-xl font-semibold text-accent mb-4">AI & Data</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Machine Learning</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-accent to-primary" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Image Processing</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-gradient-to-r from-accent to-primary" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Data Analysis</span>
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-accent to-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
