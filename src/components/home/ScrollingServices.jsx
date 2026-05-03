import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ScrollingServices = () => {
    const { theme } = useTheme();
    const isLight = theme === 'enchanted-scroll';

    const services = [
        "Website Development", "•",
        "Digital Marketing", "•",
        "Ad Campaigns", "•",
        "Poster Design", "•",
        "Video Editing", "•",
        "SEO Optimization", "•",
        "UI/UX Design", "•",
        "Brand Identity", "•"
    ];

    // Double the array to ensure smooth infinite scrolling
    const scrollItems = [...services, ...services];

    return (
        <div className={`features-section w-full py-7 overflow-hidden border-y border-accent/20 relative z-20 transition-colors duration-500
            ${isLight ? 'bg-bg-soft' : 'bg-primary'}`}>
            
            {/* Fade gradients for smooth entry/exit */}
            <div className={`absolute top-0 left-0 w-32 h-full z-10 pointer-events-none bg-gradient-to-r to-transparent
                ${isLight ? 'from-bg-soft' : 'from-primary'}`} />
            <div className={`absolute top-0 right-0 w-32 h-full z-10 pointer-events-none bg-gradient-to-l to-transparent
                ${isLight ? 'from-bg-soft' : 'from-primary'}`} />

            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1035] }} // Adjust width depending on actual text rendered length
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    className="flex items-center gap-8 px-4"
                >
                    {scrollItems.map((item, index) => (
                        <span
                            key={index}
                            className={`font-heading text-2xl md:text-3xl tracking-widest uppercase transition-colors duration-500
                                ${item === '•' 
                                    ? 'text-accent opacity-50' 
                                    : (isLight ? 'text-primary' : 'text-background')
                                }`}
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollingServices;
