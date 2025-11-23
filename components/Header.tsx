import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-slate-900/90 backdrop-blur-sm py-5 lg:py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="JRS Logo" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              JRS Recycling
            </span>
            <span className={`text-xs uppercase tracking-wider ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
              Solutions Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-100'
                } ${location.pathname === item.href ? 'text-emerald-500' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule Pickup
          </Link>

          <button
            className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 lg:hidden flex flex-col p-4 animate-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`py-3 px-4 font-medium border-b border-slate-50 last:border-0 hover:bg-emerald-50 hover:text-emerald-700 rounded-md transition-colors ${location.pathname === item.href ? 'text-emerald-600 bg-emerald-50' : 'text-slate-700'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="flex items-center gap-3 text-slate-600 mb-3 px-4">
              <Phone size={18} className="text-emerald-600" /> {CONTACT_INFO.phonePrimary}
            </a>
            <Link
              to="/contact"
              className="block w-full text-center bg-emerald-600 text-white py-3 rounded-md font-semibold"
            >
              Schedule Pickup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;