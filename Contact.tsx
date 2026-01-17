import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-brand-black/90 backdrop-blur-lg rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Let's Work <br /><span className="text-brand-accent">Together</span>
              </h2>
              <p className="text-gray-400 mb-10 max-w-md">
                Have a project in mind or need a security audit? Fill out the form or send me a direct email.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                    <div className="text-lg font-medium break-all">johnsonjoby761@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                    <div className="text-lg font-medium">Bangalore</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Phone</div>
                    <div className="text-lg font-medium">7025852843</div>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 font-mono ml-2">NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-brand-gray/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Johnson"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400 font-mono ml-2">EMAIL</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-brand-gray/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="hello@johnson.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400 font-mono ml-2">SUBJECT</label>
                <select 
                  id="subject" 
                  className="w-full bg-brand-gray/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none"
                >
                  <option>Project Inquiry</option>
                  <option>Security Audit</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400 font-mono ml-2">MESSAGE</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-brand-gray/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-accent text-brand-black font-bold text-lg py-4 rounded-xl hover:bg-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
