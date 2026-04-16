import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Printer } from 'lucide-react';
import { newsletters } from '@/src/components/NewsletterList';

export function NewsletterDetail() {
  const { id } = useParams();
  const item = newsletters.find(n => n.id === id);

  if (!item) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h2 className="text-3xl font-display font-light">Newsletter not found</h2>
        <Link to="/newsletter" className="text-brand mt-4 inline-block">Back to Newsletters</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 min-h-screen bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/newsletter" 
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand transition-colors mb-12"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Newsletters
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand mb-6">
            <span className="flex items-center gap-1"><Tag size={12} /> {item.category}</span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1 text-gray-400"><Calendar size={12} /> {item.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-light leading-tight mb-8">
            {item.title}
          </h1>
          <div className="flex items-center justify-between py-8 border-y border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-lg">
                {item.author[0]}
              </div>
              <div>
                <div className="text-sm font-bold text-ink">{item.author}</div>
                <div className="text-xs text-gray-400">Senior AI Strategist</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <button className="hover:text-brand transition-colors"><Share2 size={18} /></button>
              <button className="hover:text-brand transition-colors"><Printer size={18} /></button>
            </div>
          </div>
        </div>

        <div className="aspect-video rounded-[2rem] overflow-hidden mb-12">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 font-light leading-relaxed mb-8 italic">
            {item.excerpt}
          </p>
          <div className="text-lg text-gray-600 font-light leading-relaxed space-y-8">
            <p>{item.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="grid grid-cols-2 gap-8 my-12">
              <img 
                src={`https://picsum.photos/seed/${item.id}-1/600/400`} 
                alt="Detail 1" 
                className="rounded-2xl w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src={`https://picsum.photos/seed/${item.id}-2/600/400`} 
                alt="Detail 2" 
                className="rounded-2xl w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <blockquote className="border-l-4 border-brand pl-8 py-4 my-12 italic text-2xl font-display font-light text-ink">
              "The future of AI is not about replacing humans, but about augmenting our potential to solve the unsolvable."
            </blockquote>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-100">
          <h3 className="text-2xl font-display font-light mb-8">Subscribe to our Newsletter</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-surface border border-gray-100 rounded-xl focus:outline-none focus:border-brand transition-colors"
            />
            <button className="px-10 py-4 bg-brand text-white font-medium rounded-xl hover:bg-brand-dark transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
