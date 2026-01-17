import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const Work: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Login Page',
      category: 'Frontend / Auth',
      image: 'https://picsum.photos/seed/login_secure/800/600',
      description: 'A responsive and secure login interface featuring form validation and modern UI design principles.',
      link: 'https://johnsonjoby21.github.io/johnsonjoby/',
    },
    {
      id: 2,
      title: 'Personal Portfolio',
      category: 'Web Dev / UI',
      image: 'https://picsum.photos/seed/portfolio_web/800/600',
      description: 'A personal portfolio website showcasing my skills, projects, and professional background.',
      link: 'https://johnsonjoby21.github.io/portfolio/',
    },
  ];

  return (
    <section id="work" className="py-24 bg-brand-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            My <span className="text-brand-accent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A showcase of my recent work, highlighting secure coding practices and responsive web design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a 
              href={project.link} 
              key={project.id} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-3xl overflow-hidden bg-brand-gray/60 border border-white/5 hover:border-brand-accent/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-20 bg-brand-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-xs font-mono text-brand-accent uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display font-bold text-2xl group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-white/5 p-2 rounded-full text-white group-hover:bg-brand-accent group-hover:text-brand-black transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:underline underline-offset-4">
            View Github Repository <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
