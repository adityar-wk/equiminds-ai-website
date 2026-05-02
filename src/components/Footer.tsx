import { Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Footer() {
  const location = useLocation();
  const isDark = location.pathname === '/products';

  return (
    <footer className={cn(
      "py-24 px-6 border-t relative z-50 overflow-hidden transition-colors duration-300",
      isDark ? "bg-[#08080f] border-white/5" : "bg-surface border-gray-100"
    )}>
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#C4533E]/10 blur-[130px]" />
          <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-violet-900/15 blur-[120px]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <Link
              to="/"
              className={cn("text-2xl font-display font-bold mb-8 block", isDark ? "text-white" : "text-ink")}
            >
              EquiMinds AI
            </Link>
            <p className={cn("font-light max-w-sm leading-relaxed mb-8", isDark ? "text-gray-500" : "text-gray-600")}>
              EquiMinds is an AI-native product studio helping businesses design, build, modernize, and scale AI-powered products and platforms.
            </p>
            <div className={cn("flex flex-col gap-4 text-sm", isDark ? "text-gray-500" : "text-gray-600")}>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand shrink-0" />
                <a href="mailto:contact@equiminds.ai" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>contact@equiminds.ai</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand shrink-0" />
                <span>+971 50 884 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-brand shrink-0" />
                <span>Meydan Grandstand, 6th floor, Dubai, U.A.E.</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className={cn("text-xs font-bold tracking-widest uppercase mb-8", isDark ? "text-gray-600" : "text-gray-500")}>Offerings</h4>
            <ul className={cn("space-y-4 text-sm", isDark ? "text-gray-500" : "text-gray-700")}>
              <li><Link to="/offerings?tab=0" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>AI Orchestration</Link></li>
              <li><Link to="/offerings?tab=1" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>AI Optimization</Link></li>
              <li><Link to="/offerings?tab=2" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>Private AI</Link></li>
              <li><Link to="/offerings?tab=3" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>Prescriptive AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={cn("text-xs font-bold tracking-widest uppercase mb-8", isDark ? "text-gray-600" : "text-gray-500")}>Company</h4>
            <ul className={cn("space-y-4 text-sm", isDark ? "text-gray-500" : "text-gray-700")}>
              <li><Link to="/products" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>Products</Link></li>
              <li><Link to="/case-studies" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>Case Studies</Link></li>
              <li><Link to="/about" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>About Us</Link></li>
              <li><Link to="/contact" className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className={cn("pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8", isDark ? "border-white/5" : "border-gray-200")}>
          <p className={cn("text-xs", isDark ? "text-gray-600" : "text-gray-500")}>© 2026 EquiMinds. All rights reserved.</p>
          <div className={cn("flex gap-8 text-xs uppercase tracking-widest font-medium", isDark ? "text-gray-600" : "text-gray-500")}>
            <button className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>Privacy Policy</button>
            <button className={cn("transition-colors", isDark ? "hover:text-white" : "hover:text-brand")}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
