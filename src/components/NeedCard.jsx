import React from 'react';

export default function NeedCard({ titleLine1, titleLine2, subtext, bgColor, children, delay, onClick }) {
  return (
    <div className={`flex flex-col items-start w-full animate-fade-in-up ${onClick ? 'cursor-pointer group' : ''}`} style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }} onClick={onClick}>
      <div className={`w-full aspect-[1/1.1] rounded-3xl p-5 sm:p-8 flex flex-col relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden ${onClick ? 'group-hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-shadow' : ''}`} style={{ backgroundColor: bgColor }}>
        <h3 className="font-sans-custom font-extrabold text-[#0D2417] text-xl md:text-[1.75rem] leading-[1.1] z-10 tracking-tight">
          {titleLine1}<br/>{titleLine2}
        </h3>
        <div className="absolute inset-0 flex items-end justify-center pb-2 sm:pb-6 pointer-events-none">
          {/* Skala diperkecil agar aman dari batas kotak saat layar mengecil */}
          <div className="pointer-events-auto scale-[0.6] sm:scale-[0.7] lg:scale-[0.8] origin-bottom">
            {children}
          </div>
        </div>
      </div>
      <p className="mt-4 ml-1 text-[#D1D5DB] font-sans text-sm md:text-base font-light tracking-wide">{subtext}</p>
    </div>
  );
}