import { motion } from 'framer-motion';

const BrandStory = ({ isDark, content }) => {
    return (
        <section className={`py-24 px-6 border-y ${isDark ? 'bg-[#0A0A12] border-accent/10' : 'bg-primary/5 border-secondary/10'}`}>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10"
                >
                    <div className="space-y-4">
                        <span className="text-highlight font-body uppercase tracking-widest text-xs md:text-sm block">Building The Legend Since 2012</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-magical font-bold leading-[1.2] text-text-primary">
                            {content.story.title}
                        </h2>
                    </div>
                    <div className="space-y-6 font-body text-lg text-text-secondary leading-relaxed">
                        <p>{content.story.p1}</p>
                        <p>{content.story.p2}</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="relative group h-full flex flex-col justify-center"
                >
                    <div className="aspect-square bg-gradient-to-tr from-accent to-secondary rounded-full absolute -top-10 -right-10 w-40 h-40 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className={`p-10 border-2 rounded-[3.5rem] relative z-10 ${isDark ? 'bg-background border-accent/20' : 'bg-white border-primary/10'} shadow-[0_20px_50px_rgba(0,0,0,0.05)]`}>
                        <div className="space-y-12">
                            {content.story.highlights.map((item, i) => (
                                <div key={i} className="flex gap-8 items-start group-hover:translate-x-4 transition-transform duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 text-highlight">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-xl font-bold mb-2 text-text-primary capitalize">{item.label}</h4>
                                        <p className="font-body text-sm text-text-secondary leading-relaxed max-w-sm lowercase">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandStory;
