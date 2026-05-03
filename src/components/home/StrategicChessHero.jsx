import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
    Float, 
    Environment, 
    PerspectiveCamera, 
    Sparkles, 
    ContactShadows,
    Text,
    OrbitControls,
    useScroll
} from '@react-three/drei';
import * as THREE from 'three';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './StrategicChessHero.css';

// --- CHESS PIECE GEOMETRY FACTORIES (pure functions, no hooks) ---

const makePawnGeometry = () => {
    const points = [];
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.6, 0.1));
    points.push(new THREE.Vector2(0.5, 0.4));
    points.push(new THREE.Vector2(0.3, 0.5));
    points.push(new THREE.Vector2(0.3, 1.2));
    points.push(new THREE.Vector2(0.5, 1.4));
    points.push(new THREE.Vector2(0.5, 1.6));
    points.push(new THREE.Vector2(0.4, 1.8));
    points.push(new THREE.Vector2(0.3, 1.9));
    points.push(new THREE.Vector2(0, 2.0));
    return new THREE.LatheGeometry(points, 32);
};

const makeRookGeometry = () => {
    const points = [];
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.7, 0.1));
    points.push(new THREE.Vector2(0.6, 0.4));
    points.push(new THREE.Vector2(0.45, 0.5));
    points.push(new THREE.Vector2(0.45, 1.8));
    points.push(new THREE.Vector2(0.7, 1.9));
    points.push(new THREE.Vector2(0.7, 2.3));
    points.push(new THREE.Vector2(0, 2.3));
    return new THREE.LatheGeometry(points, 32);
};

const makeQueenGeometry = () => {
    const points = [];
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.8, 0.1));
    points.push(new THREE.Vector2(0.7, 0.4));
    points.push(new THREE.Vector2(0.4, 0.5));
    points.push(new THREE.Vector2(0.4, 2.5));
    points.push(new THREE.Vector2(0.8, 2.8));
    points.push(new THREE.Vector2(0.6, 3.0));
    points.push(new THREE.Vector2(0.2, 3.2));
    points.push(new THREE.Vector2(0, 3.3));
    return new THREE.LatheGeometry(points, 32);
};

const makeKnightGeometry = () => {
    const points = [];
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.7, 0.1));
    points.push(new THREE.Vector2(0.6, 0.4));
    points.push(new THREE.Vector2(0.4, 0.5));
    points.push(new THREE.Vector2(0.5, 1.5));
    points.push(new THREE.Vector2(0.8, 2.2));
    points.push(new THREE.Vector2(0.4, 2.4));
    points.push(new THREE.Vector2(0, 2.5));
    return new THREE.LatheGeometry(points, 12);
};

// --- FALLING PIECE COMPONENT ---

const FallingPiece = ({ type, position, rotationSpeed, scale = 1, speed = 1 }) => {
    const meshRef = useRef();
    
    // Randomize initial rotation
    const initialRot = useMemo(() => [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
    ], []);

    const geometry = useMemo(() => {
        switch(type) {
            case 'rook':   return makeRookGeometry();
            case 'queen':  return makeQueenGeometry();
            case 'knight': return makeKnightGeometry();
            default:       return makePawnGeometry();
        }
    }, [type]);

    useFrame((state, delta) => {
        if (!meshRef.current) return;
        
        // Falling motion
        meshRef.current.position.y -= speed * delta;
        
        // Continuous rotation
        meshRef.current.rotation.x += rotationSpeed[0] * delta;
        meshRef.current.rotation.y += rotationSpeed[1] * delta;
        meshRef.current.rotation.z += rotationSpeed[2] * delta;

        // Reset if it goes too far down
        if (meshRef.current.position.y < -15) {
            meshRef.current.position.y = 15;
            meshRef.current.position.x = (Math.random() - 0.5) * 30;
            meshRef.current.position.z = (Math.random() - 0.5) * 20 - 10;
        }
    });

    return (
        <mesh 
            ref={meshRef} 
            position={position} 
            rotation={initialRot}
            scale={scale}
            geometry={geometry}
        >
            <meshStandardMaterial 
                color="#222" 
                metalness={0.9} 
                roughness={0.2}
                emissive="#1a1a2e"
                emissiveIntensity={0.2}
            />
        </mesh>
    );
};

// --- SCENE ELEMENTS ---

const Scene = () => {
    const pieces = useMemo(() => {
        const types = ['pawn', 'rook', 'queen', 'knight'];
        return Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            type: types[i % types.length],
            position: [
                (Math.random() - 0.5) * 40,
                Math.random() * 30 - 5,
                (Math.random() - 0.5) * 20 - 10
            ],
            rotationSpeed: [
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.8,
                (Math.random() - 0.5) * 0.4
            ],
            scale: Math.random() * 0.5 + 0.8,
            speed: Math.random() * 0.5 + 0.5
        }));
    }, []);

    const { mouse } = useThree();
    const cameraRef = useRef();

    useFrame((state) => {
        // Subtle camera movement based on mouse
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 2, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.y * 2 + 2, 0.05);
        state.camera.lookAt(0, 0, -5);
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={50} />
            
            {/* Lighting */}
            <ambientLight intensity={0.2} />
            <spotLight 
                position={[10, 20, 10]} 
                angle={0.15} 
                penumbra={1} 
                intensity={2} 
                castShadow 
                color="#8B5CF6" // Purple magical light
            />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#3B82F6" />
            <pointLight position={[0, 10, 5]} intensity={1.5} color="#ffffff" />
            
            {/* Environment & Atmosphere */}
            <fog attach="fog" args={['#050505', 10, 35]} />
            <Environment preset="night" />
            
            {/* Particles */}
            <Sparkles 
                count={100} 
                scale={20} 
                size={2} 
                speed={0.3} 
                opacity={0.3} 
                color="#A855F7" 
            />
            
            {/* Chess Pieces */}
            {pieces.map(piece => (
                <FallingPiece key={piece.id} {...piece} />
            ))}

            <ContactShadows 
                position={[0, -10, 0]} 
                opacity={0.4} 
                scale={40} 
                blur={2} 
                far={15} 
                color="#000000" 
            />
        </>
    );
};

// --- FINAL COMPONENT ---

const StrategicChessHero = () => {
    return (
        <section className="strategic-hero-container">
            <div className="strategic-canvas-wrapper">
                <Canvas shadows dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>

            <div className="strategic-overlay">
                <div className="strategic-content">
                    <p className="strategic-subtext">Every move matters in the digital world</p>
                    <h1 className="strategic-heading">
                        We Don’t Just Build —<br />
                        We Strategize
                    </h1>
                    
                    <div className="flex justify-center mt-8">
                        <NavLink to="/projects" className="strategic-cta group">
                            <span className="strategic-cta-text">Explore Our Work</span>
                            <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="strategic-fog" />
            
            <div className="scroll-indicator">
                <div className="mouse-icon" />
            </div>
        </section>
    );
};

export default StrategicChessHero;
