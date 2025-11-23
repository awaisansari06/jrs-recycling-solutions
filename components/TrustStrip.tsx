import React from 'react';
import { Award, CheckCircle, FileCheck } from 'lucide-react';

const TrustStrip: React.FC = () => {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
            <span className="text-slate-500 font-semibold uppercase tracking-wider text-sm w-full md:w-auto text-center md:text-left">
              Fully Certified & Compliant:
            </span>
            
            <div className="flex items-center gap-3 text-slate-700 font-bold">
              <Award className="text-emerald-600" size={28} />
              <span>MPCB Authorized</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-slate-300"></div>

            <div className="flex items-center gap-3 text-slate-700 font-bold">
              <CheckCircle className="text-emerald-600" size={28} />
              <span>ISO 14001 Certified</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-slate-300"></div>

            <div className="flex items-center gap-3 text-slate-700 font-bold">
              <FileCheck className="text-emerald-600" size={28} />
              <span>OHSAS 18001 Certified</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;