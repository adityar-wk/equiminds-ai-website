import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { TiltCard } from '@/src/components/TiltCard';

type LightProduct = {
  id: string;
  dark?: false;
  platform: string;
  name: string;
  tagline: string;
  positioning: string;
  problem: string;
  solution: string;
  capabilities: string[];
  outcomes: { label: string; desc: string }[];
};

type DarkProduct = {
  id: string;
  dark: true;
  platform: string;
  name: string;
  tagline: string;
  positioning: string;
  problem: string;
  solution: string;
  coverImage: string;
  link?: string;
  modulesLabel: string;
  steps: { num: string; title: string; desc: string }[];
  capabilities: string[];
  outcomes: { label: string; desc: string }[];
};

type Product = LightProduct | DarkProduct;

const products: Product[] = [
  {
    id: '01',
    dark: true,
    platform: 'ANALYTICS PLATFORM',
    name: 'VizAI',
    tagline: 'Natural Language Data Visualization Board',
    positioning: '"A natural-language analytics platform that turns plain English questions into business dashboards and visual insights — no SQL, no BI expertise required."',
    problem: 'Organizations struggled to convert data into timely business insights due to heavy reliance on technical teams, manual dashboard creation, and complex BI tools. Reporting cycles were slow, analytics costs were high, and business users lacked the ability to independently explore data.',
    solution: 'VizAI is an AI-powered unified analytics platform that enables businesses to connect their data and generate insights instantly — without requiring technical or analytical expertise.',
    coverImage: '/vizai-cover.png',
    link: 'https://vizai.webknot-dev.in',
    modulesLabel: 'How It Works',
    steps: [
      { num: '01', title: 'Connect Your Data', desc: 'Onboard any database through a simple chat-based setup in minutes — no configuration required.' },
      { num: '02', title: 'Ask in Plain English', desc: 'Query your data using natural language. No SQL, no BI expertise, no waiting on analysts.' },
      { num: '03', title: 'Instant Dashboards', desc: 'AI auto-generates dashboards and visualizations directly from your connected data sources.' },
      { num: '04', title: 'Proactive Insights', desc: 'Automated KPI tracking identifies trends, anomalies, and performance gaps before they become problems.' },
    ],
    capabilities: [
      'Natural Language Analytics: Query data using plain English without SQL.',
      'Instant Database Onboarding: Connect databases through a simple chat-based setup in minutes.',
      'AI-Powered Automated Dashboards: Instantly generate dashboards and visualizations from connected databases.',
      'Automated KPI & Insight Generation: Proactively identify trends, anomalies, and performance gaps.',
    ],
    outcomes: [
      { label: 'Faster Decision-Making', desc: 'Real-time insights enable quicker, data-backed actions.' },
      { label: 'Improved KPI Accuracy', desc: 'AI-driven metric generation reduced inconsistencies and errors.' },
      { label: 'Self-Service Analytics', desc: 'Automated analytics replaced weeks of manual reporting effort.' },
      { label: 'Modernized Operations', desc: 'Shifted analytics from reactive reporting to proactive intelligence.' },
    ],
  },
  {
    id: '02',
    dark: true,
    platform: 'AI MARKETING INTELLIGENCE',
    name: 'Chorus',
    tagline: 'Your AI-Powered Marketing Operations Platform',
    positioning: '"Chorus orchestrates 12 AI agents to run your entire marketing operation — from story intake to multi-channel publishing — with a single human product owner in the loop."',
    problem: 'Marketing teams burn time juggling disconnected tools and producing inconsistent content. There is no unified intelligence connecting brand stories, voice profiles, lead context, and publishing workflows — so campaigns feel fragmented, prospects receive generic outreach, and opportunities are lost.',
    solution: 'Chorus is a multi-agent marketing platform that ingests your case studies, learns your brand voice, and runs a continuous content pipeline across LinkedIn, Discord, Reddit, newsletters, and outbound outreach — all governed through a single approval-first dashboard.',
    coverImage: '/chorus-cover.png',
    modulesLabel: 'Core Modules',
    steps: [
      {
        num: '01',
        title: 'Story Intake & Voice Profiling',
        desc: 'Feed Chorus your case studies and brand context. AI enriches each story and learns your voice for consistent multi-platform content.',
      },
      {
        num: '02',
        title: 'Multi-Channel Content Engine',
        desc: 'Generates LinkedIn posts, newsletters, blogs, Discord messages, cold emails, and call scripts — each tailored to the platform and audience.',
      },
      {
        num: '03',
        title: 'Approval Queue & AI Chatbot',
        desc: 'Every piece of AI-generated content sits in a multi-stage review queue. Request edits via the inbuilt chatbot before anything goes live.',
      },
      {
        num: '04',
        title: 'Outbound Lead Engine',
        desc: 'Identifies prospects by use-case relevance and auto-generates personalized cold call scripts, emails, and messages for each contact.',
      },
    ],
    capabilities: [
      'Story Intake & AI Enrichment: Transforms raw case studies into multi-format content assets.',
      'Multi-Channel Content Generation: LinkedIn, Discord, Reddit, newsletters, cold emails, call scripts.',
      'Multi-Stage Approval Queue: Filterable by platform, team member, content type — nothing goes live without sign-off.',
      'Conversational AI Chatbot: Draft, refine, and request edits to any piece of content in real time.',
      'Outbound Lead Engine: Prospect discovery + personalized cold outreach per contact.',
      'Community Control Hub: Manage Discord, Reddit, and LinkedIn communities from one place.',
      'Cross-Platform Analytics: Per-platform performance dashboards across every channel.',
      'Hermes Orchestration Layer: The AI agent backbone that coordinates the entire marketing stack.',
    ],
    outcomes: [
      { label: '12 Agents, 1 Human', desc: 'An entire marketing operation run by AI with one human product owner in the loop.' },
      { label: '2 Weeks to Deploy', desc: 'Full platform built and live in under 14 days using the Olympus delivery model.' },
      { label: 'Always-On Pipeline', desc: 'Continuous content from story intake to live publishing — zero gaps, zero idle.' },
      { label: 'Revenue-Ready Outbound', desc: 'Every prospect receives contextual, personalized cold outreach generated automatically.' },
    ],
  },
  {
    id: '03',
    dark: true,
    platform: 'AI MEETING INTELLIGENCE',
    name: 'MeetMinds',
    tagline: 'Your Silent AI Meeting Companion',
    positioning: '"MeetMind joins your Google Meet as a silent bot, records the call, and automatically emails everyone a clean summary and minutes of meeting the moment it ends."',
    problem: 'Every meeting ends with scattered notes, lost action items, and the same question: "Can someone send the summary?" Teams waste time on manual documentation while decisions slip through the cracks.',
    solution: 'MeetMinds silently joins your Google Meet, records the full session, and emails a clean MOM to every participant the moment the call ends — zero effort, zero missed details.',
    coverImage: '/meetminds-cover.png',
    link: 'https://meet.webknot.in',
    modulesLabel: 'How It Works',
    steps: [
      { num: '01', title: 'Sign in', desc: 'Go to meet.webknot.in and sign in with your Google account' },
      { num: '02', title: 'Schedule a Meeting', desc: 'Paste your Google Meet link and add participant emails' },
      { num: '03', title: 'MeetMinds Joins', desc: 'A silent bot joins automatically — no disruption to your call' },
      { num: '04', title: 'MOM Delivered', desc: 'Clean minutes of meeting emailed to everyone once the call ends' },
    ],
    capabilities: [
      'Silent Meeting Bot: Joins Google Meet calls automatically without any disruption.',
      'Auto-Generated MOM: AI produces clean, structured minutes from the full recording.',
      'Instant Email Distribution: Summaries land in every participant\'s inbox when the call ends.',
      '"Send to More": Post-meeting option to share notes with anyone who was missed.',
    ],
    outcomes: [
      { label: 'Zero Manual Notes', desc: 'No more "can someone take notes?" — AI handles all documentation.' },
      { label: 'Instant MOM Delivery', desc: 'Clean summaries emailed the moment the call ends.' },
      { label: 'Never Miss Anyone', desc: 'Add extra recipients even after the meeting is over.' },
      { label: '30-Second Setup', desc: 'Paste a link, add emails — live and recording in under a minute.' },
    ],
  },
];

