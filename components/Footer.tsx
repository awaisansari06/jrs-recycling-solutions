import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-emerald-500">
              <img src="/logo.png" alt="JRS Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl text-white">JRS Recycling Solutions</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              A certified, compliant, and environmentally responsible partner for end-to-end e-waste management and secure data destruction in India.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">In</div>
              <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">Fb</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-emerald-500 transition-colors text-sm">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>{CONTACT_INFO.phonePrimary}</li>
              <li>{CONTACT_INFO.phoneSecondary}</li>
              <li className="break-words">{CONTACT_INFO.email}</li>
              <li className="text-xs mt-4 leading-relaxed opacity-70">
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} JRS Recycling Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;