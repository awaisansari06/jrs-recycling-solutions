import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = '919819001437'; // Your WhatsApp number (with country code, no + or spaces)
    const message = encodeURIComponent('Hello! I would like to inquire about your e-waste recycling services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="animate-pulse" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us on WhatsApp
            </span>
        </a>
    );
};

export default WhatsAppButton;
