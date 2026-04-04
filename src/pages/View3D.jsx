import React, { Suspense } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// --- ERROR BOUNDARY (Pencegah Layar Blank Putih) ---
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: '' };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error.message };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/90 text-white p-8 z-[9999] text-center">
          <h2 className="text-3xl font-bold mb-4">Engine 3D Gagal Memuat 🚨</h2>
          <p className="font-mono bg-black/50 p-4 rounded mb-4 max-w-xl">{this.state.errorMsg}</p>
          <p>Tolong periksa console F12 untuk detail lebih lanjut.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- KOMPONEN BANTUAN 3D ---
const PatternBody = ({ url }) => {
  const texture = useTexture(url);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.set(-1, 1); 
  
  return (
    <mesh>
      <cylinderGeometry args={[0.9, 0.78, 2.2, 64]} />
      <meshStandardMaterial map={texture} roughness={0.4} />
    </mesh>
  );
};

const ColorBody = ({ color }) => {
  return (
    <mesh>
      <cylinderGeometry args={[0.9, 0.78, 2.2, 64]} />
      <meshStandardMaterial color={color} roughness={0.2} />
    </mesh>
  );
};

const Tumbler3DModel = ({ fillTop, fillBottom, fillHandle, fillHead, lidBaseColor, patternId }) => {
  const patternMap = {
    'collabPattern': '/images/chainsaw.jpg',
    'jjkPattern': '/images/jjk.jpg',
    'vagabondPattern': '/images/vagabond.jpg',
  };

  return (
    <group position={[0, -0.8, 0]} scale={1.2}>
      {/* --- HANDLE / GAGANG --- */}
      <group>
        <mesh position={[1.1, 1.0, 0]}>
          <boxGeometry args={[0.6, 0.15, 0.2]} />
          <meshStandardMaterial color={fillHandle} roughness={0.3} />
        </mesh>
        <mesh position={[1.325, 0.425, 0]}>
          <boxGeometry args={[0.15, 1.3, 0.2]} />
          <meshStandardMaterial color={fillHandle} roughness={0.3} />
        </mesh>
        <mesh position={[1.1, -0.15, 0]}>
          <boxGeometry args={[0.6, 0.15, 0.2]} />
          <meshStandardMaterial color={fillHandle} roughness={0.3} />
        </mesh>
      </group>

      {/* --- TOP BODY --- */}
      <group position={[0, 0.8, 0]}>
        {patternId && patternMap[patternId] ? (
          <PatternBody url={patternMap[patternId]} />
        ) : (
          <ColorBody color={fillTop} />
        )}
      </group>

      {/* --- BOTTOM BODY --- */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.75, 0.65, 0.8, 64]} />
        <meshStandardMaterial color={fillBottom} roughness={0.2} />
      </mesh>

      {/* --- LID / TUTUP --- */}
      <group position={[0, 1.9, 0]}>
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.92, 0.92, 0.1, 64]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 0.3, 64]} />
          <meshPhysicalMaterial color="#ffffff" transmission={0.9} opacity={1} transparent roughness={0.1} thickness={0.1} />
        </mesh>
        <mesh position={[0, 0.42, 0]}>
          <boxGeometry args={[0.8, 0.05, 0.2]} />
          <meshStandardMaterial color={lidBaseColor || "#E5E7EB"} />
        </mesh>
        <mesh position={[0.2, 0.48, 0]}>
          <boxGeometry args={[0.2, 0.08, 0.1]} />
          <meshStandardMaterial color={fillHead} roughness={0.5} />
        </mesh>
      </group>
    </group>
  );
};

export default function View3D() {
  const navigate = useNavigate();
  const location = useLocation();
  const tumblerData = location.state;

  // Jika diakses langsung tanpa data (misal refresh manual), kembalikan ke home
  if (!tumblerData) {
    return <Navigate to="/" />;
  }

  return (
    <div className="fixed inset-0 w-full h-full z-50 bg-[#8c9fad] flex flex-col items-center justify-center animate-fade-in-up overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#a1b1c3] to-[#8c9fad]"></div>
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay z-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/80 hover:text-white font-sans text-sm tracking-widest uppercase transition-colors"
        >
          <span>←</span> Back to Product
        </button>

        <h1 className="text-white/90 font-sans-custom font-extrabold text-2xl tracking-tight hidden sm:block">
          {tumblerData.title || "3D Interactive View"}
        </h1>
        
        <div className="w-20"></div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60 font-sans text-sm tracking-widest uppercase animate-pulse text-center pointer-events-none">
        Drag to rotate <br/> Scroll to zoom
      </div>

      {/* Teks loading selama Canvas memuat data 3D */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
         <span className="text-sm font-sans font-bold text-white/80 tracking-widest animate-pulse">LOADING 3D ENGINE...</span>
      </div>

      <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
        <ErrorBoundary>
          <Canvas camera={{ position: [0, 0, 7.5], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />
            <directionalLight position={[-10, 10, -10]} intensity={0.5} />
            <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={0.6} />
            
            <Suspense fallback={null}>
              <Tumbler3DModel 
                fillTop={tumblerData.topColor || tumblerData.color || '#F4F4F4'} 
                fillBottom={tumblerData.bottomColor || tumblerData.color || '#F4F4F4'} 
                fillHandle={tumblerData.handleColor || tumblerData.color || '#F4F4F4'} 
                fillHead={tumblerData.headColor || (tumblerData.isDark ? "#111111" : "#9CA3AF")} 
                lidBaseColor={tumblerData.lidBaseColor} 
                patternId={tumblerData.patternId}
              />
              <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={15} blur={2.5} far={4.5} />
            </Suspense>

            <OrbitControls enableZoom={true} enablePan={false} autoRotate={true} autoRotateSpeed={1.5} maxDistance={12} minDistance={4} />
          </Canvas>
        </ErrorBoundary>
      </div>

    </div>
  );
}