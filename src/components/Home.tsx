import { motion, useInView, animate } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroScene } from '@/src/components/HeroScene';
import { 
  ArrowRight, 
  PlayCircle, 
  Search, 
  Sparkles, 
  Code, 
  Bot, 
  Database, 
  Cloud, 
  ShieldCheck,
  Users,
  UserPlus,
  Rocket,
  Laptop,
  Puzzle,
  Zap,
  Target,
  FastForward,
  ClipboardCheck,
  Lightbulb,
  Palette,
  Layers,
  Server
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { TiltCard } from '@/src/components/TiltCard';

// ── Animated word-by-word reveal ────────────────────────────────────────────
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

// ── Count-up stat badge  e.g. "150+ AI STACK ENGINEERS" ──────────────────────
function CountUpStat({ text }: { text: string }) {
  const match = text.match(/^(\d+)(\+?)\s(.+)$/);
  const numRef  = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(wrapRef, { once: true });

  useEffect(() => {
    if (!inView || !numRef.current || !match) return;
    const target = parseInt(match[1]);
    const ctrl = animate(0, target, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => { if (numRef.current) numRef.current.textContent = Math.round(v).toString(); },
    });
    return ctrl.stop;
  }, [inView]);

  if (!match) return <span>{text}</span>;
  return (
    <div ref={wrapRef} className="inline-flex">
      <span ref={numRef}>0</span>{match[2]}&nbsp;{match[3]}
    </div>
  );
}

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <HeroScene />
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-light leading-[1.2] mb-6">
              <AnimatedWords text="Intelligent AI Solutions." startDelay={0.1} /><br />
              <AnimatedWords text="Practical. Ethical. Scalable." className="text-gray-600" startDelay={0.45} />
            </h1>
            <p className="text-xl text-gray-600 font-light italic mb-8 mx-auto max-w-2xl leading-relaxed">
              We will help you <span className="bg-brand/10 text-brand px-1.5 py-0.5 rounded font-medium">cut the clutter around AI</span> and tailor AI to solve your real world business problems
            </p>
            <p className="text-lg text-gray-700 mb-10 mx-auto max-w-xl font-light leading-relaxed">
              <span className="bg-brand/10 text-brand px-2 py-1 rounded font-medium">Get to Production Grade in Weeks, Not Months</span>
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-8 py-4 bg-brand text-white font-medium hover:bg-brand-dark transition-all flex items-center gap-2">
                Talk to EquiMinds <ArrowRight size={18} />
              </button>
              <Link to="/offerings" className="px-8 py-4 border border-gray-200 font-medium hover:bg-gray-50 transition-all flex items-center gap-2">
                Explore Our Offerings <ArrowRight size={18} />
              </Link>
              <button 
                onClick={() => document.getElementById('quick-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-brand text-brand font-medium hover:bg-brand hover:text-white transition-all flex items-center gap-2"
              >
                Quick Start AI Services <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              {[
                "150+ AI STACK ENGINEERS",
                "6+ YEARS SINCE 2019",
                "30+ GLOBAL CLIENTS",
                "40+ TURNKEY PROJECTS"
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1, duration: 0.45 }}
                  whileHover={{ y: -3 }}
                  className="px-4 py-2 bg-white border border-gray-100 text-[9px] font-bold tracking-[0.2em] text-gray-500 rounded-none shadow-sm hover:shadow-md hover:border-brand/30 hover:text-brand transition-all duration-300 cursor-default"
                >
                  <CountUpStat text={stat} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 border-y border-gray-100 bg-white overflow-hidden relative">
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[
            'upGrad', 'Akamai', 'Cumulations', 'Pixid', 'Palette', 'MorphBots', 'Xelp', 'Aditya Birla Group', 'Geeky Ants',
            'upGrad', 'Akamai', 'Cumulations', 'Pixid', 'Palette', 'MorphBots', 'Xelp', 'Aditya Birla Group', 'Geeky Ants'
          ].map((client, idx) => (
            <span key={idx} className="text-2xl font-display font-light text-gray-300 uppercase tracking-widest px-8">
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* Offerings Summary Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-medium tracking-widest uppercase text-brand mb-4 block">Our Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-display font-light leading-tight">
                Four Dimensions of <br />
                <span className="text-gray-600 italic">AI Services</span>
              </h2>
              <p className="mt-4 text-gray-600 font-light italic">
                We don't treat AI as a feature, but as the operating system - Built for New Reality not retrofitted.
              </p>
            </div>
            <Link 
              to="/offerings" 
              className="group flex items-center gap-3 text-sm font-medium tracking-wider uppercase hover:text-brand transition-colors"
            >
              View All Offerings 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'AI Orchestration', desc: 'From single prompts to full business workflows — we build the agent infrastructure that runs your operations.' },
              { title: 'AI Optimization', desc: 'Every token counts. We make your AI faster, leaner, and dramatically cheaper to run at scale.' },
              { title: 'Private AI', desc: 'AI, entirely within your walls — sovereign, secure, and fully yours.' },
              { title: 'Prescriptive AI', desc: 'Move Beyond predictions — AI that tells you exactly what to do next, and gets smarter every time you do it.' },
            ].map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group relative pl-5 border-l-2 border-gray-100 hover:border-brand transition-colors duration-300 cursor-default py-1"
              >
                <span className="text-[10px] font-mono text-gray-300 mb-2 block group-hover:text-brand/60 transition-colors duration-300">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-xl font-light mb-3 group-hover:text-brand transition-colors duration-300">{pillar.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we Deliver Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-medium tracking-widest uppercase text-brand mb-4 block">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-display font-light leading-tight mb-4">
            How we deliver ?
          </h2>
          <p className="text-lg text-gray-600 font-light mb-12">
            Two delivery modes. Three engagement models. One AI-native partner.
          </p>

          {/* Delivery Modes */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Olympus Mode */}
            <TiltCard className="bg-surface text-ink p-8 border border-gray-100 group shadow-sm hover:shadow-md transition-all rounded-none">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand/5 rounded-none">
                  <Bot className="text-brand" size={28} />
                </div>
                <h3 className="text-2xl font-display font-light text-brand">Olympus Mode</h3>
              </div>
              <p className="text-lg mb-6 font-display font-light">AI agents deliver. Humans govern.</p>
              <p className="text-xs text-gray-600 italic mb-8 font-light">
                Best for: greenfield products, new builds, MVPs, v1 launches
              </p>
              <div className="flex gap-4 text-[10px] font-mono text-brand/70 uppercase tracking-widest">
                <span>12 agents</span>
                <span>•</span>
                <span>gated pipeline</span>
                <span>•</span>
                <span>spec to production</span>
              </div>
            </TiltCard>

            {/* Engineer Mode */}
            <TiltCard className="bg-surface text-ink p-8 border border-gray-100 group shadow-sm hover:shadow-md transition-all rounded-none">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand/5 rounded-none">
                  <Laptop className="text-brand" size={28} />
                </div>
                <h3 className="text-2xl font-display font-light text-brand">Engineer Mode</h3>
              </div>
              <p className="text-lg mb-6 font-display font-light">AI-augmented engineers deliver. AI tools accelerate.</p>
              <p className="text-xs text-gray-600 italic mb-8 font-light">
                Best for: existing codebases, legacy modernization, enterprise systems
              </p>
              <div className="flex gap-4 text-[10px] font-mono text-brand/70 uppercase tracking-widest">
                <span>150+ engineers</span>
                <span>•</span>
                <span>Cursor</span>
                <span>•</span>
                <span>Claude Code</span>
                <span>•</span>
                <span>Claude Cowork</span>
              </div>
            </TiltCard>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 font-display font-light italic text-center mb-10">
            Built for Speed.
          </p>

          {/* Engagement Models */}
          <div className="text-center mb-10">
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-brand">Three Engagement Models</h4>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Olympus Build',
                mode: 'Olympus Mode',
                modeColor: 'text-brand border-brand/20 bg-brand/5',
                icon: Rocket,
                iconColor: 'text-brand',
                desc: 'Turnkey AI delivery — AI agents build your product end-to-end with human governance at every gate.'
              },
              {
                title: 'Dedicated AI Team',
                mode: 'Engineer Mode',
                modeColor: 'text-brand border-brand/20 bg-brand/5',
                icon: Users,
                iconColor: 'text-brand',
                desc: 'Embedded cross-functional squad — sprint-based, long-term, scaling with your product roadmap.'
              },
              {
                title: 'Dedicated AI Engineers',
                mode: 'Engineer Mode',
                modeColor: 'text-brand border-brand/20 bg-brand/5',
                icon: Puzzle,
                iconColor: 'text-brand',
                desc: 'AI Stack Engineers plugged into your team — Claude Certified, enterprise-ready, zero ramp-up.'
              }
            ].map((model, idx) => (
              <TiltCard key={idx} className="bg-surface text-ink p-6 border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-all rounded-none">
                <div className="mb-6">
                  <model.icon className={cn("mb-4", model.iconColor)} size={24} />
                  <h5 className="text-lg font-medium mb-2">{model.title}</h5>
                  <span className={cn("inline-block px-2 py-0.5 border text-[9px] font-mono uppercase tracking-wider mb-4", model.modeColor)}>
                    {model.mode}
                  </span>
                </div>
                <p className="text-xs text-gray-600 font-light leading-relaxed mt-auto">
                  {model.desc}
                </p>
              </TiltCard>
            ))}
          </div>

          <div className="pt-12 border-t border-gray-100 text-center mb-16">
            <p className="text-sm italic font-light text-gray-600 max-w-4xl mx-auto">
              We use a 12-parameter, 48-point Delivery Mode Assessment to determine the right mode for every engagement — <span className="text-brand">structured, scored, transparent.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Olympus in Action */}
      <section className="py-24 px-6 bg-[#f8f8f8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-widest uppercase text-brand mb-4 block">See It Live</span>
            <h2 className="text-4xl md:text-5xl font-display font-light leading-tight mb-4">
              Olympus in Action
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Watch how Olympus orchestrates agents, routes intelligence, and delivers outcomes — end to end.
            </p>
          </div>

          {/* Responsive iframe wrapper — preserves 16:9 aspect ratio */}
          <div className="relative w-full shadow-xl" style={{ aspectRatio: '16/9' }}>
            <iframe
              src="/olympus-animation.html"
              title="Olympus in Action"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay"
            />
          </div>
        </div>
      </section>

      {/* How we are Organized Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-brand mb-4 block">Our Structure</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-display font-light leading-tight mb-4"
            >
              How we are organized
            </motion.h2>
            {/* Animated divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'center' }}
              className="w-12 h-px bg-brand mx-auto mb-6"
            />
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Seven specialized teams — built for the AI era, with a seamless flow of intelligence.
            </p>
          </div>

          {/* Isometric org chart — fade + scale reveal on scroll */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/isometric-org.png"
              alt="EquiMinds Organisation Structure"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-2xl md:text-3xl text-gray-600 font-display font-light italic">
              Hardened by traditional development, supercharged by AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Start AI Services Section */}
      <section id="quick-start" className="py-16 px-6 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest mb-6">
              <Sparkles size={12} /> Quick Start
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-light leading-tight mb-6">
              Validate AI Potential, <br />
              <span className="text-gray-600 italic">Inside Your Business.</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Low-risk, high-impact entry points designed to validate your AI strategy and demonstrate value in weeks, not months.
            </p>
          </div>

          {/* 3×2 card grid — icon, uppercase title, description */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-brand/15">
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group p-10 border-r border-b border-brand/15 hover:bg-brand/5 transition-colors duration-300 cursor-default"
              >
                <service.icon size={32} strokeWidth={1.25} className="text-brand mb-8 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-ink mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="px-10 py-5 bg-brand text-white font-medium hover:bg-brand-dark transition-all flex items-center gap-3 group">
              Start Your AI Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">Client Voices</span>
            <h2 className="text-3xl md:text-5xl font-display font-light leading-tight">
              Trusted by Leaders, <br />
              <span className="text-gray-600 italic">Across Industries.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                quote: "They've gone above and beyond expectations, delivering work promptly. Overall, they've stood out for their transparency and team management skills.",
                name: "Sandipan",
                title: "CEO, XELPMOC"
              },
              {
                quote: "Webknot stepped up when we were in need of a reliable software vendor and did a great job supporting us on our development needs.",
                name: "Manigandan",
                title: "Principal Architect, Aditya Birla Group"
              },
              {
                quote: "Our experience with the team has been exceptional. Starting with mobile app development, which now has over 1.2 million downloads, they continue to support us as a managed services provider across multiple platforms, including operations for our 20 malls.",
                name: "Kiran Cornelio",
                title: "Director Digital & PMO, CENOMI"
              }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative p-8 border border-gray-100 flex flex-col gap-6 hover:shadow-2xl hover:border-brand/20 transition-all duration-300 group overflow-hidden"
              >
                {/* Decorative large quote mark */}
                <span
                  aria-hidden="true"
                  className="absolute -top-2 right-5 text-[7rem] font-serif leading-none text-brand/8 select-none pointer-events-none group-hover:text-brand/15 transition-colors duration-500"
                >
                  "
                </span>
                <p className="text-gray-700 font-light leading-relaxed text-sm italic flex-1 relative z-10">
                  {t.quote}
                </p>
                <div className="relative z-10">
                  <div className="w-8 h-px bg-brand mb-3 group-hover:w-16 transition-all duration-500" />
                  <p className="font-medium text-ink text-sm">{t.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand mt-1">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Carousel Section */}
      <section className="py-16 bg-white text-ink border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">Success Stories</span>
              <h2 className="text-3xl md:text-5xl font-display font-light leading-tight">
                Case Studies <br />
                <span className="text-gray-600 italic">& Impact.</span>
              </h2>
            </div>
            <Link 
              to="/case-studies" 
              className="group flex items-center gap-3 text-xs font-bold tracking-widest uppercase hover:text-brand transition-colors"
            >
              View All Projects 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Marquee Carousel */}
        <div className="relative flex overflow-hidden group/marquee">
          <div className="flex gap-6 animate-marquee-slow hover:[animation-play-state:paused] py-6">
            {[
              {
                id: 'vizai',
                title: 'VizAI',
                category: 'Data Visualization',
                image: 'https://picsum.photos/seed/vizai/800/600',
                desc: 'Natural language interface for complex data analytics.'
              },
              {
                id: 'clearvisa',
                title: 'ClearVisa',
                category: 'AI Agents',
                image: 'https://picsum.photos/seed/visa/800/600',
                desc: 'AI-powered embassy interview simulation and prep.'
              },
              {
                id: 'chorus',
                title: 'Chorus',
                category: 'Marketing Ops',
                image: 'https://picsum.photos/seed/chorus/800/600',
                desc: 'Multi-agent platform for automated marketing workflows.'
              },
              {
                id: 'hermes',
                title: 'Hermes',
                category: 'Logistics AI',
                image: 'https://picsum.photos/seed/logistics/800/600',
                desc: 'Predictive supply chain optimization for global retail.'
              },
              // Duplicate for seamless loop
              {
                id: 'vizai-2',
                title: 'VizAI',
                category: 'Data Visualization',
                image: 'https://picsum.photos/seed/vizai/800/600',
                desc: 'Natural language interface for complex data analytics.'
              },
              {
                id: 'clearvisa-2',
                title: 'ClearVisa',
                category: 'AI Agents',
                image: 'https://picsum.photos/seed/visa/800/600',
                desc: 'AI-powered embassy interview simulation and prep.'
              }
            ].map((study, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -5 }}
                className="w-[320px] shrink-0 bg-surface border border-gray-100 rounded-none overflow-hidden group/card transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand mb-2 block">{study.category}</span>
                  <h3 className="text-xl font-display font-light mb-3">{study.title}</h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed mb-4 line-clamp-2">{study.desc}</p>
                  <Link 
                    to="/case-studies" 
                    className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover/card:text-brand transition-colors"
                  >
                    Read Case Study <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">Stay Informed</span>
              <h2 className="text-3xl md:text-5xl font-display font-light leading-tight mb-6">
                The AI Era, <br />
                <span className="text-gray-600 italic">Delivered Weekly.</span>
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Join 5,000+ technology leaders receiving our weekly deep-dives into AI strategy, agentic workflows, and architectural blueprints.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-5 py-3 bg-surface border border-gray-100 rounded-none focus:outline-none focus:border-brand transition-colors text-sm"
                />
                <button className="px-8 py-3 bg-brand text-white font-medium rounded-none hover:bg-brand-dark transition-all text-sm">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-[10px] text-gray-400">
                No spam. Just high-signal AI insights. Unsubscribe anytime.
              </p>
            </div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden bg-surface border border-gray-100">
              <img 
                src="https://picsum.photos/seed/ai-agents-working/1200/1200" 
                alt="AI Agents Working" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none"></div>
              {/* Decorative elements to suggest animation/activity */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand/10 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-brand/5 rounded-full blur-3xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
