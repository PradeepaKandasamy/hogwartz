import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Zap, ShieldCheck } from 'lucide-react';

const ValueCard = ({ value, index, isDark }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`p-10 rounded-[3rem] text-center border transition-all duration-300 relative overflow-hidden group
        ${isDark
                    ? 'bg-secondary/10 border-accent/10 hover:border-accent/40 shadow-2xl'
                    : 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-primary/5 hover:shadow-2xl'
                }`}
        >
            {/* Background Shape (Dark Theme Only) */}
            {isDark && (
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                    {value.icon}
                </div>
            )}

            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-colors transform group-hover:scale-110 duration-500
                ${isDark ? 'bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-primary shadow-[0_0_20px_rgba(201,168,76,0.2)]' : 'bg-primary text-white shadow-xl'}
            `}>
                <div className="w-10 h-10">{value.icon}</div>
            </div>
            
            <h3 className={`font-heading text-2xl md:text-3xl font-bold mb-4
                ${isDark ? 'text-white' : 'text-primary'}
            `}>
                {value.title}
            </h3>
            
            <p className={`font-body text-sm md:text-base leading-relaxed
                ${isDark ? 'text-text-secondary' : 'text-text-secondary font-medium'}
            `}>
                {value.description}
            </p>
        </motion.div>
    );
};

const TeamValues = ({ isDark }) => {
    const values = [
        { 
            title: isDark ? "Infinite Creativity" : "Bold Creativity", 
            icon: <Lightbulb className="w-full h-full" />, 
            description: "No boundaries, no limits. Every project begins with a journey into the uncharted realms of imagination." 
        },
        { 
            title: isDark ? "True Alchemical Coven" : "High-Level Collaboration", 
            icon: <Handshake className="w-full h-full" />, 
            description: "Diverse minds united by a singular purpose: manifesting extraordinary digital achievements through complete alignment." 
        },
        { 
            title: isDark ? "Arcane Innovation" : "Modern Innovation", 
            icon: <Zap className="w-full h-full" />, 
            description: "Pushing technical frontiers using the fastest, most powerful digital frameworks and strategic algorithms." 
        },
        { 
            title: isDark ? "Unbreakable Vow" : "Total Commitment", 
            icon: <ShieldCheck className="w-full h-full" />, 
            description: "Our word is forged in stone. We are committed to your absolute victory and category-dominating results." 
        }
    ];

    return (
        <section className={`py-32 px-6 ${isDark ? 'bg-[#0A0A12]' : 'bg-secondary/5'} relative overflow-hidden border-y border-border/50`}>
            {/* Dark Mode Background Decoration */}
            {isDark && (
                <div className="absolute top-1/2 left-0 w-1/3 h-full bg-[radial-gradient(circle_at_0%_50%,rgba(201,168,76,0.03),transparent_70%)] pointer-events-none" />
            )}
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
                    <span className="text-accent font-bold font-body uppercase tracking-[0.2em] text-xs md:text-sm block">Building on Foundations</span>
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-magical font-bold leading-[1.1] ${isDark ? 'text-white' : 'text-primary'}`}>
                        Our Magical <br /> Core Foundations.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <ValueCard key={i} value={v} index={i} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamValues;
