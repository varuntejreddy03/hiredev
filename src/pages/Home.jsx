import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  RefreshCw,
  Star,
  Users,
} from 'lucide-react';
import {
  allPlacementCompanies,
  featuredPlacementCompanies,
} from '../data/placements';

const heroRoles = [
  'DevOps & Cloud',
  'Data Analytics',
  'Cyber Security',
  'QA Automation',
];

const supportCards = [
  {
    icon: GraduationCap,
    title: 'Students',
    desc: 'Start your career on the right foot before graduation.',
  },
  {
    icon: Users,
    title: 'Freshers',
    desc: 'Transition from university to your first major IT role.',
  },
  {
    icon: Briefcase,
    title: 'Professionals',
    desc: 'Upskill and land higher-paying roles in leading firms.',
  },
  {
    icon: RefreshCw,
    title: 'Career Changers',
    desc: 'Pivot from non-tech to a rewarding IT career safely.',
  },
];

const transformationSteps = [
  {
    step: '01',
    title: 'Free Consultation',
    desc: 'We discuss your background, interests, and visa status to map out possibilities.',
  },
  {
    step: '02',
    title: 'Role Matching & Training',
    desc: 'Structured upskilling tailored to high-demand UK roles to get you interview-ready.',
  },
  {
    step: '03',
    title: 'Job Offer & Visa',
    desc: 'We connect you with our network, prepare you for interviews, and support via placement.',
  },
];

const technicalRoles = [
  'DevOps Engineering',
  'Cloud Engineering',
  'QA & Software Testing',
  'Data Analysis',
  'Cyber Security',
  'SAP Consulting',
];

const businessRoles = [
  'Project Management',
  'Business Analysis',
  'HR & People Ops',
  'Operations & Admin',
];

