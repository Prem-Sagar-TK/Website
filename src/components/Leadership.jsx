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
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Leadership & Achievements</h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl pt-2">
              Demonstrated record in team leadership, executing complex events, coordinating with stakeholders, and crafting communication strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Users className="text-primary" /> Core Leadership Roles
              </h3>
              <ul className="space-y-3">
                {roles.map((role, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground bg-card border border-border p-3 rounded-lg hover:border-primary/50 transition-colors">
                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                    <span className="font-medium text-sm md:text-base">{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Award className="text-primary" /> Key Achievements
              </h3>
              <div className="space-y-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <div className="p-3 bg-secondary rounded-lg text-primary relative z-10">
                      {item.icon}
                    </div>
                    <div className="font-medium text-foreground relative z-10 text-lg">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
