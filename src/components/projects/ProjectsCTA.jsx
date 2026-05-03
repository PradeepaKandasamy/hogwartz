import { motion } from 'framer-motion';
import { Sparkles, Wand2 } from 'lucide-react';

const ProjectsCTA = ({ isDark }) => {
    return (
        <section className="pb-16 md:pb-24 px-6">
            <div className="container mx-auto max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    animate={{ 
                        boxShadow: isDark 
                            ? ["0 10px 40px rgba(0,0,0,0.5)", "0 10px 60px rgba(201,168,76,0.15)", "0 10px 40px rgba(0,0,0,0.5)"]
                            : ["0 20px 50px rgba(0,0,0,0.05)", "0 20px 70px rgba(0,0,0,0.1)", "0 20px 50px rgba(0,0,0,0.05)"]
                    }}
                    transition={{ 
                        opacity: { duration: 0.8 },
                        scale: { duration: 0.8 },
                        boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className={`relative rounded-[3rem] p-8 md:p-20 overflow-hidden text-center
                        ${isDark 
                            ? 'bg-[#05050A] border border-accent/30 group' 
                            : 'bg-primary text-white shadow-3xl'
                        }
                    `}
                >
                    {/* Animated Glow Backplate */}
                    {isDark && (
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-all duration-700">
                            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[radial-gradient(circle_at_50%_0,var(--color-accent),transparent_80%)]" />
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                        </div>
                    )}
                    
                    <div className="relative z-10 space-y-10">
                        <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                            <span className={`text-xs font-bold uppercase tracking-[0.3em] ${isDark ? 'text-accent' : 'text-accent'}`}>Join the elite 1%</span>
                        </div>
                                                    <h2 className="text-4xl md:text-6xl font-magical font-bold leading-[1.1] tracking-tight text-white"> 
                            Ready to cast your next <br className="hidden md:block" /> 
                            <span className="text-accent underline decoration-accent/20">digital breakthrough?</span> 
                        </h2>
                        
                        <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-[1.6] ${isDark ? 'text-text-secondary' : 'text-[#E5E7EB]'}`}>
                            Whether you're seeking a Gringotts-level secure platform or a Snitch-speed marketing funnel, we are standing by with our wands ready.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                             <button className={`group px-10 py-5 rounded-full font-bold text-base transition-all relative overflow-hidden shadow-2xl
                                ${isDark ? 'bg-accent text-primary' : 'bg-white text-primary'}
                            `}>
                                <span className="relative z-10 flex items-center gap-3">Initialize Project <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" /></span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </button>
                            <button className={`px-10 py-5 rounded-full font-bold text-base transition-all border-2 backdrop-blur-sm
                                ${isDark 
                                    ? 'border-accent/20 text-accent hover:border-accent hover:bg-accent/5' 
                                    : 'border-white/20 text-white hover:bg-white/10'
                                }
                            `}>
                                Consult the Oracle
                            </button>
                        </div>
                    </div>

                    {/* Floating elements for Dark Theme CTA */}
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

export default ProjectsCTA;
