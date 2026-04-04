import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tumbler from '../components/Tumbler';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto min-h-[80vh] justify-between">
      <div className="flex flex-col items-center text-center mt-4">
        <p className="font-serif-custom text-xl md:text-2xl tracking-[0.05em] text-[#F5F4EF]/90 mb-1">Resistant Tumbler</p>
        <h1 className="font-sans-custom font-extrabold text-7xl md:text-[9rem] leading-[1.1] tracking-[0.05em] uppercase text-[#F5F4EF] ml-4">REVE</h1>
        <h2 className="font-serif-custom italic font-medium text-5xl md:text-[4.5rem] text-[#F5F4EF] -mt-2">Sip Your Dreams</h2>
      </div>
      <div className="flex flex-row justify-center items-center gap-2 sm:gap-6 md:gap-14 my-10 md:my-16 w-full px-2">
        <Tumbler color="#F4F4F4" isDark={false} delay={100} />
        <Tumbler color="#DDA2A6" isDark={false} delay={250} />
        <Tumbler color="#5B7E6B" isDark={false} delay={400} />
        <Tumbler color="#1C1D1B" isDark={true}  delay={550} />
      </div>
      <div className="mb-8">
        <button onClick={() => navigate('/needs')} className="bg-[#EFEFEA] text-[#112316] font-bold font-sans tracking-widest text-sm md:text-base px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-all duration-300">
          GET YOURS
        </button>
      </div>
    </div>
  );
}
