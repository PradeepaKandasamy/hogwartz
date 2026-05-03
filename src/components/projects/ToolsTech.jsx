import { motion } from 'framer-motion';
import { Code, Activity, Globe, TrendingUp } from 'lucide-react';

const ToolsTech = ({ isDark }) => {
    return (
        <section className={`py-24 md:py-32 px-6 ${isDark ? 'bg-[#0A0A12]' : 'bg-secondary/5'} relative overflow-hidden border-y border-border/50`}>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                        opacity: 1, 
                        transition: { staggerChildren: 0.15 } 
                    }
                }}
                className="container mx-auto max-w-7xl relative z-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, y: 40, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                        className="space-y-8"
                    >
                        <span className="text-accent font-bold font-body uppercase tracking-[0.2em] text-xs md:text-sm block">Wand-Grade Infrastructure</span>
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-magical font-bold leading-[1.1]">Our Magical Stack & Core Alchemies.</h2>
                        <p className="font-body text-base md:text-lg text-text-muted leading-relaxed max-w-xl">
                            We utilize only the most powerful digital components to ensure your project doesn't just look stunning, but functions with absolute reliability and speed.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div className="space-y-px">
                                <p className="text-4xl md:text-5xl font-heading font-bold text-accent">100%</p>
                                <p className="text-[10px] md:text-xs uppercase font-body font-bold tracking-widest text-text-muted">Magic Accuracy</p>
                            </div>
                            <div className="space-y-px">
                                <p className="text-4xl md:text-5xl font-heading font-bold text-accent">60fps</p>
                                <p className="text-[10px] md:text-xs uppercase font-body font-bold tracking-widest text-text-muted">Fluid Motion</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'React Architecture', icon: <Code className="w-8 h-8" />, desc: 'Modern structures for complex magical systems.' },
                            { name: 'Motion Wizardry', icon: <Activity className="w-8 h-8"/>, desc: 'Immersive animations with zero performance lag.' },
                            { name: 'Cloud Alchemy', icon: <Globe className="w-8 h-8"/>, desc: 'Global delivery via enchanted distribution networks.' },
                            { name: 'Lead Generation', icon: <TrendingUp className="w-8 h-8"/>, desc: 'Converting casual observers into loyal disciples.' },
                        ].map((tool, i) => (
                            <motion.div 
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                                whileHover={{ y: -8, rotate: 1 }}
                                className={`p-10 rounded-[2.5rem] transition-all group overflow-hidden relative
                                    ${isDark ? 'bg-background hover:border-accent/30 border border-accent/10 shadow-2xl' : 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl border border-primary/5'}
                                `}
                            >
                                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-125 transition-transform duration-700">
                                    {tool.icon}
                                </div>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-accent group-hover:text-primary
                                    ${isDark ? 'bg-primary/20 text-accent' : 'bg-primary text-white shadow-lg'}
                                `}>
                                    {tool.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-text-primary mb-4">{tool.name}</h3>
                                <p className="text-text-secondary leading-relaxed text-sm">{tool.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            
            {/* Background Decorations */}
            {isDark && (
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_100%_50%,rgba(201,168,76,0.03),transparent_70%)] pointer-events-none" />
            )}
        </section>
    );
};

export default ToolsTech;
