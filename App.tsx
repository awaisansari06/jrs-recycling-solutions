import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './pages/About';
import Services from './pages/Services';
import Process from './pages/Process';
import Compliance from './pages/Compliance';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import DataSecurity from './components/DataSecurity';
import Environment from './components/Environment';
import GalleryComponent from './components/Gallery';
import ContactComponent from './components/Contact';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Home Page Component
const Home = () => (
  <>
    <Hero />
    <Stats />
    <TrustStrip />
    <DataSecurity />
    <Environment />
    <GalleryComponent limit={4} />
    <Testimonials />
    <ContactComponent />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <WhatsAppButton />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;