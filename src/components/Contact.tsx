import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero */}
      <section className="py-32 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-6 block">Get In Touch</span>
            <h1 className="text-5xl md:text-8xl font-display font-light mb-8 leading-tight">
              Let's Build <br />
              <span className="text-brand">Something.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-xl">
              Tell us about your AI initiative. We'll respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">

          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-12">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-8">Contact Details</p>
              <div className="flex flex-col gap-8">
                {[
                  { icon: Mail, label: 'Email', value: 'contact@equiminds.ai' },
                  { icon: Phone, label: 'Phone', value: '+971 50 884 6789' },
                  { icon: MapPin, label: 'Office', value: 'Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="p-2 bg-brand/5 shrink-0">
                      <Icon size={16} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                      <p className="text-sm font-light text-ink">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-10">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">What to Expect</p>
              <ul className="flex flex-col gap-4">
                {[
                  'Response within 1 business day',
                  'Intro call to understand your goals',
                  'Tailored proposal with no obligation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                    <span className="text-brand font-bold mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col justify-center py-24"
              >
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">Message Sent</span>
                <h2 className="text-4xl md:text-5xl font-display font-light leading-tight mb-4">
                  We'll be in <br />
                  <span className="text-gray-600 italic">touch soon.</span>
                </h2>
                <p className="text-gray-600 font-light text-lg">
                  Expect to hear from us within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="px-4 py-3 bg-surface border border-gray-200 focus:outline-none focus:border-brand transition-colors text-sm font-light"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="px-4 py-3 bg-surface border border-gray-200 focus:outline-none focus:border-brand transition-colors text-sm font-light"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="px-4 py-3 bg-surface border border-gray-200 focus:outline-none focus:border-brand transition-colors text-sm font-light"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">What are you looking to build? *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your AI initiative, challenge, or idea..."
                    className="px-4 py-3 bg-surface border border-gray-200 focus:outline-none focus:border-brand transition-colors text-sm font-light resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-10 py-4 bg-brand text-white font-medium hover:bg-brand-dark transition-all flex items-center gap-3 group"
                  >
                    Send Message
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="mt-4 text-[10px] text-gray-400">
                    By submitting you agree to our privacy policy. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="py-16 px-6 border-t border-gray-100 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-2xl md:text-3xl font-display font-light text-gray-600 italic">
            AI is not a feature. It's the operating system.
          </p>
          <div className="flex gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <span>150+ Engineers</span>
            <span className="text-gray-200">·</span>
            <span>30+ Clients</span>
            <span className="text-gray-200">·</span>
            <span>6+ Years</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
