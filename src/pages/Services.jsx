import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    Code, Megaphone, Target, Video, Palette, 
    Zap, Globe, Search, Layout, FlaskConical, Rocket 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ProcessSection from '../components/services/ProcessSection';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';
    const [activeDetailed, setActiveDetailed] = useState(0);

    const content = {
        hero: {
            title: isDark ? "The Grimoire of Digital Sovereignty" : "Strategic Excellence & Digital Mastery",
            subtitle: isDark 
                ? "Unleash the primordial power of code and creative sorcery. We don't just provide services; we manifest your digital destiny."
                : "High-performance solutions for brands that demand category leadership. We deliver technical precision and market-leading design.",
        },
        servicesGrid: [
            { icon: <Globe className="w-8 h-8" />, name: isDark ? "Web Citadels" : "Corporate Platforms", tag: "Dev" },
            { icon: <Target className="w-8 h-8" />, name: isDark ? "Strategic Spells" : "Growth Marketing", tag: "Ads" },
            { icon: <Palette className="w-8 h-8" />, name: isDark ? "Brand Alchemy" : "Visual Identity", tag: "Design" },
            { icon: <Video className="w-8 h-8" />, name: isDark ? "Motion Mastery" : "Video Production", tag: "Media" },
        ],
        detailed: [
            {
                id: 0,
                title: isDark ? "The Art of Web Forging" : "Advanced Web Development",
                icon: <Code />,
                summary: "We build digital sanctuaries that are as robust as they are beautiful.",
                description: isDark 
                    ? "Our web development process is a ritual of technical excellence. We blend the ancient arts of semantic structure with the lightning-fast power of modern React architectures. We don't just code; we engineer environments where your brand can rule supreme."
                    : "We specialize in building scalable, enterprise-grade web applications. Our technical stack ensures 99.9% uptime, lightning-fast load speeds, and a seamless user experience across all devices. We focus on clean code and future-proof scalability.",
                features: ["Next.js & React Mastery", "Immersive 3D/Canvas Elements", "E-Commerce War Chests", "API Sorcery (Integrations)"],
                imageAlt: "Web Forge"
            },
            {
                id: 1,
                title: isDark ? "Oracle Marketing" : "Performance Marketing",
                icon: <Megaphone />,
                summary: "Harness the currents of the digital realm to find your true audience.",
                description: isDark
                    ? "Our marketing coven interprets the hidden patterns of data to place your message exactly where it needs to be. We use predictive algorithms and creative enchantments to ensure your brand's voice echoes through the noise of the mundane world."
                    : "Data-driven marketing that scales revenue. We utilize full-funnel strategies, precise audience segmentation, and multi-channel attribution to ensure every dollar of your ad spend is optimized for maximum return on investment.",
                features: ["Predictive Analytics", "High-Conversion Incantations", "Omnichannel Dominance", "Audience Tracking"],
                imageAlt: "Marketing Oracle"
            },
            {
                id: 2,
                title: isDark ? "Visual Soul-Craft" : "Branding & UI Design",
                icon: <Palette />,
                summary: "Transforming the abstract essence of your brand into visual truth.",
                description: isDark
                    ? "We delve deep into the core identity of your venture to extract its visual soul. Our designs aren't just 'pretty'—they are artifacts of power designed to resonate on a subconscious level, leaving a permanent mark on all who behold them."
                    : "Building cohesive brand identities that command respect. Our design philosophy centers on clarity, usability, and aesthetic excellence. From high-fidelity prototypes to complete brand kits, we ensure your visual language is consistent and professional.",
                features: ["Identity Alchemical Kits", "UI/UX Dreamscapes", "Custom Illustration Arts", "Design System Citadels"],
                imageAlt: "Design Soul"
            }
        ],
        steps: [
            { number: "01", title: isDark ? "The Divination" : "Discovery & Strategy", icon: <Search className="ml-8 w-8 h-8"/>, desc: isDark ? "We look into the crystal ball of your market, identifying hidden opportunities and competitors' weaknesses." : "In-depth market research and stakeholder alignment to define clear KPIs and a roadmap for success." },
            { number: "02", title: isDark ? "The Incantation" : "Design & Prototyping", icon: <Layout className="ml-8 w-8 h-8"/>, desc: isDark ? "Turning visions into tangible forms. We weave the first layers of visual magic through high-fidelity design." : "Creating user-centric journeys and wireframes that prioritize conversion and brand consistency." },
            { number: "03", title: isDark ? "The Forging" : "Development & Execution", icon: <FlaskConical className="ml-8 w-8 h-8"/>, desc: isDark ? "Our artisans hammer out the code, ensuring every line is strong, every pixel is aligned, and the foundation is iron-clad." : "Agile development using modern tech stacks for reliability, speed, and cross-platform compatibility." },
            { number: "04", title: isDark ? "The Manifestation" : "Launch & Scale", icon: <Rocket className="ml-8 w-8 h-8"/>, desc: isDark ? "Your project is released into the digital realm with the force of a supernova, monitored and scaled for maximum impact." : "Production deployment, performance monitoring, and strategic scaling to meet growing business demands." },
        ],
        pricing: [
            { name: isDark ? "Apprentice" : "Essential", price: "$999", period: "/project", description: "Essential digital presence for emerging brands.", features: ["Single Page Citadel", "Custom Brand Soul", "Mobile Enchantment", "3 Months Support"], popular: false },
            { name: isDark ? "Sorcerer" : "Professional", price: "$2,499", period: "/project", description: "Complete digital dominance for growing entities.", features: ["Full Citadel (5-8 Pages)", "Advanced Marketing Spells", "SEO Mastery", "Premium UI Visuals", "1-Year Maintenance"], popular: true },
            { name: isDark ? "Archmage" : "Enterprise", price: "Custom", period: "", description: "Limitless power and scale for industry leaders.", features: ["Infinite Page Citadels", "Global Scaling Spells", "Dedicated Scribe Team", "24/7 Priority Aura"], popular: false },
        ]
    };

    return (
        <div className={`overflow-x-hidden ${isDark ? 'theme-dark-arts' : 'theme-enchanted'} bg-background`}>
            <Helmet>
                <title>Services | Hogwartz Digital</title>
                <meta name="description" content="Explore our digital services. From web development to strategic marketing, we provide everything needed for digital dominance." />
            </Helmet>

            <ServicesHero isDark={isDark} content={content} />
            {/* <ServicesList 
                isDark={isDark} 
                content={content} 
                activeDetailed={activeDetailed} 
                setActiveDetailed={setActiveDetailed} 
            /> */}
            <ProcessSection isDark={isDark} content={content} />
            <ServicesCTA isDark={isDark} content={content} />
        </div>
    );
};

export default Services;
