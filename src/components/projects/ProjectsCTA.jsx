import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Wand2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ProjectsCTA = () => {
    const { theme } = useTheme();

    return (
        <section className="contact-section py-24 px-6 bg-background">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className={`relative rounded-[3rem] overflow-hidden ${theme === 'enchanted-scroll'
                        ? 'border border-accent/30 shadow-[0_0_50px_var(--color-accent)]'
                        : 'shadow-2xl'
                        }`}
                >
                    {/* Background */}
                    <div className={`absolute inset-0 z-0 ${theme === 'enchanted-scroll' ? 'bg-bg-cool' : 'bg-primary'}`} />

                    {/* Magical pattern overlay for enchanted theme */}
                    {theme === 'enchanted-scroll' && (
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                    )}

                    <div className="relative z-10 p-12 md:p-20 text-center flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-8 border border-accent/50 animate-pulse">
                            <Wand2 className="w-8 h-8 text-highlight" />
                        </div>

                        <h2 className="font-magical text-4xl md:text-5xl lg:text-6xl text-text-primary font-bold mb-6">
                            Ready to Grow Your <span className="text-accent underline underline-offset-8">Business Digitally?</span>
                        </h2>

                        <p className="font-body text-lg text-text-secondary max-w-2xl mb-10">
                            Partner with Hogwartz Digital and transform your ideas into impactful digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                            <NavLink
                                to="/contact"
                                className="font-body px-10 py-5 rounded-lg font-bold tracking-wide transition-all bg-accent text-button-text hover:bg-highlight hover:scale-105 active:scale-95 shadow-lg"
                            >
                                Start Your Project
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="font-body px-10 py-5 rounded-lg font-bold tracking-wide transition-all border-2 border-accent text-text-primary hover:bg-accent/10 hover:scale-105 active:scale-95"
                            >
                                Book a Free Consultation
                            </NavLink>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsCTA;
