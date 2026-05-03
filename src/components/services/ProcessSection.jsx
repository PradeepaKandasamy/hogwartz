import { motion } from 'framer-motion';
import { Search, Layout, FlaskConical, Rocket, Sparkles, Gauge } from 'lucide-react';

const ProcessStep = ({ step, index, isDark }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="md:w-1/2 flex justify-center">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center relative ${isDark ? 'bg-accent/10 text-accent' : 'bg-primary/5 text-primary'}`}>
                    <div className="absolute inset-0 rounded-full border border-dashed border-current animate-[spin_20s_linear_infinite]"></div>
                    <span className="text-4xl font-magical">{step.number}</span>
                    {step.icon}
                </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <h3 className="font-heading text-2xl md:text-3xl mb-4 font-bold text-text-primary">{step.title}</h3>
                <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
        </motion.div>
    );
};

const ProcessSection = ({ isDark, content }) => {
    return (
        <>
            <section className={`py-32 px-6 ${isDark ? 'bg-primary/5' : 'bg-secondary/5'}`}>
                <div className="container mx-auto max-w-4xl text-center mb-24">
                     <h2 className="font-magical text-4xl md:text-5xl lg:text-6xl mb-6 text-text-primary leading-tight text-center">Our Secret Formula</h2>
                    <p className="font-body text-lg md:text-xl text-text-secondary text-center">Through discipline and ancient digital ritual, we turn visions into reality.</p>
                </div>
                <div className="container mx-auto max-w-5xl space-y-32">
                    {content.steps.map((step, i) => (
                        <ProcessStep key={i} step={step} index={i} isDark={isDark} />
                    ))}
                </div>
            </section>

            <section className="py-32 px-6 overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                          <h2 className="font-magical text-4xl md:text-5xl lg:text-6xl mb-6 text-text-primary text-center leading-tight">Digital Manifestations</h2>
                         <p className="font-body text-lg md:text-xl text-text-secondary text-center">Witness the convergence of logic and magic.</p>
                    </div>

                    <div className={`p-12 md:p-20 rounded-[4rem] border relative ${isDark ? 'bg-primary border-accent/20' : 'bg-white shadow-2xl border-primary/5'}`}>
                        {/* Diagram Container */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 items-center">
                            {/* Input Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-center p-8 rounded-3xl border-2 border-dashed border-accent/30"
                            >
                                <div className="mb-6 flex justify-center text-accent">
                                    <Search className="w-12 h-12" />
                                </div>
                                <h4 className="font-magical text-xl mb-2">The Raw Idea</h4>
                                <p className="text-sm text-text-secondary italic">Untapped Potential</p>
                            </motion.div>

                            {/* The Center Forge (Animated) */}
                            <div className="relative flex justify-center py-12 lg:py-0">
                                <motion.div
                                    animate={{ 
                                        rotate: 360,
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ 
                                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className={`w-48 h-48 rounded-full flex items-center justify-center relative ${isDark ? 'bg-accent/20 text-accent' : 'bg-primary/10 text-primary'}`}
                                >
                                    <div className="absolute inset-2 border-2 rounded-full border-accent animate-ping opacity-20"></div>
                                    <Sparkles className="w-16 h-16 z-10" />
                                    <div className="absolute inset-0 bg-accent blur-3xl opacity-20"></div>
                                </motion.div>
                                {/* Connection lines */}
                                <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-accent/0 to-accent"></div>
                                <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-accent to-accent/0"></div>
                            </div>

                            {/* Output Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className={`text-center p-8 rounded-3xl border ${isDark ? 'bg-secondary/40 border-accent/40 shadow-[0_0_30px_rgba(201,168,76,0.3)]' : 'bg-primary text-white shadow-xl'}`}
                            >
                                <div className="mb-6 flex justify-center text-highlight">
                                    <Gauge className="w-12 h-12" />
                                </div>
                                <h4 className="font-magical text-xl mb-2">Market Legend</h4>
                                <p className={`text-sm italic ${isDark ? 'text-accent' : 'text-highlight'}`}>Measurable Dominance</p>
                            </motion.div>
                        </div>

                        {/* Workflow steps */}
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {["Audience Sync", "Asset Forging", "Spell Deployment", "Insight Extraction"].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + (i * 0.2) }}
                                    className={`px-4 py-3 rounded-full border text-xs font-bold text-center tracking-widest uppercase ${isDark ? 'bg-accent/5 border-accent/20 text-accent' : 'bg-primary/5 border-primary/10 text-primary'}`}
                                >
                                    {step}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProcessSection;
