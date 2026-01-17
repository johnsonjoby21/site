import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Expertise', href: '#services' },
    { label: 'Projects', href: '#work' },
    { label: 'About', href: '#about' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-dark/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-brand-accent p-1.5 rounded-full text-brand-black transition-transform group-hover:rotate-12">
              <ShieldCheck size={20} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              JOHNSON<span className="text-brand-accent">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  activeSection === item.href.substring(1) ? 'text-brand-accent' : 'text-gray-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-white/5 hover:bg-brand-accent hover:text-brand-black border border-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-white p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-brand-gray border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden animate-in slide-in-from-top-4 fade-in duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-brand-accent py-2 border-b border-white/5 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-brand-accent text-brand-black text-center py-3 rounded-xl font-bold"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
