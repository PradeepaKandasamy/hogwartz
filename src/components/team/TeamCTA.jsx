import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Wand2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const TeamCTA = ({ isDark }) => {
    return (
        <section className="py-24 md:py-32 px-6">
            <div className="container mx-auto max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ y: -5 }}
                    className={`relative rounded-[4rem] p-10 md:p-24 overflow-hidden text-center shadow-3xl
                        ${isDark 
                            ? 'bg-[#05050A] border border-accent/30 group' 
                            : 'bg-primary text-white'
                        }
                    `}
                >
                    {/* Animated Glow Backplate (Dark Only) */}
                    {isDark && (
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-all duration-700">
                            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[radial-gradient(circle_at_50%_0,var(--color-accent),transparent_80%)]" />
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                        </div>
                    )}
                    
                    <div className="relative z-10 space-y-12">
                        <div className="inline-block px-8 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 group-hover:scale-105 transition-transform duration-500">
                            <span className={`text-xs md:text-sm font-bold uppercase tracking-[0.3em] ${isDark ? 'text-accent' : 'text-accent'}`}>Join the High Council</span>
                        </div>
                        
                        <h2 className={`text-4xl md:text-6xl font-magical font-bold leading-[1.1] tracking-tight ${isDark ? 'text-white' : 'text-white'}`}> 
                            Ready to craft your <br className="hidden md:block" /> 
                            <span className="text-accent underline decoration-accent/20 underline-offset-[16px]">digital breakthrough?</span> 
                        </h2>
                        
                        <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed
                             ${isDark ? 'text-text-secondary' : 'text-white/80'}
                        `}>
                            Whether you seek to join our elite coven of creators or need a masterwork manifested, your journey begins with a single step.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                             <NavLink to="/contact" className={`group px-12 py-6 rounded-full font-bold text-base md:text-lg transition-all relative overflow-hidden shadow-2xl
                                ${isDark ? 'bg-accent text-primary' : 'bg-white text-primary'}
                            `}>
                                <span className="relative z-10 flex items-center gap-3">Initialize Project <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" /></span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </NavLink>
                            <NavLink to="/contact" className={`px-12 py-6 rounded-full font-bold text-base md:text-lg transition-all border-2 backdrop-blur-sm
                                ${isDark 
                                    ? 'border-accent/20 text-accent hover:border-accent hover:bg-accent/5' 
                                    : 'border-white/20 text-white hover:bg-white/10'
                                }
                            `}>
                                Consult the Oracle
                            </NavLink>
                        </div>
                    </div>

                    {/* Floating Ornaments (Dark Only) */}
                    {isDark && (
                        <div className="absolute inset-0 pointer-events-none">
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 left-20">
                                <Sparkles className="w-12 h-12 text-accent/20" />
                            </motion.div>
                            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-20 right-20">
                                <Wand2 className="w-12 h-12 text-accent/20 rotate-45" />
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default TeamCTA;
