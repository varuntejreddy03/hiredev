import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-hire-darkest py-16 text-text-light">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-6 lg:grid-cols-4 lg:px-12">
        <div className="max-w-xs space-y-4">
          <Link to="/" className="group flex items-center gap-3">
            <svg
              width="36"
              height="36"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-sm transition-all duration-300 group-hover:scale-105"
            >
              <defs>
                <linearGradient id="footer-trend" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9A84C" />
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.45" />
                </linearGradient>
              </defs>
              <rect x="18" y="15" width="16" height="70" rx="2" fill="currentColor" />
              <rect x="66" y="15" width="16" height="70" rx="2" fill="currentColor" />
              <path d="M18 70 L82 25 L82 43 L18 88 Z" fill="url(#footer-trend)" />
            </svg>
            <span className="text-2xl font-bold tracking-tight">HireDev</span>
          </Link>

          <p className="text-sm leading-relaxed text-text-light">
            Helping individuals transition into successful IT careers in the UK with structured upskilling, placement support, and visa-backed opportunities.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/it-jobs-london-503216255/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/itjobs.london/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-medium text-hire-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-text-light">
            <li>
              <Link to="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/roles" className="transition-colors hover:text-white">
                Roles & Pathways
              </Link>
            </li>
            <li>
              <Link to="/placements" className="transition-colors hover:text-white">
                Success Stories
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Book a Call
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-medium text-hire-accent">Specialisations</h4>
          <ul className="space-y-2 text-sm text-text-light">
            <li>DevOps & Cloud</li>
            <li>QA & Software Testing</li>
            <li>Data Engineering</li>
            <li>Cyber Security</li>
            <li>Business Analysis</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-medium text-hire-accent">Contact Us</h4>
          <ul className="space-y-3 text-sm text-text-light">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0" />
              <span>
                03330116206
                <br />
                +44 7424 382023 (WhatsApp)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" />
              <a href="mailto:hiredevltd@gmail.com" className="transition-colors hover:text-white">
                hiredevltd@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span>
                307 Euston Road,
                <br />
                London, NW1 3AD
                <br />
                United Kingdom
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 border-t border-white/10 px-6 pt-8 text-center text-xs text-text-secondary lg:px-12">
        <p>(c) 2025 HireDev Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
