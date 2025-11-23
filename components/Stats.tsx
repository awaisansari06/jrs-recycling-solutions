import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Recycle, Building2 } from 'lucide-react';

const stats = [
    {
        icon: Recycle,
        value: "10,000+",
        label: "Tons E-Waste Recycled",
        color: "text-emerald-500",
        bg: "bg-emerald-100"
    },
    {
        icon: Users,
        value: "500+",
        label: "Corporate Clients",
        color: "text-blue-500",
        bg: "bg-blue-100"
    },
    {
        icon: Building2,
        value: "50+",
        label: "Cities Covered",
        color: "text-purple-500",
        bg: "bg-purple-100"
    },
    {
        icon: Award,
        value: "100%",
        label: "Compliance Record",
        color: "text-orange-500",
        bg: "bg-orange-100"
    }
];

const Stats: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{stat.value}</h3>
                            <p className="text-slate-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
