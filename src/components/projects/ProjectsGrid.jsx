import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';

const ProjectsGrid = ({ 
    isDark, 
    filters, 
    activeFilter, 
    setActiveFilter, 
    filteredProjects, 
    setSelectedProject 
}) => {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Magical Background Accents */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute inset-0 opacity-30 ${isDark ? 'bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.05),transparent_70%)]' : 'bg-[radial-gradient(circle_at_50%_0%,rgba(30,41,59,0.03),transparent_70%)]'}`} />
                
                {/* Subtle Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-accent/20' : 'bg-primary/10'}`}
                        initial={{ 
                            x: Math.random() * 100 + "%", 
                            y: Math.random() * 100 + "%",
                            opacity: 0 
                        }}
                        animate={{ 
                            y: [null, "-100px"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ 
                            duration: Math.random() * 10 + 10, 
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto max-w-7xl relative z-20">
                
                {/* Filter Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl space-y-6">
                        <span className="text-accent font-bold font-body uppercase tracking-widest text-xs md:text-sm flex items-center gap-2">
                            <div className="w-8 h-px bg-accent" /> Portfolio filtering
                        </span>
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-magical font-bold text-text-primary leading-[1.1]">Featured Digital <br className="hidden md:block"/> Collections</h2>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 p-2 bg-primary/5 rounded-[2rem] border border-primary/10 backdrop-blur-sm self-start lg:self-auto">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-8 py-3.5 rounded-[1.4rem] text-sm md:text-base font-body font-bold transition-all duration-500 relative group
                                    ${activeFilter === filter 
                                        ? 'text-primary' 
                                        : 'text-text-muted hover:text-text-primary hover:bg-primary/5'
                                    }
                                `}
                            >
                                <span className="relative z-10">{filter}</span>
                                {activeFilter === filter && (
                                    <motion.div 
                                        layoutId="navTab"
                                        className="absolute inset-0 bg-accent rounded-[1.4rem] shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Interactive Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 60, rotateX: 15 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: idx * 0.15, 
                                    ease: [0.23, 1, 0.32, 1] 
                                }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    rotateZ: idx % 2 === 0 ? 1 : -1,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                whileTap={{ scale: 1.02 }}
                                onClick={() => setSelectedProject(project)}
                                className={`group relative aspect-[3/4] md:aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg transform-gpu transition-shadow duration-300
                                    ${isDark 
                                        ? 'border border-accent/10 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(201,168,76,0.15)] bg-[#0A0A12]' 
                                        : 'border border-primary/5 hover:shadow-2xl bg-white'
                                    }
                                `}
                            >
                                {/* Image Base Layer */}
                                <div className="absolute inset-0 bg-primary/10 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent' : 'bg-gradient-to-t from-white via-transparent to-transparent opacity-90'}`} />
                                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                                </div>

                                {/* Glassmorphic Info Card */}
                                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                                        <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                             {project.tags.slice(0, 2).map(tag => (
                                                  <span key={tag} className={`px-3 py-1 rounded-lg border text-[10px] font-body font-bold uppercase tracking-wider ${
                                                      isDark 
                                                        ? 'bg-background/30 backdrop-blur-md border-white/20 text-white' 
                                                        : 'bg-primary/5 border-primary/10 text-primary'
                                                  }`}>
                                                      {tag}
                                                  </span>
                                             ))}
                                        </div>
                                        
                                        <div className="flex items-end justify-between gap-4">
                                             <div className="space-y-1">
                                                 <p className={`text-[10px] md:text-[11px] font-body font-extrabold uppercase tracking-[0.3em] drop-shadow-sm ${isDark ? 'text-accent' : 'text-primary'}`}>
                                                     {project.category}
                                                 </p>
                                                <h3 className={`text-xl md:text-2xl font-heading font-bold leading-tight ${isDark ? 'text-white' : 'text-primary'}`}>
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 transform
                                                ${isDark 
                                                    ? 'bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent group-hover:text-primary group-hover:rotate-45' 
                                                    : 'bg-primary text-white group-hover:bg-accent group-hover:rotate-45 shadow-lg'
                                                }
                                            `}>
                                                <ArrowRight className="w-7 h-7" />
                                            </div>
                                        </div>
                                        <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150">
                                            <p className={`mt-4 text-base font-body leading-[1.6] line-clamp-2 ${isDark ? 'text-text-secondary' : 'text-text-secondary font-medium'}`}>
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Hover Shine Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-60 text-center flex flex-col items-center"
                    >
                        <div className="w-32 h-32 rounded-full bg-primary/5 flex items-center justify-center mb-10 relative">
                            <Search className="w-12 h-12 text-accent" />
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-accent/20 rounded-full" 
                            />
                        </div>
                        <h3 className="text-4xl font-heading font-bold text-text-primary mb-4">{isDark ? 'The Chamber is Empty' : 'No Projects Found'}</h3>
                        <p className="text-xl text-text-muted max-w-md mx-auto">{isDark ? 'None of these specific spells have been archived yet. Shall we cast the first one together?' : 'We haven\'t uploaded projects in this category yet. Want to be our first?'}</p>
                        <button 
                            onClick={() => setActiveFilter('All')}
                            className="mt-12 px-8 py-4 rounded-full border border-accent text-accent font-bold hover:bg-accent hover:text-primary transition-all shadow-[0_0_20px_rgba(201,168,76,0.1)]"
                        >
                            {isDark ? 'Reopen the Full Archives' : 'View All Projects'}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ProjectsGrid;
