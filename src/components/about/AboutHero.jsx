import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Sparkles, ArrowRight, Play, Globe, Zap } from 'lucide-react';

const AboutHero = ({ isDark, content }) => {
    const { scrollY } = useScroll();
    
    // Premium cinematic easing [0.22, 1, 0.36, 1]
    const transitionConfig = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

    // Transform properties for cinematic scroll transition
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.85]);
    const y = useTransform(scrollY, [0, 500], [0, -80]);

    // Custom Cursor with Lerp-like smoothness using Framer Motion Springs
    const mouseX = useSpring(0, { damping: 35, stiffness: 250, mass: 0.5 });
    const mouseY = useSpring(0, { damping: 35, stiffness: 250, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className={`relative min-h-[90vh] lg:min-h-screen flex items-center py-20 px-6 overflow-visible transition-colors duration-1000
            ${!isDark ? 'bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7]' : 'bg-transparent'}
        `}>
            {/* --- CUSTOM MAGICAL CURSOR (Premium Lerp) --- */}
            {isDark && (
                <motion.div 
                    className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[100] rounded-full mix-blend-screen will-change-transform"
                    style={{ 
                        x: mouseX, 
                        y: mouseY,
                        translateX: '-50%',
                        translateY: '-50%',
                        background: 'radial-gradient(circle, rgba(201, 168, 76, 0.5) 0%, transparent 70%)',
                        boxShadow: '0 0 30px rgba(201, 168, 76, 0.3), 0 0 60px rgba(201, 168, 76, 0.1)'
                    }}
                >
                    <motion.div
                        animate={{ scale: [0.8, 1.2, 0.8], rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <Sparkles className="w-6 h-6 text-accent opacity-40" />
                    </motion.div>
                </motion.div>
            )}

            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
                {!isDark && (
                    <>
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        <div className="absolute top-1/4 -right-24 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] mix-blend-multiply" />
                        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-highlight/10 rounded-full blur-[100px] mix-blend-multiply" />
                    </>
                )}
                {isDark && (
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/25 via-transparent to-black/15 will-change-opacity" />
                )}
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
                {!isDark ? (
                    /* --- LIGHT THEME: PREMIUM SPLIT LAYOUT --- */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Story Content (Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={transitionConfig}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/10 bg-white/80 text-primary shadow-sm backdrop-blur-md">
                                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                                <span className="font-heading text-xs font-bold tracking-widest uppercase">ABOUT HOGWARTZ DIGITAL</span>
                            </div>

                            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl text-[#1E293B] leading-[1.1] tracking-tight">
                                Your Trusted Partner for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-highlight">Digital Growth</span>
                            </h1>

                            <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed font-medium max-w-xl">
                                Founded on 20 October 2025, <span className="text-primary font-bold">Hogwartz Digital</span> was established with a clear purpose—to help businesses succeed in today's digital-first world.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <NavLink
                                    to="/projects"
                                    className="group px-10 py-5 rounded-2xl bg-[#1E293B] text-white font-bold tracking-wide transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl flex items-center gap-2"
                                >
                                    <span>Explore Our Journey</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="group px-10 py-5 rounded-2xl border-2 border-primary/10 bg-white font-bold tracking-wide transition-all duration-500 hover:bg-slate-50 flex items-center gap-2"
                                >
                                    <Sparkles className="w-5 h-5 text-accent" />
                                    <span>Meet the Team</span>
                                </NavLink>
                            </div>
                        </motion.div>

                        {/* Visual Story (Right) */}
                        <div className="relative flex items-center justify-center lg:justify-end pr-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ ...transitionConfig, delay: 0.3 }}
                                className="relative w-full max-w-[500px]"
                            >
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)] border-4 border-white"
                                >
                                    <img 
                                        src="https://picsum.photos/seed/magicaloffice/400/500" 
                                        alt="Hogwartz Digital Magical Office" 
                                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                                </motion.div>

                                {/* Floating Stat Card */}
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -top-8 -left-10 p-6 bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-primary/5 z-20 w-44"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <p className="text-3xl font-bold text-primary">2+</p>
                                    <p className="text-[10px] uppercase font-bold text-text-muted tracking-widest mt-1">Projects Crafted</p>
                                </motion.div>

                                {/* Overlapping Quote Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ ...transitionConfig, delay: 1 }}
                                    className="absolute -bottom-6 -right-10 p-8 bg-white rounded-[2.5rem] shadow-[0_25px_50px_rgba(0,0,0,0.1)] border border-primary/5 z-20 max-w-[260px]"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-3 h-3 text-accent fill-accent opacity-40" />)}
                                    </div>
                                    <p className="font-heading text-sm font-bold text-primary leading-tight">
                                        "Crafting digital artifacts that feel like pure magic."
                                    </p>
                                    <div className="h-1 w-12 bg-accent rounded-full mt-4" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                ) : (
                    /* --- DARK THEME: PREMIUM CENTERED LAYOUT --- */
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            style={{ opacity, scale, y }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={transitionConfig}
                            className="w-full max-w-4xl mx-auto flex flex-col items-center will-change-transform"
                        >
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...transitionConfig, delay: 0.2 }}
                                className="inline-block py-2 px-6 rounded-full text-xs md:text-sm font-heading font-bold mb-10 tracking-[0.4em] uppercase border border-accent/15 text-accent bg-accent/5 backdrop-blur-sm"
                            >
                                ✦ The Archmages of Code ✦
                            </motion.span>
                            
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...transitionConfig, delay: 0.4 }}
                                className="font-magical font-bold text-4xl md:text-5xl lg:text-7xl mb-8 leading-[1.1] text-white drop-shadow-[0_0_25px_rgba(201,168,76,0.2)]"
                            >
                                {content.hero.title}
                            </motion.h1>
                            
                            <motion.div 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ ...transitionConfig, delay: 0.6 }}
                                className="h-px w-20 bg-gradient-to-r from-transparent via-accent/50 to-transparent mb-10" 
                            />
                            
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ ...transitionConfig, delay: 0.8 }}
                                className="font-heading text-lg md:text-xl mb-10 max-w-2xl mx-auto italic text-highlight/70 tracking-wide leading-relaxed"
                            >
                                "{content.hero.subtitle}"
                            </motion.p>
                            
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ ...transitionConfig, delay: 1 }}
                                className="font-body text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-16"
                            >
                                {content.hero.statement}
                            </motion.p>
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.8, duration: 2 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <span className="text-[10px] uppercase tracking-[0.6em] text-white/20">Descend into the depths</span>
                                <motion.div 
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-px h-16 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AboutHero;
