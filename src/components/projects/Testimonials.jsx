import { motion } from 'framer-motion';
import { Star, Megaphone } from 'lucide-react';

const Testimonials = ({ isDark }) => {
    return (
        <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-background">
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
                <motion.div 
                    variants={{
                        hidden: { opacity: 0, y: 40, scale: 0.95 },
                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
                    }}
                    className={`relative rounded-[4rem] p-10 md:p-24 overflow-hidden 
                        ${isDark 
                            ? 'bg-gradient-to-br from-primary/20 to-transparent border border-accent/10 shadow-2xl' 
                            : 'bg-gradient-to-br from-secondary/10 to-transparent shadow-xl'
                        }
                    `}
                >
                    <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
                         <Megaphone className="w-80 h-80 text-accent -rotate-12" />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-8 space-y-12 relative">
                            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex gap-2 mb-8">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-accent fill-accent" />)}
                            </motion.div>
                             <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl md:text-4xl lg:text-5xl font-magical font-bold leading-[1.4] italic">
                                "Hogwartz Digital transformed our online presence. Their strategic marketing and beautiful designs helped us connect with our customers effectively."
                            </motion.h2>
                            
                            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-6">
                                 <div className="w-16 h-16 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-2xl shadow-[0_0_20px_rgba(201,168,76,0.5)]">V</div>
                                <div>
                                    <p className="text-xl font-bold text-text-primary">Vangalamman Decors</p>
                                    <p className="text-base text-text-muted font-body">Featured Client</p>
                                </div>
                            </motion.div>
                        </div>
                        
                        <div className="lg:col-span-4 flex lg:flex-col flex-row flex-wrap gap-10">
                            {[
                                { val: '4+', label: 'Clients Served' },
                                { val: '2+', label: 'Projects Delivered' },
                                { val: '4', label: 'Industries Served' }
                            ].map((stat, i) => (
                                <motion.div key={i} variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="space-y-1">
                                    <p className="text-5xl md:text-7xl font-heading font-bold text-accent">{stat.val}</p>
                                    <p className="text-sm font-bold uppercase tracking-widest text-text-muted">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
