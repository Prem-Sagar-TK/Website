import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h2>
            <p className="text-xl text-muted-foreground pt-4 max-w-2xl mx-auto">
              I'm always open to discussing product design work, software engineering roles, or AI system architecture. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a href="mailto:premsagartk@gmail.com" 
               className="flex items-center gap-3 px-6 py-4 bg-card hover:bg-muted border border-border rounded-xl transition-all hover:-translate-y-1 w-full sm:w-auto shadow-sm">
              <Mail className="text-primary" size={24} />
              <span className="font-medium text-lg text-foreground">Email Me</span>
            </a>
            
            <a href="https://www.linkedin.com/in/prem-sagar-t-k/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-6 py-4 bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 border border-[#0a66c2]/20 rounded-xl transition-all hover:-translate-y-1 w-full sm:w-auto shadow-sm">
              <LinkedinIcon />
              <span className="font-medium text-lg text-[#0a66c2]">LinkedIn</span>
            </a>
            
            <a href="https://github.com/Prem-Sagar-TK" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-6 py-4 bg-foreground/5 hover:bg-foreground/10 border border-border rounded-xl transition-all hover:-translate-y-1 w-full sm:w-auto shadow-sm text-foreground">
              <GithubIcon />
              <span className="font-medium text-lg">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
