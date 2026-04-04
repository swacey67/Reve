import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tumbler from '../components/Tumbler';
import { STOCK_DATA } from '../data';

export default function StockDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedStock = STOCK_DATA[id];
  const [checkoutStatus, setCheckoutStatus] = useState('idle');

  useEffect(() => { setCheckoutStatus('idle'); }, [id]);

  if (!selectedStock) return null;

  const handleCheckout = () => {
    if (checkoutStatus === 'success') return;
    setCheckoutStatus('processing');
    setTimeout(() => setCheckoutStatus('success'), 1500);
  };

  const handle3DClick = () => {
    navigate('/3d-view', { 
      state: { 
        title: selectedStock.title,
        color: selectedStock.color,
        isDark: selectedStock.isDark 
      } 
    });
  };

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-12 md:gap-20 animate-fade-in-up mt-6 md:mt-0 px-4">
      <button onClick={() => navigate('/stock')} className="absolute left-4 md:left-0 -top-4 md:-top-8 text-[#F5F4EF]/70 hover:text-[#F5F4EF] transition-colors flex items-center gap-2 font-sans text-sm uppercase tracking-widest z-20">
        <span>←</span> Back
      </button>

      <div className="relative flex flex-col items-center justify-center w-full md:w-1/2">
        {/* Tombol 3D Digeser Jauh ke Atas (-top-24 / -top-32) dan z-index ditinggikan */}
        <button 
          onClick={handle3DClick}
          className="absolute -top-24 md:-top-32 px-5 py-2.5 text-xs font-bold tracking-widest font-sans border rounded-full transition-all z-[60] shadow-xl flex items-center gap-2 bg-white/90 text-[#112316] border-black/10 hover:bg-white hover:scale-105"
        >
          👁 VIEW IN 3D
        </button>

        <div className="scale-125 md:scale-150 origin-center drop-shadow-2xl mt-12 md:mt-0">
          <Tumbler color={selectedStock.color} isDark={selectedStock.isDark} isStatic={true} delay={0} />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 mt-8 md:mt-0 max-w-md">
        <h2 className="font-sans-custom font-extrabold text-4xl md:text-5xl text-[#F5F4EF] mb-2 tracking-tight">{selectedStock.title}</h2>
        <p className="text-[#F5F4EF]/90 font-sans text-xl mb-6">{selectedStock.price}</p>
        <p className="text-[#F5F4EF]/70 font-sans text-sm md:text-[0.95rem] leading-relaxed mb-8 font-light">
          {selectedStock.description}<br/><br/>Stainless 900 ML tumbler with hand grip that has a durability of up to 24 hours.
        </p>

        <div className="w-full mb-10 pb-10 border-b border-[#F5F4EF]/20">
          <button onClick={handleCheckout} disabled={checkoutStatus !== 'idle'} className={`w-full font-bold font-sans tracking-widest text-sm md:text-base px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 ${checkoutStatus === 'idle' ? 'bg-[#EFEFEA] text-[#112316] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]' : checkoutStatus === 'processing' ? 'bg-[#EFEFEA]/80 text-[#112316]/70 cursor-wait' : 'bg-green-600 text-white cursor-default'}`}>
            {checkoutStatus === 'idle' && 'CHECK OUT'}
            {checkoutStatus === 'processing' && 'PROCESSING...'}
            {checkoutStatus === 'success' && '✓ PURCHASED'}
          </button>
          {checkoutStatus === 'success' && <p className="text-green-300 font-sans text-sm mt-3 text-center animate-fade-in-up">Thank you for your order! Your tumbler is on its way.</p>}
        </div>

        <div className="w-full flex flex-col items-start">
          <h3 className="font-sans font-bold text-lg text-[#F5F4EF] mb-4 flex items-center gap-2">Customer Reviews <span className="text-sm font-normal text-[#F5F4EF]/60">({selectedStock.reviews.length})</span></h3>
          <div className="flex flex-col gap-4 w-full">
            {selectedStock.reviews.map(review => (
              <div key={review.id} className="bg-black/10 rounded-xl p-4 w-full backdrop-blur-sm border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-sans font-bold text-sm text-[#F5F4EF]">{review.user}</span>
                  <div className="flex text-yellow-400 text-xs">
                    {Array.from({ length: 5 }).map((_, i) => (<span key={i}>{i < review.rating ? '★' : '☆'}</span>))}
                  </div>
                </div>
                <p className="text-[#F5F4EF]/80 font-sans text-xs md:text-sm italic leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}