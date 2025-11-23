import React from 'react';
import SectionHeading from './SectionHeading';
import { Truck, Search, Hammer, FlaskConical, FileCheck, Shield } from 'lucide-react';
import { ProcessStep } from '../types';

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Logistics & Collection",
    description: "Secure pickup from your premises using our fleet of GPS-tracked vehicles. Immediate specialized packing for sensitive assets.",
    icon: Truck
  },
  {
    number: "02",
    title: "Segregation & Testing",
    description: "Items are weighed, barcoded, and segregated. Functional assets are tested for potential refurbishment and resale.",
    icon: Search
  },
  {
    number: "03",
    title: "Mechanical Dismantling",
    description: "Manual and automated dismantling. Hazardous parts (batteries, bulbs) are removed safely. Crushers and granulators reduce bulk.",
    icon: Hammer
  },
  {
    number: "04",
    title: "Chemical Refining",
    description: "Advanced chemical refining to recover precious metals (Gold, Silver, Palladium). State-of-the-art fume scrubbers ensure clean air.",
    icon: FlaskConical
  },
  {
    number: "05",
    title: "Pollution Control",
    description: "Zero Liquid Discharge wastewater treatment and high-capacity dust collection ensure no environmental harm.",
    icon: Shield
  },
  {
    number: "06",
    title: "Certification",
    description: "We issue Green Certificates and Destruction Certificates for audit and compliance purposes.",
    icon: FileCheck
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Recycling Process" 
          subtitle="A transparent, six-step scientific approach to converting waste into resources."
        />

        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-2 border-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:border-emerald-500 group-hover:scale-110 transition-all duration-300 mb-6 relative">
                  <step.icon size={24} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    {step.number}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-slate-800 mb-3">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;