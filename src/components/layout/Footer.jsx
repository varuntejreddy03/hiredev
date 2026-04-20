import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-hire-dark text-hire-light py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4 max-w-xs">
          <Link to="/" className="flex items-center gap-3 group">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-all duration-300 drop-shadow-sm">
              <defs>
                <linearGradient id="footer-trend" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E8C547" />
                  <stop offset="100%" stopColor="#E8C547" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <rect x="18" y="15" width="16" height="70" rx="2" fill="currentColor" />
              <rect x="66" y="15" width="16" height="70" rx="2" fill="currentColor" />
              <path d="M18 70 L82 25 L82 43 L18 88 Z" fill="url(#footer-trend)" />
            </svg>
            <span className="font-serif text-2xl font-bold tracking-tight">HireDev</span>
          </Link>
          <p className="text-sm text-hire-light/80">
            Helping individuals transition into successful IT careers in the UK — even with no prior tech experience.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.linkedin.com/in/it-jobs-london-503216255/" target="_blank" rel="noreferrer" className="hover:text-hire-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/itjobs.london/" target="_blank" rel="noreferrer" className="hover:text-hire-accent transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl font-medium mb-4 text-hire-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-hire-light/80">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/roles" className="hover:text-white transition-colors">Roles & Pathways</Link></li>
            <li><Link to="/placements" className="hover:text-white transition-colors">Success Stories</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Book a Call</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-medium mb-4 text-hire-accent">Specialisations</h4>
          <ul className="space-y-2 text-sm text-hire-light/80">
            <li>DevOps & Cloud</li>
            <li>QA & Software Testing</li>
            <li>Data Engineering</li>
            <li>Cyber Security</li>
            <li>Business Analysis</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-medium mb-4 text-hire-accent">Contact Us</h4>
          <ul className="space-y-3 text-sm text-hire-light/80">
            <li className="flex items-start gap-3">
              <Phone size={18} className="shrink-0 mt-0.5" />
              <span>03330116206<br />+44 7424 382023 (WhatsApp)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" />
              <a href="mailto:hiredevltd@gmail.com" className="hover:text-white">hiredevltd@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5" />
              <span>307 Euston Road,<br />London, NW1 3AD<br />United Kingdom</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-hire-light/10 text-center text-xs text-hire-light/50">
        <p>© 2025 HireDev Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
