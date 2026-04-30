import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { TiltCard } from '@/src/components/TiltCard';

type CaseStudy = {
  id: string;
  mode: string;
  modeVariant: 'copilot' | 'olympus';
  title: string;
  benchmark: string;
  benchmarkDesc: string;
  tagline: string;
  delivered: { title: string; desc: string }[];
  results: { value: string; label: string }[];
  impact: string;
};

const cases: CaseStudy[] = [
  {
    id: '01',
    mode: 'ENGINEER COPILOT',
    modeVariant: 'copilot',
    title: 'AI Recruitment Platform',
    benchmark: 'Up to 50% Faster Hiring & 30% Better Candidate Matching',
    benchmarkDesc: 'Driven by intelligent resume parsing, automated feedback loops, and analytics-driven workflows.',
    tagline: '"Built to make career readiness and recruitment smarter — reducing friction across interview preparation, candidate evaluation, and hiring decision-making at scale."',
    delivered: [
      { title: 'AI Interview Intelligence', desc: 'AI mock interviews, resume optimization, and AI-based interview analysis.' },
      { title: 'Scalable Serverless Platform', desc: 'AI-powered evaluation pipelines for high performance and reliability.' },
      { title: 'Secure HR Integrations', desc: 'Secure HR system integrations and role-based workflows across candidates, employers, and admins.' },
      { title: 'AI-Native Delivery', desc: 'Applied AI-native development workflows to optimize engineering throughput and accelerate execution.' },
    ],
    results: [
      { value: '50%', label: 'FASTER HIRING' },
      { value: '30%', label: 'BETTER MATCHING' },
    ],
    impact: 'Up to 50% faster hiring, 30% better candidate matching, smarter interview-to-hiring workflows, and AI-accelerated platform delivery.',
  },
  {
    id: '02',
    mode: 'ENGINEER COPILOT',
    modeVariant: 'copilot',
    title: 'Mall Chain Experience Platform',
    benchmark: 'Full Platform Launched in 3 Months',
    benchmarkDesc: 'From requirement confirmation to live deployment via AI-accelerated workflows.',
    tagline: '"Operating as an embedded partner across experience and operational layers — driving delivery velocity, architectural rigor, and continuous ecosystem evolution."',
    delivered: [
      { title: 'Core Platform Streams', desc: 'Tenant platform, unified app, associated infrastructure, and managed services.' },
      { title: 'AI-Assisted Workflows', desc: 'Supercharged engineering processes across solutioning, implementation, review, and refinement.' },
      { title: 'Optimised SDLC', desc: 'AI-native capabilities achieving faster iteration cycles and stronger engineering efficiency across the board.' },
      { title: 'Innovation Lab', desc: 'A joint space to identify opportunities, experiment with new ideas, and operationalize new digital capabilities.' },
    ],
    results: [
      { value: '3', label: 'MONTHS TO LAUNCH' },
      { value: '4+', label: 'PLATFORM STREAMS' },
    ],
    impact: 'Higher release velocity, AI-accelerated engineering throughput, faster time-to-market, stronger execution continuity, and smarter evolution across the entire digital ecosystem.',
  },
  {
    id: '03',
    mode: 'OLYMPUS MODE',
    modeVariant: 'olympus',
    title: 'AI Educational Engagement Platform',
    benchmark: 'AI-Native Student Opportunity Platform',
    benchmarkDesc: 'Shaped for rapid, production-ready execution with the Olympus agentic delivery framework.',
    tagline: '"A creation-first platform where students discover challenges, submit 60-second video entries, receive AI-driven feedback, build verified profiles, and unlock real-world opportunities through recognition and progression."',
    delivered: [
      { title: 'Social Creator Experience', desc: 'Short-form video challenges, AI-driven feedback, and community-first engagement.' },
      { title: 'AI Mentorship Workflows', desc: 'Verified profiles, achievement records, challenge journeys, and opportunity pathways.' },
      { title: 'Olympus Delivery', desc: 'Parallelised execution across product, UX, AI, and engineering via guardrailed agentic workflows.' },
      { title: 'Production-Ready Architecture', desc: 'Scalable, orchestration-first infrastructure shaped for rapid v1 launch and future scale.' },
    ],
    results: [
      { value: '5+', label: 'PARALLEL STREAMS' },
      { value: 'v1', label: 'PROD LAUNCH' },
    ],
    impact: 'A bold vision translated into a robust, execution-ready system — demonstrating how Olympus moves ambitious AI-native products from narrative to production with speed, structure, and control.',
  },
  {
    id: '04',
    mode: 'ENGINEER COPILOT',
    modeVariant: 'copilot',
    title: 'Drone Flight Operations Platform',
    benchmark: 'Operator Training Cut from 30 Days to 3',
    benchmarkDesc: 'Mobile-first, offline-capable platform replacing complex desktop GCS software for medical drone delivery.',
    tagline: '"A lightweight, offline-capable flight operations platform built for non-technical drone operators — enabling seamless medical drone delivery in remote, connectivity-limited environments."',
    delivered: [
      { title: 'Mobile-First Interface', desc: 'Drone operations via smartphones instead of laptops, accessible to operators with minimal technical background.' },
      { title: 'QR Code UAV Connection', desc: 'Raspberry Pi-hosted web apps with unique IP and SSID credentials per drone for instant secure pairing.' },
      { title: 'Automated Pre-flight Checks', desc: 'Key flight and sensor parameter validation with safety lockouts for any detected discrepancies.' },
      { title: 'Offline-First Architecture', desc: 'Full functionality in remote, network-devoid areas with automatic cloud sync once connectivity is restored.' },
    ],
    results: [
      { value: '10×', label: 'FASTER ONBOARDING' },
      { value: '3', label: 'DAYS TO TRAIN' },
    ],
    impact: '30-day operator training reduced to 3 days, seamless drone delivery missions in remote regions, and improved compliance and traceability across critical healthcare logistics.',
  },
  {
    id: '05',
    mode: 'ENGINEER COPILOT',
    modeVariant: 'copilot',
    title: 'Industrial IoT Monitoring Platform',
    benchmark: '200ms Real-Time WebSocket Latency',
    benchmarkDesc: 'Centralized IoT dashboard replacing manual monitoring across an entire manufacturing warehouse.',
    tagline: '"A centralized web application integrating live and historical device monitoring for an entire manufacturing warehouse — enabling real-time analytics and multi-location operational visibility."',
    delivered: [
      { title: 'ReactJS Dashboard', desc: 'Responsive frontend with drag-and-drop chart functionality for effortless report comparison and data tracking.' },
      { title: 'NestJS + MQTT Backend', desc: 'Real-time data streaming via WebSockets from PLC-connected devices with 200ms latency.' },
      { title: 'Role-Based Access Control', desc: 'Restricted access to sensitive operational data based on user roles across multiple locations.' },
      { title: 'On-Premise Deployment', desc: "Hosted on the client's Windows server for secure intranet access across multiple PCs and facilities." },
    ],
    results: [
      { value: '200ms', label: 'WEBSOCKET LATENCY' },
      { value: '8+', label: 'DEVICE TYPES' },
    ],
    impact: 'Eliminated manual device monitoring across an entire manufacturing facility, delivering real-time analytics, automated reporting, and a scalable multi-location operations platform.',
  },
  {
    id: '06',
    mode: 'ENGINEER COPILOT',
    modeVariant: 'copilot',
    title: 'Remote Robotics Control Platform',
    benchmark: 'Sub-1-Second Robot Control Latency',
    benchmarkDesc: 'Cloud-native architecture enabling real-time remote robot operation with live video streaming from any device.',
    tagline: '"A cloud-native platform allowing users to remotely control Raspberry Pi robots from any device — delivering real-time video feedback and near-instant command execution at global scale."',
    delivered: [
      { title: 'AWS IoT Core Integration', desc: 'Secure MQTT-based bidirectional communication enabling reliable, low-latency control for all robot devices.' },
      { title: 'Live Video Streaming', desc: 'AWS Kinesis Video Streams with CloudFront CDN and HLS playback for smooth real-time robot visuals.' },
      { title: 'Golang Backend on EC2', desc: 'High-performance API layer handling robot management, bookings, and concurrent user sessions.' },
      { title: 'Scalable Cloud Infrastructure', desc: 'PostgreSQL + API Gateway enabling multi-user concurrent access with zero noticeable lag or disruption.' },
    ],
    results: [
      { value: '<1s', label: 'CONTROL LATENCY' },
      { value: '∞', label: 'DEVICE AGNOSTIC' },
    ],
    impact: 'Near real-time robot control from any device, live video feedback with sub-second latency, and a scalable cloud platform ready for education, remote experimentation, and commercial robotics.',
  },
  {
    id: '07',
    mode: 'ENGINEER COPILOT',
    modeVariant: 'copilot',
    title: 'AI Tax Compliance Platform',
    benchmark: 'End-to-End Tax Automation on Existing Stack',
    benchmarkDesc: 'WordPress transformed into a fully functional AI-powered tax compliance and reporting hub.',
    tagline: '"A WordPress-native tax compliance platform that replaced disconnected ERP processes with end-to-end automation, AI-driven anomaly detection, and proactive regulatory alerting — all without migrating infrastructure."',
    delivered: [
      { title: 'ERP-Connected Backend', desc: "Real-time synchronisation between the client's ERP system and WordPress, automating tax data fetching and compliance tracking." },
      { title: 'AI Compliance Engine', desc: 'Embedded AI models monitoring tax anomalies, detecting fraud, tracking law changes, and delivering predictive insights.' },
      { title: 'Proactive Alerts & Automation', desc: 'Real-time alerts for deadlines, discrepancies, and regulation changes delivered directly to admin panels and dashboards.' },
      { title: 'Enterprise-Grade Security', desc: 'Encryption, role-based access control, and detailed audit logs ensuring data privacy and compliance integrity.' },
    ],
    results: [
      { value: '100%', label: 'ERP SYNC AUTOMATED' },
      { value: '0', label: 'MANUAL STEPS' },
    ],
    impact: "Full tax data processing automation, AI-powered anomaly detection, real-time regulatory alerts, and a future-proof compliance platform built on the client's existing WordPress infrastructure.",
  },
  {
    id: '08',
    mode: 'ENGINEER COPILOT',
    modeVariant: 'copilot',
    title: 'E-Commerce Loyalty & Analytics Platform',
    benchmark: '20% Loyalty Redemption Lift & 15% Conversion Increase',
    benchmarkDesc: 'Yotpo loyalty + Mixpanel analytics platform driving repeat purchases for a fast-growing activewear brand.',
    tagline: '"A data-backed loyalty and analytics platform built for a fast-growing activewear brand — transforming customer engagement through personalised rewards and real-time behavioural insights."',
    delivered: [
      { title: 'Yotpo Loyalty Integration', desc: 'Personalised rewards program driving repeat purchases, higher retention, and strengthened brand loyalty.' },
      { title: 'Mixpanel Analytics', desc: 'Real-time user journey tracking and targeted marketing campaign intelligence for data-driven decisions.' },
      { title: 'Conversion Optimisation', desc: 'Data-driven UX refinements and real-time analytics improving checkout conversion rates by 15%.' },
      { title: 'Behavioural Insights Engine', desc: 'User behaviour analytics enabling precision-targeted engagement strategies and seamless navigation flows.' },
    ],
    results: [
      { value: '20%', label: 'REDEMPTION LIFT' },
      { value: '15%', label: 'CONVERSION INCREASE' },
    ],
    impact: '20% increase in loyalty point redemption, 15% improvement in conversion rates, stronger repeat purchase behaviour, and a scalable data foundation for long-term customer relationship growth.',
  },
];

