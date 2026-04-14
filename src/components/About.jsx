import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                I am currently pursuing a B.Tech in Data Science and Artificial Intelligence with a Minor in Entrepreneurship at IIIT Dharwad (2023–2027).
              </p>
              <p>
                My core strengths lie in programming, analytical problem-solving, and building real-world systems. I strongly believe in a user-centered design thinking approach, seamlessly bridging the gap between complex backend logic and intuitive frontend experiences.
              </p>
              <p>
                Beyond technical execution, I have a strong background in team leadership and structured event execution, ensuring smooth coordination across diverse stakeholders.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Full-stack Development'].map((interest) => (
                    <span key={interest} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Education</h3>
                <div className="p-5 border border-border rounded-xl bg-card">
                  <div className="font-semibold text-foreground text-lg">Indian Institute of Information Technology, Dharwad</div>
                  <div className="text-primary font-medium mt-1">B.Tech in Data Science & Artificial Intelligence</div>
                  <div className="text-muted-foreground text-sm mt-1">Minor in Entrepreneurship • 2023 – 2027</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
