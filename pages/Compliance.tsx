import React from 'react';
import { ShieldCheck, FileText, Lock, AlertTriangle, Wind, Droplets, Activity, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Compliance: React.FC = () => {
    return (
        <div className="pt-28">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-blue-900 text-white py-20"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Compliance & Certifications
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-blue-100 max-w-2xl"
                    >
                        Adhering to the highest standards of environmental safety, occupational health, and data security.
                    </motion.p>
                </div>
            </motion.section>

            {/* Certifications Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-50 p-8 rounded-xl border border-slate-200 flex items-start gap-6"
                        >
                            <div className="bg-emerald-100 p-4 rounded-full text-emerald-600">
                                <FileText size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Regulatory Compliance</h3>
                                <p className="text-slate-600 mb-4">
                                    Fully authorized by the <strong>Maharashtra Pollution Control Board (MPCB)</strong>. We operate in strict accordance with the E-Waste (Management) Rules, 2016 and subsequent amendments.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-50 p-8 rounded-xl border border-slate-200 flex items-start gap-6"
                        >
                            <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                                <Award size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">ISO Certifications</h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <ShieldCheck size={16} className="text-blue-500" />
                                        <strong>OHSAS 18001:</strong> Occupational Health & Safety
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <ShieldCheck size={16} className="text-blue-500" />
                                        <strong>ISO 14001:</strong> Environmental Management Systems
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Certificates Display */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Our Certificates</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group relative bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100">
                                    <img
                                        src="/certificate-iso.jpg"
                                        alt="ISO 14001:2015 Certificate"
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-bold text-slate-800">ISO 14001:2015</h3>
                                    <p className="text-slate-500 text-sm">Environmental Management System</p>
                                </div>
                            </div>
                            <div className="group relative bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100">
                                    <img
                                        src="/certificate-disposal.jpg"
                                        alt="E-Waste Disposal Certificate"
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-bold text-slate-800">E-Waste Disposal Authorization</h3>
                                    <p className="text-slate-500 text-sm">MPCB Authorized Recycler</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-800 mb-10 text-center"
                    >
                        Environmental & Safety Systems
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Air Quality Control",
                                desc: "High-capacity dust collection and fume scrubber systems to prevent air pollution.",
                                icon: Wind
                            },
                            {
                                title: "Water Treatment",
                                desc: "Advanced Sewage Treatment Plant (STP) and Effluent Treatment Plant (ETP) with Zero Liquid Discharge.",
                                icon: Droplets
                            },
                            {
                                title: "Safety Monitoring",
                                desc: "Continuous gas monitoring in chemical process areas to ensure worker safety.",
                                icon: Activity
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-700">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Security Section */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <ShieldCheck size={48} className="mx-auto text-emerald-400 mb-6" />
                    </motion.div>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-6"
                    >
                        Data Security & Documentation
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        We understand that data security is paramount. Our destruction processes are designed to be irreversible. We provide comprehensive documentation for your audit trails.
                    </motion.p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Certificate of Destruction", "Certificate of Recycling", "Video Evidence (On Request)"].map((text, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                className="px-6 py-3 bg-white/10 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20"
                            >
                                {text}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Compliance;