const testimonials = [
  {
    name: 'Ganesh V',
    initials: 'GV',
    quote: 'I had a really positive experience with IT Jobs in London. As someone transitioning from a student to securing a DevOps role, their guidance made a big difference. They supported me with job applications, interview preparation, and documentation. What stood out most was the ongoing support even after getting a job — they stayed in touch and helped during my probation period.',
  },
  {
    name: 'Surthi',
    initials: 'S',
    quote: 'I had some initial fears before joining, especially as an Indian migrant, since trust doesn\'t come easily when starting something new in a different country. They arranged a call with one of their previous placements, which genuinely boosted my confidence. Thanks to their support, I landed a great role and I\'ve been working there for the past 8 months without any extra stress.',
  },
  {
    name: 'Rahul Jaat',
    initials: 'RJ',
    quote: 'Great service and very supportive team. They guided me properly and helped me land a job without stress. Highly recommended!',
  },
  {
    name: 'Preeti',
    initials: 'P',
    quote: 'I had a lot of doubts before joining, especially coming from a different background. But the way they handled my concerns and supported me throughout really built my confidence. From applications to interviews, everything was well guided. Today I\'m in a stable role and very happy with the outcome.',
  },
  {
    name: 'Siva Sankar',
    initials: 'SS',
    quote: 'Me and my friend joined at the same time in 2022 when the market was crashing, so we were honestly unsure in the beginning. I got placed within 30 days, and my friend within 22 days, which was beyond what we expected. They guided us step by step and kept things clear and practical.',
  },
  {
    name: 'Nitish',
    initials: 'N',
    quote: 'Very result-oriented support. I was able to secure a role within a short time thanks to their guidance. They helped with interviews, documentation, and overall preparation. Everything was structured and clear.',
  },
  {
    name: 'Robin',
    initials: 'R',
    quote: 'They helped me get placed in an internship. Good service and very supportive team throughout the process.',
  },
  {
    name: 'Sai Varma',
    initials: 'SV',
    quote: 'I got placed in an internship through them. The service was really good, and they were supportive at every step.',
  },
  {
    name: 'Ravali',
    initials: 'R',
    quote: 'Good service. Helped me secure an internship smoothly. Highly recommend.',
  },
  {
    name: 'Harish',
    initials: 'H',
    quote: 'Really good experience! They helped me land an internship and supported me throughout.',
  },
];

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="bg-hire-surface">
      <section className="relative min-h-screen overflow-hidden bg-hire-dark">
        <div className="relative h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1800"
            alt="Technology professionals collaborating in a modern office"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,15,30,0.92)_0%,rgba(8,15,30,0.75)_50%,rgba(8,15,30,0.35)_100%)]"></div>
          <div className="absolute inset-0 noise-bg opacity-[0.1]"></div>

          <div className="container relative z-10 mx-auto grid min-h-screen items-center gap-12 px-6 pb-16 pt-[112px] lg:grid-cols-[55fr_45fr] lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="max-w-[640px] self-center text-hire-light"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-hire-accent"></span>
                  Transforming Careers Across The UK
                </div>
                <h1 className="mt-6 max-w-[620px] text-[clamp(42px,5vw,68px)] leading-[1.1] font-bold text-balance text-white">
                  Your Career in UK Tech Starts Here
                </h1>
                <p className="mt-5 max-w-[480px] text-[17px] leading-[1.6] text-white/75">
                  We&apos;ve placed 89+ professionals into roles at JP Morgan, Amazon, Lloyds Banking Group, Zoom, and more with full visa sponsorship support.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-[6px] bg-hire-accent px-7 py-3.5 text-center text-[15px] font-bold text-hire-dark transition-all hover:bg-[#d4b15a] hover:shadow-[0_18px_40px_rgba(201,168,76,0.25)]"
                  >
                    Book a Free Call
                  </Link>
                  <Link
                    to="/placements"
                    className="group inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/25 bg-white/10 px-7 py-3.5 text-center text-[15px] font-medium text-white transition-all hover:bg-white/14"
                  >
                    See Our Placements
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
                className="hidden w-full max-w-[400px] justify-self-end self-center rounded-2xl bg-white p-8 text-hire-dark shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:flex lg:flex-col"
              >
                <div>
                  <div className="inline-flex items-center rounded-[6px] bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.1em] text-text-secondary">
                    Popular Pathways
                  </div>
                  <h2 className="mt-4 text-[26px] font-semibold leading-[1.2] text-hire-dark">From application to placement.</h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    We handle the roadmap, the upskilling, and the introductions.
                  </p>
                </div>

                <div className="mt-6 space-y-2.5">
                  {heroRoles.map((role) => (
                    <div
                      key={role}
                      className="mt-2.5 flex items-center justify-between rounded-lg bg-hire-surface px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-hire-accent shadow-[0_0_18px_rgba(201,168,76,0.55)]"></div>
                        <span className="font-semibold text-hire-dark">{role}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-text-secondary">
                        High Demand
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[10px] bg-hire-accent px-5 py-4 text-hire-dark">
                  <div className="text-[32px] font-bold leading-none">100%</div>
                  <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.1em]">
                    Visa Success Rate
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      <div className="border-y border-[#E2E8F0] bg-white py-14 md:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <p className="text-xs font-mono uppercase tracking-[0.32em] text-text-secondary">
                Trusted By The Best
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Featured placements. The wider verified employer list appears further down the page.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
              {featuredPlacementCompanies.map((brand) => (
                <div
                  key={brand}
                  className="text-2xl font-bold tracking-tight text-hire-dark transition-colors hover:text-hire-mid md:text-3xl"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="grid gap-8 rounded-[32px] border border-[#E2E8F0] bg-hire-surface p-10 shadow-[0_18px_70px_rgba(10,22,44,0.08)] md:grid-cols-3 md:divide-x md:divide-[#E2E8F0]">
            <div className="py-4 text-center md:px-8">
              <div className="mb-4 text-6xl font-bold text-hire-dark">89+</div>
              <div className="text-xl font-medium text-hire-dark">Successful Placements</div>
            </div>
            <div className="py-4 text-center md:px-8">
              <div className="mb-4 text-6xl font-bold text-hire-dark">4+</div>
              <div className="text-xl font-medium text-hire-dark">Years of Proven Success</div>
            </div>
            <div className="py-4 text-center md:px-8">
              <div className="mb-4 text-6xl font-bold text-hire-dark">100%</div>
              <div className="text-xl font-medium text-hire-dark">Visa Sponsorship Track Record</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-hire-surface py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-6 text-4xl text-hire-dark md:text-5xl">Who We Support</h2>
            <p className="text-lg text-text-secondary">
              Whether you&apos;re starting from scratch or looking for a pivot, we have a structured pathway for you.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportCards.map((card) => (
              <AnimatedSection
                key={card.title}
                className="group relative overflow-hidden rounded-[28px] border border-hire-mid bg-hire-mid p-8 shadow-[0_20px_45px_rgba(18,31,60,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_rgba(18,31,60,0.28)]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-hire-accent/20 blur-3xl transition-colors"></div>
                <card.icon className="mb-6 h-10 w-10 text-hire-accent" />
                <h3 className="mb-3 text-xl text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-white/85">{card.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#E2E8F0] bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="mb-6 text-4xl text-hire-dark md:text-5xl">Your Transformation Process</h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-0 top-[60px] hidden h-px w-full bg-[#E2E8F0] md:block"></div>
            <div className="relative z-10 grid gap-12 md:grid-cols-3">
              {transformationSteps.map((item) => (
                <AnimatedSection key={item.step} className="relative rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-[0_16px_36px_rgba(10,22,44,0.08)]">
                  <div className="relative z-20 mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#E2E8F0] bg-hire-surface text-2xl font-semibold text-hire-dark shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="mb-4 text-center text-xl font-medium text-hire-dark md:text-left">
                    {item.title}
                  </h3>
                  <p className="text-center leading-relaxed text-text-secondary md:text-left">
                    {item.desc}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-hire-dark py-24 text-hire-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.16),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(36,78,121,0.45),transparent_28%)]"></div>
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <AnimatedSection className="grid gap-16 lg:grid-cols-12">
            <div className="flex flex-col justify-center lg:col-span-5">
              <h2 className="mb-6 text-4xl text-balance text-white md:text-5xl">Specialised IT Pathways</h2>
              <p className="mb-8 text-lg text-balance text-text-light">
                We don&apos;t just place generically. We focus on high-growth areas where talent is scarce and visa sponsorships are actively offered.
              </p>
              <div className="inline-block">
                <Link
                  to="/roles"
                  className="flex items-center gap-2 border-b border-hire-accent/30 pb-1 text-hire-accent transition-colors hover:border-hire-accent"
                >
                  Explore all roles <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="grid gap-x-8 gap-y-12 lg:col-span-7 sm:grid-cols-2">
              <div>
                <h3 className="mb-6 border-b border-hire-light/10 pb-4 text-xl text-hire-accent">
                  Technical Roles
                </h3>
                <ul className="space-y-4">
                  {technicalRoles.map((role) => (
                    <li key={role} className="group flex flex-wrap items-center gap-2">
                      <CheckCircle2 size={16} className="text-hire-accent transition-colors" />
                      <span className="text-sm tracking-tight text-text-light transition-colors group-hover:text-white">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-6 border-b border-hire-light/10 pb-4 text-xl text-hire-accent">
                  Business Roles
                </h3>
                <ul className="space-y-4">
                  {businessRoles.map((role) => (
                    <li key={role} className="group flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-hire-accent transition-colors" />
                      <span className="text-sm tracking-tight text-text-light transition-colors group-hover:text-white">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-mono uppercase tracking-[0.32em] text-hire-teal">
                Our Placements
              </p>
              <h2 className="mt-6 text-4xl text-hire-dark md:text-5xl">
                Current verified placements across banking, consulting, SaaS, and engineering.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                A dedicated snapshot of the employers where HireDev candidates have landed roles. The featured strip above stays curated, while the wider placement list lives here.
              </p>
              <Link
                to="/placements"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-hire-dark/10 px-6 py-3 font-medium text-hire-dark transition-colors hover:border-hire-teal hover:text-hire-teal"
              >
                View full placements page <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {allPlacementCompanies.map((company) => (
                <div
                  key={company}
                  className="group rounded-[24px] border border-[#E2E8F0] bg-hire-surface p-5 shadow-[0_12px_28px_rgba(10,22,44,0.06)] transition-all hover:-translate-y-1 hover:border-hire-dark hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-hire-dark shadow-sm">
                      <Building2 size={18} />
                    </div>
                    <div className="text-lg font-semibold text-hire-dark">{company}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-hire-surface py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="mb-6 text-4xl text-hire-dark md:text-5xl">Success Stories</h2>
            <p className="text-lg text-text-secondary">Don&apos;t just take our word for it. Join 89+ others.</p>
          </AnimatedSection>

          <div className="hide-scrollbar flex snap-x gap-6 overflow-x-auto pb-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-[320px] snap-center rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-[0_16px_34px_rgba(10,22,44,0.08)] md:min-w-[400px]"
              >
                <div className="mb-6 flex gap-1 text-hire-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mb-8 text-[15px] leading-relaxed text-hire-dark italic">
                  &quot;{t.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hire-light font-bold text-hire-dark">
                    {t.initials}
                  </div>
                  <div className="text-sm font-bold text-hire-dark">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-hire-dark py-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0F1E3C_0%,#1C2E4A_100%)]"></div>
        <div className="absolute inset-0 noise-bg opacity-10"></div>
        <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-12">
          <h2 className="mb-6 text-4xl text-hire-light md:text-6xl">Ready to Switch to IT?</h2>
          <p className="mb-10 text-xl text-balance text-text-light">
            Take the first step toward a rewarding, high-paying career in the UK tech market.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/447424382023"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-medium text-white transition-colors hover:bg-[#1EBE5D]"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-white bg-transparent px-8 py-4 font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
            >
              Email Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
