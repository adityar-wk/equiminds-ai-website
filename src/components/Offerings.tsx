import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Zap, TrendingDown, Lock, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const pillars = [
  {
    id: "01",
    tab: "AI Orchestration",
    title: "Agent Infrastructure That Runs Your Operations.",
    tagline: "From single prompts to full business workflows — we build the systems that work while you sleep.",
    icon: Zap,
    services: [
      { name: "Multi-agent pipelines & orchestration", desc: "Coordinate intelligent agents that plan, delegate, and execute complex workflows end-to-end." },
      { name: "Standalone AI agents (HR, Sales, Ops, Support)", desc: "Deploy purpose-built agents that handle entire business functions autonomously." },
      { name: "AI-led legacy modernization", desc: "Migrate and transform outdated systems using AI-driven refactoring and re-architecture." },
      { name: "Re-imagining products through AI", desc: "Rebuild your core product experience with AI as the engine, not just a feature." },
      { name: "Replace COTS with AI-native solutions", desc: "Ditch off-the-shelf software with custom-built agents that fit your workflows exactly." },
      { name: "AI Stack Workforce & delivery squads", desc: "On-demand AI-augmented teams that ship faster, leaner, and smarter." }
    ],
  },
  {
    id: "02",
    tab: "AI Optimization",
    title: "Make Your AI Faster, Leaner, Dramatically Cheaper.",
    tagline: "Every token counts. We audit, compress, and re-architect your AI stack to do more for less.",
    icon: TrendingDown,
    services: [
      { name: "Multi-LLM routing & cost optimization", desc: "Intelligently route tasks across models to maximize output quality while minimizing spend." },
      { name: "Token reduction & latency profiling", desc: "Cut prompt bloat and response times without sacrificing accuracy." },
      { name: "AI cost & risk audit", desc: "Identify where your AI investment leaks value and where it carries hidden operational risk." },
      { name: "AI savings diagnostic", desc: "A structured analysis that quantifies exactly how much your AI stack can save." },
      { name: "Prompt engineering & compression", desc: "Precision-craft prompts that do more with fewer tokens across every use case." }
    ],
  },
  {
    id: "03",
    tab: "Private AI",
    title: "Frontier AI Power. Entirely Within Your Walls.",
    tagline: "Sovereign, secure, and fully yours — AI that never leaves your infrastructure.",
    icon: Lock,
    services: [
      { name: "On-prem / VPC-isolated deployments", desc: "Run AI fully within your infrastructure — no data leaves your environment, ever." },
      { name: "Open-source LLM hosting (Llama, Mistral)", desc: "Deploy best-in-class open models on your own servers with zero vendor lock-in." },
      { name: "Private RAG pipelines", desc: "Build retrieval-augmented generation on your proprietary knowledge base, completely in-house." },
      { name: "Air-gapped AI for regulated industries", desc: "Physically isolated AI deployments for sectors where connectivity is a compliance risk." },
      { name: "Full data sovereignty — no 3rd party calls", desc: "Your data, your models, your rules — no external APIs, no telemetry, no exposure." }
    ],
  },
  {
    id: "04",
    tab: "Prescriptive AI",
    title: "AI That Tells You Exactly What To Do Next.",
    tagline: "Beyond predictions — closed-loop intelligence that gets smarter every time you act on it.",
    icon: Brain,
    services: [
      { name: "Decision intelligence systems", desc: "Turn complex, multi-variable decisions into clear, AI-driven recommendations your teams can act on." },
      { name: "AI recommendations in workflows", desc: "Embed contextual AI nudges directly into the tools and processes your teams already use." },
      { name: "Scenario modelling & simulation", desc: "Stress-test strategies and decisions against multiple futures before you commit." },
      { name: "Prescriptive pricing & allocation", desc: "Let AI dynamically determine the optimal price, resource, or inventory decision in real time." },
      { name: "Closed-loop feedback, human-in-the-loop", desc: "AI that learns from every decision outcome, with human oversight built into the cycle." }
    ],
  }
];

