import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-black/80 backdrop-blur-md relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-brand-gray/20 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
            About <span className="text-brand-accent">Me</span>
          </h2>
          <div className="prose prose-invert text-gray-400 text-lg leading-relaxed">
            <p className="mb-6">
              I am a motivated Cyber Security student and Web Developer who enjoys combining secure coding practices with modern web development.
            </p>
            <p>
              I focus on identifying vulnerabilities, improving application security, and building responsive websites with a strong emphasis on data protection and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
