import React from 'react';
import { Truck, Search, Hammer, FlaskConical, Shield, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Collection & Secure Transport",
            description: "We arrange secure pickup from your location using GPS-tracked vehicles. Assets are packed safely to prevent damage or leakage during transit.",
            icon: Truck
        },
        {
            number: "02",
            title: "Segregation & Manual Dismantling",
            description: "Items are weighed, barcoded, and segregated. Skilled technicians manually dismantle complex devices to separate hazardous components.",
            icon: Search
        },
        {
            number: "03",
            title: "Mechanical Processing",
            description: "Automated crushing, granulation, and density separation to recover metals, plastics, and glass. Cable recycling separates copper from insulation.",
            icon: Hammer
        },
        {
            number: "04",
            title: "Chemical Refining",
            description: "Precious metals like gold, silver, and palladium are recovered through advanced chemical refining processes with high purity levels.",
            icon: FlaskConical
        },
        {
            number: "05",
            title: "Pollution-Controlled Treatment",
            description: "Zero Liquid Discharge (ZLD) systems and fume scrubbers ensure that all by-products are treated safely without harming the environment.",
            icon: Shield
        },
        {
            number: "06",
            title: "Documentation & Certificates",
            description: "Clients receive full documentation, including Green Certificates and Certificates of Destruction for audit compliance.",
            icon: FileCheck
        }
    ];

    return (
        <div className="pt-28">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-slate-800 text-white py-20"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our Recycling Process
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-slate-300 max-w-2xl"
                    >
                        A transparent, scientific, and secure approach to converting electronic waste into valuable resources.
                    </motion.p>
                </div>
            </motion.section>

            {/* Steps Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all group"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <step.icon size={28} />
                                    </div>
                                    <span className="text-4xl font-bold text-slate-200 group-hover:text-emerald-100 transition-colors">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

