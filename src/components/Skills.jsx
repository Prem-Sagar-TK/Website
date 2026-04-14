import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "Java", "JavaScript"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MySQL"]
  },
  {
    title: "AI & ML",
    skills: ["Machine Learning", "AI Agents"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Figma", "GitHub", "Docker", "REST APIs"]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-primary/5 [clip-path:polygon(0_0,100%_10vw,100%_100%,0_100%)]" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="space-y-16"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">Technical Arsenal</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl card-premium group"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary/80 backdrop-blur-sm border border-white/5 text-foreground text-sm font-semibold rounded-xl shadow-sm hover:scale-105 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300"
                    >
                      {skill}
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
