import { motion, useInView, animate } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Bot,
  ShieldCheck,
  Users,
  Rocket,
  Laptop,
  Puzzle,
  Zap,
  Target,
  FastForward,
  ClipboardCheck,
} from 'lucide-react';

function AnimatedWords({ text, className, startDelay = 0.15 }: {
  text: string; className?: string; startDelay?: number;
}) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: startDelay + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.28em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function CountUpStat({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const numRef  = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(wrapRef, { once: true });

  useEffect(() => {
    if (!inView || !numRef.current) return;
    const ctrl = animate(0, end, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => { if (numRef.current) numRef.current.textContent = Math.round(v).toString(); },
    });
    return ctrl.stop;
  }, [inView, end]);

  return (
    <div ref={wrapRef} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-light text-ink mb-1">
        <span ref={numRef}>0</span>{suffix}
      </div>
      <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-400">{label}</div>
    </div>
  );
}

export function Home() {
  return (
    <div className="pt-20 bg-white">

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Main hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl w-full"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-light leading-[1.05] tracking-tight text-ink mb-6">
            <AnimatedWords text="Intelligent AI Solutions." startDelay={0.1} /><br />
            <AnimatedWords text="Practical. Ethical. Scalable." className="text-gray-500" startDelay={0.45} />
          </h1>

          <p className="text-xl text-gray-600 font-light italic mb-6 mx-auto max-w-2xl leading-relaxed">
            We will help you{' '}
            <span className="bg-brand/10 text-brand px-1.5 py-0.5 rounded font-medium not-italic">cut the clutter around AI</span>
            {' '}and tailor AI to solve your real world business problems
          </p>

          <p className="text-lg text-gray-700 mb-10 mx-auto max-w-xl font-light">
            <span className="bg-brand/10 text-brand px-2 py-1 rounded font-medium">
              Get to Production Grade in Weeks, Not Months
            </span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <button className="px-9 py-4 bg-brand text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-dark transition-colors flex items-center gap-2 group">
              Talk to EquiMinds <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <Link
              to="/offerings"
              className="px-9 py-4 border border-gray-300 text-ink text-xs font-bold uppercase tracking-[0.2em] hover:border-brand hover:text-brand transition-colors flex items-center gap-2"
            >
              Explore Our Offerings <ArrowRight size={14} />
            </Link>
            <button
              onClick={() => document.getElementById('quick-start')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-9 py-4 border border-brand text-brand text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-colors flex items-center gap-2"
            >
              Quick Start AI Services <ArrowRight size={14} />
            </button>
          </div>

          {/* Stats — in flow below buttons, no overlap */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-12 md:gap-20 pt-10 border-t border-gray-100"
          >
            <CountUpStat end={150} suffix="+" label="AI Stack Engineers" />
            <CountUpStat end={6}   suffix="+" label="Years Since 2019" />
            <CountUpStat end={30}  suffix="+" label="Global Clients" />
            <CountUpStat end={40}  suffix="+" label="Turnkey Projects" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Clients marquee ── */}
      <section className="py-10 border-y border-gray-100 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[
            'upGrad', 'Akamai', 'Cumulations', 'Pixid', 'Palette', 'MorphBots', 'Xelp', 'Aditya Birla Group', 'Geeky Ants',
            'upGrad', 'Akamai', 'Cumulations', 'Pixid', 'Palette', 'MorphBots', 'Xelp', 'Aditya Birla Group', 'Geeky Ants',
          ].map((client, idx) => (
            <span key={idx} className="text-xl font-display font-light text-gray-300 uppercase tracking-widest px-8">
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* ── Four Dimensions ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-brand mb-4 block">Our Capabilities</span>
              <h2 className="text-4xl md:text-6xl font-display font-light leading-tight">
                Four Dimensions of<br />
                <span className="text-gray-400 italic">AI Services</span>
              </h2>
              <p className="mt-4 text-gray-500 font-light italic text-sm">
                We don't treat AI as a feature, but as the operating system — Built for New Reality not retrofitted.
              </p>
            </div>
            <Link
              to="/offerings"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors shrink-0"
            >
              View All Offerings <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-100">
            {[
              { num: '01', title: 'AI Orchestration', desc: 'From single prompts to full business workflows — we build the agent infrastructure that runs your operations.' },
              { num: '02', title: 'AI Optimization', desc: 'Every token counts. We make your AI faster, leaner, and dramatically cheaper to run at scale.' },
              { num: '03', title: 'Private AI', desc: 'AI, entirely within your walls — sovereign, secure, and fully yours.' },
              { num: '04', title: 'Prescriptive AI', desc: 'Move Beyond predictions — AI that tells you exactly what to do next, and gets smarter every time you do it.' },
            ].map((pillar) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-10 border-r border-b border-gray-100 group hover:bg-[#fafafa] transition-colors"
              >
                <span className="text-[10px] font-mono text-gray-300 mb-6 block group-hover:text-brand/50 transition-colors">{pillar.num}</span>
                <h3 className="text-xl font-display font-light mb-4 group-hover:text-brand transition-colors">{pillar.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Deliver ── */}
      <section className="py-28 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-brand mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-6xl font-display font-light leading-tight">How we deliver?</h2>
            <p className="mt-4 text-lg text-gray-400 font-light">
              Two delivery modes. Three engagement models. One AI-native partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-100 mb-px">
            {[
              {
                icon: Bot, title: 'Olympus Mode', sub: 'AI agents deliver. Humans govern.',
                note: 'Best for: greenfield products, new builds, MVPs, v1 launches',
                tags: ['12 agents', 'gated pipeline', 'spec to production'],
              },
              {
                icon: Laptop, title: 'Engineer Mode', sub: 'AI-augmented engineers deliver. AI tools accelerate.',
                note: 'Best for: existing codebases, legacy modernization, enterprise systems',
                tags: ['150+ engineers', 'Cursor', 'Claude Code', 'Claude Cowork'],
              },
            ].map((mode) => (
              <div key={mode.title} className="bg-white p-12">
                <mode.icon className="text-brand mb-6" size={28} strokeWidth={1.25} />
                <h3 className="text-2xl font-display font-light mb-3">{mode.title}</h3>
                <p className="text-base font-light text-gray-700 mb-4">{mode.sub}</p>
                <p className="text-xs text-gray-400 italic mb-8">{mode.note}</p>
                <div className="flex flex-wrap gap-3">
                  {mode.tags.map((t) => (
                    <span key={t} className="px-3 py-1 border border-gray-100 text-[10px] font-mono uppercase tracking-wider text-brand/70">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-gray-400 font-display font-light italic text-center py-12 border-b border-gray-100">
            Built for Speed.
          </p>

          <div className="text-center pt-12 mb-10">
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-brand">Three Engagement Models</h4>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-100">
            {[
              { icon: Rocket, title: 'Olympus Build', mode: 'Olympus Mode', desc: 'Turnkey AI delivery — AI agents build your product end-to-end with human governance at every gate.' },
              { icon: Users, title: 'Dedicated AI Team', mode: 'Engineer Mode', desc: 'Embedded cross-functional squad — sprint-based, long-term, scaling with your product roadmap.' },
              { icon: Puzzle, title: 'Dedicated AI Engineers', mode: 'Engineer Mode', desc: 'AI Stack Engineers plugged into your team — Claude Certified, enterprise-ready, zero ramp-up.' },
            ].map((model) => (
              <div key={model.title} className="bg-white p-10">
                <model.icon className="text-brand mb-5" size={22} strokeWidth={1.25} />
                <h4 className="text-lg font-display font-light mb-2">{model.title}</h4>
                <span className="inline-block text-[9px] font-mono uppercase tracking-wider text-brand border border-brand/20 bg-brand/5 px-2 py-0.5 mb-5">{model.mode}</span>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs italic font-light text-gray-400 text-center max-w-4xl mx-auto">
            We use a 12-parameter, 48-point Delivery Mode Assessment to determine the right mode for every engagement —{' '}
            <span className="text-brand">structured, scored, transparent.</span>
          </p>
        </div>
      </section>

      {/* ── Olympus in Action ── */}
      <section className="py-28 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-brand mb-4 block">See It Live</span>
            <h2 className="text-4xl md:text-6xl font-display font-light leading-tight">Olympus in Action</h2>
            <p className="mt-4 text-lg text-gray-400 font-light max-w-2xl">
              Watch how Olympus orchestrates agents, routes intelligence, and delivers outcomes — end to end.
            </p>
          </div>
          <div className="relative w-full shadow-xl" style={{ aspectRatio: '16/9' }}>
            <iframe src="/olympus-animation.html" title="Olympus in Action" className="absolute inset-0 w-full h-full border-0" allow="autoplay" />
          </div>
        </div>
      </section>

      {/* ── Org Structure ── */}
      <section className="py-28 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-brand mb-4 block">Our Structure</span>
            <h2 className="text-4xl md:text-6xl font-display font-light leading-tight mb-4">How we are organized</h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'center' }} className="w-12 h-px bg-brand mx-auto mb-6"
            />
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              Seven specialized teams — built for the AI era, with a seamless flow of intelligence.
            </p>
          </div>
          <motion.img
            src="/isometric-org.png" alt="EquiMinds Organisation Structure"
            className="w-full h-auto object-contain"
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="mt-16 text-2xl md:text-3xl text-gray-400 font-display font-light italic text-center">
            Hardened by traditional development, supercharged by AI.
          </p>
        </div>
      </section>

      {/* ── Quick Start Services ── */}
      <section id="quick-start" className="py-28 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest mb-6">
              <Sparkles size={12} /> Quick Start
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-light leading-tight mb-6">
              Validate AI Potential,<br />
              <span className="text-gray-400 italic">Inside Your Business.</span>
            </h2>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Low-risk, high-impact entry points designed to validate your AI strategy and demonstrate value in weeks, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-100">
            {[
              { title: 'AI Readiness Audit', desc: 'Comprehensive evaluation of your data, infrastructure, and team to identify the most viable AI opportunities.', icon: ClipboardCheck },
              { title: 'Agentic Workflow POC', desc: 'A 72-hour proof-of-concept demonstrating autonomous agents automating a core business process end-to-end.', icon: Zap },
              { title: 'AI in Week Sprint', desc: 'Rapid architecture and UX prototyping to blueprint your next AI-native product in just 5 days.', icon: FastForward },
              { title: 'AI Cost & Risk Audit', desc: 'Deep-dive assessment of AI operational costs, security vulnerabilities, and implementation risks.', icon: ShieldCheck },
              { title: 'Executive Immersion', desc: 'High-impact session for leadership teams to understand AI capabilities and prioritize strategic initiatives.', icon: Users },
              { title: 'AI Strategy Roadmap', desc: 'A multi-phased execution plan tailored to your business goals, ensuring long-term AI success.', icon: Target },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                className="group p-10 border-r border-b border-gray-100 hover:bg-[#fafafa] transition-colors"
              >
                <service.icon size={28} strokeWidth={1.25} className="text-brand mb-8" />
                <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-ink mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="px-10 py-4 bg-brand text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-dark transition-colors flex items-center gap-3 group">
              Start Your AI Journey
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Flagship Products ── */}
      <section className="py-28 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-brand mb-4 block">What We've Built</span>
              <h2 className="text-4xl md:text-6xl font-display font-light leading-tight">
                Flagship Products
              </h2>
              <p className="mt-4 text-gray-500 font-light italic text-sm">
                Practical AI products solving real business problems — analytics, marketing intelligence, and meeting automation.
              </p>
            </div>
            <Link
              to="/products"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors shrink-0"
            >
              View All Products <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {[
              {
                id: '01', platform: 'Analytics Platform', name: 'VizAI',
                tagline: 'Natural Language Data Visualization Board',
                desc: 'A natural-language analytics platform that turns plain English questions into business dashboards and visual insights — no SQL required.',
                dark: false,
              },
              {
                id: '02', platform: 'AI Marketing Intelligence', name: 'Chorus',
                tagline: 'AI-Powered Marketing Operations Platform',
                desc: 'Orchestrates 12 AI agents to run your full marketing stack — story intake, content generation, approval queues, outbound leads, and community control.',
                dark: true,
              },
              {
                id: '03', platform: 'AI Meeting Intelligence', name: 'MeetMinds',
                tagline: 'Your Silent AI Meeting Companion',
                desc: 'Joins your Google Meet as a silent bot, records the call, and automatically emails everyone a clean summary and minutes of meeting the moment it ends.',
                dark: false,
              },
            ].map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className={`p-10 flex flex-col gap-6 group ${product.dark ? 'bg-[#08080f]' : 'bg-white'}`}
              >
                <div>
                  <span className={`text-[9px] font-bold uppercase tracking-widest mb-3 block ${product.dark ? 'text-[#C4533E]' : 'text-brand'}`}>
                    {product.platform}
                  </span>
                  <h3 className={`text-3xl font-display font-light mb-2 ${product.dark ? 'text-white' : 'text-ink'}`}>
                    {product.name}
                  </h3>
                  <p className={`text-sm font-light ${product.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {product.tagline}
                  </p>
                </div>
                <p className={`text-xs font-light leading-relaxed flex-1 ${product.dark ? 'text-gray-500' : 'text-gray-600'}`}>
                  {product.desc}
                </p>
                <Link
                  to="/products"
                  className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors ${product.dark ? 'text-[#C4533E] hover:text-white' : 'text-gray-400 group-hover:text-brand'}`}
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise Growth Systems ── */}
      <section className="py-28 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 border border-gray-200 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 mb-8">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-light leading-tight mb-8">
              Enterprise Growth Systems<br />
              Powered by <span className="text-brand">Salesforce, Data &amp; AI</span>
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed mb-4">
              EquiMinds helps enterprises modernize customer operations using Salesforce, deep engineering, intelligent automation, and connected digital ecosystems.
            </p>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              From CRM transformation to AI copilots to complex integrations, we build systems that scale revenue, service, and customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-100 mb-px">
            {[
              {
                title: 'Salesforce Consulting and Transformation',
                desc: 'Implement, modernize, or optimize Sales Cloud, Service Cloud, Experience Cloud, and custom Salesforce ecosystems.',
              },
              {
                title: 'AI on Salesforce',
                desc: 'Deploy Agentforce, Einstein AI, service copilots, intelligent routing, automation agents, and next-gen workflows.',
              },
              {
                title: 'Connected Enterprise Integrations',
                desc: 'Integrate Salesforce with ERP, SAP, custom apps, data warehouses, telephony, WhatsApp, and business-critical systems.',
              },
              {
                title: 'Managed Growth Operations',
                desc: 'Ongoing optimization, admin support, release management, dashboards, governance, and continuous ROI improvement.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-10 border-r border-b border-gray-100 group hover:bg-[#fafafa] transition-colors"
              >
                <span className="text-[10px] font-mono text-gray-300 mb-6 block group-hover:text-brand/50 transition-colors">{(idx + 1).toString().padStart(2, '0')}</span>
                <h3 className="text-sm font-bold tracking-[0.05em] text-ink mb-4 leading-snug group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="py-12 px-10 bg-surface border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-lg md:text-xl font-display font-light text-brand italic">
              Not Just Salesforce. Business Systems That Perform.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-brand text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-dark transition-colors flex items-center gap-3 group shrink-0"
            >
              Talk to Our Transformation Team
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">Client Voices</span>
            <h2 className="text-4xl md:text-6xl font-display font-light leading-tight">
              Trusted by Leaders,<br />
              <span className="text-gray-400 italic">Across Industries.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {[
              { quote: "They've gone above and beyond expectations, delivering work promptly. Overall, they've stood out for their transparency and team management skills.", name: 'Sandipan', title: 'CEO, XELPMOC' },
              { quote: 'Webknot stepped up when we were in need of a reliable software vendor and did a great job supporting us on our development needs.', name: 'Manigandan', title: 'Principal Architect, Aditya Birla Group' },
              { quote: 'Our experience with the team has been exceptional. Starting with mobile app development, which now has over 1.2 million downloads, they continue to support us as a managed services provider across multiple platforms, including operations for our 20 malls.', name: 'Kiran Cornelio', title: 'Director Digital & PMO, CENOMI' },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 flex flex-col gap-8 relative overflow-hidden group"
              >
                <span aria-hidden="true" className="absolute -top-2 right-5 text-[7rem] font-serif leading-none text-brand/8 select-none pointer-events-none group-hover:text-brand/15 transition-colors duration-500">"</span>
                <p className="text-gray-600 font-light leading-relaxed text-sm italic flex-1 relative z-10">{t.quote}</p>
                <div className="relative z-10">
                  <div className="w-8 h-px bg-brand mb-4 group-hover:w-16 transition-all duration-500" />
                  <p className="font-medium text-ink text-sm">{t.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand mt-1">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies Carousel ── */}
      <section className="py-28 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">Success Stories</span>
              <h2 className="text-4xl md:text-6xl font-display font-light leading-tight">
                Case Studies<br />
                <span className="text-gray-400 italic">& Impact.</span>
              </h2>
            </div>
            <Link to="/case-studies" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand transition-colors">
              View All Projects <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex gap-px animate-marquee-slow hover:[animation-play-state:paused]">
            {[
              { title: 'AI Recruitment Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', desc: '50% faster hiring & 30% better candidate matching through AI interview intelligence and analytics-driven workflows.' },
              { title: 'Mall Chain Experience Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80', desc: 'Full platform launched in 3 months — tenant experience, AI-assisted workflows, and a joint innovation lab.' },
              { title: 'AI Educational Engagement Platform', mode: 'Olympus Mode', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80', desc: 'Creation-first student platform with AI mentorship, verified profiles, and challenge journeys — built via Olympus.' },
              { title: 'Drone Flight Operations Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80', desc: 'Operator training cut from 30 days to 3 — mobile-first, offline-capable platform for medical drone delivery.' },
              { title: 'Industrial IoT Monitoring Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', desc: 'Centralized real-time IoT dashboard with 200ms WebSocket latency replacing manual warehouse monitoring.' },
              { title: 'Remote Robotics Control Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', desc: 'Sub-1-second robot control latency — remote Raspberry Pi operations with live video streaming via AWS.' },
              { title: 'AI Tax Compliance Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', desc: 'End-to-end tax automation with AI anomaly detection and ERP sync — built on existing WordPress infrastructure.' },
              { title: 'E-Commerce Loyalty & Analytics Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80', desc: '20% loyalty redemption lift and 15% conversion increase via Yotpo + Mixpanel for a fast-growing activewear brand.' },
              // duplicates for seamless loop
              { title: 'AI Recruitment Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', desc: '50% faster hiring & 30% better candidate matching through AI interview intelligence and analytics-driven workflows.' },
              { title: 'Mall Chain Experience Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80', desc: 'Full platform launched in 3 months — tenant experience, AI-assisted workflows, and a joint innovation lab.' },
              { title: 'AI Educational Engagement Platform', mode: 'Olympus Mode', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80', desc: 'Creation-first student platform with AI mentorship, verified profiles, and challenge journeys — built via Olympus.' },
              { title: 'Drone Flight Operations Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80', desc: 'Operator training cut from 30 days to 3 — mobile-first, offline-capable platform for medical drone delivery.' },
              { title: 'Industrial IoT Monitoring Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', desc: 'Centralized real-time IoT dashboard with 200ms WebSocket latency replacing manual warehouse monitoring.' },
              { title: 'Remote Robotics Control Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', desc: 'Sub-1-second robot control latency — remote Raspberry Pi operations with live video streaming via AWS.' },
              { title: 'AI Tax Compliance Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', desc: 'End-to-end tax automation with AI anomaly detection and ERP sync — built on existing WordPress infrastructure.' },
              { title: 'E-Commerce Loyalty & Analytics Platform', mode: 'Engineer Copilot', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80', desc: '20% loyalty redemption lift and 15% conversion increase via Yotpo + Mixpanel for a fast-growing activewear brand.' },
            ].map((study, idx) => (
              <div key={idx} className="w-[360px] shrink-0 bg-white border-r border-gray-100 overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand mb-2 block">{study.mode}</span>
                  <h3 className="text-lg font-display font-light mb-2 leading-snug">{study.title}</h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">{study.desc}</p>
                  <Link to="/case-studies" className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-brand transition-colors">
                    Read Case Study <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-28 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">Stay Informed</span>
            <h2 className="text-4xl md:text-6xl font-display font-light leading-tight mb-8">
              The AI Era,<br />
              <span className="text-gray-400 italic">Delivered Weekly.</span>
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
              Join 5,000+ technology leaders receiving our weekly deep-dives into AI strategy, agentic workflows, and architectural blueprints.
            </p>
            <div className="flex gap-0">
              <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-4 bg-[#fafafa] border border-gray-200 border-r-0 focus:outline-none focus:border-brand transition-colors text-sm font-light" />
              <button className="px-8 py-4 bg-brand text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-dark transition-colors shrink-0">Subscribe</button>
            </div>
            <p className="mt-4 text-[10px] text-gray-400">No spam. Just high-signal AI insights. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
