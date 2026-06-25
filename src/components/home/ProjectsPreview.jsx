import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = ({ title, category, description, index, isLarge, isDark }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
            className={`group relative overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700
                ${isLarge 
                    ? 'aspect-square md:aspect-video z-10 scale-100 md:scale-[1.03] shadow-[0_0_80px_rgba(212,175,55,0.12)] border-[1.5px] border-accent/30 float-magical' 
                    : 'aspect-square border border-white/5 shadow-xl'}
                ${isDark ? 'bg-[#0A0A0F]/80 backdrop-blur-2xl ring-1 ring-white/5' : 'border-accent/20'}
                hover:-translate-y-2 hover:scale-[1.02]
                ${isDark ? 'hover:shadow-[0_25px_60px_-15px_rgba(212,175,55,0.15)] hover:border-accent/50' : ''}
            `}
        >
            <NavLink to="/projects" className="absolute inset-0 z-40" aria-label={`View ${title} project`} />
            {/* 🪄 LUXURY REFLECTION OVERLAY */}
            {isDark && (
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-white/5 via-transparent to-transparent rotate-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" />
                </div>
            )}

            <img 
                src={`https://picsum.photos/seed/${title.replace(/\s+/g, '')}/1200/800`} 
                alt={title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out brightness-90 group-hover:brightness-100" 
            />
            
            {/* 🎬 CINEMATIC OVERLAY */}
            <div className={`absolute inset-0 transition-all duration-700
                ${isDark 
                    ? 'bg-gradient-to-t from-[#05050A] via-[#05050A]/60 to-[#05050A]/10 opacity-90 group-hover:opacity-75' 
                    : 'bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90'
                }`} 
            />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[0.19,1,0.22,1]">
                    <p className={`font-body text-xs font-bold tracking-[0.3em] mb-4 uppercase transition-colors duration-500
                        ${isDark ? 'text-accent/80 group-hover:text-highlight' : 'text-highlight'}`}>
                        {category}
                    </p>
                    <div className="flex justify-between items-end gap-6 relative z-30">
                        <div className="flex-1">
                            <h3 className={`font-magical font-bold leading-[1.1] transition-all duration-500
                                ${isLarge ? 'text-4xl md:text-5xl lg:text-6xl tracking-tight' : 'text-2xl md:text-3xl'}
                                text-white group-hover:text-highlight`}>
                                {title}
                            </h3>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                <div className="overflow-hidden">
                                    <p className="mt-3 text-sm text-white/80 font-body line-clamp-2">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {!isLarge ? (
                            <div className={`w-12 h-12 rounded-full border flex items-center justify-center backdrop-blur-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 shrink-0
                                ${!isDark ? 'bg-dark-block border-dark-block/20' : 'bg-accent/10 border-accent/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]'}`}>
                                <ArrowUpRight className={`w-6 h-6 ${!isDark ? 'text-accent-light' : 'text-accent'}`} />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

            {/* Center Play Icon with Luxury Glow */}
            {isLarge && isDark && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="w-24 h-24 rounded-full bg-accent/10 border border-accent/40 backdrop-blur-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-1000"
                    >
                        <Play className="w-10 h-10 text-accent fill-accent ml-1.5 transition-transform duration-500 group-hover:rotate-12" />
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

const ProjectsPreview = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';

    const projects = [
        { 
            title: "Vangalamman Decors", 
            category: "Digital Marketing Partner", 
            description: "Helping a premium interior design brand strengthen its online presence through strategic social media marketing and creative content."
        },
        { 
            title: "RS Construction", 
            category: "Website Development", 
            description: "Designed and developed a professional business website that reflects the company's expertise and credibility."
        },
        { 
            title: "F3 Vegetables", 
            category: "Website Development", 
            description: "Built a responsive and user-friendly website to improve online visibility and customer accessibility."
        },
        { 
            title: "Twins Consultancy", 
            category: "Creative Design", 
            description: "Created impactful poster designs that effectively communicate the company's services and strengthen its brand identity.",
            isLarge: true 
        }
    ];

    return (
        <section className={`projects-section py-24 px-6 transition-colors duration-500 overflow-hidden
            ${isDark ? 'bg-[#05050A]' : 'bg-background'}`}>
            <div className="container mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-6 text-center md:text-left">
                    <div className="max-w-2xl px-4">
                        <span className="font-heading text-sm md:text-xl uppercase tracking-[0.15em] md:tracking-[0.2em] text-accent font-semibold mb-3 block">
                            {!isDark ? 'Selected Portfolio' : 'THE ARCANE VAULT'}
                        </span>
                        <h2 className={`font-magical text-[clamp(2.2rem,8vw,3rem)] md:text-6xl lg:text-7xl leading-[1.1] md:leading-tight
                            ${isDark ? 'text-white' : 'text-text-primary'}`}>
                            {!isDark ? 'Featured Work' : 'MASTERWORK ARTIFACTS'}
                        </h2>
                    </div>
                    <NavLink
                        to="/projects"
                        className={`font-body px-8 py-4 border-2 font-bold tracking-widest uppercase text-xs transition-all rounded-xl w-full md:w-auto text-center
                            ${!isDark 
                                ? 'bg-dark-block border-dark-block text-accent-light hover:bg-dark-block/90' 
                                : 'border-accent/30 text-accent hover:bg-accent hover:text-primary shadow-[0_0_20px_rgba(212,175,55,0.1)]'
                            }`}
                    >
                        {!isDark ? 'View Full Portfolio' : 'Enter The Vault'}
                    </NavLink>
                </div>

                {/* --- LAYOUT SWITCHER --- */}
                {isDark ? (
                    /* DARK THEME: CINEMATIC SYMMETRICAL GRID */
                    <div className="flex flex-col gap-12 max-w-7xl mx-auto">
                        
                        {/* TOP ROW: 3 SMALL CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {projects.slice(0, 3).map((project, index) => (
                                <ProjectCard key={index} {...project} index={index} isDark={true} />
                            ))}
                        </div>

                        {/* MIDDLE ROW: 1 BIG CENTER CARD */}
                        <div className="flex justify-center -mx-4 md:-mx-12 lg:-mx-24">
                            <div className="w-full max-w-5xl">
                                <ProjectCard {...projects[3]} index={3} isLarge={true} isDark={true} />
                            </div>
                        </div>
                    </div>
                ) : (
                    /* LIGHT THEME: ORIGINAL 2-COLUMN GRID */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.slice(0, 4).map((project, index) => (
                            <ProjectCard key={index} {...project} index={index} isDark={false} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default ProjectsPreview;
