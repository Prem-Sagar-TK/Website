import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full w-[80%] h-[80%] top-[10%] left-[10%] -z-10 pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">About Me</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground/90 text-lg leading-relaxed">
              <p>
                I am currently pursuing a B.Tech in Data Science and Artificial Intelligence with a Minor in Entrepreneurship at IIIT Dharwad (2023–2027).
              </p>
              <p>
                My core strengths lie in programming, analytical problem-solving, and building real-world systems. I strongly believe in a user-centered design thinking approach, seamlessly bridging the gap between complex backend logic and intuitive frontend experiences.
              </p>
              <p>
                Beyond technical execution, I have a strong background in team leadership and structured event execution, ensuring smooth coordination across diverse stakeholders.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {['Machine Learning', 'Full-stack Development'].map((interest) => (
                    <span key={interest} className="px-5 py-2.5 bg-secondary/80 backdrop-blur-md text-foreground rounded-full text-sm font-semibold border border-white/5 shadow-sm hover:scale-105 hover:border-primary/50 transition-all cursor-default">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Education</h3>
                <div className="p-8 border border-white/10 rounded-3xl card-premium group flex gap-4">
                  <div className="w-1.5 rounded-full bg-gradient-to-b from-primary to-transparent" />
                  <div>
                    <div className="font-bold text-foreground text-xl group-hover:text-primary transition-colors">Indian Institute of Information Technology, Dharwad</div>
                    <div className="text-muted-foreground font-medium mt-2 text-lg">B.Tech in Data Science & AI</div>
                    <div className="text-primary/80 font-semibold text-sm mt-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Minor in Entrepreneurship • 2023 – 2027
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
