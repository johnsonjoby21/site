import React from 'react';
import { ShieldCheck, Twitter, Linkedin, Github, Dribbble } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black/90 backdrop-blur-md border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-brand-accent p-1.5 rounded-full text-brand-black">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                JOHNSON<span className="text-brand-accent">.</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Securing the digital world, one line of code at a time.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
              <Dribbble size={20} />
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 text-sm text-gray-600 font-mono">
          <p>© 2024 Johnson Security. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
