import React from 'react';
import { ArrowDownRight, Globe, Shield, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const photoUrl = "https://photos.fife.usercontent.google.com/pw/AP1GczNdyGrAlVB2LHaM0PZ3yrB9R49SLj_0ghKyJt9myBe-rFiqSViI7vS1=w499-h595-s-no-gm?authuser=0";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-transparent bg-[size:40px_40px] bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="text-xs font-mono text-brand-accent tracking-wider uppercase">HIRE ME</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
              WEB DESIGNER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">WITH HTML, CSS,</span> <br />
              <span className="text-brand-accent">PHP, JAVA SCRIPT</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              I'm Johnson, a Cyber Security Specialist & Frontend Engineer based in Bangalore. I build robust, secure, and high-performance digital experiences for forward-thinking companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#work" className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors duration-300">
                View Projects
                <ArrowDownRight size={20} />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-colors duration-300">
                Contact Me
              </a>
            </div>
          </div>

          {/* Abstract Visual / Stats */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-brand-gray/40 backdrop-blur-md p-6 flex flex-col justify-between group">
              
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={photoUrl} 
                  alt="Johnson" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gray/80 via-transparent to-brand-black/90"></div>
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <Globe className="text-brand-accent" size={32} />
                <div className="text-right">
                  <div className="text-4xl font-display font-bold text-white drop-shadow-md">98%</div>
                  <div className="text-xs text-gray-300 uppercase tracking-widest mt-1 font-semibold">Breach Prevention</div>
                </div>
              </div>

              <div className="relative z-10 space-y-4 my-8">
                <div className="bg-brand-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:bg-brand-black/80 transition-colors">
                  <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Network Security</h4>
                    <p className="text-xs text-gray-400">Advanced protocols</p>
                  </div>
                </div>
                <div className="bg-brand-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:bg-brand-black/80 transition-colors">
                  <div className="bg-brand-accent/20 p-2 rounded-lg text-brand-accent">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Penetration Testing</h4>
                    <p className="text-xs text-gray-400">Vulnerability assessment</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-700 overflow-hidden border border-white/20">
                    <img src={photoUrl} alt="Johnson" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Johnson</div>
                    <div className="text-xs text-gray-300">Security Analyst</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="absolute bottom-0 w-full bg-brand-accent text-brand-black py-3 overflow-hidden whitespace-nowrap border-y border-brand-accent">
        <div className="inline-flex animate-[marquee_20s_linear_infinite]">
           {Array(10).fill("CYBER SECURITY • FRONTEND DEV • AUDITING • UI/UX DESIGN • ").map((text, i) => (
             <span key={i} className="mx-4 font-mono font-bold text-sm tracking-widest">{text}</span>
           ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