export function Products() {
  return (
    <div className="pt-20">
      {/* Hero — dark with wavy gradients */}
      <section className="h-screen flex items-center px-6 bg-[#08080f] relative z-10 overflow-hidden">
        {/* Wavy gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#C4533E]/20 blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-900/40 blur-[130px]" />
          <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-violet-900/30 blur-[100px]" />
          <div className="absolute bottom-[20%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#C4533E]/10 blur-[80px]" />
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C4533E] mb-6 block">Our Products</span>
            <h1 className="text-5xl md:text-7xl font-display font-light mb-8 text-white leading-tight">
              Flagship<br />
              <span className="text-gray-400 italic">Products</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
              EquiMinds builds practical AI products that solve real business problems across analytics, marketing intelligence, and meeting automation.
            </p>
          </motion.div>
        </div>
      </section>

      {products.map((product, index, array) => (
        <section
          key={product.id}
          className="h-screen sticky top-0 overflow-hidden"
          style={{ zIndex: 20 + index }}
        >
          {product.dark ? (
            /* ── Dark theme product (Chorus / MeetMinds) ── */
            <div className="h-full w-full flex items-center px-6 bg-[#08080f] border-t border-white/5">
              <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="mb-7">
                  <span className="text-xs font-medium tracking-widest text-[#C4533E] mb-3 block uppercase">
                    {product.platform}
                  </span>
                  <div className="flex items-end justify-between flex-wrap gap-4">
                    <div>
                      <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-1">
                        {product.name}
                      </h2>
                      <p className="text-lg text-gray-400 font-light">{product.tagline}</p>
                    </div>
                    {product.link ? (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 bg-[#C4533E] text-white text-sm font-medium hover:bg-[#A63E2D] transition-colors"
                      >
                        Try {product.name} <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <button className="flex items-center gap-2 px-6 py-2.5 bg-[#C4533E] text-white text-sm font-medium hover:bg-[#A63E2D] transition-colors">
                        Request Demo <ArrowUpRight size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Main grid */}
                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center mb-7">
                  {/* Left: info */}
                  <div>
                    <p className="text-base italic font-display font-light text-gray-300 leading-relaxed mb-7 border-l-2 border-[#C4533E]/50 pl-4">
                      {product.positioning}
                    </p>

                    <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                      {product.modulesLabel}
                    </h4>
                    <div className="space-y-4">
                      {product.steps.map((step) => (
                        <motion.div
                          key={step.num}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: Number(step.num) * 0.08 }}
                          className="flex gap-4 items-start"
                        >
                          <span className="text-xs font-mono text-[#C4533E] mt-0.5 w-6 flex-shrink-0">
                            {step.num}
                          </span>
                          <div>
                            <h5 className="text-sm font-light text-white mb-0.5">{step.title}</h5>
                            <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right: screenshot */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#C4533E]/10 rounded-3xl blur-3xl" />
                    <motion.img
                      src={product.coverImage}
                      alt={`${product.name} dashboard`}
                      initial={{ opacity: 0, scale: 0.97 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 w-full rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/10"
                    />
                  </div>
                </div>

                {/* Outcomes strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-white/10">
                  {product.outcomes.map((outcome, idx) => (
                    <TiltCard
                      key={idx}
                      className="p-5 border-r border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                    >
                      <h5 className="text-[#C4533E] text-xs font-bold mb-1">{outcome.label}</h5>
                      <p className="text-xs text-gray-500 leading-relaxed">{outcome.desc}</p>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* ── Light theme (VizAI) ── */
            <div
              className={cn(
                'h-full w-full flex items-center px-6 border-t border-gray-100 bg-white',
                index < array.length - 1 && 'shadow-[0_20px_50px_rgba(0,0,0,0.1)]',
                index % 2 !== 0 && 'bg-surface',
              )}
            >
              <div className="max-w-7xl mx-auto w-full">
                <div className="mb-12">
                  <span className="text-xs font-medium tracking-widest text-brand mb-4 block uppercase">
                    {product.platform}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-display font-light mb-2">{product.name}</h2>
                  <p className="text-xl text-gray-600 font-light">{product.tagline}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-12">
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h4 className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4">
                        Positioning
                      </h4>
                      <p className="text-xl italic font-display font-light text-ink leading-relaxed">
                        {product.positioning}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4 className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4">
                        The Problem
                      </h4>
                      <p className="text-gray-700 font-light leading-relaxed text-sm">{product.problem}</p>
                    </motion.div>
                  </div>

                  <TiltCard
                    className={cn(
                      'p-10 border border-gray-100 backdrop-blur-sm transition-colors duration-500',
                      index % 2 !== 0 ? 'bg-white/50' : 'bg-surface/50',
                    )}
                  >
                    <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">
                      Key Capabilities
                    </h4>
                    <div className="space-y-6">
                      {product.capabilities.slice(0, 4).map((cap, idx) => {
                        const [title, desc] = cap.split(': ');
                        return (
                          <div key={idx} className="flex gap-4">
                            <span className="text-xs font-mono text-brand mt-1">
                              {(idx + 1).toString().padStart(2, '0')}
                            </span>
                            <div>
                              <h5 className="text-sm font-bold mb-1">{title}</h5>
                              <p className="text-xs text-gray-700 leading-relaxed">{desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </TiltCard>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-12 border-l border-t border-gray-100/50">
                  {product.outcomes.map((outcome, idx) => (
                    <TiltCard
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      className="p-6 border-r border-b border-gray-100/50 hover:bg-white/50 transition-colors duration-500"
                    >
                      <h5 className="text-brand text-sm font-bold mb-1">{outcome.label}</h5>
                      <p className="text-xs text-gray-700 leading-relaxed">{outcome.desc}</p>
                    </TiltCard>
                  ))}
                </div>

                <div className="flex gap-6">
                  <button className="px-8 py-3 bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-all">
                    Request Demo
                  </button>
                  <button className="px-8 py-3 border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-all">
                    Discuss Use Case
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Dark CTA footer */}
      <section className="relative bg-[#08080f] py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#C4533E]/15 blur-[130px]" />
          <div className="absolute bottom-[-20%] left-[-5%] w-[500px] h-[500px] rounded-full bg-violet-900/25 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-6 leading-tight">
              Ready to put AI to work<br />
              <span className="text-gray-500 italic">inside your business?</span>
            </h2>
            <p className="text-lg text-gray-500 font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Request a demo of any product or talk to us about a custom AI solution tailored to your workflows.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 bg-[#C4533E] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#A63E2D] transition-colors flex items-center gap-3 group"
              >
                Request a Demo
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/offerings"
                className="px-10 py-4 border border-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] hover:border-white/30 transition-colors"
              >
                Explore Our Offerings
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
