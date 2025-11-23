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

            {/* Visual Process Flowcharts */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Visual Process Overview
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Comprehensive flowcharts and diagrams illustrating our systematic approach to e-waste recycling.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {/* E-Waste Segregation Flowchart */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold">1</span>
                                    E-Waste Segregation Process
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    Our initial segregation process separates e-waste into different material streams including grass, hazardous waste, and materials for shredding. Each stream follows a specialized processing path for optimal recovery.
                                </p>
                                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                                    <img
                                        src="/process-flowchart.png"
                                        alt="E-Waste Segregation Flowchart"
                                        className="w-full h-auto object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* E-Waste Types & Recycling Detail */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold">2</span>
                                    E-Waste Types & Material Recovery
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    We handle diverse electronic waste categories including monitors, laptops, cell phones, televisions, and more. Our advanced processes extract valuable materials like copper and resin powder from waste PCBs (Printed Circuit Boards).
                                </p>
                                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                                    <img
                                        src="/process-ewaste-types.jpg"
                                        alt="E-Waste Types and Recycling Details"
                                        className="w-full h-auto object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Recycling Process Stages */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold">3</span>
                                    The Stages of E-Waste Recycling
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    Our recycling process follows four critical stages: Pre-picking (sorting items that shouldn't be shredded), Shredding (breaking materials into fragments), Separation (dividing into commodity types using advanced technology), and Outputs (refining to high-quality commodities).
                                </p>
                                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                                    <img
                                        src="/process-stages.png"
                                        alt="Stages of E-Waste Recycling Process"
                                        className="w-full h-auto object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-20 bg-emerald-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Mechanical Operations</h3>
                            <p className="text-slate-600 mb-4">
                                Our facility is equipped with specialized machinery for various types of e-waste:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-slate-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    <span><strong>Dismantling:</strong> Manual separation of high-value components.</span>
                                </li>
                                <li className="flex items-start gap-2 text-slate-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    <span><strong>CRT/LCD Recycling:</strong> Safe extraction of leaded glass and mercury.</span>
                                </li>
                                <li className="flex items-start gap-2 text-slate-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    <span><strong>Cable Recycling:</strong> Stripping and granulation for copper recovery.</span>
                                </li>
                                <li className="flex items-start gap-2 text-slate-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    <span><strong>Battery Handling:</strong> Li-Ion batteries are sent to authorized partners for safe processing.</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Safety & Monitoring</h3>
                            <p className="text-slate-600 mb-4">
                                We prioritize the safety of our workforce and the environment:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-slate-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    <span>Continuous air quality monitoring in chemical processing areas.</span>
                                </li>
                                <li className="flex items-start gap-2 text-slate-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    <span>Automated fire suppression systems.</span>
                                </li>
                                <li className="flex items-start gap-2 text-slate-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                    <span>Strict data security protocols for IT asset handling.</span>
                                </li>
                            </ul>

                            <div className="mt-8 bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                                <h4 className="font-bold text-slate-800 mb-1">Data Security Note</h4>
                                <p className="text-sm text-slate-600">
                                    All IT assets containing data undergo a strict wiping or physical destruction process before any recycling begins.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Process;
