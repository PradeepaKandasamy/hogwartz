import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './AntiqueFrame.css';

const CornerOrnament = ({ className }) => (
  <svg 
    className={`corner-ornament ${className}`} 
    viewBox="0 0 100 100" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M10 10C10 10 25 5 40 15C55 25 45 45 30 40C15 35 20 15 40 10C60 5 85 20 90 50C95 80 70 95 40 90C10 85 5 60 15 40" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M20 20C20 20 30 15 40 20C50 25 45 35 35 33C25 31 25 20 40 18" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <circle cx="10" cy="10" r="3" fill="currentColor" />
    <path d="M10 90L10 10L90 10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
  </svg>
);

const DustParticle = ({ index }) => {
  const [position, setPosition] = useState({ 
    top: `${Math.random() * 100}%`, 
    left: `${Math.random() * 100}%`,
    duration: 5 + Math.random() * 10,
    delay: -Math.random() * 10
  });

  return (
    <motion.div
      className="dust"
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: [0, -50, -100], 
        x: [0, 10, -10],
        opacity: [0, 0.4, 0] 
      }}
      transition={{ 
        duration: position.duration, 
        repeat: Infinity, 
        delay: position.delay,
        ease: "linear"
      }}
      style={{
        top: position.top,
        left: position.left,
      }}
    />
  );
};

const AntiqueFrame = ({ 
  src, 
  alt = "Portrait", 
  width = "300px", 
  height = "400px",
  className = "" 
}) => {
  const containerRef = useRef(null);
  
  // Mouse Position for 3D Tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div 
      className={`antique-frame-container ${className}`}
      style={{ width, height }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Magical Aura */}
      <div className="magical-aura" />
      
      <motion.div 
        className="antique-frame-outer"
        style={{ rotateX, rotateY, width: '100%', height: '100%' }}
      >
        <div className="gold-shine" />
        
        {/* Corner Ornaments */}
        <CornerOrnament className="top-left" />
        <CornerOrnament className="top-right" />
        <CornerOrnament className="bottom-left" />
        <CornerOrnament className="bottom-right" />

        <div className="antique-frame-inner" style={{ height: 'calc(100% - 70px)', width: 'calc(100% - 70px)', position: 'absolute', top: '35px', left: '35px' }}>
          <div className="portrait-wrapper">
            <img 
              src={src} 
              alt={alt} 
              className="portrait-image" 
            />
            
            {/* Dust particles inside the frame */}
            <div className="dust-container">
              {[...Array(20)].map((_, i) => (
                <DustParticle key={i} index={i} />
              ))}
            </div>

            {/* Subtle light flicker effect on hover */}
            <div className="vintage-flicker" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AntiqueFrame;
