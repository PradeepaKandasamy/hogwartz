import { motion, useMotionValue, useAnimationFrame, animate } from 'framer-motion';
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

const ScrollingTrack = ({ items, direction = -1, isInteracting, onInteractionStart, onInteractionEnd }) => {
    // Mobile dimensions: 260px card width + 15px gap = 275px
    const cardWidth = 275; 
    const totalWidth = items.length * cardWidth;
    const loopedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items]; 
    const x = useMotionValue(-totalWidth * 5);

    useEffect(() => {
        const unsubscribe = x.onChange((currentX) => {
            if (currentX <= -totalWidth * 6) {
                x.set(currentX + totalWidth);
            } else if (currentX >= -totalWidth * 4) {
                x.set(currentX - totalWidth);
            }
        });
        return () => unsubscribe();
    }, [totalWidth, x]);

    useAnimationFrame((time, delta) => {
        if (isInteracting) return;
        const safeDelta = Math.min(delta, 50);
        const moveBy = 0.05 * safeDelta * direction;
        x.set(x.get() + moveBy);
    });

    return (
        <div className="slider-viewport overflow-visible w-full py-2" onTouchStart={onInteractionStart} onTouchEnd={onInteractionEnd}>
            <motion.div 
                className="slider-track"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: -totalWidth * 4, right: -totalWidth * 2 }}
                onDragStart={onInteractionStart}
                onDragEnd={onInteractionEnd}
            >
                {loopedItems.map((service, index) => (
                    <SpellCard key={`${service.title}-${index}`} {...service} />
                ))}
            </motion.div>
        </div>
    );
};

const WhatWeOffer = () => {
    const { theme } = useTheme();
    const isLight = theme === 'enchanted-scroll';
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const isInteracting = isHovered || isDragging;
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const timerRef = useRef(null);
    
    // Services setup
    const baseServices = useMemo(() => isLight ? [
        {
            title: 'Website Development',
            description: 'Custom, high-performance websites and web applications built with speed and precision.',
            image: 'https://picsum.photos/seed/webdev/300/200',
            stats: { power: 'Ultra'}
        },
        {
            title: 'Digital Marketing',
            description: 'Strategic campaigns for growth. We construct targeted campaigns that attract and convert your ideal audience.',
            image: 'https://picsum.photos/seed/marketing/300/200',
            stats: { power: 'High'}
        },
        {
            title: 'Ad Campaigns',
            description: 'Targeted advertisements that reach your audience with precision and maximize ROI.',
            image: 'https://picsum.photos/seed/ads/300/200',
            stats: { power: 'High' }
        },
        {
            title: 'Video Production',
            description: 'Cinematic video content tailored for social media, YouTube, and corporate storytelling.',
            image: 'https://picsum.photos/seed/video/300/200',
            stats: { power: 'High' }
        },
        {
            title: 'Graphic Design',
            description: 'Breathtaking visuals. From event posters to complete brand identities and user interface design.',
            image: 'https://picsum.photos/seed/design/300/200',
            stats: { power: 'Mega' }
        }
    ] : [
        {
            title: 'Website Development',
            description: 'Enchanting, high-performance websites and web applications built with magical speed and precision.',
            image: 'https://picsum.photos/seed/webdev/300/200',
            stats: { power: 'Ultra'}
        },
        {
            title: 'Digital Marketing',
            description: 'Strategic spells for growth. We construct strategic campaigns that attract and convert your ideal audience.',
            image: 'https://picsum.photos/seed/marketing/300/200',
            stats: { power: 'High'}
        },
        {
            title: 'Ad Campaigns',
            description: 'Targeted advertisements that strike your audience with the accuracy of a master seeker.',
            image: 'https://picsum.photos/seed/ads/300/200',
            stats: { power: 'High' }
        },
        {
            title: 'Video Production',
            description: 'Cinematic video content tailored for social media, YouTube, and corporate storytelling.',
            image: 'https://picsum.photos/seed/video/300/200',
            stats: { power: 'High' }
        },
        {
            title: 'Graphic Design',
            description: 'Breathtaking visuals. From event posters to complete brand identities and user interface design.',
            image: 'https://picsum.photos/seed/design/300/200',
            stats: { power: 'Mega' }
        }
    ], [isLight]);

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

    // Seamless Auto-scroll using requestAnimationFrame
    useAnimationFrame((time, delta) => {
        if (isLight || isInteracting) return;
        const safeDelta = Math.min(delta, 50); // Prevent large jumps after tab change
        const moveBy = 0.05 * safeDelta; // Smooth speed
        x.set(x.get() - moveBy);
    });

    // Manual Interaction Handlers
    const handleDragStart = () => {
        setIsDragging(true);
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    const handleDragEnd = () => {
        timerRef.current = setTimeout(() => {
            setIsDragging(false);
        }, 1000); // Resume after 1 second of idle
    };

    const handleWheel = (e) => {
        if (isLight) return;
        handleDragStart();
        const delta = e.deltaX || e.deltaY;
        x.set(x.get() - delta);
        handleDragEnd();
    };

    const shiftSlide = (direction) => {
        handleDragStart();
        const newX = direction === 'next' ? x.get() - cardWidth : x.get() + cardWidth;
        animate(x, newX, { type: "spring", stiffness: 100, damping: 20 });
        handleDragEnd();
    }

    return (
        <section id="services" className={`what-we-offer relative px-6 transition-colors duration-500 overflow-hidden ${isLight ? 'pt-12 pb-20' : 'py-24'}`}>
            {/* Cinematic Background Atmosphere (Dark Theme Only) */}
            {!isLight && (
                <div className="what-we-offer-atmosphere">
                    <div className="what-we-offer-bg-gradient" />
                    <div className="magical-mist" />
                    <div className="ambient-magical-glow" />
                    
                    {/* Floating Dust Particles */}
                    {[...Array(12)].map((_, i) => (
                        <div 
                            key={i}
                            className="dust-particle"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 3 + 1}px`,
                                height: `${Math.random() * 3 + 1}px`,
                                '--duration': `${Math.random() * 10 + 10}s`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="container mx-auto relative z-10">
                <div className={`flex flex-col items-center text-center ${isLight ? 'mb-10' : 'mb-16'}`}>
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
                        className="font-magical text-[clamp(1.75rem,8vw,3rem)] md:text-7xl leading-tight section-title mb-6"
                    >
                        {isLight ? 'What We Offer' : 'Eternal Manifestations'}
                    </motion.h2>
                </div>

                {!isLight ? (
                    <>
                        {/* Desktop View: Single Track */}
                        <div 
                            className="slider-container hidden md:block"
                            onWheel={handleWheel}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
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
                                    onDragStart={handleDragStart}
                                    onDragEnd={handleDragEnd}
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

                        {/* Mobile View: Dual Alternating Tracks */}
                        <div className="md:hidden flex flex-col gap-6 w-full py-8 overflow-hidden relative">
                            <ScrollingTrack 
                                items={baseServices.slice(0, 3)} 
                                direction={-1} 
                                isInteracting={isInteracting} 
                                onInteractionStart={handleDragStart} 
                                onInteractionEnd={handleDragEnd} 
                            />
                            <ScrollingTrack 
                                items={baseServices.slice(3, 5)} 
                                direction={1} 
                                isInteracting={isInteracting} 
                                onInteractionStart={handleDragStart} 
                                onInteractionEnd={handleDragEnd} 
                            />
                        </div>
                    </>
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
