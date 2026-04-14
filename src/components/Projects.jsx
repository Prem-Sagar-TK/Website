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
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-secondary rounded-lg text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    {/* Placeholder for project links */}
                    {/* <div className="flex gap-3 text-muted-foreground">
                      <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
                      <a href="#" className="hover:text-primary transition-colors"><ExternalLink size={20} /></a>
                    </div> */}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-border/50">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md">
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
