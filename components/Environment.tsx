import React from 'react';
import SectionHeading from './SectionHeading';
import { Leaf, Droplets, Wind, Zap } from 'lucide-react';

const Environment: React.FC = () => {
  return (
    <section id="compliance" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Environmental Responsibility" 
          subtitle="Our commitment goes beyond recycling. We operate with strict adherence to environmental safety."
          lightText={true}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700/50 hover:bg-emerald-800 transition-colors">
            <Droplets className="text-emerald-300 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Zero Liquid Discharge</h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Our advanced effluent treatment plant ensures that not a single drop of wastewater is discharged into the environment. Water is treated and reused within the facility.
            </p>
          </div>

          <div className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700/50 hover:bg-emerald-800 transition-colors">
            <Wind className="text-emerald-300 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Air Quality Control</h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Equipped with high-capacity dust collection and fume scrubber systems to neutralize emissions during chemical refining and shredding processes.
            </p>
          </div>

          <div className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700/50 hover:bg-emerald-800 transition-colors">
            <Zap className="text-emerald-300 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Circular Economy</h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              We maximize resource recovery. By refurbishing functional electronics and extracting raw materials, we reduce the demand for new mining and manufacturing.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full text-sm font-medium border border-white/20">
                <Leaf className="text-emerald-400" size={20} />
                <span>Helping you meet your Extended Producer Responsibility (EPR) targets</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;