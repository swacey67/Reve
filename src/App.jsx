import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import UrNeeds from './pages/UrNeeds';
import Customize from './pages/Customize';
import Stock from './pages/Stock';
import StockDetail from './pages/StockDetail';
import Collab from './pages/Collab';
import CollabDetail from './pages/CollabDetail';
import SignIn from './pages/SignIn';
import Search from './pages/Search';
import View3D from './pages/View3D';

export default function App() {
  return (
    <Router>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Syne:wght@700;800&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
        .font-sans-custom { font-family: 'Syne', sans-serif; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .bg-horizon { background: linear-gradient(to bottom, #a1b1c3 0%, #b1c0ce 25%, #8c9fad 42%, #5c778c 50%, #869ba9 60%, #c0cbcf 80%, #a9b7bf 100%); }
      `}</style>

      <div className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-horizon selection:bg-white/30 text-[#F5F4EF]">
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay z-0 fixed" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        
        {/* Navbar tidak ditampilkan di halaman 3D agar benar-benar full screen */}
        <Routes>
          <Route path="/3d-view" element={<></>} />
          <Route path="*" element={<TopNavbar />} />
        </Routes>
        
        <div className="w-full flex-grow flex flex-col items-center py-10 px-4 z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/needs" element={<UrNeeds />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/stock/:id" element={<StockDetail />} />
            <Route path="/collab" element={<Collab />} />
            <Route path="/collab/:id" element={<CollabDetail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/search" element={<Search />} />
            
            {/* INI ROUTE YANG MEMUNCULKAN 3D VIEW NYA! */}
            <Route path="/3d-view" element={<View3D />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}