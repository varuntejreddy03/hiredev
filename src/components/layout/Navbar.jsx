import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Roles & Pathways', path: '/roles' },
  { name: 'Placements', path: '/placements' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isLightNav = (scrolled || !isHome) && !isOpen;
  const navClass = `fixed top-0 w-full z-50 transition-all duration-500 border-b ${
    isLightNav 
      ? 'bg-hire-light/95 backdrop-blur-xl border-hire-teal/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4 text-hire-dark' 
      : 'bg-transparent border-transparent py-4 md:py-6 text-hire-light'
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center relative z-50">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-all duration-300 drop-shadow-sm">
            <defs>
              <linearGradient id="logo-trend" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E8C547" />
                <stop offset="100%" stopColor="#E8C547" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Left Pillar */}
            <rect x="18" y="15" width="16" height="70" rx="2" fill="currentColor" />
            {/* Right Pillar */}
            <rect x="66" y="15" width="16" height="70" rx="2" fill="currentColor" />
            {/* Upward Growth Trend (Crossbar forming H) */}
            <path d="M18 70 L82 25 L82 43 L18 88 Z" fill="url(#logo-trend)" />
          </svg>
          <span className="font-serif text-xl sm:text-[1.7rem] font-bold tracking-tight">HireDev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-1 justify-center items-center rounded-full px-2 py-1 relative">
            {links.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                    location.pathname === link.path 
                      ? (isLightNav ? 'text-hire-teal font-semibold' : 'text-hire-accent font-semibold')
                      : (isLightNav ? 'hover:bg-hire-dark/5 hover:text-hire-teal' : 'hover:bg-white/10 hover:text-white')
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                     <div className={`absolute -bottom-1 left-4 right-4 h-0.5 rounded-full ${
                       isLightNav ? 'bg-hire-teal' : 'bg-hire-accent'
                     }`}></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            to="/contact" 
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
              isLightNav 
                ? 'bg-hire-teal text-hire-light hover:bg-hire-dark' 
                : 'bg-hire-light text-hire-teal hover:bg-white'
            }`}
          >
            Book a Free Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 -mr-2 rounded-full transition-colors ${
            isLightNav ? 'text-hire-dark hover:bg-hire-dark/5' : 'text-hire-light hover:bg-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-hire-dark text-hire-light z-40 min-h-[100dvh] pt-28 pb-12 overflow-y-auto"
          >
            <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none"></div>
            
            {/* Premium abstract glow for mobile */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-hire-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-hire-teal/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="container mx-auto px-6 flex flex-col h-full relative z-10">
               <ul className="flex flex-col gap-6 text-center text-3xl sm:text-4xl font-serif mt-auto">
                 {links.map((link) => (
                   <li key={link.name}>
                     <Link 
                       to={link.path} 
                       onClick={() => setIsOpen(false)}
                       className={`block py-2 transition-colors ${
                         location.pathname === link.path ? 'text-hire-accent' : 'text-hire-light/80 hover:text-hire-light'
                       }`}
                     >
                       {link.name}
                     </Link>
                   </li>
                 ))}
               </ul>
               <div className="mt-auto pt-16 flex justify-center pb-8">
                 <Link 
                   to="/contact" 
                   onClick={() => setIsOpen(false)}
                   className="w-full max-w-sm text-center px-8 py-5 bg-hire-accent text-hire-dark font-medium rounded-full shadow-lg hover:bg-[#d6b43d] hover:scale-105 transition-all text-lg"
                 >
                   Book Your Free Call
                 </Link>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
