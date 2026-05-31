import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Sparkles, ArrowRight, Star, Users, Briefcase, Zap } from 'lucide-react';

const roles = ["Developers", "Designers", "Marketers", "Strategists"];

const TeamHero = ({ isDark }) => {
    const [roleIndex, setRoleIndex] = useState(0);

    // Cycle through team highlights
    useEffect(() => {
        const timer = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    // Floating animation variants with staggering capability
    const float = (delay = 0) => ({
        y: [0, -12, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }
    });

    return (
        <section className={`relative min-h-[90vh] flex items-center py-20 px-6 overflow-hidden transition-colors duration-500
            ${!isDark ? 'bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7]' : 'bg-[#05050A]'}
        `}>
            {/* Background elements */}
            {isDark ? (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.08),transparent_70%)]" />
                    
                    {/* Floating Arcane Particles */}
                    <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-accent/40 rounded-full"
                                initial={{ 
                                    x: Math.random() * 100 + "%", 
                                    y: Math.random() * 100 + "%"
                                }}
                                animate={{ 
                                    y: [null, "-=100", 0],
                                    opacity: [0, 0.6, 0],
                                    scale: [0, 1, 0]
                                }}
                                transition={{ 
                                    duration: Math.random() * 10 + 10, 
                                    repeat: Infinity, 
                                    delay: Math.random() * 10,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
                    <div className="absolute top-[20%] left-[40%] w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
                </div>
            )}

            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
                {!isDark ? (
                    /* --- LIGHT THEME: HUMAN-CENTRIC SPLIT --- */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left Side: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white shadow-lg shadow-primary/5">
                                <Users className="w-4 h-4 text-accent" />
                                <span className="font-heading text-xs font-bold tracking-widest uppercase text-primary">Humans of Hogwartz</span>
                            </div>

                            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl text-[#1E293B] leading-[1.1] tracking-tight">
                                The Minds <br />
                                Behind the <br />
                                <span className="relative inline-block">
                                    <span className="text-accent italic">Magic</span>
                                    <motion.div 
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute -top-4 -right-8"
                                    >
                                        <Sparkles className="w-8 h-8 text-accent/30" />
                                    </motion.div>
                                </span>
                            </h1>

                            <div className="space-y-4">
                                <p className="font-body text-lg md:text-xl text-text-muted leading-relaxed max-w-xl font-medium">
                                    A team of creators, strategists, and innovators crafting digital experiences that leave lasting impressions. 
                                </p>
                                
                                {/* Dynamic Expertise Highlight */}
                                <div className="flex items-center gap-3 py-1">
                                    <Zap className="w-5 h-5 text-accent" />
                                    <div className="flex items-center gap-2 text-lg md:text-xl font-bold text-primary">
                                        <span>Expert</span>
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={roleIndex}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                className="text-accent italic"
                                            >
                                                {roles[roleIndex]}
                                            </motion.span>
                                        </AnimatePresence>
                                        <span>building excellence.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="group px-10 py-5 rounded-2xl bg-[#1E293B] text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3">
                                    <span>Meet the Team</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button onClick={() => window.scrollTo({ top: 1800, behavior: 'smooth' })} className="group px-10 py-5 rounded-2xl border-2 border-primary/5 bg-white font-bold transition-all duration-300 hover:bg-slate-50 text-primary flex items-center gap-3 shadow-sm">
                                    <Star className="w-5 h-5 text-accent" />
                                    <span>Our Rituals</span>
                                </button>
                            </div>

                            {/* Culture Mini-Grid */}
                            <div className="pt-8 border-t border-primary/5 flex flex-wrap items-center gap-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-primary leading-tight">10+</p>
                                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Team Members</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-primary leading-tight">5+</p>
                                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Global Offices</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Team Visual Collage */}
                        <div className="relative h-[550px] lg:h-[650px] flex items-center justify-center">
                            {/* Main Workspace Frame */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative w-full max-w-[420px] aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)] border-[10px] border-white z-10"
                            >
                                <img 
                                    src="https://picsum.photos/seed/teamwork/600/400" 
                                    alt="Collaborative Workspace" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                
                                {/* Info Badge Overlay */}
                                <div className="absolute bottom-8 left-8 right-8 p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-white">
                                        <div className="w-8 h-8 rounded-full bg-accent/40 flex items-center justify-center">
                                            <Sparkles className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Creative Team</span>
                                    </div>
                                    <span className="text-xs font-black text-white">Est. 2024</span>
                                </div>
                            </motion.div>

                            {/* Staggered Floating Profiles */}
                            <motion.div
                                animate={float(0)}
                                className="absolute -top-10 -right-6 lg:-right-10 z-20 w-36 h-36 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white hover:scale-110 transition-transform duration-500 cursor-pointer"
                            >
                                <img src="https://picsum.photos/seed/user1/100/100" alt="Team Profile" className="w-full h-full object-cover" />
                            </motion.div>

                            <motion.div
                                animate={float(1)}
                                className="absolute top-1/2 -left-12 lg:-left-20 z-20 w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white hover:scale-110 transition-transform duration-500 cursor-pointer"
                            >
                                <img src="https://picsum.photos/seed/user2/100/100" alt="Team Profile" className="w-full h-full object-cover" />
                            </motion.div>

                            <motion.div
                                animate={float(2)}
                                className="absolute -bottom-8 -right-4 lg:right-12 z-20 w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white hover:scale-110 transition-transform duration-500 cursor-pointer"
                            >
                                <img src="https://picsum.photos/seed/user3/100/100" alt="Team Profile" className="w-full h-full object-cover" />
                            </motion.div>

                            {/* Background ambient light */}
                            <div className="absolute inset-10 bg-accent/20 blur-[120px] rounded-full -z-10 opacity-60" />
                        </div>
                    </div>
                ) : (
                    /* --- DARK THEME: ORIGINAL CENTERED LAYOUT --- */
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="w-full max-w-[850px] mx-auto flex flex-col items-center"
                        >
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(201,168,76,0.1)]"
                            >
                                 <Sparkles className={`w-4 h-4 animate-pulse`} /> 
                                 <span className="font-body font-bold text-xs md:text-sm tracking-widest uppercase">
                                     The High Council
                                 </span>
                             </motion.div>
                            
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-magical font-bold leading-[1.2] mb-8 tracking-tight text-white">
                                The Minds Behind <br /><span className="text-accent underline decoration-accent/20 underline-offset-[12px]">The Magic</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl font-body max-w-2xl leading-relaxed mb-10 text-text-secondary">
                                Behind every digital manifestation is a collective of focused minds. We combine the precision of engineering with the spirit of pure creativity to craft your success.
                            </p>
                            
                            <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent opacity-40" />
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TeamHero;
