import { motion } from 'framer-motion';
import { Target, Users, BookOpen, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-hire-light">
      {/* HEADER */}
      <div className="bg-hire-dark text-hire-light py-24 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg z-0 opacity-20"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex justify-start">
             <Link to="/" className="inline-flex items-center gap-2 text-hire-accent hover:text-white transition-all font-mono text-xs uppercase tracking-widest group">
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} />
                Back to Home
             </Link>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Empowering Careers in UK Tech
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-hire-light/80 text-balance leading-relaxed mx-auto"
          >
            We are more than just a recruitment agency. We are a career accelerator dedicated to bridging the gap between untapped potential and industry demand.
          </motion.p>
        </div>
      </div>

      {/* MISSION & STORY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-sm font-mono uppercase tracking-widest text-hire-teal mb-2">Our Mission</h2>
              <h3 className="text-4xl font-serif text-hire-dark leading-tight">
                Helping individuals transition into successful IT careers in the UK — even with no prior tech experience.
              </h3>
              <p className="text-hire-dark/70 text-lg leading-relaxed">
                HireDev started with a simple observation: exceptional talent often goes unnoticed due to a lack of formal pathways or visa complexities. We step in to solve both. 
              </p>
              <p className="text-hire-dark/70 text-lg leading-relaxed">
                By providing structured upskilling, interview preparation, and direct placement opportunities with top UK firms, we ensure that students, freshers, and career changers don't just find jobs—they build lasting careers.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/5] bg-hire-dark/5 rounded overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Team meeting" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-hire-teal text-hire-light p-8 rounded shadow-xl hidden md:block max-w-[250px]">
                <div className="text-5xl font-mono mb-2">100%</div>
                <div className="font-serif text-lg leading-tight">Track record of securing roles with visa sponsorship.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-hire-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-hire-dark mb-4">Our Values</h2>
            <p className="text-lg text-hire-dark/70 max-w-2xl mx-auto">The principles that guide how we train, place, and support our candidates.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "We match candidates to roles where they have the highest probability of long-term success." },
              { icon: ShieldCheck, title: "Integrity", desc: "No false promises. We only take on candidates we genuinely believe we can place." },
              { icon: BookOpen, title: "Continuous Learning", desc: "Technology evolves rapidly, and our pathways adapt just as quickly." },
              { icon: Users, title: "Community", desc: "When you join HireDev, you gain an ecosystem of mentors and alumni." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-hire-dark/5 shadow-sm rounded text-center group hover:border-hire-teal transition-colors"
              >
                <div className="w-16 h-16 bg-hire-light rounded-full flex items-center justify-center text-hire-teal mx-auto mb-6 group-hover:bg-hire-teal group-hover:text-hire-light transition-colors">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-serif text-hire-dark mb-3">{value.title}</h3>
                <p className="text-sm text-hire-dark/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE STATS */}
      <section className="py-24 bg-hire-dark text-hire-light relative overflow-hidden">
        <div className="absolute inset-0 noise-bg z-0"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-16">Our Impact So Far</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-hire-light/10">
            <div className="px-4">
              <div className="text-4xl md:text-6xl font-mono text-hire-accent mb-2">4+</div>
              <div className="font-serif text-lg">Years Active</div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-6xl font-mono text-hire-accent mb-2">89+</div>
              <div className="font-serif text-lg">Placements</div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-6xl font-mono text-hire-accent mb-2">6+</div>
              <div className="font-serif text-lg">Core Sectors</div>
            </div>
            <div className="px-4">
              <div className="text-4xl md:text-6xl font-mono text-hire-accent mb-2">100%</div>
              <div className="font-serif text-lg">Visa Success</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
