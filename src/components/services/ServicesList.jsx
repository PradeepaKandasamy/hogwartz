import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Zap, Wand2 } from 'lucide-react';

const ServicesList = ({ isDark, content }) => {
    return (
        <>
            {/* Services Grid Overview */}
            <section className={`py-20 px-6 ${isDark ? 'bg-secondary/10' : 'bg-secondary/5'}`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {content.servicesGrid.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
                                className={`p-8 flex flex-col items-center gap-4 text-center transition-all duration-300 relative overflow-hidden group
                                    ${isDark
                                        ? 'spell-card !border-accent/10 hover:!border-accent/40'
                                        : 'bg-white border-primary/5 hover:shadow-xl hover:border-primary/20 rounded-3xl border'}`}
                            >
                                {isDark && <div className="rune-bg" />}

                                <div className={`transition-all duration-500 relative z-10 mb-2
                                    ${isDark
                                        ? 'text-[#FCEABB] group-hover:drop-shadow-[0_0_10px_rgba(252,234,187,0.5)]'
                                        : 'text-primary group-hover:scale-110'}`}>
                                    {s.icon}
                                </div>
                                <h4 className={`font-bold relative z-10 leading-tight
                                    ${isDark ? 'spell-title text-xl !text-[#F0EDE6]' : 'font-heading text-xl text-text-primary'}`}>
                                    {s.name}
                                </h4>
                                <p className={`text-sm relative z-10 mb-2 font-body flex-grow
                                    ${isDark ? 'text-[#F0EDE6]/70' : 'text-text-secondary'}`}>
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
