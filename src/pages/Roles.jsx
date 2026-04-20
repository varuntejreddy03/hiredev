import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Cloud, Shield, Database, LayoutDashboard, Briefcase, Users, Navigation, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const technicalRoles = [
  { id: 'devops', title: 'DevOps Engineering', icon: Server, salary: '£45k - £85k+', desc: 'Bridge the gap between development and operations. High demand for CI/CD, Docker, and Kubernetes skills.' },
  { id: 'cloud', title: 'Cloud Engineering', icon: Cloud, salary: '£50k - £90k+', desc: 'Design, deploy, and manage AWS, Azure, or GCP infrastructure for enterprise clients.' },
  { id: 'qa', title: 'QA & Software Testing', icon: CheckCircle2, salary: '£35k - £65k+', desc: 'Ensure software quality through manual and automated testing frameworks (Selenium, Cypress).' },
  { id: 'data', title: 'Data Analysis & Engineering', icon: Database, salary: '£40k - £80k+', desc: 'Transform raw data into actionable insights using SQL, Python, and visualization tools.' },
  { id: 'cyber', title: 'Cyber Security', icon: Shield, salary: '£45k - £85k+', desc: 'Protect organizations from cyber threats as SOC Analysts or Security Engineers.' },
  { id: 'sap', title: 'SAP & ERP Consulting', icon: LayoutDashboard, salary: '£50k - £90k+', desc: 'Implement and optimize enterprise resource planning systems for large corporations.' }
];

const businessRoles = [
  { id: 'project-management', title: 'Project Management', icon: Briefcase, salary: '£45k - £80k+', desc: 'Lead IT projects from conception to delivery using Agile and Scrum methodologies.' },
  { id: 'business-analysis', title: 'Business Analysis', icon: Navigation, salary: '£45k - £75k+', desc: 'Act as the translation layer between business needs and technical requirements.' },
  { id: 'hr-ops', title: 'HR & People Operations', icon: Users, salary: '£35k - £60k+', desc: 'Manage tech talent acquisition, onboarding, and organizational culture.' },
  { id: 'admin', title: 'Operations & Administration', icon: LayoutDashboard, salary: '£30k - £50k+', desc: 'Ensure smooth day-to-day functional operations within tech-driven companies.' }
];

export default function Roles() {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <div className="pt-24 min-h-screen bg-hire-light">
      {/* HEADER */}
      <div className="bg-hire-dark text-hire-light py-20 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg z-0 opacity-20"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
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
            Pathways to Success
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-hire-light/80 max-w-2xl mx-auto"
          >
            We focus exclusively on high-growth areas where talent is scarce and visa sponsorships are actively offered in the UK.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* TABS */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white p-1 rounded border border-hire-dark/10 shadow-sm">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-8 py-3 rounded text-sm font-medium transition-all ${
                activeTab === 'technical' ? 'bg-hire-teal text-hire-light shadow' : 'text-hire-dark hover:bg-hire-light/50'
              }`}
            >
              Technical Roles
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-8 py-3 rounded text-sm font-medium transition-all ${
                activeTab === 'business' ? 'bg-hire-teal text-hire-light shadow' : 'text-hire-dark hover:bg-hire-light/50'
              }`}
            >
              Business & Functional
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeTab === 'technical' ? technicalRoles : businessRoles).map((role, i) => (
                <div key={role.id} className="bg-white p-8 border border-hire-dark/10 shadow-sm rounded group hover:border-hire-teal hover:shadow-md transition-all flex flex-col h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-hire-teal/5 rounded-full blur-2xl group-hover:bg-hire-teal/10 transition-colors"></div>
                  
                  <role.icon className="w-10 h-10 text-hire-teal mb-6" />
                  <h3 className="text-2xl font-serif text-hire-dark mb-4">{role.title}</h3>
                  <p className="text-hire-dark/70 text-sm leading-relaxed mb-8 flex-grow">
                    {role.desc}
                  </p>
                  
                  <Link to="/contact" className="text-hire-teal font-medium text-sm flex items-center gap-2 group-hover:text-hire-dark transition-colors mt-auto">
                    Discuss this pathway <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
