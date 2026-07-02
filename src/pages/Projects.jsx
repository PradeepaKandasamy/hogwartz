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
import ContactBanner from '../components/home/ContactBanner';

const projectsData = [
    { 
        id: 1, 
        title: 'Vangalamman Decors', 
        category: 'Digital Marketing Partner', 
        description: 'Helping a premium interior design brand strengthen its online presence through strategic social media marketing, creative content, and brand awareness campaigns.',
        image: 'https://picsum.photos/seed/project1/300/200',
        tags: ['Social Media', 'Content Creation', 'Digital Marketing'],
        details: {
            problem: 'The brand needed to establish a stronger digital footprint to attract premium clients.',
            solution: 'We implemented a comprehensive social media marketing strategy focusing on high-quality visuals and engaging content.',
            result: 'Significant increase in brand visibility and engagement across digital platforms.',
            stats: [
                { label: 'Engagement', value: '+120%', icon: <Activity className="w-5 h-5" />, growth: 120 },
            ]
        },
    },
    { 
        id: 2, 
        title: 'RS Construction', 
        category: 'Website Development', 
        description: 'Designed and developed a modern, responsive business website that reflects the company\'s professionalism, expertise, and credibility.',
        image: 'https://picsum.photos/seed/project2/300/200',
        tags: ['Web Design', 'UI/UX', 'Development'],
        details: {
            problem: 'The company lacked a professional website to showcase their construction portfolio.',
            solution: 'We built a modern, responsive website highlighting their projects and expertise.',
            result: 'Enhanced credibility and a professional platform to attract new clients.',
            stats: [
                { label: 'Performance', value: '99%', icon: <TrendingUp className="w-5 h-5" />, growth: 99 },
            ]
        },
    },
    { 
        id: 3, 
        title: 'F3 Vegetables', 
        category: 'Website Development', 
        description: 'Developed a user-friendly and responsive website that improves online visibility and provides customers with easy access to products and services.',
        image: 'https://picsum.photos/seed/project3/300/200',
        tags: ['E-Commerce', 'Web Dev', 'SEO'],
        details: {
            problem: 'Customers needed an easier way to access and order fresh vegetables online.',
            solution: 'We developed an intuitive e-commerce platform optimized for mobile and desktop users.',
            result: 'Improved customer accessibility and increased online orders.',
            stats: [
                { label: 'Accessibility', value: '100%', icon: <CheckCircle2 className="w-5 h-5" />, growth: 100 },
            ]
        },
    },
    { 
        id: 4, 
        title: 'Twins Consultancy', 
        category: 'Creative Design', 
        description: 'Designed professional posters and marketing creatives that effectively communicate the company\'s services while strengthening its visual identity.',
        image: 'https://picsum.photos/seed/project4/300/200',
        tags: ['Graphic Design', 'Branding', 'Print'],
        details: {
            problem: 'The consultancy needed compelling visual materials for their marketing campaigns.',
            solution: 'We designed professional and impactful posters aligned with their brand identity.',
            result: 'Strengthened brand identity and effective communication of their services.',
            stats: [
                { label: 'Brand Recall', value: '+85%', icon: <Award className="w-5 h-5" />, growth: 85 },
            ]
        },
    }
];

const filters = ['All', 'Website Development', 'Digital Marketing Partner', 'Creative Design'];

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
                <title>{isDark ? "Our Spells & Results | Hogwartz Digital Projects" : "Our Projects & Results | Hogwartz Digital"}</title>
                <meta name="description" content={isDark ? "Explore our magical portfolio of web development, marketing, and design projects. Each case study tells a story of transformation." : "Explore our portfolio of web development, marketing, and design projects. Each case study tells a story of transformation and growth."} />
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

            <ContactBanner />

            <CaseStudy 
                project={selectedProject} 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </div>
    );
};

export default Projects;
