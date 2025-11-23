import React from 'react';
import { Factory, Shield, Leaf, Award, Target, History } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <div className="pt-28">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-900 text-white py-20"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        About JRS Recycling Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-slate-300 max-w-2xl"
                    >
                        Pioneering responsible e-waste management in India with a mission to keep 100% of recyclable electronics out of landfills.
                    </motion.p>
                </div>
            </motion.section>

            {/* Company Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Who We Are</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            JRS Recycling Solutions Pvt. Ltd. is a premier electronic waste management company based in Mumbai. We provide end-to-end recycling, recovery, and data destruction services for corporations, government bodies, and institutions.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            With years of experience in the industry, we have established ourselves as a trusted partner for managing the complex lifecycle of IT assets. Our focus is not just on disposal, but on value recovery and environmental stewardship.
                        </p>

                        <div className="flex items-start gap-4 mb-4">
                            <History className="text-emerald-600 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-slate-800">Our History</h4>
                                <p className="text-sm text-slate-600">Founded with a vision to formalize the e-waste sector in India, we have grown from a small collection unit to a full-scale processing facility.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-tl-3xl -z-10"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-br-3xl -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop"
                            alt="JRS Recycling Facility"
                            className="rounded-lg shadow-xl w-full object-cover h-[400px]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Core Focus Areas */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-800 mb-12 text-center"
                    >
                        Our Core Focus
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Leaf, color: "emerald", title: "Environmental Responsibility", desc: "Committed to zero-landfill policies and eco-friendly processing techniques that minimize pollution." },
                            { icon: Shield, color: "blue", title: "Data Security", desc: "Ensuring 100% data destruction through physical shredding and degaussing to protect client confidentiality." },
                            { icon: Factory, color: "indigo", title: "Industrial Capabilities", desc: "Equipped with high-capacity machinery for dismantling, shredding, and material separation." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all"
                            >
                                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <item.icon className={`text-${item.color}-600`} size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white"
                    >
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Authorized & Certified</h2>
                                <p className="text-slate-300 mb-8">We operate in strict compliance with all environmental and safety regulations.</p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <Award className="text-emerald-400" />
                                        <span>Authorized by Maharashtra Pollution Control Board (MPCB)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Award className="text-emerald-400" />
                                        <span>OHSAS 18001 (Occupational Health & Safety)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Award className="text-emerald-400" />
                                        <span>ISO 14001 (Environmental Management)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center hover:bg-white/20 transition-colors">
                                    <Target className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                                    <h4 className="font-bold">Mission</h4>
                                    <p className="text-xs text-slate-300 mt-2">To lead the e-waste revolution with sustainable practices.</p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-center hover:bg-white/20 transition-colors">
                                    <Leaf className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                                    <h4 className="font-bold">Vision</h4>
                                    <p className="text-xs text-slate-300 mt-2">A cleaner, greener planet free from electronic hazards.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
