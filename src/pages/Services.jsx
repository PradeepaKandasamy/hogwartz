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
import PricingSection from '../components/pricing/PricingSection';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';
    const [activeDetailed, setActiveDetailed] = useState(0);

    const content = {
        hero: {
            title: "Crafting Digital Experiences That Drive Results",
            subtitle: "From strategy and design to development and marketing, we create digital solutions that help businesses establish their presence, attract customers, and accelerate growth.",
        },
        servicesGrid: [
            { icon: <Globe className="w-8 h-8" />, name: "Website Development", description: "Custom websites designed for performance, speed, and conversion.", tag: "Dev" },
            { icon: <Target className="w-8 h-8" />, name: "Social Media Management", description: "Consistent content strategies that build engagement and brand visibility.", tag: "Social" },
            { icon: <Megaphone className="w-8 h-8" />, name: "Digital Marketing", description: "Data-driven campaigns that help businesses reach the right audience.", tag: "Ads" },
            { icon: <Palette className="w-8 h-8" />, name: "Branding & Logo Design", description: "Creating memorable brand identities that leave lasting impressions.", tag: "Design" },
            { icon: <Palette className="w-8 h-8" />, name: "Poster Design", description: "Professional designs that communicate your message effectively.", tag: "Design" },
            { icon: <Video className="w-8 h-8" />, name: "Reels & Video Editing", description: "High-quality visual storytelling optimized for modern audiences.", tag: "Video" },
            { icon: <Video className="w-8 h-8" />, name: "AI Video Creation", description: "Modern content powered by creativity and artificial intelligence.", tag: "Video" },
            { icon: <Search className="w-8 h-8" />, name: "SEO Services", description: "Improve visibility and rank higher where customers search.", tag: "SEO" },
            { icon: <Target className="w-8 h-8" />, name: "Meta Ads", description: "Reach targeted audiences with performance-focused campaigns.", tag: "Ads" },
            { icon: <Globe className="w-8 h-8" />, name: "Google Business Profile", description: "Enhance local visibility and customer trust online.", tag: "SEO" },
            { icon: <Code className="w-8 h-8" />, name: "Content Creation", description: "Engaging content designed to educate, inspire, and convert.", tag: "Content" },
            { icon: <Zap className="w-8 h-8" />, name: "Email Marketing", description: "Build relationships and nurture customers through email campaigns.", tag: "Marketing" },
            { icon: <Target className="w-8 h-8" />, name: "Influencer Marketing", description: "Collaborate with creators to amplify brand reach.", tag: "Marketing" },
            { icon: <Layout className="w-8 h-8" />, name: "UI/UX Design", description: "Crafting intuitive digital experiences that users love.", tag: "Design" },
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
            { number: "01", title: "Discovery", icon: <Search className="ml-8 w-8 h-8"/>, desc: "Understanding your business, audience, and goals." },
            { number: "02", title: "Strategy", icon: <Target className="ml-8 w-8 h-8"/>, desc: "Building a customized roadmap for digital success." },
            { number: "03", title: "Design", icon: <Palette className="ml-8 w-8 h-8"/>, desc: "Crafting visually engaging and user-friendly experiences." },
            { number: "04", title: "Development", icon: <Code className="ml-8 w-8 h-8"/>, desc: "Transforming ideas into scalable digital solutions." },
            { number: "05", title: "Launch", icon: <Rocket className="ml-8 w-8 h-8"/>, desc: "Deploying with precision and performance." },
            { number: "06", title: "Growth", icon: <Zap className="ml-8 w-8 h-8"/>, desc: "Optimizing continuously for long-term success." },
        ]
    };

    return (
        <div className={`overflow-x-hidden ${isDark ? 'theme-dark-arts' : 'theme-enchanted'} bg-background`}>
            <Helmet>
                <title>Services | Hogwartz Digital</title>
                <meta name="description" content="Explore our digital services. From web development to strategic marketing, we provide everything needed for digital dominance." />
            </Helmet>

            <ServicesHero isDark={isDark} content={content} />
            <ServicesList 
                isDark={isDark} 
                content={content} 
            />
            <ProcessSection isDark={isDark} content={content} />
            <PricingSection isDark={isDark} />
            <ServicesCTA isDark={isDark} content={content} />
        </div>
    );
};

export default Services;
