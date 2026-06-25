import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import AntiqueFrame from '../ui/AntiqueFrame';
import smokeImg from '../../assets/smoke_texture.png';

const AboutOverview = () => {
    const { theme } = useTheme();
    const isLight = theme === 'enchanted-scroll';

    return (
        <section className={`about-section relative px-6 transition-colors duration-500 overflow-visible
            ${isLight ? 'bg-[#F8FAFC] z-10 pt-16 pb-12' : 'bg-background z-10 py-24'}`}>
            
            {/* 💨 DARK THEME: STATIC SMOKE EFFECT */}
            {!isLight && (
                <div 
                    className="absolute inset-0 z-0 pointer-events-none opacity-25"
                    style={{ 
                        backgroundImage: `url(${smokeImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mixBlendMode: 'screen'
                    }} 
                />
            )}

            <div className={`container mx-auto max-w-6xl grid grid-cols-1 gap-16 items-start
                ${isLight ? 'lg:grid-cols-2' : 'md:grid-cols-2 lg:items-center'}
            `}>

                {/* Left Side: Visual Element (Sticky and Layered in Light Theme) */}
                <div className={`relative w-full ${isLight ? 'lg:sticky lg:top-32 lg:order-1' : 'md:order-2'}`}>
                    {isLight ? (
                        /* PREMIUM LAYERED LAYOUT (LIGHT THEME) */
                        <div className="relative about-image-layout lg:pt-8 lg:pr-8 lg:pb-8">
                            {/* Main Large Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    opacity: { duration: 0.8 },
                                    scale: { duration: 0.8 },
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-4 border-white"
                            >
                                <img
                                    src="https://picsum.photos/seed/aboutmain/400/500"
                                    alt="Professional Agency Workspace"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                            </motion.div>

                            {/* Small Circular Overlapping Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-32 h-32 lg:w-40 lg:h-40 z-30"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="relative w-full h-full"
                                >
                                    {/* Rotating Text/Information Path */}
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                        <defs>
                                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                        </defs>
                                        <text className="text-[8px] font-bold uppercase tracking-[0.2em] fill-primary">
                                            <textPath xlinkHref="#circlePath">
                                                Digital Magic • Creative Growth • Hogwartz • 
                                            </textPath>
                                        </text>
                                    </svg>
                                    
                                    <div className="absolute inset-5 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                        <img
                                            src="https://picsum.photos/seed/teamcircle/300/300"
                                            alt="Creative Team"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Bottom Overlapping Quote Box */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                className="mt-8 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-6 bg-white p-6 rounded-[1.5rem] shadow-[0_10px_25px_rgba(0,0,0,0.1)] z-20 border border-primary/5 w-full lg:max-w-[280px]"
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-1 justify-center lg:justify-start">
                                        {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-3 h-3 text-accent fill-accent" />)}
                                    </div>
                                    <p className="font-heading text-sm md:text-base font-bold text-primary leading-tight text-center lg:text-left">
                                        "Creative Strategy <span className="text-accent">+</span> Digital Growth"
                                    </p>
                                    <div className="h-1 w-12 bg-accent rounded-full mx-auto lg:mx-0" />
                                </div>
                            </motion.div>

                            {/* Decorative Background Element */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px] -z-10" />
                        </div>
                    ) : (
                        /* PREMIUM ANTIQUE PORTRAIT (DARK THEME) */
                        <div className="flex justify-center items-center w-full min-h-[500px]">
                            <AntiqueFrame 
                                src="https://picsum.photos/seed/visionary/420/550" 
                                alt="Hogwartz Digital Visionary"
                                width="100%"
                                height="550px"
                                className="max-w-[420px]"
                            />
                        </div>
                    )}
                </div>

                {/* Right Side: Text Content (Scrolling in Light Theme) */}
                <motion.div
                    initial={isLight ? { opacity: 0, x: 30 } : { opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`space-y-8 ${isLight ? 'lg:order-2 lg:pt-0' : 'md:order-1'}`}
                >
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-accent" />
                            <span className="font-heading text-xl uppercase tracking-widest text-accent font-semibold">
                                {isLight ? 'Our Agency' : 'The Order'}
                            </span>
                        </div>

                        <h2 className={`font-magical text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight
                            ${isLight ? 'text-[#1E293B] !font-heading !font-extrabold' : 'section-title !text-white'}
                        `}>
                            {isLight 
                                ? <>Built for Growth. <br /> <span className="text-accent underline underline-offset-8">Designed for Scale.</span></>
                                : <>Not Just Another Agency. <br /> <span className="text-[#FCEABB] drop-shadow-[0_0_15px_rgba(252,234,187,0.3)] italic">A Coven of Creators.</span></>
                            }
                        </h2>

                        <p className={`font-body text-lg mb-8 leading-relaxed
                            ${isLight ? 'text-text-muted font-medium' : 'text-[#F0EDE6]/90 font-medium'}
                        `}>
                            {isLight
                                ? "We blend innovative design with high-end engineering to create digital experiences that deliver measurable business results. From custom platform development to strategic digital marketing, we are the architects of your digital success."
                                : "Hogwartz Digital was founded on a simple premise: the internet lacks magic. We bring spellbinding design and powerful engineering together to create digital experiences that don't just work—they enchant."
                            }
                        </p>

                        <p className={`font-body text-lg mb-8 leading-relaxed hidden lg:block
                            ${isLight ? 'text-text-muted' : 'text-[#F0EDE6]/70 italic border-l-2 border-accent/30 pl-6'}
                        `}>
                            {isLight
                                ? "Our approach is rooted in data-driven strategy and creative excellence. we transcend traditional digital marketing by focusing on the core user experience and your unique brand identity."
                                : "Our philosophy is rooted in the belief that every pixel should serve a purpose, and every line of code should feel like magic."
                            }
                        </p>

                        <div className={`grid grid-cols-2 gap-8 mb-12 ${isLight ? 'block' : 'hidden'}`}>
                            <div className="p-6 bg-white rounded-2xl border border-primary/5 shadow-sm">
                                <h4 className="text-3xl font-bold text-primary mb-1">4+</h4>
                                <p className="text-sm font-bold text-text-muted uppercase tracking-widest">Clients Served</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-primary/5 shadow-sm">
                                <h4 className="text-3xl font-bold text-primary mb-1">2+</h4>
                                <p className="text-sm font-bold text-text-muted uppercase tracking-widest">Projects Launched</p>
                            </div>
                        </div>

                        <NavLink
                            to="/about"
                            className={`group inline-flex items-center gap-2 font-body font-bold uppercase tracking-widest transition-colors
                                ${isLight ? 'text-primary hover:text-accent' : 'text-accent hover:text-highlight'}
                            `}
                        >
                            <span className={`border-b-2 pb-1 transition-colors ${isLight ? 'border-primary group-hover:border-accent' : 'border-accent group-hover:border-highlight'}`}>
                                {isLight ? 'Learn More About Us' : 'Read The Full Story'}
                            </span>
                        </NavLink>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutOverview;
