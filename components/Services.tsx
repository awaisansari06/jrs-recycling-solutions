import React from 'react';
import SectionHeading from './SectionHeading';
import { HardDrive, Truck, RefreshCw, Cpu, Battery, Printer } from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'data-destruction',
    title: 'Secure Data Destruction',
    description: 'We ensure 100% data sanitization for Hard Drives, SSDs, Tapes, and Flash Media through degaussing and physical shredding.',
    features: ['Certificates of Destruction provided', 'On-site or Off-site options', 'DoD Standard Compliance'],
    icon: HardDrive,
    ctaText: 'Book Destruction'
  },
  {
    id: 'ewaste-recycling',
    title: 'E-Waste Collection & Recycling',
    description: 'Comprehensive recycling for obsolete IT assets including computers, servers, laptops, and networking equipment.',
    features: ['Safe hazardous material handling', 'Zero-landfill policy', 'MPCB authorized transport'],
    icon: Truck,
    ctaText: 'Schedule Pickup'
  },
  {
    id: 'resale',
    title: 'Electronics Refurbishing',
    description: 'Extending the life of IT assets. We test, refurbish, and resell reusable computers and electronics to support the circular economy.',
    features: ['Rigorous hardware testing', 'Cost-effective for buyers', 'Reduces manufacturing demand'],
    icon: RefreshCw,
    ctaText: 'View Inventory'
  },
  {
    id: 'components',
    title: 'Component Recovery',
    description: 'Advanced separation of precious metals from circuit boards and recovery of plastics and glass from dismantled units.',
    features: ['Chemical refining plant', 'Gold/Silver/Copper recovery', 'Dust & fume control systems'],
    icon: Cpu,
    ctaText: 'Learn More'
  },
  {
    id: 'battery',
    title: 'Battery Recycling',
    description: 'Specialized handling for Li-Ion and Lead Acid batteries in partnership with authorized global processors.',
    features: ['Safe transport protocols', 'Prevents soil contamination', 'Partnered with TES Singapore'],
    icon: Battery,
    ctaText: 'Recycle Batteries'
  },
  {
    id: 'consumables',
    title: 'Consumables Recycling',
    description: 'Responsible disposal of printer cartridges, toners, and other office consumables that contain toxic chemicals.',
    features: ['Plastic recovery', 'Toner powder safe disposal', 'Bulk collection bins'],
    icon: Printer,
    ctaText: 'Request Bin'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Core Services" 
          subtitle="End-to-end solutions tailored for corporate compliance and environmental sustainability."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 p-8 flex flex-col group">
              <div className="bg-emerald-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <service.icon className="text-emerald-600 group-hover:text-white transition-colors" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-500 font-medium">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all text-sm"
              >
                {service.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;