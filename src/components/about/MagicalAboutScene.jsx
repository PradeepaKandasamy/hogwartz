import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
    Float, 
    PerspectiveCamera, 
    Environment, 
    Points,
    PointMaterial,
    ContactShadows,
    Sparkles,
} from '@react-three/drei';
import * as THREE from 'three';

// --- CHESS PIECE COMPONENTS ---

// Royal Gold Material with PBR properties
const GoldMaterial = ({ isRim = false, ...props }) => (
    <meshStandardMaterial 
        color="#D4AF37" 
        metalness={1} 
        roughness={0.25}
        emissive={isRim ? "#FFD700" : "#000000"}
        emissiveIntensity={isRim ? 0.2 : 0}
        envMapIntensity={2}
        {...props}
    />
);

const Pawn = ({ isHovered, ...props }) => (
    <group {...props}>
        <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.6, 0.2, 32]} />
            <GoldMaterial isRim={isHovered} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.3, 0.4, 0.8, 32]} />
            <GoldMaterial />
        </mesh>
        <mesh position={[0, 1, 0]}>
            <sphereGeometry args={[0.35, 32, 32]} />
            <GoldMaterial />
        </mesh>
    </group>
);

const Rook = ({ isHovered, ...props }) => (
    <group {...props}>
        <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.7, 0.2, 32]} />
            <GoldMaterial isRim={isHovered} />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
            <cylinderGeometry args={[0.4, 0.5, 1.4, 32]} />
            <GoldMaterial />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.55, 0.5, 0.4, 8]} />
            <GoldMaterial />
        </mesh>
    </group>
);

const King = ({ isHovered, ...props }) => (
    <group {...props}>
        <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.6, 0.8, 0.2, 32]} />
            <GoldMaterial isRim={isHovered} />
        </mesh>
        <mesh position={[0, 1.1, 0]}>
            <cylinderGeometry args={[0.35, 0.6, 2.2, 32]} />
            <GoldMaterial />
        </mesh>
        <mesh position={[0, 2.3, 0]}>
            <boxGeometry args={[0.2, 0.6, 0.2]} />
            <GoldMaterial />
        </mesh>
        <mesh position={[0, 2.3, 0]}>
            <boxGeometry args={[0.5, 0.2, 0.2]} />
            <GoldMaterial />
        </mesh>
    </group>
);

// A special piece that will be the focus of the transition
const TransitionPiece = ({ scrollProgress, ...props }) => {
    const ref = useRef();
    
    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.getElapsedTime();
        
        // Idle animation: Extremely slow and fluid
        ref.current.rotation.y = t * 0.1;
        ref.current.position.y = Math.sin(t * 0.2) * 0.15;
        
        // Scroll transition logic
        const p = THREE.MathUtils.smoothstep(Math.min(scrollProgress / 1200, 1), 0, 1);
        
        ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, props.position[2] + p * 18, 0.04);
        ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, 0, 0.04);
        ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, 1.5 + p * 35, 0.04));
        
        // Complex flip rotation
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, p * Math.PI * 4, 0.03);
        ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, p * Math.PI * 2, 0.03);
    });

    return (
        <group ref={ref} position={props.position} scale={1.5}>
            {/* The Main Coin */}
            <mesh castShadow receiveShadow>
                <cylinderGeometry args={[1, 1, 0.25, 64]} />
                <GoldMaterial color="#E5C100" roughness={0.2} metalness={1} />
            </mesh>
            {/* Inner Ring for Detail */}
            <mesh position={[0, 0.13, 0]}>
                <cylinderGeometry args={[0.85, 0.85, 0.02, 64]} />
                <meshStandardMaterial color="#A67C00" metalness={1} roughness={0.4} />
            </mesh>
            <mesh position={[0, -0.13, 0]}>
                <cylinderGeometry args={[0.85, 0.85, 0.02, 64]} />
                <meshStandardMaterial color="#A67C00" metalness={1} roughness={0.4} />
            </mesh>
            {/* Centered H Logo or Star */}
            <mesh position={[0, 0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0, 0.6, 6]} />
                <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} emissive="#FFD700" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
};

// --- ENVIRONMENT EFFECTS ---

const DustParticles = ({ count = 600 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 60;
            p[i * 3 + 1] = (Math.random() - 0.5) * 60;
            p[i * 3 + 2] = (Math.random() - 0.5) * 60;
        }
        return p;
    }, [count]);

    const ref = useRef();
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        ref.current.rotation.y = time * 0.003;
        ref.current.position.y = Math.sin(time * 0.015) * 0.4;
    });

    return (
        <Points ref={ref} positions={points}>
            <PointMaterial
                transparent
                color="#FFD700"
                size={0.04}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.12}
            />
        </Points>
    );
};

