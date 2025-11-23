import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'pickup',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! In a real application, this would send your request to the JRS team.");
    // Reset form or handle actual submission logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Contact Info Side */}
          <div className="lg:w-2/5 p-10 lg:p-14 bg-emerald-700 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 rounded-bl-full opacity-50 -mr-16 -mt-16"></div>
            
            <h3 className="text-3xl font-bold mb-6 relative z-10">Get in Touch</h3>
            <p className="text-emerald-100 mb-10 relative z-10">
              Ready to responsibly dispose of your e-waste? Contact us for a quote, compliance consultation, or to schedule a pickup.
            </p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-emerald-300" />
                <div>
                  <p className="text-xs text-emerald-200 uppercase font-bold tracking-wider mb-1">Call Us</p>
                  <p className="font-semibold text-lg">{CONTACT_INFO.phonePrimary}</p>
                  <p className="font-semibold text-lg">{CONTACT_INFO.phoneSecondary}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-emerald-300" />
                <div>
                  <p className="text-xs text-emerald-200 uppercase font-bold tracking-wider mb-1">Email Us</p>
                  <p className="font-semibold break-all">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-emerald-300" />
                <div>
                  <p className="text-xs text-emerald-200 uppercase font-bold tracking-wider mb-1">Visit Us</p>
                  <p className="text-emerald-50 leading-relaxed text-sm">
                    {CONTACT_INFO.fullAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 lg:p-14 bg-white">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Service</h3>
            <p className="text-slate-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="Company Ltd."
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white"
                  value={formState.service}
                  onChange={handleChange}
                >
                  <option value="pickup">E-Waste Pickup</option>
                  <option value="data-destruction">Data Destruction</option>
                  <option value="refurbished">Buy Refurbished IT Assets</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about the quantity and type of e-waste..."
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Submit & Schedule Callback <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;