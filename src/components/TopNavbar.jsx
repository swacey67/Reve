import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Import data tumbler untuk rekomendasi pencarian
import { STOCK_DATA, COLLAB_DATA } from '../data'; 

export default function TopNavbar() {
  const navigate = useNavigate();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State untuk fitur pencarian
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);

  // Menggabungkan semua produk untuk dijadikan rekomendasi
  const allProducts = [
    ...Object.entries(STOCK_DATA).map(([key, data]) => ({ ...data, id: key, type: 'stock' })),
    ...Object.entries(COLLAB_DATA).map(([key, data]) => ({ ...data, id: key, type: 'collab' }))
  ];

  // Memfilter rekomendasi sesuai ketikan (Maksimal tampil 4 agar simpel dan kecil)
  const suggestions = allProducts.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 4);

  // Efek untuk menutup dropdown saat klik di luar area search bar
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fungsi saat tombol Enter ditekan
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    } else {
      navigate(`/search`);
    }
    // Memastikan rekomendasi langsung tertutup
    setShowSuggestions(false);
    // Menghilangkan fokus (kedip-kedip kursor) dari kotak pencarian agar tidak memicu pop-up lagi
    document.activeElement.blur(); 
  };

  return (
    <nav className="w-full border-b border-white/10 bg-white/5 backdrop-blur-md z-50 sticky top-0">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8 text-[#F5F4EF]">
        <div className="flex items-center space-x-8">
          <button onClick={() => navigate('/')} className="text-2xl font-bold font-sans-custom tracking-widest lowercase hover:opacity-80 transition-opacity">
            poignée
          </button>
          <div className="hidden md:flex space-x-6 items-center font-sans text-sm font-medium tracking-wide">
            <div className="relative group h-full py-2" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
              <button className="flex items-center gap-1.5 hover:text-white transition-colors h-full">
                Products <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-1 w-[450px] bg-[#EFEFEA] text-[#112316] rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-4 grid grid-cols-[1.2fr_1fr] gap-4 transition-all duration-300 origin-top-left ${isProductsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="rounded-lg p-5 bg-gradient-to-br from-[#A5C4E1]/30 to-[#EBBAB9]/30 border border-black/5 flex flex-col justify-end cursor-pointer hover:shadow-md transition-all group" onClick={() => { navigate('/stock'); setIsProductsOpen(false); }}>
                  <div className="w-10 h-10 bg-white/50 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"><span className="text-xl">✨</span></div>
                  <div className="font-bold font-sans text-lg mb-1 leading-tight tracking-tight">Featured Collections</div>
                  <div className="text-xs opacity-75 font-sans leading-relaxed">Check out our latest and greatest tumblers ready to ship.</div>
                </div>
                <div className="flex flex-col gap-1 py-1">
                  <button onClick={() => { navigate('/stock'); setIsProductsOpen(false); }} className="text-left p-3 rounded-lg hover:bg-black/5 transition-colors group">
                    <div className="font-bold text-sm font-sans group-hover:text-black transition-colors">Ready Essentials</div>
                    <div className="text-xs opacity-60 font-sans mt-0.5 line-clamp-2">Our classic daily hydration lineup</div>
                  </button>
                  <button onClick={() => { navigate('/customize'); setIsProductsOpen(false); }} className="text-left p-3 rounded-lg hover:bg-black/5 transition-colors group">
                    <div className="font-bold text-sm font-sans group-hover:text-black transition-colors">Customize It</div>
                    <div className="text-xs opacity-60 font-sans mt-0.5 line-clamp-2">Bring your own creative ideas to life</div>
                  </button>
                  <button onClick={() => { navigate('/collab'); setIsProductsOpen(false); }} className="text-left p-3 rounded-lg hover:bg-black/5 transition-colors group">
                    <div className="font-bold text-sm font-sans group-hover:text-black transition-colors">Collab Things</div>
                    <div className="text-xs opacity-60 font-sans mt-0.5 line-clamp-2">Exclusive limited edition artist series</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BAGIAN SEARCH BAR DESKTOP YANG DIPERBARUI --- */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative group" ref={searchContainerRef}>
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F5F4EF]/50 group-focus-within:text-white transition-colors" />
              <input 
                type="search" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search..." 
                className="pl-9 pr-4 py-2 rounded-md bg-black/10 border border-white/20 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-black/20 text-[#F5F4EF] placeholder:text-[#F5F4EF]/50 w-56 transition-all" 
              />
            </form>

            {/* Kotak Dropdown Rekomendasi */}
            {showSuggestions && (
              <div className="absolute top-full left-0 mt-2 w-full bg-[#EFEFEA] text-[#112316] rounded-xl shadow-xl overflow-hidden z-50 flex flex-col border border-white/40 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                {suggestions.length > 0 ? (
                  suggestions.map((product) => (
                    <button
                      key={`${product.type}-${product.id}`}
                      onClick={() => {
                        // Langsung arahkan ke halaman produk saat diklik
                        navigate(`/${product.type}/${product.id}`);
                        setShowSuggestions(false);
                        setSearchQuery('');
                      }}
                      className="flex flex-col text-left px-4 py-3 hover:bg-black/5 transition-colors border-b border-black/5 last:border-0"
                    >
                      <span className="font-bold text-sm font-sans truncate w-full text-black">{product.title}</span>
                      <span className="text-xs opacity-60 font-sans mt-0.5">{product.type === 'stock' ? 'Ready Essentials' : 'Collab Series'}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-4 text-sm text-black/50 font-sans italic text-center">Produk tidak ditemukan</div>
                )}
              </div>
            )}
          </div>
          <button onClick={() => navigate('/signin')} className="px-5 py-2 bg-white text-[#112316] hover:bg-[#EFEFEA] rounded-md text-sm font-bold font-sans transition-all shadow-sm hover:shadow-md">Sign In</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-[#F5F4EF] hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#8c9fad]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl flex flex-col p-4 gap-2 font-sans">
           <form className="relative w-full mb-2" onSubmit={(e) => { handleSearch(e); setIsMobileMenuOpen(false); }}>
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
             <input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="w-full pl-9 pr-4 py-3 rounded-md bg-white/10 border border-white/20 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-white/40 text-white placeholder-white/50" />
           </form>
           <button onClick={() => { navigate('/needs'); setIsMobileMenuOpen(false); }} className="p-3 text-left font-bold text-white hover:bg-white/10 rounded-md">Products Overview</button>
           <button onClick={() => { navigate('/stock'); setIsMobileMenuOpen(false); }} className="p-3 pl-6 text-left text-sm text-white/80 hover:bg-white/10 hover:text-white rounded-md">→ Ready Essentials</button>
           <button onClick={() => { navigate('/customize'); setIsMobileMenuOpen(false); }} className="p-3 pl-6 text-left text-sm text-white/80 hover:bg-white/10 hover:text-white rounded-md">→ Customize It</button>
           <button onClick={() => { navigate('/collab'); setIsMobileMenuOpen(false); }} className="p-3 pl-6 text-left text-sm text-white/80 hover:bg-white/10 hover:text-white rounded-md">→ Collab Things</button>
           <div className="h-px w-full bg-white/10 my-2"></div>
           <button onClick={() => { navigate('/signin'); setIsMobileMenuOpen(false); }} className="mt-4 p-3 w-full bg-white text-[#112316] font-bold rounded-md text-center">Sign In</button>
        </div>
      )}
    </nav>
  );
}