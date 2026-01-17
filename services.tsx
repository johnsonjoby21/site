import React from 'react';
import { Shield, Code, Server, Globe } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 2,
      title: 'Network Security',
      description: 'Implementing robust firewalls, VPNs, and intrusion detection systems to safeguard data flow.',
      icon: Server,
    },
    {
      id: 4,
      title: 'Secure Development',
      description: 'Building applications with security-first architecture, ensuring code integrity from day one.',
      icon: Shield,
    },
    {
      id: 7,
      title: 'Web Development',
      description: 'Creating responsive, high-performance websites using modern frameworks and best practices.',
      icon: Code,
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-black/80 backdrop-blur-md relative">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-brand-gray"></div>
       
       <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              My <span className="text-brand-accent">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Comprehensive solutions combining security and modern web technologies.
            </p>
          </div>
          <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-brand-black transition-colors text-sm font-mono uppercase tracking-wider">
            View All Expertise
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-2xl bg-brand-gray/30 border border-white/5 hover:border-brand-accent/50 hover:bg-brand-gray/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={100} />
              </div>
              
              <div className="w-12 h-12 bg-brand-black border border-white/10 rounded-xl flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} />
              </div>
              
              <h3 className="font-display font-bold text-xl mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-white transition-colors">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                AVAILABLE NOW
              </div>
            </div>
          ))}
        </div>
       </div>
    </section>
  );
};

export default Services;