export function Offerings() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = scrollRef.current.offsetHeight - window.innerHeight;
      if (total <= 0) return;

      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);

      const idx = Math.min(pillars.length - 1, Math.floor(p * pillars.length));
      setActiveIdx(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (idx: number) => {
    if (!scrollRef.current) return;
    const total = scrollRef.current.offsetHeight - window.innerHeight;
    const targetScroll = scrollRef.current.offsetTop + (idx / pillars.length) * total;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const active = pillars[activeIdx];

  return (
    <div className="pt-20">

      {/* Hero section */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-32 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-light leading-tight mb-6 text-ink">
            Most companies treat AI as a feature.
          </h1>
          <p className="text-5xl md:text-7xl font-display font-light leading-tight mb-16 text-gray-300 italic">
            We build it as the operating system.
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            At EquiMinds, our offerings are structured around the four dimensions of enterprise AI maturity — <span className="text-brand">Orchestration, Optimization, Privacy, and Prescription.</span> Whether you're deploying your first agent or overhauling an entire business function, we meet you where you are and move you to where AI actually delivers.
          </p>
        </div>
      </section>

      {/* Scroll-driven Offerings — 250vh total = 150vh of scroll for 4 tabs */}
      <div
        ref={scrollRef}
        style={{ height: '250vh' }}
        className="relative"
      >
        {/* Sticky panel — sits below fixed navbar (top-20 = 80px) */}
        <div className="sticky top-20 flex flex-col overflow-hidden bg-white" style={{ height: 'calc(100vh - 5rem)' }}>

          {/* Tab bar */}
          <div className="flex border-b border-gray-200 shrink-0">
            {pillars.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => goTo(idx)}
                className={cn(
                  "flex-1 flex items-center justify-between px-6 py-4 text-[11px] font-normal uppercase tracking-widest transition-all duration-300 border-r border-gray-200 last:border-r-0",
                  idx === activeIdx
                    ? "bg-brand text-white"
                    : "bg-white text-gray-500 hover:text-ink hover:bg-gray-50"
                )}
              >
                <span>{p.tab}</span>
                <ArrowRight size={14} className={cn("shrink-0", idx === activeIdx ? "text-white" : "text-gray-300")} />
              </button>
            ))}
          </div>

          {/* Content — fades between offerings */}
          <div className="flex-1 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center px-6 md:px-12"
              >
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                  {/* Left */}
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand mb-4 block">
                      {active.id} / {pillars.length.toString().padStart(2, '0')}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight mb-6">
                      {active.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-10 max-w-lg">
                      {active.tagline}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-white font-medium hover:bg-brand-dark transition-all group text-sm"
                    >
                      Start This Engagement
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right — services list */}
                  <div className="flex flex-col gap-0">
                    {active.services.map((s, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-b-0 group"
                      >
                        <span className="text-[10px] font-mono text-brand mt-1 shrink-0 w-5">
                          {(i + 1).toString().padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="text-sm font-medium mb-1 group-hover:text-brand transition-colors">
                            {s.name}
                          </h3>
                          <p className="text-xs text-gray-500 font-light leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Continuous scroll progress bar */}
          <div className="h-0.5 bg-gray-100 shrink-0">
            <div
              className="h-full bg-brand transition-none"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-display font-light mb-8 text-ink">
              Not sure where to start? <br />
              <span className="text-brand">Most engagements begin with a single conversation.</span>
            </h2>
            <p className="text-xl text-gray-700 font-light mb-12 leading-relaxed">
              See exactly where AI can cut costs and accelerate delivery in your business — in 48 hours.
            </p>
            <Link
              to="/contact"
              className="px-10 py-5 bg-brand text-white font-medium hover:bg-brand-dark transition-all inline-flex items-center gap-3 group"
            >
              Get Your Free AI Savings Diagnostic
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
