import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles as SparklesIcon, ArrowRight, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkArtsHero from './DarkArtsHero';

const HeroSection = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';
    const [showVideo, setShowVideo] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const badgeVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const headlineVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <section className={`hero-section relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500
            ${isDark ? 'bg-[#05050A]' : 'bg-[#F8FAFC]'}`}>

            {/* --- HERO CONTENT & BACKGROUND --- */}
            <div className={`absolute inset-0 w-full h-full transform-gpu ${isDark ? 'z-10' : 'z-0 pointer-events-none'}`}>
                <AnimatePresence mode="wait">
                    {!isDark && (
                        <motion.div
                            key="light-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 w-full h-full"
                            style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2F7 100%)' }}
                        >
                            {/* Subtle Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            {/* Soft Glows */}
                            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
                            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-highlight/20 rounded-full blur-[100px] mix-blend-multiply" />
                        </motion.div>
                    )}

                    {isDark && (
                        <motion.div
                            key="dark-bg-cinematic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <DarkArtsHero />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* --- LIGHT THEME CONTENT --- */}
            {!isDark && (
                <div className="container mx-auto px-6 relative z-10 py-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 gap-16 lg:grid-cols-2 text-center lg:text-left items-center"
                    >
                        <div className="space-y-8 relative">
                            <motion.div variants={badgeVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/10 bg-white/80 text-primary shadow-sm backdrop-blur-md mb-2">
                                <SparklesIcon className="w-4 h-4 text-accent animate-pulse" />
                                <span className="font-body text-xs md:text-sm font-bold tracking-widest uppercase">
                                    WELCOME TO HOGWARTZ DIGITAL
                                </span>
                            </motion.div>

                            <motion.h1 variants={headlineVariants} className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl tracking-tight leading-[1.1] text-[#1E293B]">
                                Building Digital Experiences That Drive <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-highlight">Business Growth</span>
                            </motion.h1>

                            <motion.p variants={subtitleVariants} className="text-lg md:text-xl max-w-2xl font-medium leading-relaxed text-text-secondary">
                                At Hogwartz Digital, we help businesses establish a powerful online presence through strategic marketing, high-performance websites, creative branding, and data-driven digital solutions. Our goal is to transform ideas into measurable business growth.
                            </motion.p>

                            <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto justify-center lg:justify-start">
                                <NavLink
                                    to="/contact"
                                    className="font-body px-10 py-5 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl bg-gradient-to-br from-accent to-highlight text-primary hover:scale-105 hover:shadow-accent/40"
                                >
                                    <span>Start Your Project</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </NavLink>

                                <NavLink
                                    to="/projects"
                                    className="font-body px-10 py-5 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group border-2 border-primary/10 text-primary bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-primary/20"
                                >
                                    <Play className="w-4 h-4 text-accent group-hover:text-highlight transition-colors" />
                                    <span>Explore Our Work</span>
                                </NavLink>
                            </motion.div>

                            <motion.div variants={subtitleVariants} className="pt-8 flex flex-col sm:flex-row items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                            <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-primary max-w-[200px] leading-tight">Trusted by growing businesses to build a stronger digital future since 2025.</p>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => <SparklesIcon key={i} className="w-3 h-3 text-accent fill-accent" />)}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative flex items-center justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="relative w-full max-w-[260px] sm:max-w-[400px] lg:max-w-[500px] aspect-square mx-auto lg:mx-0 mt-12 lg:mt-0"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-highlight/10 rounded-3xl sm:rounded-[4rem] transform rotate-3" />
                                <div className="absolute inset-0 bg-white rounded-3xl sm:rounded-[4rem] shadow-2xl overflow-hidden border border-primary/5 p-2 sm:p-4">
                                    <img
                                        src="https://picsum.photos/seed/hogwartzhero/600/400"
                                        alt="Professional Digital Marketing person"
                                        className="w-full h-full object-cover rounded-2xl sm:rounded-[3.5rem] brightness-105 contrast-105"
                                    />
                                </div>

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 lg:-top-10 lg:-right-10 w-36 sm:w-48 p-3 sm:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-primary/5 backdrop-blur-md z-20"
                                >
                                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                                            <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[8px] sm:text-[10px] uppercase font-bold text-text-muted tracking-wider">Clients Served</p>
                                            <p className="text-sm sm:text-lg font-bold text-primary">4+</p>
                                        </div>
                                    </div>
                                    <div className="h-1 sm:h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '70.5%' }}
                                            transition={{ duration: 2, delay: 1 }}
                                            className="h-full bg-green-500"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8 lg:-bottom-6 lg:-left-12 w-40 sm:w-52 p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-primary/5 z-20"
                                >
                                    <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="h-2 sm:h-3 w-8 sm:w-12 bg-slate-100 rounded-full" />
                                            <div className="h-2 sm:h-3 w-6 sm:w-8 bg-slate-100 rounded-full" />
                                        </div>
                                        <div className="ml-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                            <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                    </div>
                                    <div className="text-lg sm:text-2xl font-bold text-primary">2+</div>
                                    <p className="text-[8px] sm:text-[10px] font-bold text-text-muted mt-1 uppercase tracking-widest">Projects Delivered</p>
                                </motion.div>

                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    onClick={() => setShowVideo(true)}
                                    className="absolute top-1/2 -left-4 sm:-left-12 lg:-left-20 bg-primary p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl z-20 flex items-center gap-2 sm:gap-3 cursor-pointer hover:scale-105 transition-transform group"
                                >
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center group-hover:rotate-12 transition-transform">
                                        <Play className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-current" />
                                    </div>
                                    <p className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">Live Preview</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Video Modal Overlay */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-primary"
                        >
                            <button 
                                onClick={() => setShowVideo(false)}
                                className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:rotate-90"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            
                            <video 
                                className="w-full h-full object-cover"
                                controls 
                                autoPlay
                            >
                                <source src="/video/demo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HeroSection;
