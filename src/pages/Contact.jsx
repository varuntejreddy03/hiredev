import { MapPin, Phone, Mail, Send, Linkedin, Instagram, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-hire-light">
      {/* HEADER */}
      <div className="bg-hire-dark text-hire-light py-20 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg z-0 opacity-20"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex justify-start">
             <Link to="/" className="inline-flex items-center gap-2 text-hire-accent hover:text-white transition-all font-mono text-xs uppercase tracking-widest group">
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} />
                Back to Home
             </Link>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif mb-6 text-balance"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-hire-light/80 max-w-2xl"
          >
            Ready to change your career trajectory? Drop us a message, and our team will get back to you with the next best steps.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-sm rounded border border-hire-dark/5"
          >
            <h2 className="text-3xl font-serif text-hire-dark mb-8">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-hire-dark">Full Name</label>
                  <input type="text" className="w-full p-3 bg-hire-light/50 border border-hire-dark/10 rounded focus:outline-none focus:border-hire-teal transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-hire-dark">Phone Number</label>
                  <input type="tel" className="w-full p-3 bg-hire-light/50 border border-hire-dark/10 rounded focus:outline-none focus:border-hire-teal transition-colors" placeholder="+44 ..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-hire-dark">Email Address</label>
                <input type="email" className="w-full p-3 bg-hire-light/50 border border-hire-dark/10 rounded focus:outline-none focus:border-hire-teal transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-hire-dark">Role Interest</label>
                <select className="w-full p-3 bg-hire-light/50 border border-hire-dark/10 rounded focus:outline-none focus:border-hire-teal transition-colors text-hire-dark">
                  <option value="">Select a pathway...</option>
                  <option value="devops">DevOps Engineering</option>
                  <option value="cloud">Cloud Engineering</option>
                  <option value="qa">QA & Testing</option>
                  <option value="data">Data Analysis / Engineering</option>
                  <option value="cyber">Cyber Security</option>
                  <option value="business">Business / Functional Roles</option>
                  <option value="other">Not Sure Yet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-hire-dark">Message / Background Info</label>
                <textarea rows="4" className="w-full p-3 bg-hire-light/50 border border-hire-dark/10 rounded focus:outline-none focus:border-hire-teal transition-colors resize-none" placeholder="Tell us about yourself..."></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-hire-teal text-hire-light rounded font-medium hover:bg-hire-dark transition-colors flex items-center justify-center gap-2">
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col h-full"
          >
            <div className="space-y-12 mb-12 flex-grow">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-hire-dark/50 mb-4">Direct Contact</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-hire-dark">
                    <div className="w-12 h-12 bg-hire-teal/10 rounded-full flex items-center justify-center text-hire-teal shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-medium">03330116206</div>
                      <a href="https://wa.me/447424382023" target="_blank" rel="noreferrer" className="text-sm text-hire-dark/60 hover:text-[#25D366] transition-colors">+44 7424 382023 (WhatsApp)</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 text-hire-dark">
                    <div className="w-12 h-12 bg-hire-teal/10 rounded-full flex items-center justify-center text-hire-teal shrink-0">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:hiredevltd@gmail.com" className="font-medium hover:text-hire-teal transition-colors">hiredevltd@gmail.com</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-hire-dark/50 mb-4">Social Presence</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/it-jobs-london-503216255/" target="_blank" rel="noreferrer" className="w-12 h-12 border border-hire-dark/10 rounded hover:bg-[#0A66C2] hover:text-white transition-all flex items-center justify-center text-hire-dark">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/itjobs.london/" target="_blank" rel="noreferrer" className="w-12 h-12 border border-hire-dark/10 rounded hover:bg-[#E1306C] hover:text-white transition-all flex items-center justify-center text-hire-dark">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-hire-dark/50 mb-4">Office Address</h3>
                <div className="flex items-start gap-4 text-hire-dark">
                   <div className="w-12 h-12 bg-hire-teal/10 rounded-full flex items-center justify-center text-hire-teal shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div className="font-medium pt-1">
                      307 Euston Road,<br />
                      London, United Kingdom<br />
                      NW1 3AD
                    </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="h-64 bg-hire-dark/5 rounded border border-hire-dark/10 overflow-hidden w-full relative">
               {/* Embed simple placeholder map iframe for 307 Euston Road */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3551842848386!2d-0.14197940000000001!3d51.525048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b284e313eb1%3A0x6e9f16e1caee3b6!2s307%20Euston%20Rd.%2C%20London%20NW1%203AD%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
