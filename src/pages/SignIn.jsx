import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[75vh] animate-fade-in-up px-4 mt-6 md:mt-0">
      <button onClick={() => navigate('/')} className="absolute left-4 md:-left-12 -top-4 md:-top-8 text-[#F5F4EF]/70 hover:text-[#F5F4EF] transition-colors flex items-center gap-2 font-sans text-sm uppercase tracking-widest z-20">
        <span>←</span> Back
      </button>

      <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col items-center">
         <h2 className="font-sans-custom font-extrabold text-4xl text-[#F5F4EF] tracking-tight mb-2">Welcome</h2>
         <p className="text-[#F5F4EF]/70 font-sans text-sm mb-8 text-center">Sign in to access your orders and saved designs.</p>

         <form className="w-full flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
            <div className="flex flex-col gap-1.5">
               <label className="text-[#F5F4EF]/80 font-sans text-xs uppercase tracking-wider pl-1">Email</label>
               <input type="email" required className="w-full px-4 py-3 rounded-xl bg-black/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all font-sans" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-1.5">
               <label className="text-[#F5F4EF]/80 font-sans text-xs uppercase tracking-wider pl-1">Password</label>
               <input type="password" required className="w-full px-4 py-3 rounded-xl bg-black/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all font-sans" placeholder="••••••••" />
            </div>
            <div className="flex justify-end w-full mt-1">
               <button type="button" className="text-[#F5F4EF]/60 hover:text-white text-xs font-sans transition-colors">Forgot password?</button>
            </div>
            <button type="submit" className="mt-4 w-full bg-[#EFEFEA] text-[#112316] font-bold font-sans tracking-widest text-sm px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-all duration-300">
               SIGN IN
            </button>
         </form>

         <p className="mt-8 text-[#F5F4EF]/60 font-sans text-xs">Don't have an account? <button className="text-white hover:underline font-bold transition-all">Sign up</button></p>
      </div>
    </div>
  );
}
