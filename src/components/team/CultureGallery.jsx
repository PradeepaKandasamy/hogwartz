import { motion } from 'framer-motion';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

const CultureGallery = ({ isDark }) => {
    const images = [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2071&auto=format&fit=crop"
    ];

    return (
        <section className={`py-32 px-6 ${isDark ? 'bg-[#05050A]' : 'bg-white'} relative overflow-hidden`}>
            {/* Background Atmosphere */}
            {isDark && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(201,168,76,0.03),transparent_70%)] pointer-events-none" />
            )}
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl space-y-6">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="text-accent font-bold font-body uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2"
                        >
                            <div className="w-8 h-px bg-accent" /> {isDark ? 'Digital Sanctuary' : 'Our Workspace'}
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1 }}
                            className={`text-4xl md:text-5xl lg:text-6xl font-magical font-bold leading-[1.1] ${isDark ? 'text-white' : 'text-primary'}`}
                        >
                            {isDark ? (
                                <>Behind the <br /><span className="text-accent">Spells & Screens.</span></>
                            ) : (
                                <>Behind the <br /><span className="text-accent">Creative Process.</span></>
                            )}
                        </motion.h2>
                    </div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className={`text-lg md:text-xl font-body max-w-md ${isDark ? 'text-text-secondary' : 'text-text-secondary font-medium'}`}
                    >
                        {isDark
                            ? "Our creative environment is the vessel where magic manifestations occur daily. Witness the focused action of the coven."
                            : "Our creative environment is where innovation happens daily. Witness the focused action of our team."
                        }
                    </motion.p>
                </div>

                {/* Immersive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 h-full min-h-[700px]">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        whileHover={{ y: -5 }}
                        className="md:col-span-8 group relative rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 h-[400px] md:h-full"
                    >
                         <img src={images[0]} alt="Culture 01" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                         {isDark ? (
                             <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                         ) : (
                             <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                         )}
                         
                         <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                             <div className={`px-5 py-2 rounded-full border inline-flex items-center gap-2 ${
                                 isDark ? 'bg-background/50 backdrop-blur-md border-white/20 text-white' : 'bg-white/80 backdrop-blur-md border-primary/20 text-primary shadow-lg'
                             }`}>
                                 <ImageIcon className={`w-4 h-4 ${isDark ? 'text-white' : 'text-primary'}`} /> <span className="font-body font-bold text-xs uppercase">Daily Orchestration</span>
                             </div>
                         </div>
                    </motion.div>

                    <div className="md:col-span-4 flex flex-col gap-6 lg:gap-10 h-full">
                         {images.slice(1, images.length).map((img, i) => (
                             <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                whileHover={{ y: -5 }}
                                className={`flex-1 group relative rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 min-h-[300px] lg:min-h-0
                                    ${i === 1 ? 'lg:flex-[1.5]' : ''}
                                `}
                             >
                                <img src={img} alt={`Culture 0${i+2}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                                {isDark ? (
                                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors" />
                                ) : (
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                                )}
                             </motion.div>
                         ))}
                    </div>
                </div>
                
                {/* Floating Decoration (Dark Only) */}
                {isDark && (
                    <motion.div 
                        animate={{ opacity: [0.1, 0.4, 0.1], y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none"
                    />
                )}
            </div>
        </section>
    );
};

export default CultureGallery;
