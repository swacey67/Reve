import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tumbler from '../components/Tumbler';
import { COLLAB_DATA } from '../data';

export default function CollabDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedCollab = COLLAB_DATA[id];
  const [checkoutStatus, setCheckoutStatus] = useState('idle');

  useEffect(() => { setCheckoutStatus('idle'); }, [id]);

  if (!selectedCollab) return null;

  const handleCheckout = () => {
    if (checkoutStatus === 'success') return;
    setCheckoutStatus('processing');
    setTimeout(() => setCheckoutStatus('success'), 1500);
  };

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-12 md:gap-24 animate-fade-in-up mt-6 md:mt-0 px-4">
      <button onClick={() => navigate('/collab')} className="absolute left-4 md:left-0 -top-4 md:-top-8 text-[#F5F4EF]/70 hover:text-[#F5F4EF] transition-colors flex items-center gap-2 font-sans text-sm uppercase tracking-widest z-20">
        <span>←</span> Back
      </button>

      <div className="relative flex flex-col items-center justify-center w-full md:w-1/2">
        <div className="scale-125 md:scale-150 origin-center drop-shadow-2xl mt-12 md:mt-0">
          <Tumbler {...selectedCollab.props} isStatic={true} delay={0} />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 mt-8 md:mt-0">
        <h2 className="font-sans-custom font-extrabold text-4xl md:text-5xl text-[#F5F4EF] mb-2 tracking-tight">{selectedCollab.title}</h2>
        
        {/* Tambahan Harga Collab */}
        <p className="text-[#F5F4EF]/90 font-sans text-xl mb-6">{selectedCollab.price}</p>
        
        <p className="text-[#F5F4EF]/70 font-sans text-sm md:text-[0.95rem] leading-relaxed mb-6 font-light max-w-lg">{selectedCollab.description}</p>
        <p className="text-[#F5F4EF] font-sans text-sm md:text-base font-semibold leading-relaxed mb-10 max-w-xs">Stainless Steel 900 ML tumbler with hand grip that has a durability of up to 24 hours.</p>

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