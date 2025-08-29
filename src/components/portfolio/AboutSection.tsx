import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { RotatingFrame } from '@/components/3d/RotatingFrame';
import profileImg from '@/assets/profile.jpg';

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gradient-neon mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Profile Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-96 relative"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
              <pointLight position={[-5, -5, 5]} intensity={0.5} color="#b84dff" />
              
              <Suspense fallback={null}>
                <RotatingFrame imageUrl={profileImg} />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card variant="glass" className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">The Journey Begins</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a passionate Computer Science Engineering student with a deep fascination for 
                  Artificial Intelligence and cutting-edge technology. My journey in tech is driven 
                  by curiosity and the desire to create meaningful solutions that impact lives.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card variant="neon" className="p-4">
                  <h4 className="text-lg font-semibold text-secondary mb-2">Current Goals</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Working at TATA or Google</li>
                    <li>• Pursuing MBA abroad</li>
                    <li>• Advanced AI Research</li>
                  </ul>
                </Card>

                <Card variant="floating" className="p-4">
                  <h4 className="text-lg font-semibold text-accent mb-2">Specializations</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Machine Learning & AI</li>
                    <li>• Web Development</li>
                    <li>• Image Processing</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-center text-foreground/80 italic">
                  "Innovation distinguishes between a leader and a follower"
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
