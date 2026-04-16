import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { TiltCard } from '@/src/components/TiltCard';

export function Products() {
  const products = [
    {
      id: '01',
      platform: 'ANALYTICS PLATFORM',
      name: 'VizAI',
      tagline: 'Natural Language Data Visualization Board',
      positioning: '"A natural-language analytics platform that turns plain English questions into business dashboards and visual insights."',
      problem: 'Organizations struggled to convert data into timely business insights due to heavy reliance on technical teams, manual dashboard creation, and complex BI tools. Reporting cycles were slow, analytics costs were high, and business users lacked the ability to independently explore data.',
      solution: 'VizAI is an AI-powered unified analytics platform that enables businesses to connect their data and generate insights instantly — without requiring technical or analytical expertise.',
      capabilities: [
        'Natural Language Analytics: Query data using plain English without SQL.',
        'Instant Database Onboarding: Connect databases through a simple chat-based setup in minutes.',
        'AI-Powered Automated Dashboards: Instantly generate dashboards and visualizations from connected databases.',
        'Automated KPI & Insight Generation: Proactively identify trends, anomalies, and performance gaps.',
        'Scalable & Agile Architecture: Supports rapid iterations and future expansion across data platforms.'
      ],
      outcomes: [
        { label: 'Faster Decision-Making', desc: 'Real-time insights enable quicker, data-backed actions.' },
        { label: 'Improved KPI Accuracy', desc: 'AI-driven metric generation reduced inconsistencies and errors.' },
        { label: 'Self-Service Analytics', desc: 'Automated analytics replaced weeks of manual reporting effort.' },
        { label: 'Modernized Operations', desc: 'Shifted analytics from reactive reporting to proactive intelligence.' }
      ]
    },
    {
      id: '02',
      platform: 'AI INTERVIEW PLATFORM',
      name: 'ClearVisa',
      tagline: 'AI Agentic Visa Preparation Platform',
      positioning: '"An AI-powered visa interview preparation platform that simulates real embassy interview scenarios and provides structured feedback."',
      problem: 'Visa applicants face high-pressure U.S. visa interviews without access to realistic practice or structured professional feedback. Traditional preparation methods lack real-time interview simulation, personalized guidance, and objective performance evaluation.',
      solution: 'ClearVisa simulates real U.S. visa interviews and delivers structured, actionable feedback — making preparation accessible, objective, and affordable for every applicant.',
      capabilities: [
        'Realistic Mock Interviews: Simulates authentic visa interview environments with AI-driven officers.',
        'Live Video Interview Experience: Conducts real-time interviews to replicate actual embassy conditions.',
        'AI-Powered Performance Feedback: Evaluates grammar, fluency, confidence, relevance, and visa factors.',
        'Timestamped Improvement Suggestions: Highlights exact moments for correction and improvement.',
        'Performance Tracking & Summaries: Clear progress reports across multiple practice sessions.'
      ],
      outcomes: [
        { label: 'Reduced Preparation Anxiety', desc: 'Familiarity with interview flow lowers stress and uncertainty.' },
        { label: 'Cost-Effective Preparation', desc: 'Affordable plans reduce dependency on expensive consultants.' },
        { label: 'Accessible & Scalable', desc: 'Available anytime, anywhere — no documentation barriers.' },
        { label: 'Consistent Evaluation', desc: 'AI ensures unbiased, standardized assessment across users.' }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="h-screen flex items-center px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-light mb-8">Flagship Products</h1>
            <p className="text-xl text-gray-700 font-light leading-relaxed">
              EquiMinds builds practical AI products that solve real business problems across analytics, workflow automation, interview simulation, fraud detection, and decision intelligence.
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
          <div 
            className={cn(
              "h-full w-full flex items-center px-6 border-t border-gray-100 bg-white",
              index < array.length - 1 && "shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
              index % 2 !== 0 && "bg-surface"
            )}
          >
            <div className="max-w-7xl mx-auto w-full">
              <div className="mb-12">
                <span className="text-xs font-medium tracking-widest text-brand mb-4 block uppercase">{product.platform}</span>
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
                    <h4 className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4">Positioning</h4>
                    <p className="text-xl italic font-display font-light text-ink leading-relaxed">
                      {product.positioning}
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4">The Problem</h4>
                    <p className="text-gray-700 font-light leading-relaxed text-sm">{product.problem}</p>
                  </motion.div>
                </div>

                <TiltCard 
                  className={cn(
                    "p-10 border border-gray-100 backdrop-blur-sm transition-colors duration-500",
                    index % 2 !== 0 ? "bg-white/50" : "bg-surface/50"
                  )}
                >
                  <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">Key Capabilities</h4>
                  <div className="space-y-6">
                    {product.capabilities.slice(0, 4).map((cap, idx) => {
                      const [title, desc] = cap.split(': ');
                      return (
                        <div key={idx} className="flex gap-4">
                          <span className="text-xs font-mono text-brand mt-1">{(idx + 1).toString().padStart(2, '0')}</span>
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
        </section>
      ))}
    </div>
  );
}
