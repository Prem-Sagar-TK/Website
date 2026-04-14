import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Frontend Developer & Researcher",
    company: "Jnana Setu",
    period: "Jul 2025 – Present",
    description: [
      "Built responsive UI components and designed user flows/wireframes using Figma.",
      "Conducted detailed product and user research to inform design decisions.",
      "Improved page load speed by 30% through targeted frontend optimizations.",
      "Integrated REST APIs for real-time systems and data synchronization."
    ]
  },
  {
    role: "Frontend Developer",
    company: "MLEra",
    period: "Aug 2025 – Oct 2025",
    description: [
      "Built React-based interfaces tailored for complex data representation.",
      "Designed and implemented ML dashboards for visualizing model metrics.",
      "Reduced frontend latency by 25% through efficient state management.",
      "Ensured robust API integration for real-time data processing."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="relative border-l border-border/60 ml-4 md:ml-0 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                <div className="absolute -left-[21px] top-1 bg-background border border-primary p-2 rounded-full text-primary">
                  <Briefcase size={20} />
                </div>
                
                <div className="space-y-3 p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
