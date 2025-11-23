import React from 'react';
import { Lock, FileText, Server, EyeOff } from 'lucide-react';

const DataSecurity: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-blue-500/30">
              Top Priority
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ironclad Data Security & Compliance</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Data breaches can cost millions. JRS Recycling Solutions guarantees the physical destruction or secure wiping of your storage media, eliminating risk and ensuring compliance with privacy laws.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-lg h-fit">
                  <Lock className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Physical Destruction</h4>
                  <p className="text-slate-400 text-sm">Hard drives and SSDs are shredded into millimeter-sized particles, making data recovery physically impossible.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-lg h-fit">
                  <EyeOff className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Certified Data Wiping</h4>
                  <p className="text-slate-400 text-sm">For reusable assets, we use industry-standard software to overwrite data, verified by generated reports.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-slate-800 p-3 rounded-lg h-fit">
                  <FileText className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Audit-Ready Documentation</h4>
                  <p className="text-slate-400 text-sm">Receive a formal Certificate of Destruction listing serial numbers for every asset processed.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition-colors inline-block">
                Secure Your Data Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                <div className="flex items-center gap-3">
                  <Server className="text-emerald-400" />
                  <span className="font-mono text-sm tracking-wider">SECURE_ERASE_PROTOCOL</span>
                </div>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
              </div>
              <div className="space-y-4 font-mono text-xs md:text-sm text-green-400">
                <p>&gt; Initializing drive scan...</p>
                <p>&gt; Drive detected: SN-4892309-XJ [2TB]</p>
                <p>&gt; Starting multi-pass overwrite (DoD 5220.22-M)...</p>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[85%]"></div>
                </div>
                <p className="text-white">&gt; Progress: 85% complete</p>
                <p>&gt; Generating verification hash...</p>
                <p className="opacity-50">&gt; Destruction Certificate ID: #JRS-2024-8892</p>
              </div>
            </div>
            {/* Decorative background blur */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSecurity;