import React from 'react';
import SectionHeading from './SectionHeading';
import { Factory, Leaf, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="About JRS Recycling Solutions" 
              subtitle="Pioneering responsible e-waste management in India since our inception."
              alignment="left"
            />
            <p className="text-slate-600 leading-relaxed mb-6">
              JRS Recycling Solutions Pvt. Ltd. is a premier electronic waste management company based in Mumbai, dedicated to reducing the environmental impact of technology. We provide end-to-end recycling, recovery, and data destruction services for corporations, government bodies, and institutions.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our state-of-the-art facility utilizes advanced mechanical and chemical processes to recover valuable materials while ensuring hazardous components are treated with zero liquid discharge. We don't just recycle; we ensure your data is irrevocably destroyed and your environmental liability is eliminated.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 font-bold text-slate-800">
                    <Factory className="text-emerald-600" size={20}/> Industrial Scale
                 </div>
                 <p className="text-sm text-slate-500">Capable of handling bulk e-waste from large enterprises.</p>
              </div>
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 font-bold text-slate-800">
                    <Database className="text-blue-600" size={20}/> Data Security
                 </div>
                 <p className="text-sm text-slate-500">Secure wiping and physical destruction of storage media.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-br-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop" 
              alt="JRS Recycling Plant Interior" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px] grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-emerald-500">
               <p className="font-bold text-slate-800 text-lg">Mission Driven</p>
               <p className="text-slate-600 text-sm mt-1">To keep 100% of recyclable electronics out of landfills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;