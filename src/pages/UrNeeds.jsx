import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tumbler from '../components/Tumbler';
import NeedCard from '../components/NeedCard';

export default function UrNeeds() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto mt-6 md:mt-10 animate-fade-in-up">
      <button onClick={() => navigate('/')} className="absolute left-0 -top-4 md:-top-8 text-[#F5F4EF]/70 hover:text-[#F5F4EF] transition-colors flex items-center gap-2 font-sans text-sm uppercase tracking-widest">
        <span>←</span> Back
      </button>
      <h2 className="text-[#F5F4EF] text-5xl md:text-[5.5rem] mb-12 md:mb-20 tracking-wide text-center">
        <span className="font-serif-custom">UR</span> <span className="font-serif-custom italic">Needs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full px-4">
        <NeedCard titleLine1="Ready" titleLine2="Essentials" subtext="Daily essentials" bgColor="#FAFAFA" delay={100} onClick={() => navigate('/stock')}>
          <Tumbler color="#F4F4F4" isStatic={true} delay={0} />
        </NeedCard>
        <NeedCard titleLine1="Customize" titleLine2="It" subtext="Give your ideas here" bgColor="#F2F3EB" delay={250} onClick={() => navigate('/customize')}>
          <Tumbler topColor="#A0B2D4" bottomColor="#BAB98E" handleColor="#C8A571" headColor="#B2504F" isStatic={true} delay={0} />
        </NeedCard>
        <NeedCard titleLine1="Collab" titleLine2="Things" subtext="Imagination come true" bgColor="#FFFFFF" delay={400} onClick={() => navigate('/collab')}>
          <Tumbler patternId="collabPattern" handleColor="#1E195E" headColor="#1E195E" lidBaseColor="#1A3E8A" isStatic={true} delay={0} />
        </NeedCard>
      </div>
    </div>
  );
}
