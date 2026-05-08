import { Helmet } from 'react-helmet-async';
import { 
    Clock, 
    Zap, 
    Sparkles, 
    Globe, 
    ShieldCheck, 
    Code, 
    Megaphone, 
    TrendingUp, 
    Star 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AboutHero from '../components/about/AboutHero';
import BrandStory from '../components/about/BrandStory';
import MissionVision from '../components/about/MissionVision';
import WhatMakesUsDifferent from '../components/about/WhatMakesUsDifferent';
import AboutCTA from '../components/about/AboutCTA';
import MagicalAboutScene from '../components/about/MagicalAboutScene';
import { motion } from 'framer-motion';

const About = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';

    // Animation variants for cinematic reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } 
        }
    };

    const content = {
// ... existing content ... (lines 25-63 skipped for brevity but preserved)
        hero: {
            title: isDark ? "Magic In Every Pixel" : "Crafting Digital Excellence",
            subtitle: isDark ? "Architects of the Arcane Web" : "Your Vision, Our Passion",
            statement: isDark 
                ? "We don't just build websites; we conjure high-performance digital artifacts designed to enchant your users and dominate your market."
                : "Hogwartz Digital is a premium agency dedicated to transforming brands through stunning design, robust development, and strategic marketing."
        },
        story: {
            title: "The Chronicles of Our Coven",
            p1: "Our journey began over a decade ago when a small group of digital warlocks decided that 'good enough' was no longer acceptable. We saw a world of flat, uninspired web spaces and knew we could bring the spark of life back into the machine.",
            p2: "Today, we've transformed from a hidden collective into a global force of creativity. We specialize in taking the complex, the mundane, and the difficult and turning them into seamless, magical experiences that drive real growth.",
            highlights: [
                { icon: <Clock className="w-8 h-8" />, label: "Decade of Spells", description: "10+ years of pushing technology to its absolute limits." },
                { icon: <Globe className="w-8 h-8" />, label: "Global Reach", description: "Serving ambitious clients from Diagon Alley to Silicon Valley." },
                { icon: <ShieldCheck className="w-8 h-8" />, label: "Battle Hardened", description: "Bulletproof security and reliability in every single artifact." }
            ]
        },
        mission: {
            icon: <Zap className="w-8 h-8" />,
            title: "The Mission",
            p: "To empower visionary brands by providing them with the highest-grade digital tools and strategies, ensuring their influence spreads across the modern digital landscape like a perfectly cast spell."
        },
        vision: {
            icon: <Sparkles className="w-8 h-8" />,
            title: "The Vision",
            p: "To be the premier architect of the enchanted web, where every digital touchpoint is an opportunity for awe, discovery, and unparalleled performance for every user who enters our domain."
        },
        special: {
            title: isDark ? "The Arcane Specializations" : "Our Core Specializations",
            p: isDark 
                ? "We master the four elements of the digital realm to create artifacts of absolute power and conversion."
                : "Our expertise spans across critical domains to ensure your brand succeeds in the modern marketplace.",
            cards: [
                { icon: <Code className="w-8 h-8"/>, title: "Alchemical Code", description: "We forge ultra-fast, secure, and scalable high-performance web applications using the latest magical frameworks." },
                { icon: <Megaphone className="w-8 h-8"/>, title: "Persuasion Spells", description: "Our digital marketing campaigns are designed with psychological precision to capture hearts and minds." },
                { icon: <TrendingUp className="w-8 h-8"/>, title: "Growth Alchemy", description: "We analyze massive datasets to discover hidden paths of organic growth and scaling for your brand." },
                { icon: <Star className="w-8 h-8"/>, title: "Stellar Design", description: "Creating visual languages that don't just look pretty, but feel alive and deeply resonant with your audience." }
            ]
        }
    };

    const statsData = [
        { icon: <Zap className="w-10 h-10" />, value: "500+", label: "Artifacts Launched" },
        { icon: <Sparkles className="w-10 h-10" />, value: "15x", label: "Average Growth" },
        { icon: <Globe className="w-10 h-10" />, value: "24/7", label: "Wand Monitoring" },
        { icon: <Clock className="w-10 h-10" />, value: "10yr", label: "Spells Experience" }
    ];

    return (
        <div className={`relative overflow-x-hidden ${isDark ? 'theme-dark-arts' : 'theme-enchanted'} bg-background transition-colors duration-700`}>
            
            <Helmet>
                <title>About Our Magic | Hogwartz Digital</title>
                <meta name="description" content="Discover the story behind Hogwartz Digital. Learn how our collective of digital warlocks transforms brands through pixel-perfect magic." />
            </Helmet>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10"
            >
                <motion.div variants={sectionVariants} className="relative overflow-hidden">
                    {isDark && <MagicalAboutScene />}
                    <AboutHero isDark={isDark} content={content} />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                    <BrandStory isDark={isDark} content={content} />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                    <MissionVision isDark={isDark} content={content} />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                    <WhatMakesUsDifferent isDark={isDark} content={content} />
                </motion.div>
                
                <motion.div variants={sectionVariants}>
                    <AboutCTA isDark={isDark} statsData={statsData} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
