import { motion } from 'framer-motion';
import { Star, Wand2, Sparkles } from 'lucide-react';

const QuoteCard = ({ quote, author, role, index, isDark }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`p-10 md:p-14 rounded-[4rem] text-center border relative overflow-hidden group transition-all duration-300
        ${isDark
                    ? 'bg-secondary/10 border-accent/10 hover:border-accent hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] shadow-3xl'
                    : 'bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] border-primary/5 hover:shadow-2xl'
                }`}
        >
            {/* Background Atmosphere */}
            {isDark && (
                <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none transform translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-[3s]">
                     <Sparkles className="w-60 h-60 text-accent -rotate-12" />
                </div>
            )}

            <div className="relative z-10 space-y-12">
                <div className="flex gap-2 justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${isDark ? 'text-accent fill-accent shadow-[0_0_10px_var(--color-accent)]' : 'text-accent fill-accent'}`} />
                    ))}
                </div>
                
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-magical font-bold leading-[1.5] italic
                    ${isDark ? 'text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'text-primary'}
                `}>
                    "{quote}"
                </h2>
                
                <div className="flex flex-col items-center gap-4">
                     <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl
                        ${isDark ? 'bg-accent text-primary shadow-[0_0_15px_rgba(201,168,76,0.5)]' : 'bg-primary text-white shadow-lg'}
                     `}>
                        {author[0]}
                     </div>
                    <div>
                        <p className={`text-xl md:text-2xl font-bold font-heading ${isDark ? 'text-white' : 'text-primary'}`}>
                            {author}
                        </p>
                        <p className={`text-sm font-body uppercase tracking-[0.2em] font-bold ${isDark ? 'text-accent' : 'text-accent'}`}>
                            {role}
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Hover Magic Ornament (Dark mode) */}
            {isDark && (
                <div className="absolute top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <Wand2 className="w-5 h-5 text-accent animate-pulse" />
                </div>
            )}
        </motion.div>
    );
};

const TeamQuotes = ({ isDark }) => {
    const quotes = [
        {
            quote: isDark ? "We don’t just build websites — we craft digital experiences that manifest legendary narratives." : "Total digital transformations require absolute precision and unyielding creative passion.",
            author: "Alaric Vanguard",
            role: isDark ? "High Alchemist" : "Founder"
        },
        {
            quote: isDark ? "Every line of code is an incantation, designed to bring structure to the chaotic void of the web." : "Scalability is the foundation of digital success; we build architectures that never yield.",
            author: "Elara Codecraft",
            role: isDark ? "Warden of the Lattice" : "Lead Engineer"
        }
    ];

    return (
        <section className={`py-40 px-6 ${isDark ? 'bg-background' : 'bg-secondary/5'} relative overflow-hidden`}>
            {/* Decoration */}
            {isDark && (
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.03),transparent_70%)] pointer-events-none" />
            )}
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    {quotes.map((q, i) => (
                        <QuoteCard key={i} quote={q.quote} author={q.author} role={q.role} index={i} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamQuotes;
