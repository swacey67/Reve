import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tumbler from '../components/Tumbler';

export default function Collab() {
  const navigate = useNavigate();
  
  const getAssetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh] animate-fade-in-up mt-6 md:mt-0 px-4">
      <button 
        onClick={() => navigate('/needs')} 
        className="absolute left-4 md:left-0 -top-4 md:-top-8 text-[#F5F4EF]/70 hover:text-[#F5F4EF] transition-colors flex items-center gap-2 font-sans text-sm uppercase tracking-widest z-20"
      >
        <span>←</span> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-24 w-full mt-12 md:mt-0">
        
        {/* JUJUTSU KAISEN */}
        <div className="flex flex-col items-center group cursor-pointer" onClick={() => navigate('/collab/jjk')}>
          <div className="scale-110 mb-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-4">
            <Tumbler 
              patternId="jjkPattern" 
              imageSrc={getAssetPath('images/jjk.jpg')} 
              handleColor="#111111" 
              headColor="#901A1E" 
              lidBaseColor="#1A3E8A" 
              isStatic={true} 
              delay={100} 
            />
          </div>
          <p className="font-sans font-bold text-[#F5F4EF] text-sm md:text-[1.05rem] tracking-wide transition-colors group-hover:text-white">
            Poignée X Jujutsu Kaisen
          </p>
          <p className="font-sans text-[#F5F4EF]/70 text-sm mt-1">Rp 590.000</p>
        </div>

        {/* VAGABOND */}
        <div className="flex flex-col items-center group cursor-pointer" onClick={() => navigate('/collab/vagabond')}>
          <div className="scale-110 mb-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-4">
            <Tumbler 
              patternId="vagabondPattern" 
              imageSrc={getAssetPath('images/vagabond.jpg')} 
              handleColor="#F5F5F5" 
              headColor="#E0E0E0" 
              isStatic={true} 
              delay={250} 
            />
          </div>
          <p className="font-sans font-bold text-[#F5F4EF] text-sm md:text-[1.05rem] tracking-wide transition-colors group-hover:text-white">
            Poignée X Vagabond
          </p>
          <p className="font-sans text-[#F5F4EF]/70 text-sm mt-1">Rp 590.000</p>
        </div>

        {/* CHAINSAW MAN */}
        <div className="flex flex-col items-center group cursor-pointer" onClick={() => navigate('/collab/chainsaw')}>
          <div className="scale-110 mb-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-4">
            <Tumbler 
              patternId="collabPattern" 
              imageSrc={getAssetPath('images/chainsaw.jpg')} 
              handleColor="#1E195E" 
              headColor="#1E195E" 
              lidBaseColor="#1A3E8A" 
              isStatic={true} 
              delay={400} 
            />
          </div>
          <p className="font-sans font-bold text-[#F5F4EF] text-sm md:text-[1.05rem] tracking-wide transition-colors group-hover:text-white">
            Poignée X Chainsaw Man
          </p>
          <p className="font-sans text-[#F5F4EF]/70 text-sm mt-1">Rp 590.000</p>
        </div>

      </div>
    </div>
  );
}