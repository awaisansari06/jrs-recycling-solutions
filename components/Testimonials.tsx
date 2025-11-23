import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "IT Manager, TechCorp India",
        content: "JRS Recycling Solutions has been our trusted partner for e-waste disposal for over 3 years. Their data destruction process is transparent and certified, which is crucial for our compliance.",
        rating: 5
    },
    {
        name: "Sarah Williams",
        role: "Operations Head, Global Systems",
        content: "Excellent service! The pickup was scheduled promptly, and the team handled everything professionally. The documentation provided was comprehensive and timely.",
        rating: 5
    },
    {
        name: "Amit Patel",
        role: "Facility Director, EduTech Solutions",
        content: "We appreciate their commitment to zero-landfill policy. Knowing that our old equipment is being recycled responsibly gives us peace of mind. Highly recommended!",
        rating: 5
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
                    >
                        Trusted by Industry Leaders
                    </motion.h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        See what our clients say about our secure and sustainable e-waste management services.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-emerald-100 w-12 h-12" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
