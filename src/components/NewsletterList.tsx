import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const newsletters = [
  {
    id: 'ai-agents-2026',
    title: 'The Rise of Autonomous Agents in Enterprise',
    excerpt: 'How multi-agent systems are redefining business process automation in 2026.',
    date: 'March 28, 2026',
    author: 'Dr. Sarah Chen',
    category: 'AI Strategy',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop',
    content: 'Autonomous agents are no longer a futuristic concept. In 2026, we are seeing a massive shift from simple chatbots to complex multi-agent systems that can plan, execute, and optimize business workflows with minimal human intervention...'
  },
  {
    id: 'private-ai-sovereignty',
    title: 'Data Sovereignty: The Case for Private AI',
    excerpt: 'Why leading enterprises are moving away from public LLMs to on-premise solutions.',
    date: 'March 15, 2026',
    author: 'Marcus Thorne',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop',
    content: 'As data privacy regulations tighten globally, the risk of leaking sensitive intellectual property into public training sets has become a boardroom priority. Private AI offers the same intelligence with absolute control...'
  },
  {
    id: 'generative-ui-ux',
    title: 'Generative UI: The End of Static Interfaces',
    excerpt: 'Exploring how AI is creating adaptive, real-time user interfaces tailored to individual needs.',
    date: 'March 02, 2026',
    author: 'Elena Rodriguez',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&auto=format&fit=crop',
    content: 'Static dashboards are becoming obsolete. The next generation of software will feature interfaces that morph in real-time based on the user\'s current task, intent, and historical behavior...'
  },
  {
    id: 'ai-cost-optimization',
    title: 'Cutting AI Costs Without Cutting Corners',
    excerpt: 'Practical strategies to reduce LLM inference costs by up to 70% while maintaining output quality.',
    date: 'February 20, 2026',
    author: 'James Park',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    content: 'As AI usage scales, costs can spiral quickly. We break down caching strategies, model routing, and prompt compression techniques that leading teams are using to keep inference bills under control...'
  },
  {
    id: 'retrieval-augmented-generation',
    title: 'RAG at Scale: Lessons from Production',
    excerpt: 'What we learned deploying retrieval-augmented generation systems for Fortune 500 clients.',
    date: 'February 10, 2026',
    author: 'Priya Nair',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
    content: 'RAG sounds simple in theory — retrieve relevant context, inject into prompt, generate. In practice, building a production RAG pipeline that is accurate, fast, and maintainable is a different challenge entirely...'
  },
  {
    id: 'executive-ai-strategy',
    title: 'The Executive\'s Guide to AI Governance',
    excerpt: 'How C-suite leaders can build responsible AI frameworks that enable innovation without risk.',
    date: 'January 28, 2026',
    author: 'Dr. Sarah Chen',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop',
    content: 'AI governance is no longer optional. Boards, regulators, and customers are demanding transparency and accountability. Here is a practical framework for executives building AI governance from the ground up...'
  },
  {
    id: 'multimodal-ai-products',
    title: 'Building Multimodal AI Products in 2026',
    excerpt: 'Vision, audio, and text — how to architect products that reason across modalities.',
    date: 'January 15, 2026',
    author: 'Marcus Thorne',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop',
    content: 'Multimodal AI has crossed the threshold from research curiosity to production-ready capability. We explore the architecture patterns, latency tradeoffs, and UX considerations for building products that see, hear, and understand...'
  },
  {
    id: 'fine-tuning-vs-rag',
    title: 'Fine-Tuning vs RAG: When to Use Which',
    excerpt: 'A definitive breakdown of when to fine-tune a model versus augment it with retrieval.',
    date: 'January 05, 2026',
    author: 'Elena Rodriguez',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop',
    content: 'One of the most common questions we get from engineering teams: should we fine-tune or use RAG? The honest answer is that it depends — and this edition breaks down exactly what it depends on...'
  }
];

export function NewsletterList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand mb-4 block">Insights & Updates</span>
          <h1 className="text-5xl md:text-7xl font-display font-light leading-tight mb-6">
            The EquiMinds <br />
            <span className="text-gray-600 italic">Newsletter.</span>
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
            Deep dives into the AI era, architectural blueprints, and strategic insights from our engineering labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsletters.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border border-gray-200 rounded-none overflow-hidden flex flex-col hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-medium mb-3 group-hover:text-brand transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                  {item.excerpt}
                </p>
                <Link
                  to={`/newsletter/${item.id}`}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink group-hover:text-brand transition-colors"
                >
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
