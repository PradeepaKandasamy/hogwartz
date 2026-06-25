import { NavLink } from 'react-router-dom';
import { Wand2, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();
    const isLight = theme === 'enchanted-scroll';

    return (
        <footer className={`footer-section relative pt-16 pb-8 border-t border-border site-footer transition-colors duration-500
            ${isLight ? 'bg-footer-bg' : 'bg-primary/5'}`}>
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                {/* Brand Area */}
                <div className="col-span-1 md:col-span-1">
                    <NavLink to="/" className="flex items-center gap-2 mb-4 group inline-flex">
                        <Wand2 className="w-6 h-6 text-accent group-hover:text-highlight transition-colors duration-300" />
                        <span className="font-magical text-2xl font-bold text-accent">Hogwartz</span>
                    </NavLink>
                    <p className={`font-body text-sm leading-relaxed mb-6 transition-colors duration-500
                        ${isLight ? 'text-footer-paragraph' : 'text-text-secondary'}`}>
                        We help businesses grow through strategic marketing, modern technology, and creative digital experiences.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full transition-all duration-300
                            ${isLight ? 'bg-footer-link/10 text-footer-link hover:bg-footer-link hover:text-dark-block' : 'bg-primary/20 hover:bg-highlight hover:text-primary text-foreground'}`}>
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full transition-all duration-300
                            ${isLight ? 'bg-footer-link/10 text-footer-link hover:bg-footer-link hover:text-dark-block' : 'bg-primary/20 hover:bg-highlight hover:text-primary text-foreground'}`}>
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full transition-all duration-300
                            ${isLight ? 'bg-footer-link/10 text-footer-link hover:bg-footer-link hover:text-dark-block' : 'bg-primary/20 hover:bg-highlight hover:text-primary text-foreground'}`}>
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-heading text-xl font-semibold mb-6 footer-heading" style={{ color: 'var(--color-footer-heading)' }}>Quick Links</h4>
                    <ul className="flex flex-col gap-3 font-body text-sm">
                        <li><NavLink to="/about" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>About Us</NavLink></li>
                        <li><NavLink to="/services" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>Services</NavLink></li>
                        <li><NavLink to="/projects" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>Projects</NavLink></li>
                        <li><NavLink to="/team" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>Team</NavLink></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-heading text-xl font-semibold mb-6 footer-heading" style={{ color: 'var(--color-footer-heading)' }}>Our Services</h4>
                    <ul className="flex flex-col gap-3 font-body text-sm">
                        <li><NavLink to="/services" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>Web Development</NavLink></li>
                        <li><NavLink to="/services" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>Digital Marketing</NavLink></li>
                        <li><NavLink to="/services" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>Ad Campaigns</NavLink></li>
                        <li><NavLink to="/services" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>Video Editing</NavLink></li>
                        <li><NavLink to="/services" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>Poster Design</NavLink></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h4 className="font-heading text-xl font-semibold mb-6 footer-heading" style={{ color: 'var(--color-footer-heading)' }}>Contact Us</h4>
                    <ul className="flex flex-col gap-3 font-body text-sm">
                        <li className="flex items-center gap-2 cursor-pointer">
                            <Mail className="w-4 h-4 text-accent" />
                            <a href="mailto:hogwartzdigitalworks@gmail.com" className={`transition-colors duration-300 ${isLight ? 'text-footer-link hover:text-accent-light' : 'text-text-secondary hover:text-highlight'}`}>hogwartzdigitalworks@gmail.com</a>
                        </li>
                        <li className={`${isLight ? 'text-footer-paragraph' : 'text-text-secondary'}`}>Karur, Tamil Nadu, India</li>
                    </ul>
                </div>
            </div>

            <div className={`container mx-auto px-6 pt-8 border-t border-border text-center font-body text-xs
                ${isLight ? 'text-footer-copy' : 'opacity-50'}`}>
                <p>&copy; {new Date().getFullYear()} Hogwartz Digital Agency. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
