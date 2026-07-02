import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Zap, Wand2 } from 'lucide-react';

const ServicesList = ({ isDark, content }) => {
    return (
        <>
            {/* Services Grid Overview */}
            <section className={`py-32 px-6 ${isDark ? 'bg-secondary/10' : 'bg-[#F8FAFC]'}`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {content.servicesGrid.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
                                className={`p-10 flex flex-col items-center gap-5 text-center transition-all duration-500 relative overflow-hidden group cursor-pointer
                                    ${isDark
                                        ? 'spell-card !border-accent/10 hover:!border-accent/40'
                                        : 'bg-white border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] rounded-[2.5rem] hover:-translate-y-2'}`}
                            >
                                {isDark && <div className="rune-bg" />}
                                {!isDark && <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}

                                <div className={`transition-all duration-500 relative z-10 mb-2 p-4 rounded-2xl
                                    ${isDark
                                        ? 'text-[#FCEABB] group-hover:drop-shadow-[0_0_10px_rgba(252,234,187,0.5)]'
                                        : 'bg-primary/5 text-primary group-hover:bg-accent/10 group-hover:text-accent group-hover:scale-110'}`}>
                                    {s.icon}
                                </div>
                                <h4 className={`font-bold relative z-10 leading-tight
                                    ${isDark ? 'spell-title text-xl !text-[#F0EDE6]' : 'font-heading text-xl text-[#1E293B] group-hover:text-primary transition-colors duration-300'}`}>
                                    {s.name}
                                </h4>
                                <p className={`text-sm relative z-10 mb-2 font-body flex-grow leading-relaxed
                                    ${isDark ? 'text-[#F0EDE6]/70' : 'text-text-muted font-medium'}`}>
                                    {s.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesList;
