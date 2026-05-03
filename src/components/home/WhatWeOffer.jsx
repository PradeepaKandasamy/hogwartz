import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './SpellCard.css';
import { useState, useMemo, useRef, useEffect, useCallback } from 'react';

const LightServiceCard = ({ title, description, image }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full group"
        >
            <div className="relative aspect-video overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col flex-1">
                <h3 className="font-heading text-2xl font-bold text-[#1E293B] mb-4">{title}</h3>
                <p className="font-body text-slate-600 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

const SpellCard = ({ title, description, image, stats }) => {
    return (
        <motion.div 
            className="spell-card group"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="artifact-texture" />
            <div className="spell-shine" />
            
            <div className="spell-card-header">
                <h3 className="spell-title">{title}</h3>
            </div>

            <div className="spell-card-image-container">
                <img src={image} alt={title} className="spell-card-image" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            </div>

            <div className="spell-card-body">
                <p className="spell-card-description">{description}</p>
                
                <div className="spell-card-stats">
                    <div className="stat-item">
                        <span className="stat-label">Power</span>
                        <span className="stat-value">{stats.power}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Form</span>
                        <span className="stat-value">{stats.type}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Impact</span>
                        <span className="stat-value">{stats.impact}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const WhatWeOffer = () => {
    const { theme } = useTheme();
    const isLight = theme === 'enchanted-scroll';
    const [isInteracting, setIsInteracting] = useState(false);
    const controls = useAnimation();
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const timerRef = useRef(null);
    
    // Services setup
    const baseServices = useMemo(() => [
        {
            title: 'Website Development',
            description: 'Enchanting, high-performance websites and web applications built with magical speed and precision.',
            image: 'https://picsum.photos/seed/webdev/300/200',
            stats: { power: 'Ultra', type: 'Design', impact: '250%' }
        },
        {
            title: 'Digital Marketing',
            description: 'Strategic spells for growth. We construct strategic campaigns that attract and convert your ideal audience.',
            image: 'https://picsum.photos/seed/marketing/300/200',
            stats: { power: 'High', type: 'Charm', impact: '180%' }
        },
        {
            title: 'Ad Campaigns',
            description: 'Targeted advertisements that strike your audience with the accuracy of a master seeker.',
            image: 'https://picsum.photos/seed/ads/300/200',
            stats: { power: 'High', type: 'Spell', impact: '320%' }
        },
        {
            title: 'Video Production',
            description: 'Cinematic video content tailored for social media, YouTube, and corporate storytelling.',
            image: 'https://picsum.photos/seed/video/300/200',
            stats: { power: 'High', type: 'Vibe', impact: '210%' }
        },
        {
            title: 'Graphic Design',
            description: 'Breathtaking visuals. From event posters to complete brand identities and user interface design.',
            image: 'https://picsum.photos/seed/design/300/200',
            stats: { power: 'Mega', type: 'Aura', impact: '150%' }
        }
    ], []);

    // Width of 1 card + gap
    const cardWidth = 350; // 320 + 30 gap
    const totalWidth = baseServices.length * cardWidth;

    // Create a loop of cards (triple buffered)
    const loopedServices = [...baseServices, ...baseServices, ...baseServices];

    // Initial position in the middle set
    useEffect(() => {
        if (!isLight) {
            x.set(-totalWidth);
        }
    }, [isLight, totalWidth, x]);

    // Handle Wrapping
    useEffect(() => {
        const unsubscribe = x.onChange((currentX) => {
            if (currentX <= -totalWidth * 2) {
                x.set(currentX + totalWidth);
            } else if (currentX >= 0) {
                x.set(currentX - totalWidth);
            }
        });
        return () => unsubscribe();
    }, [totalWidth, x]);

    // Auto-scroll logic
    const startAutoScroll = useCallback(() => {
        if (isLight) return;
        controls.start({
            x: x.get() - totalWidth,
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                from: x.get()
            }
        });
    }, [controls, isLight, totalWidth, x]);

    useEffect(() => {
        if (!isInteracting && !isLight) {
            startAutoScroll();
        } else {
            controls.stop();
        }
    }, [isInteracting, isLight, controls, startAutoScroll]);

    // Manual Interaction Handlers
    const handleInteractionStart = () => {
        setIsInteracting(true);
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    const handleInteractionEnd = () => {
        timerRef.current = setTimeout(() => {
            setIsInteracting(false);
        }, 2000); // Resume after 2 seconds of idle
    };

    const handleWheel = (e) => {
        if (isLight) return;
        handleInteractionStart();
        const delta = e.deltaX || e.deltaY;
        x.set(x.get() - delta);
        handleInteractionEnd();
    };

    const shiftSlide = (direction) => {
        handleInteractionStart();
        const newX = direction === 'next' ? x.get() - cardWidth : x.get() + cardWidth;
        controls.start({
            x: newX,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        });
        handleInteractionEnd();
    }

    return (
        <section id="services" className="what-we-offer py-24 px-6 transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto relative">
                
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <Sparkles className="w-5 h-5 text-accent" />
                        <span className="font-heading text-xl uppercase tracking-widest text-accent font-semibold">
                            {isLight ? 'Our Services' : 'The Celestial Grimoire'}
                        </span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-magical text-5xl md:text-7xl section-title mb-6"
                    >
                        {isLight ? 'What We Offer' : 'Eternal Manifestations'}
                    </motion.h2>
                </div>

                {!isLight ? (
                    <div 
                        className="slider-container"
                        onWheel={handleWheel}
                        onMouseEnter={() => setIsInteracting(true)}
                        onMouseLeave={handleInteractionEnd}
                    >
                        {/* Static Navigation Buttons */}
                        <button onClick={() => shiftSlide('prev')} className="nav-arrow left !z-50">
                            <ChevronLeft size={30} />
                        </button>
                        <button onClick={() => shiftSlide('next')} className="nav-arrow right !z-50">
                            <ChevronRight size={30} />
                        </button>

                        <div className="slider-viewport" ref={containerRef}>
                            <motion.div 
                                className="slider-track"
                                style={{ x }}
                                drag="x"
                                dragConstraints={{ left: -totalWidth * 2, right: 0 }}
                                onDragStart={handleInteractionStart}
                                onDragEnd={handleInteractionEnd}
                                animate={controls}
                            >
                                {loopedServices.map((service, index) => (
                                    <SpellCard 
                                        key={index} 
                                        {...service} 
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {baseServices.map((service, index) => (
                            <LightServiceCard 
                                key={index} 
                                {...service} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default WhatWeOffer;
