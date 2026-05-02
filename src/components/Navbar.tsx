import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Offerings', path: '/offerings' },
  { name: 'Products', path: '/products' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
  { name: 'Newsletter', path: '/newsletter' },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isDark = location.pathname === '/products';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300",
      isDark
        ? "bg-[#08080f]/70 border-white/5"
        : "bg-white/80 border-gray-100"
    )}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            "text-xl font-display font-light tracking-tighter transition-colors",
            isDark ? "text-white" : "text-ink"
          )}
        >
          EquiMinds AI
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-light transition-colors",
                isDark
                  ? location.pathname === link.path ? "text-[#C4533E]" : "text-gray-400 hover:text-white"
                  : location.pathname === link.path ? "text-brand" : "text-gray-600 hover:text-brand"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-light bg-brand text-white hover:bg-brand-dark transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden", isDark ? "text-white" : "text-ink")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "md:hidden absolute top-20 left-0 right-0 border-b p-6 flex flex-col gap-4",
            isDark ? "bg-[#08080f]/95 border-white/5" : "bg-white border-gray-100"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn("text-lg font-medium", isDark ? "text-gray-300" : "text-ink")}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={cn("text-lg font-medium", isDark ? "text-[#C4533E]" : "text-brand")}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
