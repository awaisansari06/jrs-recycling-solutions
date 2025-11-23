import React from 'react';
import { Image } from 'lucide-react';
import { motion } from 'framer-motion';

const IMAGES = [
    {
        url: "/gallery-1.jpg",
        caption: "E-Waste Storage Facility"
    },
    {
        url: "/gallery-2.jpg",
        caption: "Office & Reception Area"
    },
    {
        url: "/gallery-3.jpg",
        caption: "Laptop Refurbishing Station"
    },
    {
        url: "/gallery-4.jpg",
        caption: "Warehouse & Inventory Management"
    },
    {
        url: "/gallery-5.jpg",
        caption: "Main Entrance - JRS Recycling Solutions"
    },
    {
        url: "/gallery-new-1.jpg",
        caption: "State-of-the-Art Recycling Facility"
    },
    {
        url: "/gallery-new-2.jpg",
        caption: "Advanced PCB Dismantling Unit"
    },
    {
        url: "/gallery-new-3.jpg",
        caption: "Automated Shredding Operations"
    },
    {
        url: "/gallery-new-4.jpg",
        caption: "Worker Safety & PPE Compliance"
    },
    {
        url: "/gallery-new-5.jpg",
        caption: "Material Segregation Zone"
    },
    {
        url: "/gallery-new-6.jpg",
        caption: "Quality Assurance Station"
    },
    {
        url: "/gallery-new-7.jpg",
        caption: "Secure Inventory Storage"
    },
    {
        url: "/gallery-new-8.jpg",
        caption: "Heavy Machinery for Metal Recovery"
    },
    {
        url: "/gallery-new-9.jpg",
        caption: "Logistics & Fleet Management"
    },
    {
        url: "/gallery-new-10.jpg",
        caption: "Data Destruction Unit"
    },
    {
        url: "/gallery-new-11.jpg",
        caption: "Plastic Granulation Process"
    },
    {
        url: "/gallery-new-12.jpg",
        caption: "Ferrous Metal Separation"
    },
    {
        url: "/gallery-new-13.jpg",
        caption: "Non-Ferrous Metal Recovery"
    },
    {
        url: "/gallery-new-14.jpg",
        caption: "Cable Stripping Operations"
    },
    {
        url: "/gallery-new-15.jpg",
        caption: "Glass Recycling Section"
    },
    {
        url: "/gallery-new-16.jpg",
        caption: "Battery Handling & Safety"
    },
    {
        url: "/gallery-new-17.jpg",
        caption: "Hazardous Waste Containment"
    },
    {
        url: "/gallery-new-18.jpg",
        caption: "Final Product Packaging"
    },
    {
        url: "/gallery-new-19.jpg",
        caption: "Dispatch & Loading Bay"
    },
    {
        url: "/gallery-new-20.jpg",
        caption: "Administrative Office"
    }
];

const Gallery: React.FC = () => {
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
                        Facility Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-slate-300 max-w-2xl"
                    >
                        A visual tour of our advanced recycling infrastructure and operations.
                    </motion.p>
                </div>
            </motion.section>

            {/* Gallery Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {IMAGES.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative overflow-hidden rounded-xl h-72 shadow-md cursor-pointer"
                            >
                                <img
                                    src={img.url}
                                    alt={img.caption}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-medium flex items-center gap-2">
                                        <Image size={18} className="text-emerald-400" /> {img.caption}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
