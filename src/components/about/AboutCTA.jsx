import { motion } from 'framer-motion';
import ContactBanner from '../home/ContactBanner';

const AboutCTA = ({ isDark, statsData }) => {
    return (
        <>
            <section className={`py-40 px-6 relative overflow-hidden bg-background border-t ${isDark ? 'border-accent/10' : 'border-primary/10'}`}>
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                        {statsData.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.2 }}
                                className="text-center"
                            >
                                <div className="text-highlight mb-6 flex justify-center scale-150">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl md:text-6xl lg:text-7xl font-magical mb-4 text-text-primary font-bold">{stat.value}</div>
                                <div className={`font-body text-xs md:text-sm uppercase tracking-widest ${isDark ? 'text-white/60' : 'text-text-secondary/60'}`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                 </div>
            </section>

            <ContactBanner />
        </>
    );
};

export default AboutCTA;
