import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { TiltCard } from '@/src/components/TiltCard';

export function CaseStudies() {
  const cases = [
    {
      id: '01',
      title: 'Chorus',
      tagline: '"An AI marketing operations platform built using 12 AI agents and one human product owner in about two weeks."',
      delivered: [
        'Story intake and AI enrichment pipeline',
        'Voice-profiled content generation',
        'Approval queue',
        'LinkedIn auto-publishing',
        'Content calendar',
        'Case study library',
        'Research agent',
        'Outbound CRM workflows',
        'Community hub',
        'Hermes orchestration layer'
      ],
      results: [
        { value: '2', label: 'WEEKS' },
        { value: '12', label: 'AGENTS' }
      ]
    },
    {
      id: '02',
      title: 'Internal Transformation',
      tagline: '"EquiMinds transformed its own HRMS, CRM, and Finance operations using AI-augmented engineering."',
      delivered: [
        'HRMS: Leave management, attendance tracking, appraisals system, payroll processing, and onboarding flows.',
        'Unified CRM: A complete customer relationship platform replacing disconnected legacy tools and spreadsheets.',
        'Finance Automation: Invoicing generation, collections tracking, financial reporting, and comprehensive MIS dashboards.'
      ],
      results: [
        { value: '3-5x', label: 'DELIVERY SPEED' },
        { value: '150+', label: 'USERS ONBOARDED' }
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
            <h1 className="text-5xl md:text-7xl font-display font-light mb-8">Proof in Production</h1>
            <p className="text-xl text-gray-700 font-light leading-relaxed">
              Real systems delivering real value. We build working software that solves immediate business problems without taking quarters to deploy.
            </p>
          </motion.div>
        </div>
      </section>

      {cases.map((c, index, array) => (
        <section 
          key={c.id} 
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
              <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-xs font-medium tracking-widest text-brand mb-4 block uppercase">Case Study {c.id}</span>
                  <h2 className="text-4xl md:text-6xl font-display font-light mb-8">{c.title}</h2>
                  <p className="text-xl italic font-display font-light text-ink leading-relaxed mb-12">
                    {c.tagline}
                  </p>
                  
                  <div className="flex gap-16">
                    {c.results.map((res, idx) => (
                      <div key={idx}>
                        <div className="text-5xl font-display font-light text-brand mb-2">{res.value}</div>
                        <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <TiltCard 
                  className={cn(
                    "p-12 border border-gray-100 backdrop-blur-sm",
                    index % 2 !== 0 ? "bg-white/50" : "bg-surface/50"
                  )}
                >
                  <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-8">What Was Delivered</h4>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {c.delivered.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="text-brand mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-16 flex flex-col items-center justify-center py-12 border border-dashed border-gray-200 rounded-xl">
                    <PlayCircle className="text-brand mb-4" size={32} />
                    <span className="text-xs font-bold tracking-widest uppercase mb-1">Case Study Walkthrough</span>
                    <p className="text-xs text-gray-500">Video explanation coming soon</p>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
