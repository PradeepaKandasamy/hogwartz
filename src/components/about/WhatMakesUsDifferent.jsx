import { motion } from 'framer-motion';

const WhatMakesUsDifferent = ({ isDark, content }) => {
    return (
        <section className={`py-40 px-6 overflow-hidden ${isDark ? 'bg-[#05050A]' : 'bg-primary/5'}`}>
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                        className="lg:w-1/2 space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="text-accent font-body uppercase tracking-[0.2em] font-semibold text-xs md:text-sm block">The Hogwartz Method</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-magical font-bold leading-[1.2] text-text-primary capitalize tracking-tight flex flex-col">
                                {content.special.title}
                            </h2>
                            <p className="font-body text-lg md:text-xl text-text-muted leading-relaxed max-w-xl">
                                {content.special.p}
                            </p>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                        {content.special.cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -15, scale: 1.05 }}
                                className={`p-10 rounded-[4rem] group border transition-all duration-500 shadow-2xl relative overflow-hidden backdrop-blur-xl ${isDark ? 'bg-secondary/5 border-accent/10 hover:border-accent/30' : 'bg-white border-primary/10 hover:border-primary/30'}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shrink-0 transition-all group-hover:bg-accent group-hover:text-primary ${isDark ? 'bg-accent/10 text-accent' : 'bg-primary text-white'}`}>
                                    {card.icon}
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-4 text-text-primary capitalize tracking-wide">{card.title}</h3>
                                <p className="font-body text-sm text-text-secondary leading-relaxed first-letter:text-xl first-letter:text-accent font-medium">
                                    {card.description}
                                </p>
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <div className="scale-150 rotate-[-15deg]">{card.icon}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatMakesUsDifferent;
