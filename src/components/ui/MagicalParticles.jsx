import { motion } from 'framer-motion';

const MagicalParticles = () => {
    // Generate 20-30 random particles
    const particles = [...Array(25)];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent/40 rounded-full blur-[1px]"
                    initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: Math.random() * 100 + "%", 
                        opacity: 0,
                        scale: Math.random() * 0.5 + 0.5
                    }}
                    animate={{ 
                        y: [null, "-100vh"],
                        x: [null, (Math.random() - 0.5) * 100 + "px"],
                        opacity: [0, 0.8, 0],
                        scale: [null, Math.random() * 1.5 + 0.5]
                    }}
                    transition={{ 
                        duration: Math.random() * 15 + 10, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: Math.random() * 20
                    }}
                />
            ))}
        </div>
    );
};

export default MagicalParticles;
