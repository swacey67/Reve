import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tumbler from '../components/Tumbler';
import { STOCK_DATA } from '../data';

export default function Stock() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh] animate-fade-in-up mt-6 md:mt-0 px-4">
      <button onClick={() => navigate('/needs')} className="absolute left-4 md:left-0 -top-4 md:-top-8 text-[#F5F4EF]/70 hover:text-[#F5F4EF] transition-colors flex items-center gap-2 font-sans text-sm uppercase tracking-widest z-20">
        <span>←</span> Back
      </button>
      <div className="text-center mb-12">
         <h2 className="font-sans-custom font-extrabold text-4xl md:text-5xl text-[#F5F4EF] tracking-tight">Ready Essentials</h2>
         <p className="mt-2 text-[#F5F4EF]/70 font-sans tracking-wide">In stock and ready to ship.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 w-full mt-4">
        {Object.entries(STOCK_DATA).map(([key, data], idx) => (
          <div key={key} className="flex flex-col items-center group cursor-pointer" onClick={() => navigate(`/stock/${key}`)}>
            <div className="scale-90 md:scale-100 mb-6 drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
              <Tumbler color={data.color} isDark={data.isDark} isStatic={true} delay={idx * 150} />
            </div>
            <p className="font-sans font-bold text-[#F5F4EF] text-sm md:text-base tracking-wide transition-colors group-hover:text-white">{data.title}</p>
            <p className="font-sans text-[#F5F4EF]/70 text-sm mt-1">{data.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
