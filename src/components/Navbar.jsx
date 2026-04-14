import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-sm' : 'bg-transparent py-2'
        }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-1 group">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-primary-foreground text-sm font-black">P</span>
          </div>
          Prem Sagar
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center bg-secondary/30 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/5 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground rounded-full hover:bg-secondary/80 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/10 absolute w-full pb-6 pt-2 px-6 flex flex-col gap-5 shadow-2xl"
        >
          {navItems.map((item, i) => (
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item.name}
              href={item.href}
              className="text-lg font-semibold text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
