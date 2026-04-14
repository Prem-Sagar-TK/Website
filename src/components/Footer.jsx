import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 px-6 text-center border-t border-border">
      <div className="container mx-auto">
        <p className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} Prem Sagar T.K. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
