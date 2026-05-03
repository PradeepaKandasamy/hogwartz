import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Zap, Wand2 } from 'lucide-react';

const ServicesList = ({ isDark, content, activeDetailed, setActiveDetailed }) => {
    return (
        <>
            {/* Services Grid Overview */}
            <section className={`py-20 px-6 ${isDark ? 'bg-secondary/10' : 'bg-secondary/5'}`}>
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.servicesGrid.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className={`p-8 flex flex-col items-center gap-4 text-center transition-all duration-300 relative overflow-hidden group
                                    ${isDark
                                        ? 'spell-card !border-accent/10 hover:!border-accent/40'
                                        : 'bg-white border-primary/5 hover:shadow-xl hover:border-primary/20 rounded-3xl border'}`}
                            >
                                {isDark && <div className="rune-bg" />}

                                <div className={`transition-all duration-500 relative z-10
                                    ${isDark
                                        ? 'spell-icon-container !mb-0'
                                        : 'text-primary group-hover:scale-110'}`}>
                                    {s.icon}
                                </div>
                                <h4 className={`font-bold relative z-10
                                    ${isDark ? 'spell-title text-2xl' : 'font-heading text-2xl text-text-primary'}`}>
                                    {s.name}
                                </h4>
                                <span className={`text-[10px] md:text-xs uppercase tracking-widest font-bold py-1 px-3 rounded-full font-body relative z-10
                                    ${isDark ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-primary/5 text-primary'}`}>
                                    {s.tag}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Services Sections (DEEP EXPLANATION) */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Tab Selectors */}
                        <div className="lg:w-1/3 space-y-4">
                            {content.detailed.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveDetailed(i)}
                                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${activeDetailed === i
                                            ? (isDark ? 'bg-accent/10 border-accent text-accent' : 'bg-primary border-primary text-white')
                                            : (isDark ? 'bg-secondary/10 border-accent/10' : 'bg-white border-primary/5')
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-opacity-10 group-hover:scale-110 transition-transform">
                                            {s.icon}
                                        </div>
                                        <span className="font-heading text-lg md:text-xl font-bold">{s.title}</span>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 transition-transform ${activeDetailed === i ? 'rotate-90' : ''}`} />
                                </button>
                            ))}
                        </div>

                        {/* Detailed Content Display */}
                        <div className="lg:w-2/3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDetailed}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className={`p-10 md:p-16 rounded-[3rem] border h-full ${isDark ? 'bg-secondary/20 border-accent/10' : 'bg-white shadow-2xl border-primary/5'}`}
                                >
                                    <h2 className="font-magical text-4xl md:text-5xl lg:text-6xl mb-6 text-text-primary leading-tight">{content.detailed[activeDetailed].title}</h2>
                                    <p className={`font-heading text-lg md:text-xl italic mb-8 ${isDark ? 'text-highlight' : 'text-primary'}`}>
                                        "{content.detailed[activeDetailed].summary}"
                                    </p>
                                    <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed mb-10">
                                        {content.detailed[activeDetailed].description}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {content.detailed[activeDetailed].features.map((f, i) => (
                                            <div key={i} className="flex gap-3 items-center">
                                                <Zap className="w-5 h-5 text-accent" />
                                                <span className="font-bold font-body text-sm md:text-base text-text-primary">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex items-center gap-6">
                                        <NavLink to="/contact" className={`flex-1 py-4 text-center rounded-2xl font-bold font-body transition-all ${isDark ? 'bg-accent text-primary' : 'bg-primary text-white'}`}>
                                            Learn More
                                        </NavLink>
                                        <div className={`p-4 rounded-2xl border ${isDark ? 'border-accent/10 text-accent bg-accent/5' : 'border-primary/10 text-primary bg-primary/5'}`}>
                                            <Wand2 className="w-6 h-6" />
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesList;
