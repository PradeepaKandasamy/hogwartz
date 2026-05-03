import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = ({ isDark }) => {
    return (
        <section className={`py-16 px-6 relative overflow-hidden ${
            isDark ? 'bg-primary' : 'bg-primary/5'
        }`}>
            {/* Background elements for Dark Theme */}
            {isDark && (
                <div className="absolute inset-0 pointer-events-none opacity-40">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--color-accent)_0%,transparent_60%)] opacity-10" />
                </div>
            )}

            <div className="container mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className={`max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] border relative overflow-hidden ${
                        isDark 
                            ? 'bg-secondary/40 border-accent/20 backdrop-blur-md' 
                            : 'bg-white border-primary/10 shadow-2xl shadow-primary/5'
                    }`}
                >
                    {/* Floating Sparkles in Dark Theme */}
                    {isDark && (
                        <>
                            <motion.div 
                                animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 left-10 text-accent/20"
                            >
                                <Sparkles className="w-12 h-12" />
                            </motion.div>
                            <motion.div 
                                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 right-10 text-accent/20"
                            >
                                <Sparkles className="w-8 h-8" />
                            </motion.div>
                        </>
                    )}

                    <span className={`text-eyebrow mb-6 inline-block ${isDark ? 'text-accent' : 'text-primary'}`}>
                        {isDark ? "Final Incantation" : "Last Thought"}
                    </span>
                    
                    <h2 className="section-h2 mb-8 leading-tight">
                        {isDark ? (
                            <>Enough <span className="text-accent">Pondering</span>,<br />Let's Cast the First Spell.</>
                        ) : (
                            <>Ready to start your digital transformation?<br />We're just one click away.</>
                        )}
                    </h2>
                    
                    <p className={`text-intro max-w-2xl mx-auto mb-12 ${isDark ? 'text-text-secondary' : 'text-text-secondary'}`}>
                        {isDark 
                            ? "Every grand empire starts with a single vision. Let our warlocks help you build yours from the ground up."
                            : "Join a community of successful brands that have scaled with our expert digital agency services."
                        }
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Link
                            to="/services"
                            className={`btn-text px-10 py-5 rounded-full transition-all flex items-center gap-3 group ${
                                isDark 
                                    ? 'bg-accent text-primary hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]' 
                                    : 'bg-primary text-white hover:bg-secondary'
                            }`}
                        >
                            <span>Explore Our Spells</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
