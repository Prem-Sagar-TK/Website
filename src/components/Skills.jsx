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
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
