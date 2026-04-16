import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-surface py-24 px-6 border-t border-gray-100 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold mb-8 block">EquiMinds AI</Link>
            <p className="text-gray-600 font-light max-w-sm leading-relaxed mb-8">
              EquiMinds is an AI-native product studio helping businesses design, build, modernize, and scale AI-powered products and platforms.
            </p>
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand" />
                <span>vijay.anand@gowebknot.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-brand" />
                <span>Bengaluru, India / UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-brand" />
                <span>equiminds.ai</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-8">Offerings</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li><Link to="/#offerings" className="hover:text-brand transition-colors">AI Orchestration</Link></li>
              <li><Link to="/#offerings" className="hover:text-brand transition-colors">AI Optimization</Link></li>
              <li><Link to="/#offerings" className="hover:text-brand transition-colors">Private AI</Link></li>
              <li><Link to="/#offerings" className="hover:text-brand transition-colors">Prescriptive AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li><Link to="/products" className="hover:text-brand transition-colors">Products</Link></li>
              <li><Link to="/case-studies" className="hover:text-brand transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
              <li><button className="hover:text-brand transition-colors">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-gray-600">© 2026 EquiMinds. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-gray-600 uppercase tracking-widest font-medium">
            <button className="hover:text-brand transition-colors">Privacy Policy</button>
            <button className="hover:text-brand transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
