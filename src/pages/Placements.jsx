import { motion } from 'framer-motion';
import { Building2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const companies = [
  "JP Morgan",
  "Lloyds Banking Group",
  "Amazon",
  "Zoom",
  "Cellular Origins",
  "Big 4 Companies",
  "10x Banking",
  "Reply Group"
];

export default function Placements() {
  return (
    <div className="pt-24 min-h-screen bg-hire-light relative">
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-bl from-hire-teal/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* HEADER */}
        <div className="text-center max-w-6xl mx-auto mb-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex justify-start">
             <Link to="/" className="inline-flex items-center gap-2 text-hire-teal hover:text-hire-dark transition-all font-mono text-xs uppercase tracking-widest group">
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
            className="text-xl text-hire-dark/70 text-balance"
          >
            We don't just secure jobs; we secure roles at some of the most prestigious technical organizations and financial institutions in the UK with full visa sponsorship.
          </motion.p>
        </div>

        {/* GRID OF COMPANIES */}
        <div className="mb-24">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
             {companies.map((company, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="bg-white group overflow-hidden border border-hire-dark/5 shadow-sm rounded-xl aspect-video md:aspect-square flex flex-col items-center justify-center p-6 text-center hover:border-hire-teal hover:shadow-md transition-all duration-300 relative"
               >
                 {/* Decorative background glow on hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-hire-teal/0 to-hire-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 <div className="w-16 h-16 bg-hire-light rounded-full flex items-center justify-center text-hire-teal mb-4 group-hover:scale-110 group-hover:bg-hire-teal group-hover:text-hire-light transition-all duration-300 z-10 shadow-sm border border-hire-dark/5">
                   <Building2 size={24} />
                 </div>
                 <h3 className="font-serif text-lg md:text-xl text-hire-dark leading-tight z-10 group-hover:text-hire-teal transition-colors">
                    {company}
                 </h3>
               </motion.div>
             ))}
           </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 bg-hire-teal rounded-2xl p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 noise-bg z-0 opacity-10"></div>
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-hire-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-hire-dark/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

           <div className="relative z-10 max-w-2xl mx-auto text-hire-light">
             <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Your Name Could Be On The Next Offer Letter</h2>
             <p className="text-lg text-hire-light/80 mb-10 text-balance">We have the roadmaps, the training, and the network. You just need to take the first step toward your new career in IT.</p>
             <Link to="/contact" className="px-8 py-4 bg-hire-accent text-hire-dark font-medium rounded hover:bg-[#d6b43d] transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
               Book Your Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
