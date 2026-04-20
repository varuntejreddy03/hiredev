import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight, CheckCircle2, GraduationCap, Briefcase, RefreshCw, Users, Star } from 'lucide-react';

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const roles = ["DevOps", "Cloud", "QA", "Data", "SAP", "Cyber Security"];
  
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-hire-dark overflow-hidden pt-20">
        <div className="absolute inset-0 noise-bg z-[1]"></div>
        
        {/* Dynamic Glow Background */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-hire-teal/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-hire-accent/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none -translate-y-1/4 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 text-hire-light text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hire-light/10 bg-hire-light/5 backdrop-blur-sm text-xs md:text-sm font-mono text-hire-accent mb-6 md:mb-8 shadow-[0_0_15px_rgba(232,197,71,0.1)]">
              <span className="w-2 h-2 rounded-full bg-hire-accent animate-pulse"></span>
              Transforming Careers Across The UK
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] mb-6 leading-[1.1] md:leading-[1.1] font-light text-balance text-hire-light">
              Your Career in UK <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-hire-light to-hire-teal font-medium">Tech Starts Here</span>
            </h1>
            <p className="text-lg md:text-xl text-hire-light/70 mb-8 md:mb-10 text-balance leading-relaxed max-w-xl">
              We've placed 89+ professionals into roles at JP Morgan, Amazon, Lloyds & more — complete with full visa sponsorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto text-center px-8 py-4 bg-hire-accent text-hire-dark font-medium rounded hover:bg-[#d6b43d] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(232,197,71,0.3)]">
                Book a Free Call
              </Link>
              <Link to="/placements" className="w-full sm:w-auto text-center px-8 py-4 flex items-center justify-center gap-2 text-hire-light font-medium border border-hire-light/20 rounded hover:bg-hire-light/10 transition-all group">
                See Our Placements <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.4 }}
             className="lg:col-span-5 relative hidden lg:block"
          >
             {/* Abstract Glassmorphism Visual Block */}
             <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-hire-light/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-8 shadow-2xl flex flex-col justify-between">
                <div>
                   <div className="w-12 h-12 rounded-lg bg-hire-accent/20 flex items-center justify-center text-hire-accent mb-6 shadow-sm border border-hire-accent/20">
                     <GraduationCap size={24} />
                   </div>
                   <h3 className="text-3xl font-serif text-hire-light leading-tight mb-2">From application<br/>to placement.</h3>
                   <p className="text-hire-light/60 text-sm">We handle the roadmap, the upskilling, and the network.</p>
                </div>
                
                <div className="space-y-3">
                  {["DevOps & Cloud", "Data Analytics", "Cyber Security", "QA Automation"].map((role, i) => (
                    <motion.div 
                      key={role}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + (i * 0.1) }}
                      className="flex items-center justify-between p-4 rounded-lg bg-hire-dark/60 border border-hire-light/5 hover:border-hire-teal/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-hire-teal shadow-[0_0_8px_rgba(28,92,92,0.8)]"></div>
                         <span className="font-mono text-sm text-hire-light/90">{role}</span>
                      </div>
                      <span className="text-hire-accent/80 text-[10px] uppercase tracking-widest font-medium">High Demand</span>
                    </motion.div>
                  ))}
                </div>
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-8 -bottom-8 rounded-xl bg-hire-teal p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-hire-light/20 backdrop-blur-md z-20"
             >
               <div className="text-4xl font-serif text-hire-light font-bold mb-1">100%</div>
               <div className="text-sm font-mono text-hire-accent uppercase tracking-widest">Visa Success Rate</div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-hire-light py-12 border-b border-hire-dark/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="shrink-0 md:border-r border-hire-dark/10 md:pr-12 md:mr-4">
             <p className="text-xs font-bold text-hire-dark/40 font-mono uppercase tracking-widest text-center md:text-left">Trusted By<br/>The Best</p>
          </div>
          <div className="flex-1 flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
             {["JP Morgan", "Amazon", "Lloyds Bank", "Zoom", "Big 4"].map((brand) => (
                <div key={brand} className="font-serif font-bold text-2xl md:text-3xl tracking-tight text-hire-dark hover:text-hire-teal transition-colors">
                  {brand}
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* 2. STATS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-hire-dark/10">
            <div className="text-center md:px-8 py-4">
              <div className="text-5xl font-mono font-medium text-hire-teal mb-4">89+</div>
              <div className="font-serif text-xl font-medium text-hire-dark">Successful Placements</div>
            </div>
            <div className="text-center md:px-8 py-4">
              <div className="text-5xl font-mono font-medium text-hire-teal mb-4">4+</div>
              <div className="font-serif text-xl font-medium text-hire-dark">Years of Proven Success</div>
            </div>
            <div className="text-center md:px-8 py-4">
              <div className="text-5xl font-mono font-medium text-hire-teal mb-4">100%</div>
              <div className="font-serif text-xl font-medium text-hire-dark">Visa Sponsorship Track Record</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. WHO WE HELP SECTION */}
      <section className="py-24 bg-hire-light">
        <div className="container mx-auto px-6 lg:px-12 object-cover">
          <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-hire-dark mb-6">Who We Support</h2>
            <p className="text-lg text-hire-dark/70">Whether you're starting from scratch or looking for a pivot, we have a structured pathway for you.</p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "Students", desc: "Start your career on the right foot before graduation." },
              { icon: Users, title: "Freshers", desc: "Transition from university to your first major IT role." },
              { icon: Briefcase, title: "Professionals", desc: "Upskill and land higher-paying roles in leading firms." },
              { icon: RefreshCw, title: "Career Changers", desc: "Pivot from non-tech to a rewarding IT career safely." }
            ].map((card, i) => (
              <AnimatedSection key={card.title} className="bg-hire-teal p-8 rounded shadow-lg group hover:bg-hire-dark transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-hire-accent/10 rounded-full blur-3xl group-hover:bg-hire-accent/20 transition-colors"></div>
                <card.icon className="w-10 h-10 text-hire-accent mb-6" />
                <h3 className="text-xl font-serif text-hire-light mb-3">{card.title}</h3>
                <p className="text-hire-light/80 text-sm leading-relaxed">{card.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 bg-white border-b border-hire-dark/5">
        <div className="container mx-auto px-6 lg:px-12">
           <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-hire-dark mb-6">Your Transformation Process</h2>
          </AnimatedSection>
          
          <div className="relative">
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-hire-teal/20"></div>
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "01", title: "Free Consultation", desc: "We discuss your background, interests, and visa status to map out possibilities." },
                { step: "02", title: "Role Matching & Training", desc: "Structured upskilling tailored to high-demand UK roles to get you interview-ready." },
                { step: "03", title: "Job Offer & Visa", desc: "We connect you with our network, prepare you for interviews, and support via placement." }
              ].map((item, i) => (
                <AnimatedSection key={item.step} className="bg-white pt-8 relative">
                  <div className="w-16 h-16 bg-hire-light border border-hire-teal/20 rounded-full flex items-center justify-center text-2xl font-serif text-hire-teal mb-8 mx-auto md:mx-0 shadow-sm relative z-20">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium text-hire-dark mb-4 text-center md:text-left">{item.title}</h3>
                  <p className="text-hire-dark/70 text-center md:text-left leading-relaxed">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROLES SECTION */}
      <section className="py-24 bg-hire-dark text-hire-light relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection className="grid lg:grid-cols-12 gap-16">
             <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">Specialised IT Pathways</h2>
                <p className="text-hire-light/70 text-lg mb-8 text-balance">
                  We don't just place generically. We focus on high-growth areas where 
                  talent is scarce and visa sponsorships are actively offered.
                </p>
                <div className="inline-block">
                  <Link to="/roles" className="text-hire-accent border-b border-hire-accent/30 hover:border-hire-accent pb-1 transition-colors flex items-center gap-2">
                    Explore all roles <ArrowRight size={16} />
                  </Link>
                </div>
             </div>
             
             <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <h3 className="text-xl font-serif text-hire-accent mb-6 border-b border-hire-light/10 pb-4">Technical Roles</h3>
                  <ul className="space-y-4">
                    {["DevOps Engineering", "Cloud Engineering", "QA & Software Testing", "Data Analysis", "Cyber Security", "SAP Consulting"].map((role) => (
                      <li key={role} className="flex flex-wrap gap-2 items-center group cursor-default">
                        <CheckCircle2 size={16} className="text-hire-teal group-hover:text-hire-accent transition-colors" />
                        <span className="font-mono text-sm tracking-tight hover:text-white transition-colors">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-hire-accent mb-6 border-b border-hire-light/10 pb-4">Business Roles</h3>
                  <ul className="space-y-4">
                    {["Project Management", "Business Analysis", "HR & People Ops", "Operations & Admin"].map((role) => (
                      <li key={role} className="flex items-center gap-2 group cursor-default">
                        <CheckCircle2 size={16} className="text-hire-teal group-hover:text-hire-accent transition-colors" />
                        <span className="font-mono text-sm tracking-tight hover:text-white transition-colors">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* 6. SOCIAL PROOF */}
      <section className="py-24 bg-hire-light overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-hire-dark mb-6">Success Stories</h2>
            <p className="text-lg text-hire-dark/70">Don't just take our word for it. Join 89+ others.</p>
          </AnimatedSection>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[320px] md:min-w-[400px] snap-center bg-white p-8 rounded shadow-sm border border-hire-dark/5">
                <div className="flex gap-1 text-hire-accent mb-6">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="font-serif italic text-lg text-hire-dark mb-8 leading-relaxed">
                  "HireDev helped me transition from a totally different field. They upskilled me, prepared me for the interview, and got me into a great role with full visa sponsorship."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-hire-teal/10 rounded-full flex items-center justify-center text-hire-teal font-serif font-bold">A.K.</div>
                  <div>
                    <div className="font-bold text-hire-dark text-sm">Placed as DevOps Engineer</div>
                    <div className="text-xs text-hire-dark/60 font-mono mt-1">Tier 2 Visa Sponsored</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 bg-hire-teal relative overflow-hidden">
         <div className="absolute inset-0 noise-bg z-0 opacity-10"></div>
         <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-3xl">
           <h2 className="text-4xl md:text-6xl font-serif text-hire-light mb-6">Ready to Switch to IT?</h2>
           <p className="text-xl text-hire-light/80 mb-10 text-balance">
             Take the first step toward a rewarding, high-paying career in the UK tech market.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="https://wa.me/447424382023" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-medium rounded hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2">
               Chat on WhatsApp
             </a>
             <Link to="/contact" className="px-8 py-4 bg-transparent border border-hire-light text-hire-light font-medium rounded hover:bg-hire-light hover:text-hire-teal transition-colors">
               Email Inquiry
             </Link>
           </div>
         </div>
      </section>

    </div>
  );
}
