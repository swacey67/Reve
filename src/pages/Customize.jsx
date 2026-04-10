import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tumbler from '../components/Tumbler';
import { PALETTE } from '../data';

export default function Customize() {
  const navigate = useNavigate();
  const [customColors, setCustomColors] = useState({ top: '#A5C4E1', bottom: '#C1C099', handle: '#D19C4C', head: '#C65D5B' });
  const [activePart, setActivePart] = useState('top');
  const [isExploded, setIsExploded] = useState(true);
  const [checkoutStatus, setCheckoutStatus] = useState('idle');

  const handleCheckout = () => {
    if (checkoutStatus === 'success') return;
    setCheckoutStatus('processing');
    setTimeout(() => setCheckoutStatus('success'), 1500);
  };

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-12 md:gap-32 animate-fade-in-up mt-6 md:mt-0 px-4">
      <button onClick={() => navigate('/needs')} className="absolute left-4 md:left-0 -top-4 md:-top-8 text-[#F5F4EF]/70 hover:text-[#F5F4EF] transition-colors flex items-center gap-2 font-sans text-sm uppercase tracking-widest z-20">
        <span>←</span> Back
      </button>

      <div className="relative flex flex-col items-center">
        <div className="scale-125 md:scale-150 mb-8 md:mb-12 origin-center mt-12 md:mt-0 drop-shadow-2xl">
          <Tumbler topColor={customColors.top} bottomColor={customColors.bottom} handleColor={customColors.handle} headColor={customColors.head} isStatic={true} delay={0} isExploded={isExploded} activePart={activePart} onPartClick={setActivePart} />
        </div>
        <button onClick={() => setIsExploded(!isExploded)} className="mt-6 md:mt-16 text-[#F5F4EF]/70 hover:text-white text-xs md:text-sm tracking-widest uppercase font-sans border-b border-[#F5F4EF]/30 pb-1 transition-all">
          {isExploded ? 'Assemble View' : 'Explode View'}
        </button>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
        <h2 className="font-sans-custom font-extrabold text-5xl md:text-6xl text-[#F5F4EF] mb-2 lowercase tracking-tight">poignée</h2>
        
        {/* Tambahan Harga Customize */}
        <p className="text-[#F5F4EF]/90 font-sans text-xl mb-6">Rp 449.000</p>

        <div className="flex gap-3 md:gap-4 mb-6 text-xs md:text-sm font-sans uppercase tracking-wider text-[#F5F4EF]/60">
          {['top', 'bottom', 'handle', 'head'].map(part => (
            <button key={part} onClick={() => setActivePart(part)} className={`pb-1 border-b-2 transition-colors ${activePart === part ? 'border-white text-white' : 'border-transparent hover:text-[#F5F4EF]/90'}`}>{part}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
          {PALETTE.map(color => (
            <button key={color} onClick={() => setCustomColors(prev => ({ ...prev, [activePart]: color }))} className="w-10 h-10 md:w-12 md:h-12 rounded-sm shadow-sm transition-transform hover:scale-110 border border-black/10 focus:outline-none focus:ring-2 focus:ring-white/50" style={{ backgroundColor: color }} aria-label={`Select color ${color}`} />
          ))}
        </div>
        <p className="max-w-xs text-[#F5F4EF]/90 font-sans text-sm md:text-base leading-relaxed mb-8">Stainless Steel 900 ML tumbler with hand grip that has a durability of up to 24 hours.</p>
        <div className="w-full flex flex-col items-center md:items-start">
          <button onClick={handleCheckout} disabled={checkoutStatus !== 'idle'} className={`font-bold font-sans tracking-widest text-sm md:text-base px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 ${checkoutStatus === 'idle' ? 'bg-[#EFEFEA] text-[#112316] hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]' : checkoutStatus === 'processing' ? 'bg-[#EFEFEA]/80 text-[#112316]/70 cursor-wait' : 'bg-green-600 text-white cursor-default'}`}>
            {checkoutStatus === 'idle' && 'CHECK OUT'}
            {checkoutStatus === 'processing' && 'PROCESSING...'}
            {checkoutStatus === 'success' && '✓ PURCHASED'}
          </button>
          {checkoutStatus === 'success' && <p className="text-green-300 font-sans text-sm mt-3 text-center md:text-left animate-fade-in-up">Thank you for your order! Your tumbler is on its way.</p>}
        </div>
      </div>
    </div>
  );
}