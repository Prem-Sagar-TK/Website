import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-4xl text-center space-y-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-md text-sm font-medium hover:border-primary/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            Data Science & AI Undergraduate
          </div>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient pb-2"
        >
          Prem Sagar T.K
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl text-muted-foreground font-medium tracking-tight"
        >
          Frontend Developer <span className="text-primary/50 mx-2">•</span> UI/UX <span className="text-primary/50 mx-2">•</span> Full Stack
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto text-muted-foreground/80 text-lg md:text-xl leading-relaxed"
        >
          <p>
            IIIT Dharwad student passionate about building AI systems, engaging frontends, and user-centric designs. Intelligent automation, and product thinking to create real-world impact.
          </p>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto justify-center"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border text-foreground px-8 py-3.5 rounded-full font-medium hover:bg-secondary hover:scale-105 transition-all w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
