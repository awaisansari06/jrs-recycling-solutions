import React from 'react';
import { HardDrive, Truck, RefreshCw, Cpu, Battery, Printer, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="pt-28">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-emerald-900 text-white py-20"
            >
                <div className="container mx-auto px-4 md:px-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-emerald-100 max-w-2xl"
                    >
                        Comprehensive e-waste management solutions tailored for corporate compliance and environmental sustainability.
                    </motion.p>
                </div>
            </motion.section>

            {/* Main Services */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 space-y-16">

                    {/* Service 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                                <HardDrive className="text-red-600" size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">Hard Drive, Flash Drive & SSD Destruction</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Secure, compliant destruction of storage media to protect confidential corporate data. We ensure that your sensitive information is irretrievable.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    On-site and Off-site destruction options
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    Certificates of Destruction provided
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    Tamper-proof process with video evidence available
                                </li>
                            </ul>
                            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
                                Enquire About Data Destruction <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src="/service-destruction.jpg"
                                alt="Hard Drive Data Destruction"
                                className="rounded-2xl shadow-lg w-full h-[350px] object-cover hover:scale-[1.02] transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <img
                                src="/service-collection.jpg"
                                alt="E-Waste Collection and Sorting"
                                className="rounded-2xl shadow-lg w-full h-[350px] object-cover hover:scale-[1.02] transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                                <Truck className="text-emerald-600" size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">Electronic Waste Collection & Recycling</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Professional collection and processing of obsolete computers, laptops, IT equipment, and office electronics. We handle the logistics so you don't have to.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    Safe handling and transport
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    Maximum material recovery
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                    Responsible disposal with zero landfill
                                </li>
                            </ul>
                            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2">
                                Schedule E-Waste Pickup <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div className="order-2 md:order-1">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <RefreshCw className="text-blue-600" size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">Electronics & Computer Resale</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We refurbish and resell reusable IT assets and electronics, extending their lifecycle and providing cost-effective solutions for businesses and individuals.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Significant cost savings
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Extended product life cycle
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Supports the circular economy
                                </li>
                            </ul>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                                Ask About Refurbished Stock <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src="/service-laptops.jpg"
                                alt="Laptop and Electronics Recycling"
                                className="rounded-2xl shadow-lg w-full h-[350px] object-cover hover:scale-[1.02] transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Other Items */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">We Also Handle</h3>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            { name: "Cables & Wires", icon: Cpu },
                            { name: "CRT / LCD Monitors", icon: HardDrive },
                            { name: "Toner Cartridges", icon: Printer },
                            { name: "Batteries (Li-Ion/Lead)", icon: Battery },
                            { name: "EPS (Thermocol)", icon: Truck },
                            { name: "CFLs & Bulbs", icon: RefreshCw },
                            { name: "Refrigerant Gases", icon: Factory },
                            { name: "Office Equipment", icon: Printer },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <item.icon className="text-slate-400 mb-3" size={24} />
                                <span className="font-medium text-slate-700">{item.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

function Factory(props: any) { return <Cpu {...props} /> } // Fallback icon

export default Services;
