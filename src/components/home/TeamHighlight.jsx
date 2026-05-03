import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Wand2, Plus } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const TeamMemberCard = ({ name, role, index, isDark }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative aspect-[3/4] rounded-xl overflow-hidden border transition-all duration-500
                ${isDark ? 'bg-[#0A0A0F] border-white/5 shadow-2xl hover:border-accent/40 hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)]' : 'bg-white border-accent/10 shadow-lg'}
            `}
        >
            <img 
                src={`https://picsum.photos/seed/${name.replace(/\s+/g, '')}/400/600`} 
                alt={name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
            />
            
            {/* Cinematic Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500
                ${isDark ? 'from-[#05050A] via-[#05050A]/20 to-transparent opacity-90 group-hover:opacity-75' : 'from-primary/80 to-transparent opacity-60'}
            `} />

            {/* Reflection Sweep */}
            {isDark && (
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-white/5 via-transparent to-transparent rotate-12 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out" />
                </div>
            )}

            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className={`font-heading text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-primary'}`}>
                        {name}
                    </h4>
                    <p className={`font-body text-xs tracking-widest uppercase ${isDark ? 'text-accent' : 'text-accent'}`}>
                        {role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const TeamHighlight = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';

    // Only render in dark theme as requested, OR show light theme equivalent if needed.
    // The user said "ensuring it appears ONLY in dark theme". 
    // Usually this means it's a themed section.
    if (!isDark) return null;

    const team = [
        { name: "Albus Dumbledore", role: "Grand Founder" },
        { name: "Minerva McGonagall", role: "Creative Director" },
        { name: "Severus Snape", role: "Technical Wizard" },
        { name: "Hermione Granger", role: "Strategic Mastermind" },
        { name: "Ron Weasley", role: "Experience Lead" },
        { name: "Draco Malfoy", role: "Influence Lead" },
    ];

    return (
        <section className="relative py-24 px-6 transition-colors duration-500 overflow-hidden bg-transparent">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* LEFT SIDE: TITLES & CTA */}
                    <div className="lg:w-1/3 flex flex-col gap-8 pt-4">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="font-heading text-xl uppercase tracking-[0.3em] text-accent font-semibold mb-4 block">
                                Meet the wizards
                            </span>
                            <h2 className="font-magical text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
                                MEET THE <span className="text-white">TEAM</span>
                            </h2>
                            <p className="font-body text-lg text-text-secondary leading-relaxed mb-8 max-w-sm">
                                A specialized group of digital alchemists dedicated to transforming your vision into reality.
                            </p>
                            
                            <NavLink
                                to="/team"
                                className="group pulse-glow-magical relative inline-flex items-center gap-4 bg-accent text-primary px-10 py-5 rounded-full font-body font-bold tracking-widest uppercase transition-all hover:bg-highlight hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
                            >
                                JOIN NOW
                                <Plus className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                            </NavLink>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: TEAM GRID */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                            {team.map((member, index) => (
                                <TeamMemberCard 
                                    key={index} 
                                    {...member} 
                                    index={index} 
                                    isDark={isDark} 
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TeamHighlight;
