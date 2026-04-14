import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Full Stack Finance Manager",
    tech: ["React", "Node.js", "MySQL", "Figma"],
    description: "Designed complete user journey and built analytics dashboards supporting 1000+ records. Implemented full authentication, and optimized SQL queries achieving 40% faster execution times.",
  },
  {
    title: "Mini OSPF Routing Protocol Simulator",
    tech: ["C++", "Graph Algorithms"],
    description: "Simulated dynamic networks with 100+ nodes. Implemented Dijkstra-based routing algorithms and built a visual system for clear representation of changing network states.",
  },
  {
    title: "LZW Compression Tool",
    tech: ["Java", "CLI"],
    description: "Built a robust Command Line Interface tool achieving up to 53% data compression. Focused on core algorithm efficiency, improving overall performance by 35%.",
  }
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">Featured Projects</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between p-8 rounded-3xl card-premium"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="space-y-6 relative z-10">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground/90 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-border/50 relative z-10">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
