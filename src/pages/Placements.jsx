import { motion } from 'framer-motion';
import { Building2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allPlacementCompanies } from '../data/placements';

export default function Placements() {
  return (
    <div className="relative min-h-screen bg-hire-surface pt-24">
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute top-0 right-0 h-[500px] w-1/2 bg-gradient-to-bl from-hire-light to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* HEADER */}
        <div className="text-center max-w-6xl mx-auto mb-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex justify-start">
             <Link to="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-hire-dark transition-all font-mono text-xs uppercase tracking-widest group">
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} />
                Back to Home
             </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-hire-dark text-hire-accent font-mono px-4 py-1.5 rounded text-sm mb-6 shadow-lg"
          >
            89+ Placements & Counting
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-hire-dark mb-6"
          >
            Where Our Alumni Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary text-balance"
          >
            We don't just secure jobs; we secure roles at some of the most prestigious technical organizations and financial institutions in the UK with full visa sponsorship.
          </motion.p>
        </div>

        {/* GRID OF COMPANIES */}
        <div className="mb-24">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
             {allPlacementCompanies.map((company, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="group relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-xl border border-[#E2E8F0] bg-hire-surface p-6 text-center shadow-[0_12px_28px_rgba(10,22,44,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-hire-dark hover:bg-white hover:shadow-[0_16px_36px_rgba(10,22,44,0.08)] md:aspect-square"
               >
                 {/* Decorative background glow on hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white to-hire-light opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                 
                 <div className="z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-hire-dark shadow-sm transition-all duration-300 group-hover:scale-110">
                   <Building2 size={24} />
                 </div>
                 <h3 className="z-10 text-lg font-semibold leading-tight text-hire-dark transition-colors md:text-xl">
                    {company}
                 </h3>
               </motion.div>
             ))}
           </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="relative mt-24 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0F1E3C_0%,#1C2E4A_100%)] p-12 text-center shadow-2xl lg:p-20">
           <div className="absolute inset-0 noise-bg z-0 opacity-10"></div>
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-hire-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-hire-dark/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

           <div className="relative z-10 mx-auto max-w-2xl text-hire-light">
             <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Your Name Could Be On The Next Offer Letter</h2>
             <p className="mb-10 text-lg text-text-light text-balance">We have the roadmaps, the training, and the network. You just need to take the first step toward your new career in IT.</p>
             <Link to="/contact" className="px-8 py-4 bg-hire-accent text-hire-dark font-medium rounded hover:bg-[#d4b15a] transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
               Book Your Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
