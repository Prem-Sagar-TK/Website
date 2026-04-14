import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Trophy } from 'lucide-react';

const roles = [
  "Cultural Secretary – IIIT Dharwad",
  "Public Relations Head",
  "President – Iridescence Media Team",
  "Vice President – DSAI Society",
  "Program Director – Hack2Future",
  "Program & Agenda Coordinator – HR Conclave",
  "Documentation Coordinator – Career Guidance Cell",
  "Sponsorship & Event Leadership roles (Sangeeth, Hack2Future, HR Conclave)"
];

const highlights = [
  { icon: <Trophy size={20} />, text: "Represented IIIT Dharwad – Inter-IIIT Basketball 2025" },
  { icon: <Users size={20} />, text: "Organized large-scale events with 1500+ participants" },
  { icon: <Award size={20} />, text: "Delivered 200+ media/event coverages successfully" }
];

export function Leadership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="space-y-16"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">Leadership & Impact</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto"></div>
            <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto pt-4 leading-relaxed">
              Demonstrated record in team leadership, executing complex events, coordinating with stakeholders, and crafting communication strategies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                   <Users size={24} />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Core Roles</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {roles.map((role, idx) => (
                  <li key={idx} className="group p-5 rounded-2xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-all duration-300 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                    <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                   <Award size={24} />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Key Achievements</h3>
              </div>
              <div className="space-y-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 p-6 rounded-3xl card-premium group cursor-default">
                    <div className="h-full absolute left-0 top-0 w-1 bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
