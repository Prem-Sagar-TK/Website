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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="space-y-16"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">Experience</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto md:mx-0"></div>
          </motion.div>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 space-y-16">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[23px] top-2 bg-background border-4 border-primary/20 bg-primary/10 p-2 rounded-full text-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                  <Briefcase size={20} />
                </div>
                
                <div className="space-y-4 p-8 rounded-3xl card-premium group hover:-translate-y-1 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                      <p className="text-xl text-muted-foreground font-medium mt-1">{exp.company}</p>
                    </div>
                    <span className="text-sm font-bold tracking-wide text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 text-muted-foreground/90 mt-6 leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-primary mt-1.5 flex-shrink-0 opacity-80">▹</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
