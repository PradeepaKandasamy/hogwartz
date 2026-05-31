import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Calendar, Mail, Phone, MessageCircle, ArrowRight, Sparkles, Send } from 'lucide-react';

const typingTexts = [
    "Start a project...",
    "Ask a question...",
    "Let's collaborate...",
    "Scale your brand..."
];

const ContactHero = ({ isDark }) => {
    const [typingIndex, setTypingIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTypingIndex((prev) => (prev + 1) % typingTexts.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const float = (delay = 0) => ({
        y: [0, -10, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }
    });

    return (
        <section className={`relative min-h-[85vh] flex items-center pt-32 pb-20 px-6 overflow-hidden transition-colors duration-500
            ${!isDark ? 'bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7]' : 'bg-[#05050A]'}
        `}>
            {/* Background elements */}
            {isDark ? (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-[120px] animate-pulse delay-1000" />
                </div>
            ) : (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
                    <div className="absolute top-20 left-1/4 w-2 h-2 bg-accent/20 rounded-full blur-sm" />
                    <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-primary/10 rounded-full blur-sm" />
                </div>
            )}

            <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
                {!isDark ? (
                    /* --- LIGHT THEME: INTERACTIVE SPLIT LAYOUT --- */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left Side: Conversion Message */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white shadow-sm">
                                <MessageCircle className="w-4 h-4 text-accent" />
                                <span className="font-heading text-xs font-bold tracking-widest uppercase text-primary">Direct Gateway</span>
                            </div>

                            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-7xl text-[#1E293B] leading-[1.1]">
                                Let’s Build <br />
                                Something Incredible <br />
                                <span className="text-accent italic relative">
                                    Together
                                    <Sparkles className="absolute -top-6 -right-8 w-10 h-10 text-accent/20" />
                                </span>
                            </h1>

                            <div className="space-y-4">
                                <p className="font-body text-lg md:text-xl text-text-muted leading-relaxed max-w-xl font-medium">
                                    Have an idea, project, or question? We’re just one message away from turning it into reality.
                                </p>
                                
                                {/* Auto-Typing Feature */}
                                <div className="flex items-center gap-3 h-8">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={typingIndex}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="font-heading font-bold text-primary/80 uppercase tracking-widest text-sm"
                                        >
                                            {typingTexts[typingIndex]}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
                                <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="group px-10 py-5 rounded-2xl bg-[#1E293B] text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3">
                                    <span>Send a Message</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a href="mailto:hello@hogwartzdigital.com" className="group px-10 py-5 rounded-2xl border-2 border-primary/5 bg-white font-bold transition-all duration-300 hover:bg-slate-50 text-primary flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-accent" />
                                    <span>Schedule a Call</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Side: Interactive UI Showcase */}
                        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
                            {/* Contact Card Mini UI */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative w-full max-w-[400px] p-8 bg-white rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-primary/5 z-10"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-primary/5 pb-4">
                                        <p className="font-heading font-black text-primary uppercase tracking-widest text-xs">New Inquiry</p>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-red-400/30" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-400/30" />
                                            <div className="w-2 h-2 rounded-full bg-green-400/30" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="h-12 bg-slate-50 rounded-xl border border-primary/5 p-3 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                            <span className="text-xs font-bold text-text-muted">Enter Name</span>
                                        </div>
                                        <div className="h-12 bg-slate-50 rounded-xl border border-primary/5 p-3 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-slate-200" />
                                            <span className="text-xs font-bold text-text-muted">Enter Email</span>
                                        </div>
                                        <div className="h-24 bg-slate-50 rounded-xl border border-primary/5 p-3 flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-slate-200 mt-1" />
                                            <span className="text-xs font-bold text-text-muted">Your magical message...</span>
                                        </div>
                                    </div>
                                    
                                    <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="w-full h-12 bg-gradient-to-r from-accent to-highlight rounded-xl flex items-center justify-center gap-3 text-white font-bold text-sm shadow-xl shadow-accent/20">
                                        Conjure Send <Send className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Floating Chat Bubble */}
                                <motion.div
                                    animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-12 -left-8 bg-[#1E293B] text-white px-6 py-4 rounded-3xl rounded-bl-none shadow-2xl z-20"
                                >
                                    <p className="font-bold text-sm">Let’s talk 👋</p>
                                </motion.div>

                                {/* Floating Icons */}
                                <motion.div animate={float(0)} className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-white shadow-2xl border border-primary/5 flex items-center justify-center text-[#25D366]">
                                    <MessageCircle className="w-8 h-8" />
                                </motion.div>
                                <motion.div animate={float(1)} className="absolute top-1/2 -right-12 w-14 h-14 rounded-full bg-white shadow-2xl border border-primary/5 flex items-center justify-center text-accent">
                                    <Mail className="w-7 h-7" />
                                </motion.div>
                                <motion.div animate={float(0.5)} className="absolute bottom-10 -right-8 w-14 h-14 rounded-full bg-white shadow-2xl border border-primary/5 flex items-center justify-center text-primary">
                                    <Phone className="w-7 h-7" />
                                </motion.div>
                            </motion.div>

                            {/* Ambient Glow */}
                            <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full -z-10 opacity-40 scale-150" />
                        </div>
                    </div>
                ) : (
                    /* --- DARK THEME: ORIGINAL CENTERED LAYOUT --- */
                    <div className="container mx-auto relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl mx-auto"
                        >
                            <motion.span 
                                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                                animate={{ opacity: 1, letterSpacing: "0.4em" }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="inline-block mb-6 text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-accent"
                            >
                                The Owl Post
                            </motion.span>
                            
                            <h1 className="hero-title font-bold mb-8 text-white">
                                <span className="block">
                                    Summon Our <span className="text-accent italic">Digital Warlocks</span>
                                </span>
                            </h1>

                            <p className="text-intro max-w-2xl mx-auto mb-10 text-text-secondary/80">
                                Have a grand vision that needs the touch of the arcane? Send us an owl and watch the magic unfold.
                            </p>
                            
                            <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent opacity-40 mx-auto" />
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactHero;