export function CaseStudies() {
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

      {cases.map((c, index) => (
        <section
          key={c.id}
          className="h-screen sticky top-0 overflow-hidden"
          style={{ zIndex: 20 + index }}
        >
          <div
            className={cn(
              'h-full w-full flex items-center px-6 border-t border-gray-100 bg-white',
              index === 0 && 'shadow-[0_20px_50px_rgba(0,0,0,0.1)]',
              index % 2 !== 0 && 'bg-surface',
            )}
          >
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">

                {/* Left column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col justify-center"
                >
                  {/* Mode badge */}
                  <span
                    className={cn(
                      'inline-flex items-center self-start px-3 py-1 text-xs font-medium tracking-widest uppercase mb-4 border',
                      c.modeVariant === 'olympus'
                        ? 'border-brand/30 text-brand bg-brand/5'
                        : 'border-gray-200 text-gray-500 bg-white',
                    )}
                  >
                    {c.mode}
                  </span>

                  <span className="text-xs font-medium tracking-widest text-brand mb-3 block uppercase">
                    Case Study {c.id}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display font-light mb-6">{c.title}</h2>
                  <p className="text-base italic font-display font-light text-ink leading-relaxed mb-10">
                    {c.tagline}
                  </p>

                  <div className="flex gap-12">
                    {c.results.map((res, idx) => (
                      <div key={idx}>
                        <div className="text-4xl font-display font-light text-brand mb-1">{res.value}</div>
                        <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Right column */}
                <TiltCard
                  className={cn(
                    'p-10 border border-gray-100 backdrop-blur-sm self-center',
                    index % 2 !== 0 ? 'bg-white/50' : 'bg-surface/50',
                  )}
                >
                  {/* Benchmark callout */}
                  <div className="mb-7 p-5 border-l-2 border-brand bg-brand/[0.04]">
                    <p className="text-xs font-bold tracking-widest text-brand uppercase mb-2">
                      {c.modeVariant === 'olympus' ? 'Platform Overview' : 'Velocity Benchmark'}
                    </p>
                    <h3 className="text-base font-display font-light text-ink leading-snug mb-1">
                      {c.benchmark}
                    </h3>
                    <p className="text-xs text-gray-500">{c.benchmarkDesc}</p>
                  </div>

                  {/* Feature grid */}
                  <div className="grid grid-cols-2 gap-3 mb-7">
                    {c.delivered.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.08 * idx }}
                        className={cn(
                          'p-4 border border-gray-100 rounded-sm',
                          index % 2 !== 0 ? 'bg-white/70' : 'bg-white/80',
                        )}
                      >
                        <h5 className="text-xs font-semibold text-ink mb-1">{item.title}</h5>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Impact statement */}
                  <div className="border-l-2 border-brand/30 pl-4">
                    <p className="text-xs italic text-brand/80 leading-relaxed">
                      Impact: {c.impact}
                    </p>
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
