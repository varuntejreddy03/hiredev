import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const overlayNav = isHome && !scrolled && !isOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-[72px] border-b transition-all duration-300 ${
        overlayNav
          ? 'border-transparent bg-transparent'
          : 'border-white/8 bg-[rgba(8,15,30,0.95)] shadow-[0_2px_20px_rgba(0,0,0,0.3)] backdrop-blur-[12px]'
      }`}
    >
      {overlayNav && (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,15,30,0.7)_0%,rgba(8,15,30,0.18)_55%,rgba(8,15,30,0)_100%)]"></div>
      )}

      <div className="container relative mx-auto h-full px-6 lg:px-12">
        <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-6">
          <Link to="/" className="group flex items-center gap-3 text-white" onClick={() => setIsOpen(false)}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            >
              <defs>
                <linearGradient id="logo-trend" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9A84C" />
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.45" />
                </linearGradient>
              </defs>
              <rect x="18" y="15" width="16" height="70" rx="2" fill="currentColor" />
              <rect x="66" y="15" width="16" height="70" rx="2" fill="currentColor" />
              <path d="M18 70 L82 25 L82 43 L18 88 Z" fill="url(#logo-trend)" />
            </svg>
            <span className="text-[1.6rem] font-semibold tracking-tight">HireDev</span>
          </Link>

          <div className="hidden min-w-0 justify-center md:flex">
            <ul className="flex items-center gap-8 lg:gap-10">
              {links.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <li key={link.name} className="shrink-0">
                    <Link
                      to={link.path}
                      className={`relative block py-2 text-[15px] font-medium tracking-[0.01em] transition-colors ${
                        isActive ? 'text-white' : 'text-white/82 hover:text-white'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute inset-x-0 -bottom-1 block h-0.5 rounded-full bg-hire-accent"></span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center justify-end gap-3">
            <Link
              to="/contact"
              className="hidden rounded-[6px] bg-hire-accent px-[22px] py-[10px] text-[15px] font-semibold text-hire-dark transition-all hover:bg-[#d4b15a] md:inline-flex"
            >
              Book a Free Call
            </Link>

            <button
              className="rounded-md p-2 text-white transition-colors hover:bg-white/10 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute inset-x-0 top-[72px] border-t border-white/8 bg-[rgba(8,15,30,0.96)] px-6 py-6 backdrop-blur-[12px] md:hidden"
          >
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-[15px] font-medium tracking-[0.01em] transition-colors ${
                      location.pathname === link.path ? 'text-hire-accent' : 'text-white/82 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 inline-flex rounded-[6px] bg-hire-accent px-[22px] py-[10px] text-[15px] font-semibold text-hire-dark"
            >
              Book a Free Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
