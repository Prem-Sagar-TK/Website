import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Data Science & AI Undergraduate
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Prem Sagar T.K
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium"
        >
          Frontend Developer • UI/UX • Full Stack
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg"
        >
          <p>
            IIIT Dharwad student passionate about building AI systems, engaging frontends, and user-centric designs. Intelligent automation, and product thinking to create real-world impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors w-full sm:w-auto justify-center"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
