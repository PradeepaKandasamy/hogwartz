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
            title: "We Didn't Just Build a Brand...",
            subtitle: "We Built a Digital Growth Partner",
            statement: "Founded on 20 October 2025, Hogwartz Digital began with a simple vision: helping local businesses thrive in the digital world."
        },
        story: {
            title: "THE HOGWARTZ STORY",
            p1: "What started as an ambitious idea has grown into a creative agency delivering websites, marketing strategies, branding solutions, and digital experiences that create real impact.",
            p2: "We believe every business—big or small—deserves access to modern digital solutions that drive growth, build trust, and create lasting customer relationships. By combining human creativity with technology and modern marketing enhanced by artificial intelligence, we craft digital experiences that help businesses stand out.",
            highlights: [
                { icon: <Clock className="w-8 h-8" />, label: "Founded in 2025", description: "Established on 20 October 2025 to help local businesses." },
                { icon: <Globe className="w-8 h-8" />, label: "Creative Team", description: "Team of 4 creative professionals delivering excellence." },
                { icon: <ShieldCheck className="w-8 h-8" />, label: "Industries", description: "Serving 4 distinct industries with specialized solutions." }
            ]
        },
        mission: {
            icon: <Zap className="w-8 h-8" />,
            title: "The Mission",
            p: "To empower businesses with creative technology, strategic marketing, and digital experiences that drive measurable growth."
        },
        vision: {
            icon: <Sparkles className="w-8 h-8" />,
            title: "The Vision",
            p: "To become the most trusted digital growth partner for local businesses."
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
        { icon: <Clock className="w-10 h-10" />, value: "2025", label: "Founded" },
        { icon: <Star className="w-10 h-10" />, value: "4+", label: "Clients Served" },
        { icon: <Zap className="w-10 h-10" />, value: "2+", label: "Projects Delivered" },
        { icon: <Globe className="w-10 h-10" />, value: "4", label: "Industries Served" }
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
