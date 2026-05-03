import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Wand2, Activity, Cpu, CheckCircle2, BarChart3, Layers, ExternalLink, Star } from 'lucide-react';

const AnimatedStatBar = ({ label, value, growth, icon, delay }) => {
    return (
        <div className="space-y-3 group">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(201,168,76,0.15)]">
                        {icon}
                    </div>
                    <span className="text-text-secondary font-medium">{label}</span>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-heading font-bold text-text-primary block">{value}</span>
                </div>
            </div>
            <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden relative">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${growth}%` }}
                    transition={{ duration: 1.5, delay, ease: "circOut" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent/50 to-accent rounded-full"
                />
                <motion.div 
                    initial={{ left: 0 }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
            </div>
        </div>
    );
};

const CaseStudy = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 dark:bg-background/90 backdrop-blur-xl"
                    />
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 10 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-background border border-accent/20 rounded-[2.5rem] shadow-2xl overflow-x-hidden custom-scrollbar"
                    >
                        {/* Header Image & Close */}
                        <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                            
                            {/* Control Bar */}
                            <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
                                <div className="px-4 py-2 bg-background/50 backdrop-blur-md rounded-full border border-accent/20 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-accent" />
                                    <span className="text-[10px] md:text-xs uppercase font-body font-bold tracking-widest text-accent">Case Archive #{project.id}</span>
                                 </div>
                                <button 
                                    onClick={onClose}
                                    className="p-3 rounded-full bg-accent text-primary hover:rotate-90 transition-all duration-500 shadow-[0_0_20px_rgba(201,168,76,0.5)]"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16">
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="px-4 py-1.5 bg-accent/20 border border-accent/40 rounded-full text-accent text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 mb-4"
                                >
                                    <Wand2 className="w-4 h-4" /> <span className="font-body font-bold text-[10px] uppercase tracking-widest">{project.category}</span>
                                </motion.div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-magical text-text-primary leading-tight font-bold drop-shadow-lg"
                                >
                                    {project.title}
                                </motion.h2>
                            </div>
                        </div>

                        <div className="px-8 md:px-16 py-16">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                                {/* Left Content: Story */}
                                <div className="lg:col-span-7 space-y-16">
                                    <section>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-accent">
                                                <Activity className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary">The Challenge</h3>
                                        </div>
                                        <p className="font-body text-base md:text-lg text-text-secondary leading-[1.6] first-letter:text-5xl first-letter:font-magical first-letter:text-accent first-letter:mr-3 first-letter:float-left">
                                            {project.details.problem}
                                        </p>
                                    </section>

                                    <section className="p-1 w-full bg-gradient-to-r from-accent/30 via-transparent to-accent/30 rounded-3xl">
                                        <div className="p-8 md:p-12 bg-background rounded-[1.4rem]">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                                    <Cpu className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary">Enchanted Solution</h3>
                                            </div>
                                            <p className="font-body text-base md:text-lg text-text-secondary leading-[1.6]">
                                                {project.details.solution}
                                            </p>
                                        </div>
                                    </section>

                                    <section>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary">Mastery Over Magic</h3>
                                        </div>
                                        <p className="font-body text-base md:text-lg text-text-secondary leading-[1.6]">
                                            {project.details.result}
                                        </p>
                                    </section>
                                </div>

                                {/* Right Content: Stats & Details */}
                                <div className="lg:col-span-5 space-y-12">
                                    {/* Stats Card */}
                                    <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-8 md:p-10 space-y-10 relative overflow-hidden group">
                                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
                                        
                                        <div>
                                            <h4 className="text-xs md:text-sm font-body font-bold uppercase tracking-widest text-accent mb-8 flex items-center gap-2">
                                                <BarChart3 className="w-4 h-4" /> Animated Intelligence
                                            </h4>
                                            
                                            <div className="space-y-8">
                                                {project.details.stats.map((stat, i) => (
                                                    <AnimatedStatBar 
                                                        key={i} 
                                                        label={stat.label} 
                                                        value={stat.value} 
                                                        growth={stat.growth} 
                                                        icon={stat.icon} 
                                                        delay={0.5 + i * 0.1} 
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tech & Client */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                                        <div className="bg-accent/5 border border-accent/10 rounded-[2rem] p-8">
                                            <h4 className="text-[10px] md:text-xs font-body font-bold uppercase tracking-widest text-text-muted mb-6 flex items-center gap-2">
                                                <Layers className="w-4 h-4" /> Core Alchemies
                                            </h4>
                                            <div className="flex flex-wrap gap-2 text-text-primary">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="px-4 py-2 bg-background border border-accent/20 rounded-xl text-xs font-body font-bold hover:border-accent hover:text-accent transition-colors cursor-default">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-8 group">
                                            <h4 className="text-[10px] md:text-xs font-body font-bold uppercase tracking-widest text-text-muted mb-6">Client Artifact</h4>
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl border border-accent/20 group-hover:bg-accent group-hover:text-primary transition-all">
                                                    {project.testimonial.author[0]}
                                                </div>
                                                <div>
                                                    <p className="font-heading font-bold text-text-primary text-xl">{project.testimonial.author}</p>
                                                    <p className="text-sm font-body text-text-muted">{project.testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className="w-full py-5 rounded-[2rem] bg-accent text-primary font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all group">
                                        <span>Visit Launch Portal</span>
                                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            {/* Full Testimonial Quote */}
                            <div className="mt-24 text-center max-w-4xl mx-auto px-6">
                                <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent to-transparent mx-auto mb-10" />
                                <Star className="w-8 h-8 text-accent fill-accent mx-auto mb-8 animate-pulse" />
                                <blockquote className="text-2xl md:text-3xl italic font-heading text-text-primary leading-[1.6] mb-8">
                                    "{project.testimonial.text}"
                                </blockquote>
                                <div className="h-1 w-20 bg-accent mx-auto" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CaseStudy;
