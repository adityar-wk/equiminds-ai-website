import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { TiltCard } from '@/src/components/TiltCard';

function TeamImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const base = src.replace(/\.(png|jpe?g)$/i, '');
  const formats = [`${base}.png`, `${base}.jpeg`, `${base}.jpg`];
  return (
    <img
      src={formats[0]}
      alt={alt}
      className={className}
      onError={(e) => {
        const img = e.currentTarget;
        const tried = parseInt(img.getAttribute('data-fmt') || '0');
        const next = tried + 1;
        if (formats[next]) {
          img.setAttribute('data-fmt', String(next));
          img.src = formats[next];
        }
      }}
    />
  );
}

const ACTIVITY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80', alt: 'Office meeting' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', alt: 'Team workshop' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', alt: 'Team building' },
  { src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80', alt: 'Office work' },
  { src: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80', alt: 'Team celebration' },
];

const BENTO_LAYOUTS = [
  {
    areas: `"a a b" "a a c" "d e f"`,
    cols: '2fr 1fr 1fr',
    rows: '220px 220px 200px',
    items: [
      { area: 'a', img: 0 },
      { area: 'b', img: 1 },
      { area: 'c', img: 2 },
      { area: 'd', img: 3 },
      { area: 'e', img: 4 },
      { area: 'f', img: 5 },
    ],
  },
  {
    areas: `"a b b" "a c d" "e e d"`,
    cols: '1fr 1fr 1fr',
    rows: '200px 220px 200px',
    items: [
      { area: 'a', img: 2 },
      { area: 'b', img: 0 },
      { area: 'c', img: 3 },
      { area: 'd', img: 1 },
      { area: 'e', img: 4 },
    ],
  },
  {
    areas: `"a a b" "c d b" "c d e"`,
    cols: '1fr 1fr 1fr',
    rows: '200px 220px 220px',
    items: [
      { area: 'a', img: 5 },
      { area: 'b', img: 1 },
      { area: 'c', img: 3 },
      { area: 'd', img: 0 },
      { area: 'e', img: 2 },
    ],
  },
];

function BentoGallery() {
  const [layoutIdx, setLayoutIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLayoutIdx((i) => (i + 1) % BENTO_LAYOUTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const layout = BENTO_LAYOUTS[layoutIdx];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={layoutIdx}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          display: 'grid',
          gridTemplateAreas: layout.areas,
          gridTemplateColumns: layout.cols,
          gridTemplateRows: layout.rows,
          gap: '8px',
        }}
        className="w-full"
      >
        {layout.items.map((item) => (
          <div
            key={item.area}
            style={{ gridArea: item.area }}
            className="overflow-hidden"
          >
            <img
              src={ACTIVITY_IMAGES[item.img].src}
              alt={ACTIVITY_IMAGES[item.img].alt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export function About() {
  return (
    <div className="pt-20">
      <section className="py-32 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-light mb-12 leading-tight">
              An AI-Native <br />
              <span className="text-brand">Product Studio</span>
            </h1>
            <p className="text-2xl text-gray-700 font-light leading-relaxed mb-8">
              EquiMinds is a full-stack AI-native product studio founded in 2019 and built for a new generation of software delivery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Our teams combine product thinking, engineering depth, AI orchestration, design, data intelligence, and enterprise delivery discipline to help businesses launch faster and evolve continuously. We believe the future belongs to partners who can build across the full stack, ship with speed, and deliver measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-light mb-20">The EquiMinds Difference</h2>
          <div className="grid md:grid-cols-3 gap-0 border-l border-t border-gray-100/50">
            {[
              { id: '01.', title: 'AI-Native Since Day One', desc: 'Born digital in 2019, EquiMinds has built its operating model around AI-native delivery, with 150+ AI stack engineers and 40+ turnkey projects delivered.' },
              { id: '02.', title: 'Two Delivery Modes, One Partner', desc: 'From greenfield AI builds to enterprise modernization, we support both AI-agent-led and engineer-led execution.' },
              { id: '03.', title: 'We Build AI Products, Not Just Use AI Tools', desc: 'We actively build and ship AI products, not just services around them. Products across conversational AI, analytics, compliance, and automation.' },
              { id: '04.', title: 'Speed as a System', desc: 'Our process is designed to reduce delays through gated delivery, AI-assisted workflows, and AI-native engineering practices.' },
              { id: '05.', title: 'Full-Stack AI Services Under One Roof', desc: 'Strategy, product, design, data, infrastructure, AI quality, orchestration, and delivery integrated into one model.' },
              { id: '06.', title: 'Outcomes Over Headcount', desc: 'We position around value delivered and products shipped, not billing more people for more time.' },
            ].map((item) => (
              <TiltCard key={item.id} className="p-8 border-r border-b border-gray-100/50 hover:bg-white/50 transition-colors duration-500">
                <span className="text-xs font-mono text-brand mb-4 block group-hover:text-brand-dark transition-colors">{item.id}</span>
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">{item.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>


      {/* ── Bento Gallery ── */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">Life at EquiMinds</span>
            <h2 className="text-3xl md:text-4xl font-display font-light leading-tight">
              Our People, Our Culture
            </h2>
          </div>
          <BentoGallery />
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="py-32 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">The People Behind the Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-light leading-tight">
              Leadership Team <br />
              <span className="text-gray-600 italic">& Advisory.</span>
            </h2>
          </div>

          {/* C-Suite Row */}
          <div className="mb-10">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Executive Leadership</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Vijay Anand', title: 'Chief Executive Officer', img: '/team/vijay-anand.png' },
                { name: 'Pranav Sathish', title: 'Chief Financial Officer', img: '/team/pranav-sathish.png' },
                { name: 'Kousick Shanmugam', title: 'Chief Technical Officer', img: '/team/kousick-shanmugam.png' },
              ].map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 w-52"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <TeamImage
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 border-t border-gray-100">
                    <h3 className="text-xs font-medium text-ink">{member.name}</h3>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-brand mt-1">{member.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Senior Leadership Row */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Senior Leadership</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Suresh Narayan', title: 'Vice President of Delivery', img: '/team/suresh-narayan.png' },
                { name: 'Chaitanya', title: 'Chief Business Officer', img: '/team/chaitanya.png' },
                { name: 'Harsha S', title: 'Director of Operations', img: '/team/harsha-s.png' },
                { name: 'Sumanth Sugunendiran', title: 'Chief Operations Officer', img: '/team/sumanth-sugunendiran.png' },
              ].map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 w-52"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <TeamImage
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 border-t border-gray-100">
                    <h3 className="text-xs font-medium text-ink">{member.name}</h3>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-brand mt-1">{member.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
