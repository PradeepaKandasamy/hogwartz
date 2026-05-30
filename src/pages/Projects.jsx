import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    CheckCircle2, 
    TrendingUp, 
    Activity, 
    MousePointer2, 
    BarChart3, 
    Users, 
    Award, 
    Layers, 
    Globe, 
    Cpu, 
    Star 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import CaseStudy from '../components/projects/CaseStudy';
import Testimonials from '../components/projects/Testimonials';
import ToolsTech from '../components/projects/ToolsTech';
import ProjectsCTA from '../components/projects/ProjectsCTA';

const projectsData = [
    { 
        id: 1, 
        title: 'Elder Wand Analytics', 
        category: 'Web Development', 
        description: 'A powerful business intelligence dashboard for magical oversight and crystal ball projections.',
        image: 'https://picsum.photos/seed/project1/300/200',
        tags: ['React', 'D3.js', 'Tailwind', 'Node.js'],
        details: {
            problem: 'The Ministry of Magic was struggling to track wand usage patterns and magical surge incidents across the UK, leading to delayed responses to Dark Arts activity.',
            solution: 'We built a real-time analytics platform using Elixir for high-concurrency event processing and a React-based dashboard with custom D3 visualizations.',
            result: 'Identification time for magical surges improved by 74%, and the Ministry can now predict potential incidents 12 hours before they manifest.',
            stats: [
                { label: 'Tracking Accuracy', value: '99.9%', icon: <CheckCircle2 className="w-5 h-5" />, growth: 99 },
                { label: 'Response Speed', value: '+74%', icon: <TrendingUp className="w-5 h-5" />, growth: 74 },
                { label: 'Daily Events', value: '2M+', icon: <Activity className="w-5 h-5" />, growth: 85 },
            ]
        },
        testimonial: {
            text: "This dashboard is literally a game-changer. I can finally see the entire magical landscape from my office window – but on a screen.",
            author: "Kingsley Shacklebolt",
            role: "Minister for Magic"
        }
    },
    { 
        id: 2, 
        title: 'Golden Snitch Ads', 
        category: 'Ads', 
        description: 'High-speed programmatic advertising campaign that catches the target audience before they can look away.',
        image: 'https://picsum.photos/seed/project2/300/200',
        tags: ['PPC', 'SEO', 'Creatives', 'AI Optimization'],
        details: {
            problem: 'Nimbus Inc. was losing market share to Firebolt. Their traditional ads were too slow to capture the attention of busy seeker-level customers.',
            solution: 'We implemented a "Snitch-Motion" ad strategy using AI to predict user intent and serve hyper-targeted, fast-moving visual content across social platforms.',
            result: 'Nimbus saw a 3x increase in click-through rates and regained 25% of their premium broomstick market share within one quarter.',
            stats: [
                { label: 'CTR Growth', value: '300%', icon: <TrendingUp className="w-5 h-5" />, growth: 95 },
                { label: 'Conversion', value: '18%', icon: <MousePointer2 className="w-5 h-5" />, growth: 60 },
                { label: 'Ad Spend ROI', value: '8.5x', icon: <BarChart3 className="w-5 h-5" />, growth: 88 },
            ]
        },
        testimonial: {
            text: "The speed at which these ads converted was astonishing. It was like they knew what the customers wanted before they even thought of it.",
            author: "Madam Hooch",
            role: "Marketing Director, Nimbus Inc."
        }
    },
    { 
        id: 3, 
        title: 'Hogwarts Express SEO', 
        category: 'Marketing', 
        description: 'Building pathways for organic visibility through a complex network of content tunnels and digital tracks.',
        image: 'https://picsum.photos/seed/project3/300/200',
        tags: ['Content Strategy', 'Link Building', 'Tech SEO', 'PR'],
        details: {
            problem: 'Platform 9 3/4 was practically invisible to muggle search engines, causing massive confusion and lost ticket sales for new students.',
            solution: 'We created an "Invisibility Cloak" SEO strategy: invisible to non-magical crawlers but highly prioritized for verified wizard IP addresses search queries.',
            result: 'Search volume for "Train to Magic School" increased by 500% within the target demographic, while maintaining 100% secrecy from unwanted observers.',
            stats: [
                { label: 'Organic Traffic', value: '500k+', icon: <Users className="w-5 h-5" />, growth: 92 },
                { label: 'Keyword Rank', value: '#1', icon: <Award className="w-5 h-5" />, growth: 100 },
                { label: 'Bounce Rate', value: '12%', icon: <Activity className="w-5 h-5" />, growth: 15 },
            ]
        },
        testimonial: {
            text: "Reliable, fast, and completely hidden from the wrong eyes. Exactly what we needed for the new term.",
            author: "The Station Master",
            role: "Platform Management"
        }
    },
    { 
        id: 4, 
        title: 'Phoenix Design System', 
        category: 'Design', 
        description: 'A design language that regenerates and evolves, ensuring consistency from brand ashes to digital empires.',
        image: 'https://picsum.photos/seed/project4/300/200',
        tags: ['Figma', 'UI/UX', 'Branding', 'Motion Design'],
        details: {
            problem: 'Dumbledore\'s Office had 50+ different internal artifacts, all with inconsistent branding, making documentation look cluttered and unprofessional.',
            solution: 'We developed an atomic design system based on Alchemical principles, creating a library of reusable components that "respawn" with appropriate context.',
            result: 'Consistency across all Ministry and School departments reached 100%, and new project design time was reduced by over 60%.',
            stats: [
                { label: 'Efficiency', value: '+60%', icon: <TrendingUp className="w-5 h-5" />, growth: 60 },
                { label: 'Consistency', value: '100%', icon: <CheckCircle2 className="w-5 h-5" />, growth: 100 },
                { label: 'Components', value: '450+', icon: <Layers className="w-5 h-5" />, growth: 80 },
            ]
        },
        testimonial: {
            text: "The beauty of this system is in its resilience. Like a phoenix, our brand now renews itself with every new digital touchpoint.",
            author: "Minerva McGonagall",
            role: "Headmistress, Design Faculty"
        }
    },
    { 
        id: 5, 
        title: 'Gringotts Web Vault', 
        category: 'Web Development', 
        description: 'Ultra-secure financial portal for digitizing goblin-guarded assets with multi-scroll encryption.',
        image: 'https://picsum.photos/seed/project5/300/200',
        tags: ['Next.js', 'Blockchain', 'Security', 'FinTech'],
        details: {
            problem: 'Gringotts was facing increased pressure to provide digital access to vaults while maintaining their legendary "impossible to crack" security standards.',
            solution: 'A Next.js 15 application with multi-layer biometric and wand-signature verification, integrated with a private distributed ledger for asset tracking.',
            result: 'Zero security breaches since launch, with over 50,000 vaults now accessible digitally, reducing physical bank queues by 45%.',
            stats: [
                { label: 'Security Score', value: 'AAA+', icon: <Award className="w-5 h-5" />, growth: 100 },
                { label: 'Digital Migration', value: '50k+', icon: <Globe className="w-5 h-5" />, growth: 70 },
                { label: 'Uptime', value: '100%', icon: <Activity className="w-5 h-5" />, growth: 100 },
            ]
        },
        testimonial: {
            text: "A goblin's word is gold, and this technology reflects that. Security and efficiency finally meet under one digital roof.",
            author: "Griphook",
            role: "Senior Account Manager"
        }
    },
    { 
        id: 6, 
        title: 'Omniocular Marketing', 
        category: 'Marketing', 
        description: 'Multi-perspective marketing campaigns that analyze consumer behavior from every possible magical angle.',
        image: 'https://picsum.photos/seed/project6/300/200',
        tags: ['Video Production', 'Social Media', 'Influencer', 'Events'],
        details: {
            problem: 'The Quidditch World Cup needed a way to market to fans who couldn\'t attend, while providing an immersive "live" experience.',
            solution: 'We deployed a 360-degree interactive marketing funnel that allowed users to "rewind" and "zoom" into marketing assets, just like an Omniocular.',
            result: 'Global merchandise sales hit an all-time high, with a 210% increase in social media engagement compared to previous tournaments.',
            stats: [
                { label: 'Engagement', value: '210%', icon: <Star className="w-5 h-5" />, growth: 90 },
                { label: 'Viral Reach', value: '15M+', icon: <Users className="w-5 h-5" />, growth: 95 },
                { label: 'Conversion', value: '22%', icon: <MousePointer2 className="w-5 h-5" />, growth: 75 },
            ]
        },
        testimonial: {
            text: "It was like seeing the game from ten different angles at once. The marketing was as exciting as the final match!",
            author: "Ludo Bagman",
            role: "Head of Magical Games"
        }
    }
];

const filters = ['All', 'Web Development', 'Marketing', 'Ads', 'Design'];

const Projects = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark-arts';
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = useMemo(() => 
        activeFilter === 'All' 
            ? projectsData 
            : projectsData.filter(p => p.category === activeFilter),
        [activeFilter]
    );

    return (
        <div className={`overflow-x-hidden ${isDark ? 'theme-dark-arts' : 'theme-enchanted'} bg-background transition-colors duration-700`}>
            <Helmet>
                <title>Our Spells & Results | Hogwartz Digital Projects</title>
                <meta name="description" content="Explore our magical portfolio of web development, marketing, and design projects. Each case study tells a story of transformation." />
            </Helmet>

            <ProjectsHero isDark={isDark} />
            
            <ProjectsGrid 
                isDark={isDark}
                filters={filters}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                filteredProjects={filteredProjects}
                setSelectedProject={setSelectedProject}
            />

            <ToolsTech isDark={isDark} />
            
            <Testimonials isDark={isDark} />

            <ProjectsCTA />

            <CaseStudy 
                project={selectedProject} 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </div>
    );
};

export default Projects;
