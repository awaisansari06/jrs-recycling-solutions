import React from 'react';
import { Image } from 'lucide-react';
import { motion } from 'framer-motion';

interface GalleryProps {
  limit?: number;
}

const IMAGES = [
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
  }
];

const Gallery: React.FC<GalleryProps> = ({ limit }) => {
  const displayImages = limit ? IMAGES.slice(0, limit) : IMAGES;

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Facility & Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            A glimpse into our advanced recycling plant and processing standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl h-64 shadow-md cursor-pointer"
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
  );
};

export default Gallery;