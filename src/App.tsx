import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { ScrollHandler } from '@/src/components/ScrollHandler';
import { Home } from '@/src/components/Home';
import { Offerings } from '@/src/components/Offerings';
import { Products } from '@/src/components/Products';
import { CaseStudies } from '@/src/components/CaseStudies';
import { About } from '@/src/components/About';
import { NewsletterList } from '@/src/components/NewsletterList';
import { NewsletterDetail } from '@/src/components/NewsletterDetail';
import { Contact } from '@/src/components/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/offerings" element={<Offerings />} />
              <Route path="/products" element={<Products />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/about" element={<About />} />
              <Route path="/newsletter" element={<NewsletterList />} />
              <Route path="/newsletter/:id" element={<NewsletterDetail />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback to Home for other routes in this demo */}
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
