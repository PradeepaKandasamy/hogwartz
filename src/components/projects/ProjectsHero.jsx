import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Sparkles, ArrowRight, Zap, Target, MousePointer2, TrendingUp, CheckCircle2 } from 'lucide-react';

const showcaseProjects = [
    {
        id: 1,
        title: "Vangalamman Decors",
        metric: "Digital Marketing Partner",
        image: "https://picsum.photos/seed/projecthero1/600/400",
        smallImage: "https://picsum.photos/seed/projectsmall1/300/200",
        tag: "Digital Marketing Partner"
    },
    {
        id: 2,
        title: "RS Construction",
        metric: "Website Development",
        image: "https://picsum.photos/seed/projecthero2/600/400",
        smallImage: "https://picsum.photos/seed/projectsmall2/300/200",
        tag: "Website Development"
    },
    {
        id: 3,
        title: "F3 Vegetables",
        metric: "Website Development",
        image: "https://picsum.photos/seed/projecthero3/600/400",
        smallImage: "https://picsum.photos/seed/projectsmall3/300/200",
        tag: "Website Development"
    }
];

const MagicalBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
        <div className="absolute inset-0 bg-[#05050A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#16213E_0%,_#05050A_70%)] opacity-80" />
        <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(2.5px 2.5px at 90px 40px, #E8C96D, rgba(0,0,0,0))', 
            backgroundRepeat: 'repeat', 
            backgroundSize: '250px 250px', 
            opacity: 0.2 
        }} />
        <motion.div 
            animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" 
        />
        <motion.div 
            animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]" 
        />
    </div>
);

const ProjectsHero = ({ isDark }) => {
    const [projectIndex, setProjectIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProjectIndex((prev) => (prev + 1) % showcaseProjects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const currentProject = showcaseProjects[projectIndex];

    return (
        <section className={`relative min-h-[90vh] flex items-center py-20 px-6 overflow-hidden transition-colors duration-500
            ${!isDark ? 'bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7]' : ''}
        `}>
            {isDark && <MagicalBackground />}
            
            {/* Background Light Elements */}
            {!isDark && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
                </div>
            )}

            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
                {!isDark ? (
                    /* --- LIGHT THEME: PREMIUM SPLIT LAYOUT --- */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left Side: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white shadow-sm">
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="font-heading text-xs font-bold tracking-widest uppercase text-primary">OUR WORK</span>
                            </div>

                            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl text-[#1E293B] leading-[1.1]">
                                Where Ideas <br />
                                Transform Into <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">Digital Success</span>
                            </h1>

                            <p className="font-body text-lg md:text-xl text-text-muted leading-relaxed max-w-xl font-medium">
                                Every project we undertake is built with strategy, creativity, and measurable outcomes. Explore how we help businesses strengthen their digital presence and achieve growth.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
                                <NavLink
                                    to="/contact"
                                    className="group px-10 py-5 rounded-2xl bg-[#1E293B] text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3"
                                >
                                    <span>View All Projects</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </NavLink>
                                <NavLink to="/contact" className="group px-10 py-5 rounded-2xl border-2 border-primary/5 bg-white font-bold transition-all duration-300 hover:bg-slate-50 text-primary flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-accent" />
                                    <span>Start Your Project</span>
                                </NavLink>
                            </div>

                            {/* Stats mini bar */}
                            <div className="flex items-center gap-8 pt-6 border-t border-primary/5">
                                <div>
                                    <p className="text-2xl font-bold text-primary">2+</p>
                                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Projects Delivered</p>
                                </div>
                                <div className="w-px h-10 bg-primary/10" />
                                <div>
                                    <p className="text-2xl font-bold text-primary">4+</p>
                                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Clients Served</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Layered Project Showcase */}
                        <div className="relative h-[500px] lg:h-[650px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={projectIndex}
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.1, y: -30 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-[3/4]"
                                >
                                    {/* Main Image */}
                                    <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-8 border-white relative z-10">
                                        <img 
                                            src={currentProject.image} 
                                            alt={currentProject.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>

                                    {/* Small Floating Card */}
                                    <motion.div
                                        animate={{ y: [0, -20, 0], rotate: [5, 2, 5] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -top-12 -right-8 lg:-right-12 z-30 w-44 p-4 bg-white rounded-3xl shadow-2xl border border-primary/5"
                                    >
                                        <div className="w-full aspect-video rounded-xl overflow-hidden mb-3">
                                            <img src={currentProject.smallImage} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{currentProject.tag}</p>
                                        <p className="text-xs font-heavy text-primary truncate">{currentProject.title}</p>
                                    </motion.div>

                                    {/* Bottom Stats Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute -bottom-6 -left-8 lg:-left-16 z-30 p-6 bg-[#1E293B] rounded-[2rem] shadow-2xl flex flex-col gap-2 min-w-[220px]"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                                <TrendingUp className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xl font-bold text-white">{currentProject.metric}</p>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified Result</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Ambient Glow */}
                                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-accent/20 blur-[120px] rounded-full -z-10 opacity-30" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Indicator Dots */}
                            <div className="absolute -bottom-10 flex gap-3">
                                {showcaseProjects.map((_, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => setProjectIndex(i)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === projectIndex ? 'bg-primary w-8' : 'bg-primary/10'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* --- DARK THEME: ORIGINAL CENTERED LAYOUT --- */
                    <div className="flex flex-col items-center text-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full max-w-[800px] mx-auto flex flex-col items-center"
                        >
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(201,168,76,0.1)]"
                            >
                                <Sparkles className="w-4 h-4 animate-pulse" /> <span className="font-body font-bold text-xs md:text-sm tracking-widest uppercase">OUR WORK</span>
                            </motion.div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-magical font-bold leading-[1.2] mb-6 tracking-tight text-white drop-shadow-[0_0_30px_rgba(201,168,76,0.3)]">
                                Where Ideas Transform Into <br />
                                <span className="relative">
                                    <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Digital Success</span>
                                    <motion.div animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-6 -right-6 hidden md:block">
                                        <Sparkles className="w-12 h-12 text-accent opacity-20" />
                                    </motion.div>
                                </span>
                            </h1>
                            
                            <p className="text-lg md:text-xl font-heading max-w-2xl leading-relaxed mb-10 text-text-secondary">
                                Every project we undertake is built with strategy, creativity, and measurable outcomes. Explore how we help businesses strengthen their digital presence and achieve growth.
                            </p>
                            
                            <div className="flex flex-wrap gap-6 items-center justify-center">
                                <NavLink to="/contact" className="px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all transform hover:scale-105 bg-accent text-primary shadow-[0_0_30px_rgba(201,168,76,0.4)]">
                                    Craft Your Artifact <ArrowRight className="w-5 h-5" />
                                </NavLink>
                                <div className="flex -space-x-3">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-accent/20 flex items-center justify-center overflow-hidden">
                                            <img src={`https://picsum.photos/seed/trusted${i}/100/100`} alt="Org" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="pl-4 text-left">
                                        <p className="font-bold text-text-primary text-xs tracking-wide">Trusted by 4+</p>
                                        <p className="text-text-muted text-[10px]">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>

            {/* Vertical Text (Light only for aesthetic split) */}
            {!isDark && (
                <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-10 opacity-20 pointer-events-none">
                    <div className="h-40 w-px bg-primary" />
                    <p className="uppercase text-[10px] font-bold tracking-[1em] rotate-90 whitespace-nowrap text-primary">SCALING EXCELLENCE</p>
                </div>
            )}
        </section>
    );
};

export default ProjectsHero;
