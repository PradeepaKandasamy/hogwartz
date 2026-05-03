import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Code, Megaphone, Target, Sparkles, Globe, Zap, CheckCircle2, X, BarChart3, TrendingUp, MousePointer2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ServicesHero = ({ isDark, content }) => {
    const { theme } = useTheme();
    const [hoveredService, setHoveredService] = useState(null);

    // Dynamic style calculator to create visual hierarchy
    const getCardStyles = (id) => {
        // CASE: User is hovering over a specific card
        if (hoveredService) {
            if (hoveredService === id) return { scale: 1.08, y: -15, opacity: 1, zIndex: 50 };
            return { scale: 0.92, y: 0, opacity: 0.35, zIndex: 5 };
        }

        // CASE: IDLE STATE (Nothing hovered) - Middle Card 'marketing' Highlighted
        if (id === 'marketing') {
            return { scale: 1.05, y: 0, opacity: 1, zIndex: 20 };
        }
        
        // Default side cards in idle state
        return { scale: 0.95, y: 0, opacity: 0.9, zIndex: 10 };
    };

    return (
        <section className={`relative min-h-[90vh] lg:min-h-screen flex items-center py-20 px-6 overflow-hidden transition-colors duration-500
            ${!isDark ? 'bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7]' : 'bg-[#05050A]'}
        `}>
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
                {!isDark && (
                    <>
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                        <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-multiply" />
                        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[100px] mix-blend-multiply" />
                    </>
                )}
                {isDark && (
                    <div className="absolute inset-0 pointer-events-none">
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1], rotate: [0, 90, 0] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full"
                        />
                        <motion.div 
                            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1], rotate: [0, -90, 0] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full"
                        />
                    </div>
                )}
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
                {!isDark ? (
                    /* --- LIGHT THEME: CONFIDENT SPLIT LAYOUT --- */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left Side: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white/60 text-primary shadow-sm backdrop-blur-md">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="font-heading text-xs font-bold tracking-widest uppercase">Expert Solutions</span>
                            </div>

                            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl text-[#1E293B] leading-[1.1] tracking-tight">
                                Crafting Digital <br />
                                Experiences That Drive <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Results</span>
                            </h1>

                            <p className="font-body text-lg md:text-xl text-text-muted leading-relaxed max-w-xl font-medium">
                                We design, build, and scale digital solutions that elevate brands and accelerate growth. High-performance artifacts designed for category leaders.
                            </p>

                            <div className="flex items-center gap-4 py-2">
                                <MousePointer2 className="w-5 h-5 text-accent animate-bounce" />
                                <p className="text-sm font-bold text-primary tracking-widest uppercase opacity-60">Interactive Portfolio Explorer</p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-5 pt-2">
                                <NavLink
                                    to="/contact"
                                    className="group px-10 py-5 rounded-2xl bg-[#1E293B] text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                                >
                                    <span>Explore Services</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="group px-10 py-5 rounded-2xl border-2 border-primary/5 bg-white font-bold transition-all duration-300 hover:bg-slate-50 flex items-center gap-2"
                                >
                                    <Target className="w-5 h-5 text-accent" />
                                    <span>Get a Strategy Call</span>
                                </NavLink>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-primary/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-primary">100+</p>
                                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Projects Delivered</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-primary">50+</p>
                                        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Visual Interactive Cards */}
                        <div className="relative flex items-center justify-center h-[550px] lg:h-[650px]">
                            {/* Layered Card 1: Web Dev */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={getCardStyles('web')}
                                transition={{ type: "spring", damping: 20, stiffness: 150 }}
                                onMouseEnter={() => setHoveredService('web')}
                                onMouseLeave={() => setHoveredService(null)}
                                className="absolute top-12 left-10 lg:left-0 w-72 p-8 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-primary/5 backdrop-blur-xl group cursor-default"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                                    ${hoveredService === 'web' ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)]' : 'bg-blue-500/10 text-blue-600'}
                                `}>
                                    <Code className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Web Development</h3>
                                <p className="text-sm text-text-muted font-medium mb-6 leading-relaxed">High-performance platforms engineered for infinite scale.</p>
                                
                                <AnimatePresence>
                                    {hoveredService === 'web' && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-4 pt-2"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-bold text-primary uppercase tracking-tighter">Speed Mastery</span>
                                                <span className="text-xs font-bold text-blue-600">+150%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden text-blue-100">
                                                <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} className="h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* --- CENTERPIECE (HIGHLIGHTED) Card 2: Marketing --- */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={getCardStyles('marketing')}
                                transition={{ type: "spring", damping: 20, stiffness: 150 }}
                                onMouseEnter={() => setHoveredService('marketing')}
                                onMouseLeave={() => setHoveredService(null)}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 p-9 rounded-[2.5rem] transition-all duration-500 cursor-default border border-accent/20
                                    ${hoveredService === 'marketing' || !hoveredService ? 'bg-gradient-to-br from-[#1E2A38] to-[#243447] text-white shadow-[0_30px_70px_rgba(0,0,0,0.35)]' : 'bg-white shadow-[0_30px_60px_rgba(0,0,0,0.1)]'}
                                `}
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                                    ${hoveredService === 'marketing' || !hoveredService ? 'bg-accent text-primary shadow-[0_0_40px_rgba(201,168,76,0.6)]' : 'bg-accent/10 text-accent'}
                                `}>
                                    <Megaphone className="w-9 h-9" />
                                </div>
                                <h3 className={`text-2xl font-bold mb-3 transition-colors ${hoveredService === 'marketing' || !hoveredService ? 'text-white' : 'text-primary'}`}>Digital Marketing</h3>
                                <p className={`text-sm font-medium leading-relaxed transition-colors ${hoveredService === 'marketing' || !hoveredService ? 'text-slate-300' : 'text-text-muted'}`}>Performance-driven strategies designed to scale brand visibility and ROI.</p>
                                
                                <AnimatePresence>
                                    {(hoveredService === 'marketing' || !hoveredService) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className={`mt-6 p-4 rounded-2xl border flex items-center gap-4 transition-colors ${!hoveredService || hoveredService === 'marketing' ? 'bg-white/10 border-white/20' : 'bg-slate-50 border-primary/5'}`}
                                        >
                                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                                <TrendingUp className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <p className="text-xl font-bold text-white leading-tight">+245%</p>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Growth Factor</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Layered Card 3: Ads */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={getCardStyles('ads')}
                                transition={{ type: "spring", damping: 20, stiffness: 150 }}
                                onMouseEnter={() => setHoveredService('ads')}
                                onMouseLeave={() => setHoveredService(null)}
                                className="absolute bottom-12 right-10 lg:right-0 w-72 p-8 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-primary/5 cursor-default group"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                                    ${hoveredService === 'ads' ? 'bg-green-600 text-white shadow-[0_0_30px_rgba(22,163,74,0.4)]' : 'bg-green-500/10 text-green-600'}
                                `}>
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">Ad Campaigns</h3>
                                <p className="text-sm text-text-muted font-medium mb-4 leading-relaxed">Precision-targeted campaigns that turn clicks into meaningful revenue.</p>
                                
                                <AnimatePresence>
                                    {hoveredService === 'ads' && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="grid grid-cols-2 gap-3 mt-4"
                                        >
                                            <div className="p-3 bg-slate-50 rounded-xl border border-primary/5 text-center">
                                                <p className="text-lg font-bold text-primary leading-none">10x</p>
                                                <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mt-1">ROAS</p>
                                            </div>
                                            <div className="p-3 bg-slate-50 rounded-xl border border-primary/5 text-center">
                                                <p className="text-lg font-bold text-primary leading-none">5M+</p>
                                                <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest mt-1">Reach</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Decorative background glow for cards */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px] -z-10 transition-opacity duration-1000 ${hoveredService ? 'opacity-40' : 'opacity-80'}`} />
                        </div>
                    </div>
                ) : (
                    /* --- DARK THEME: ORIGINAL CENTERED LAYOUT --- */
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full max-w-[800px] mx-auto flex flex-col items-center"
                        >
                            <div className={`mb-6 flex justify-center text-accent`}>
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="relative w-20 h-20 flex items-center justify-center">
                                    <Sparkles className="w-10 h-10" />
                                    <div className={`absolute inset-0 border-2 rounded-full border-dashed border-accent`}></div>
                                </motion.div>
                            </div>
                            <h1 className="font-magical font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.2] text-text-primary">
                                {content.hero.title}
                            </h1>
                            <p className="font-body text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
                                {content.hero.subtitle}
                            </p>
                            <NavLink to="/contact" className={`px-10 py-5 rounded-full font-bold font-body tracking-wide text-base md:text-lg flex items-center gap-3 transition-all bg-accent text-primary hover:bg-highlight shadow-[0_0_20px_rgba(201,168,76,0.3)]`}>
                                Start Your Ritual <ArrowRight />
                            </NavLink>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesHero;