const SceneContent = ({ scrollProgress }) => {
    const { mouse, camera } = useThree();
    const groupRef = useRef();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const mouseX = useRef(0);
    const mouseY = useRef(0);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mouseX.current = THREE.MathUtils.lerp(mouseX.current, mouse.x, 0.04);
        mouseY.current = THREE.MathUtils.lerp(mouseY.current, mouse.y, 0.04);

        const p = THREE.MathUtils.smoothstep(Math.min(scrollProgress / 1200, 1), 0, 1);

        // Cinematic camera movement
        const targetZ = THREE.MathUtils.lerp(16, 7, p);
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.035);
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseX.current * 3, 0.035);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, 2.5 + mouseY.current * 2, 0.035);
        camera.lookAt(0, 0, 0);

        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(t * 0.02) * 0.08 + mouseX.current * 0.2;
            groupRef.current.rotation.x = mouseY.current * 0.15;
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -p * 18, 0.035);
            groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, 1 - p, 0.035));
        }
    });

    const pieces = useMemo(() => [
        { Component: King, pos: [-9, 5, -12], rot: [0.2, 0.5, 0.1], scale: 1.3, speed: 0.15 },
        { Component: Pawn, pos: [10, -4, -18], rot: [-0.3, -0.2, 0.2], scale: 1.2, speed: 0.2 },
        { Component: Rook, pos: [-14, -6, -10], rot: [0.5, 1.2, -0.3], scale: 1.1, speed: 0.1 },
        { Component: Pawn, pos: [14, 7, -14], rot: [-0.1, 0.4, 0.5], scale: 1.2, speed: 0.25 },
        { Component: King, pos: [0, -8, -25], rot: [0, 0, 0], scale: 1.5, speed: 0.1 },
    ], []);

    return (
        <>
            {/* 3-POINT LIGHTING SYSTEM */}
            {/* 1. KEY LIGHT: Main golden focus */}
            <spotLight 
                position={[20, 20, 20]} 
                angle={0.4} 
                penumbra={1} 
                intensity={4} 
                color="#FFD700" 
                castShadow 
                shadow-mapSize={[1024, 1024]}
            />
            
            {/* 2. RIM LIGHT: Backlight for edge glow */}
            <directionalLight 
                position={[-10, 10, -20]} 
                intensity={3} 
                color="#FFFFFF" 
            />
            <pointLight 
                position={[0, 0, -10]} 
                intensity={2} 
                color="#8B5CF6" 
            />

            {/* 3. AMBIENT LIGHT: Soft base visibility */}
            <ambientLight intensity={0.25} />
            <hemisphereLight intensity={0.5} color="#8B5CF6" groundColor="#000000" />
            
            <group ref={groupRef}>
                {pieces.map((piece, i) => (
                    <Float 
                        key={i}
                        speed={piece.speed} 
                        rotationIntensity={1.5} 
                        floatIntensity={1.5}
                    >
                        <piece.Component 
                            position={piece.pos} 
                            rotation={piece.rot} 
                            scale={piece.scale} 
                            isHovered={hoveredIndex === i}
                            onPointerOver={() => setHoveredIndex(i)}
                            onPointerOut={() => setHoveredIndex(null)}
                        />
                    </Float>
                ))}
            </group>

            <TransitionPiece position={[0, 0, -8]} scrollProgress={scrollProgress} />

            <DustParticles count={700} />
            <Sparkles count={80} scale={45} size={3} speed={0.1} color="#FFD700" opacity={0.4} />
            
            <ContactShadows 
                position={[0, -15, 0]} 
                opacity={0.2} 
                scale={60} 
                blur={4} 
                far={30} 
                color="#000000" 
            />

            {/* Fog increases depth behind coins */}
            <fog attach="fog" args={['#020205', 10, 55]} />
        </>
    );
};

const MagicalAboutScene = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let rafId;
        const handleScroll = () => {
            rafId = requestAnimationFrame(() => {
                setScrollProgress(window.scrollY);
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-[#020205]">
            <Canvas
                shadows
                dpr={[1, 2]}
                gl={{ 
                    antialias: true, 
                    stencil: false, 
                    depth: true,
                    powerPreference: "high-performance",
                    alpha: false
                }}
            >
                <color attach="background" args={['#020205']} />
                
                <Suspense fallback={null}>
                    <SceneContent scrollProgress={scrollProgress} />
                    {/* Using high-quality environment for metallic reflections */}
                    <Environment preset="night" />
                </Suspense>

                <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={45} />
            </Canvas>

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 pointer-events-none z-10 will-change-transform">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-[#020205]/40 opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
            </div>
        </div>
    );
};

export default MagicalAboutScene;
