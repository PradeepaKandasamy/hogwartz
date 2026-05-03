import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Wand2, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark-arts';
    const location = useLocation();

    // Scroll listener for header shrink effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Projects', path: '/projects' },
        { title: 'Team', path: '/team' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <header 
            className={`fixed top-0 z-[100] w-full transition-all duration-500 ease-in-out border-b
                ${isScrolled 
                    ? `py-3 ${isDark ? 'bg-black/60 border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-white/80 border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]'}` 
                    : `py-5 ${isDark ? 'bg-transparent border-transparent' : 'bg-transparent border-transparent'}`
                }
                backdrop-blur-xl
            `}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                
                {/* 1. UPGRADED LOGO */}
                <NavLink to="/" className="flex items-center gap-2 group relative z-10">
                    <div className="relative">
                        <Wand2 className={`w-8 h-8 transition-transform duration-500 group-hover:rotate-45 ${isDark ? 'text-accent' : 'text-primary'}`} />
                        <motion.div 
                            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1"
                        >
                            <Sparkles className="w-4 h-4 text-accent" />
                        </motion.div>
                    </div>
                    <span className={`font-magical text-2xl font-bold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-primary'}`}>
                        Hogwartz <span className="text-accent drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]">Digital</span>
                    </span>
                </NavLink>

                {/* 2. DESKTOP NAVIGATION */}
                <nav className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.title}
                                to={link.path}
                                className={({ isActive }) => `
                                    relative py-2 text-sm font-heading font-heavy tracking-widest uppercase transition-all duration-300
                                    ${isActive 
                                        ? (isDark ? 'text-accent' : 'text-primary') 
                                        : (isDark ? 'text-text-secondary hover:text-white' : 'text-text-muted hover:text-primary')
                                    }
                                    group
                                `}
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.title}
                                        {/* Animated Underline */}
                                        <motion.div 
                                            className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 
                                                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                                            `}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-5 pl-8 border-l border-border/50">
                        {/* 3. THEME TOGGLE (UPGRADED) */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center
                                ${isDark 
                                    ? 'bg-white/5 border-white/10 hover:border-accent hover:bg-accent/10' 
                                    : 'bg-black/5 border-black/5 hover:border-accent hover:bg-accent/5'
                                }
                            `}
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-accent" />
                            ) : (
                                <Wand2 className="w-5 h-5 text-accent" />
                            )}
                        </motion.button>

                        {/* 4. PREMIUM CTA BUTTON */}
                        <NavLink
                            to="/contact"
                            className="relative group px-7 py-2.5 rounded-xl overflow-hidden font-heading font-bold text-sm tracking-widest uppercase shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C] to-[#EAD7A4]" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                            <span className="relative flex items-center gap-2 text-[#1E293B]">
                                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </NavLink>
                    </div>
                </nav>

                {/* 5. MOBILE MENU TOGGLE */}
                <div className="lg:hidden flex items-center gap-4 relative z-10">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-xl transition-all ${isDark ? 'bg-white/5' : 'bg-black/5'}`}
                    >
                         {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Wand2 className="w-5 h-5 text-accent" />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 rounded-xl transition-all ${isDark ? 'text-white' : 'text-primary'}`}
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* 6. MOBILE NAVIGATION OVERLAY (UPGRADED) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`lg:hidden absolute top-0 left-0 w-full min-h-screen pt-28 pb-10 px-6 backdrop-blur-2xl z-[90]
                            ${isDark ? 'bg-black/95' : 'bg-white/95'}
                        `}
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => `
                                            text-3xl font-heading font-heavy tracking-wider uppercase flex items-center justify-between
                                            ${isActive ? 'text-accent' : (isDark ? 'text-white/40' : 'text-primary/40')}
                                        `}
                                    >
                                        {link.title}
                                        <ArrowRight className={`w-6 h-6 ${location.pathname === link.path ? 'opacity-100' : 'opacity-0'}`} />
                                    </NavLink>
                                </motion.div>
                            ))}
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-10 pt-10 border-t border-border"
                            >
                                <NavLink
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center justify-center gap-3 py-6 bg-gradient-to-r from-accent to-highlight rounded-2xl text-[#1E293B] font-heading font-black text-xl uppercase tracking-widest shadow-2xl"
                                >
                                    Start a Project <Sparkles className="w-6 h-6" />
                                </NavLink>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
