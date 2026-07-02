import { motion } from 'framer-motion';
import { Megaphone, Target, Code, Video, Globe, Palette, Sparkles, Wand2 } from 'lucide-react';

const SkillItem = ({ skill, level, isDark, delay }) => {
    return (
        <div className="space-y-3 group">
            <div className="flex items-center justify-between">
                <span className={`font-body font-bold text-sm ${isDark ? 'text-text-secondary' : 'text-primary'}`}>
                    {skill}
                </span>
                <span className={`text-xs font-bold font-heading ${isDark ? 'text-accent' : 'text-accent'}`}>
                    {level}% {isDark ? "Power" : "Skill"}
                </span>
            </div>
            {/* Progress Bar Container */}
            <div className={`h-2 w-full rounded-full overflow-hidden relative
                ${isDark ? 'bg-secondary/20' : 'bg-primary/5'}
            `}>
                {/* Visual Progress */}
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, delay, ease: "circOut" }}
                    className={`absolute top-0 left-0 h-full rounded-full
                        ${isDark 
                            ? 'bg-gradient-to-r from-accent/40 via-accent/80 to-accent shadow-[0_0_15px_rgba(201,168,76,0.5)]' 
                            : 'bg-primary'
                        }
                    `}
                />
                
                {/* Glow Pulse (Dark Mode Only) */}
                {isDark && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-white/10 skew-x-12 mix-blend-overlay"
                    />
                )}
            </div>
        </div>
    );
};

const CategoryCard = ({ category, isDark, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`p-10 rounded-[3rem] border transition-all duration-300 relative group
        ${isDark
                    ? 'bg-secondary/10 border-accent/10 hover:border-accent shadow-lg'
                    : 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-primary/5 hover:shadow-2xl'
                }`}
        >
            <div className="flex items-center gap-6 mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors transform group-hover:rotate-12 duration-500
                    ${isDark ? 'bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-primary' : 'bg-primary text-white shadow-lg'}
                `}>
                    <div className="w-8 h-8">{category.icon}</div>
                </div>
                <h3 className={`font-heading text-2xl font-bold leading-tight
                    ${isDark ? 'text-white' : 'text-primary'}
                `}>
                    {category.name}
                </h3>
            </div>
            
            <div className="space-y-8">
                {category.skills.map((skill, i) => (
                    <SkillItem 
                        key={i} 
                        skill={skill.name} 
                        level={skill.level} 
                        isDark={isDark} 
                        delay={0.2 + (i * 0.1)} 
                    />
                ))}
            </div>
            
            {/* Animated Magic Icon (Dark Mode Only) */}
            {isDark && (
                <div className="absolute -bottom-4 -right-4 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-[2s]">
                    {category.icon}
                </div>
            )}
        </motion.div>
    );
};

const SkillsExpertise = ({ isDark }) => {
    const categories = [
        { 
            name: isDark ? "Oracle Marketing" : "Performance Marketing", 
            icon: <Megaphone className="w-full h-full" />, 
            skills: [
                { name: "Predictive Analytics", level: 95 },
                { name: "Conversion Sorcery", level: 98 },
                { name: "Omnichannel Intent", level: 92 },
            ],
        },
        { 
            name: isDark ? "Architectural Mastery" : "Core Development", 
            icon: <Code className="w-full h-full" />, 
            skills: [
                { name: "Next.js / React 19", level: 99 },
                { name: "3D Canvas / WebGL", level: 88 },
                { name: "Security Protocols", level: 96 },
            ],
        },
        { 
            name: isDark ? "Visual Soul-Forging" : "Creative Editing", 
            icon: <Video className="w-full h-full" />, 
            skills: [
                { name: "Cinematic Editing", level: 97 },
                { name: "Brand Artifact Design", level: 94 },
                { name: "Motion Graphic Mastery", level: 91 },
            ],
        },
        { 
            name: isDark ? "Strategic Dominion" : "Project Management", 
            icon: <Target className="w-full h-full" />, 
            skills: [
                { name: "Vision Orchestration", level: 98 },
                { name: "Operational Alchemies", level: 93 },
                { name: "Resource Optimization", level: 95 },
            ],
        }
    ];

    return (
        <section className="py-32 px-6 bg-background relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Intro Headline */}
                    <div className="lg:sticky lg:top-32 space-y-8 max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            className="inline-flex items-center gap-2 text-accent uppercase font-body font-bold text-xs md:text-sm tracking-widest"
                        >
                             <Wand2 className="w-4 h-4" /> {isDark ? 'Mastery Levels' : 'Expertise Levels'}
                        </motion.div>
                        
                         <h2 className={`text-4xl md:text-5xl lg:text-6xl font-magical font-bold leading-[1.1] ${isDark ? 'text-white' : 'text-primary'}`}>
                            {isDark ? (
                                <>The Strength of Our <br /> <span className="text-accent underline decoration-accent/10 underline-offset-[14px]">Combined Magic</span>.</>
                            ) : (
                                <>The Strength of Our <br /> <span className="text-accent underline decoration-accent/10 underline-offset-[14px]">Combined Expertise</span>.</>
                            )}
                        </h2>
                        
                        <p className={`font-body text-base md:text-lg leading-relaxed max-w-xl 
                            ${isDark ? 'text-text-secondary' : 'text-text-secondary font-medium'}
                        `}>
                            {isDark
                                ? "Every member of our council possesses a unique alignment of skills, sharpened through rigorous technical combat and deep market intuition. We don't just hold knowledge—we possess mastery over the digital elementals."
                                : "Our team possesses a unique blend of skills, sharpened through extensive experience and deep market intuition. We don't just hold knowledge—we possess mastery over modern digital technologies."
                            }
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div className="space-y-px">
                                <p className="text-4xl md:text-5xl font-heading font-bold text-accent">4</p>
                                <p className="text-[10px] md:text-xs uppercase font-body font-bold tracking-[0.2em] text-text-muted">Creative Professionals</p>
                            </div>
                            <div className="space-y-px">
                                <p className="text-4xl md:text-5xl font-heading font-bold text-accent">4</p>
                                <p className="text-[10px] md:text-xs uppercase font-body font-bold tracking-[0.2em] text-text-muted">Industries Served</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                        {categories.map((cat, i) => (
                            <CategoryCard key={i} category={cat} isDark={isDark} index={i} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Orbs (Dark Theme Only) */}
            {isDark && (
                <div className="absolute -top-40 -left-40 w-1/2 h-full bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.05),transparent_70%)] pointer-events-none" />
            )}
        </section>
    );
};

export default SkillsExpertise;
