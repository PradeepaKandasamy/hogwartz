import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const MagicCursor = () => {
    const { theme } = useTheme();
    const isLight = theme === 'enchanted-scroll';

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // 1. Store precise mouse targets without triggering React re-renders
    const mouse = useRef({ x: -100, y: -100 });
    
    // 2. Framer Motion values for the interpolated rendering
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // 3. Cinematic spring configuration to naturally smooth out the jitter
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const sparklesContainerRef = useRef(null);
    const lastEmitRef = useRef(0);

    // --- High Performance Sparkle Generator (Bypasses React DOM diffing) ---
    const spawnSparkle = (x, y, hoverState) => {
        if (!sparklesContainerRef.current) return;
        
        const now = Date.now();
        // Emit more frequently on hover (vibration intensity increases particle emission)
        if (now - lastEmitRef.current < (hoverState ? 25 : 60)) return;
        lastEmitRef.current = now;

        const particle = document.createElement('div');
        
        // Spread particles around the jittery cursor
        const emitX = x + (Math.random() - 0.5) * (hoverState ? 20 : 10);
        const emitY = y + (Math.random() - 0.5) * (hoverState ? 20 : 10);
        
        const size = isLight 
            ? Math.random() * 3 + 2 
            : Math.random() * 2 + 1.5;

        const color = isLight 
            ? ["#C9A84C", "#1E293B"][Math.floor(Math.random() * 2)]
            : ["#FFD966", "#FFFFFF", "#E8C96D"][Math.floor(Math.random() * 3)];

        particle.style.position = 'absolute';
        particle.style.left = `${emitX}px`;
        particle.style.top = `${emitY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 2.5}px ${color}`;
        particle.style.transform = `translate(-50%, -50%) rotate(45deg)`;
        particle.style.borderRadius = '2px';
        particle.style.pointerEvents = 'none';

        // Animate out smoothly floating upwards and outwards
        const animation = particle.animate([
            { opacity: hoverState ? 1 : 0.8, transform: `translate(-50%, -50%) rotate(45deg) scale(1)` },
            { 
                opacity: 0, 
                transform: `translate(calc(-50% + ${(Math.random() - 0.5) * 60}px), calc(-50% - ${Math.random() * 50 + 20}px)) rotate(${45 + 180}deg) scale(${Math.random() * 1.5 + 0.1})`
            }
        ], {
            duration: isLight ? 900 : 700,
            easing: 'ease-out',
        });

        sparklesContainerRef.current.appendChild(particle);

        animation.onfinish = () => {
            particle.remove();
        };
    };

    // --- Main render loop using requestAnimationFrame ---
    useEffect(() => {
        let frameId;

        const renderLoop = () => {
            // --- MAGICAL VIBRATION / JITTER LOGIC ---
            // The jitter range is 1.5px normally, and 3px when hovering.
            const jitterStrength = isHovering ? 3 : 1.5;
            
            // Generate spontaneous random vibration offsets at 60fps
            const jitterX = (Math.random() - 0.5) * 2 * jitterStrength;
            const jitterY = (Math.random() - 0.5) * 2 * jitterStrength;
            
            // The Framer Motion `spring` values mathematically absorb this 60fps noise,
            // resulting in a visually "alive" and smoothly vibrating wand tip 
            // without glitchy teleports.
            cursorX.set(mouse.current.x + jitterX);
            cursorY.set(mouse.current.y + jitterY);
            
            // Constantly emit ambient sparkles around the vibrating origin
            spawnSparkle(mouse.current.x + jitterX, mouse.current.y + jitterY, isHovering);

            frameId = requestAnimationFrame(renderLoop);
        };

        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, .interactive-card, input, textarea, [role="button"], .interactive-element, [tabindex="0"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseOut = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseOut);
        document.addEventListener('mouseenter', handleMouseEnter);

        frameId = requestAnimationFrame(renderLoop);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseOut);
            document.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(frameId);
        };
    }, [cursorX, cursorY, isVisible, isHovering, isLight]);

    // Disable on touch devices
    if (typeof window !== 'undefined' && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches)) return null;

    return (
        <div 
            className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
        >
            {/* Raw DOM container for highly performant vibrating particles */}
            <div ref={sparklesContainerRef} className="absolute inset-0" />

            {/* The Vibrating Magical Cursor Assembly */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    scale: isHovering ? 1.4 : 1, 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex items-center justify-center -mt-[2px] -ml-[2px]" 
            >
                {isLight ? (
                    <>
                        {/* Light Theme Enhanced Glow */}
                        <div
                            className="h-[28px] w-[28px] rounded-full border-2 transition-all duration-300"
                            style={{
                                borderColor: "#1E293B",
                                boxShadow: `0 0 ${isHovering ? '25px' : '10px'} rgba(201,168,76,0.4)`
                            }}
                        />
                        <div
                            className="absolute h-[6px] w-[6px] rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: isHovering ? "#FFFFFF" : "#C9A84C",
                                boxShadow: `0 0 ${isHovering ? '15px' : '10px'} ${isHovering ? '#FFFFFF' : '#C9A84C'}`
                            }}
                        />
                    </>
                ) : (
                    /* Dark Theme Magical Wand with intense tip glow */
                    <div 
                        className="absolute"
                        style={{
                            top: '50%',
                            left: '50%',
                            width: '3px',
                            height: '32px', 
                            backgroundColor: '#C9A84C', 
                            transformOrigin: 'top center',
                            transform: 'translate(-50%, 0) rotate(-25deg)', 
                            boxShadow: isHovering 
                                ? 'inset 0 0 8px #FFF, 0 0 16px rgba(255,255,255,0.9)'
                                : 'inset 0 0 4px #E8C96D, 0 0 6px rgba(201,168,76,0.6)',
                            borderRadius: '3px',
                            transition: 'box-shadow 0.4s ease'
                        }}
                    >
                        {/* Vibrating Energy Tip */}
                        <div 
                            className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full"
                            style={{
                                backgroundColor: isHovering ? '#FFF' : '#FFD966',
                                boxShadow: isHovering 
                                    ? '0 0 20px 6px #FFF, 0 0 35px 12px rgba(255,255,255,0.8)' 
                                    : '0 0 10px 2px #FFD966, 0 0 15px 4px rgba(255,217,102,0.4)',
                                transition: 'box-shadow 0.4s ease, background-color 0.4s ease'
                            }}
                        />
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default MagicCursor;
