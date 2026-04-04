import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Tumbler from '../components/Tumbler';
import { STOCK_DATA, COLLAB_DATA } from '../data';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();

  // Menggabungkan semua produk dari Stock dan Collab ke dalam satu array
  const allProducts = [
    ...Object.entries(STOCK_DATA).map(([key, data]) => ({ ...data, id: key, type: 'stock', price: data.price || 'IDR 670.000' })),
    ...Object.entries(COLLAB_DATA).map(([key, data]) => ({ ...data, id: key, type: 'collab', price: 'IDR 690.000' }))
  ];

  // Memfilter produk berdasarkan kata kunci (judul atau deskripsi)
  // Jika query kosong, filter ini akan mengembalikan semua produk (karena string apa pun memiliki includes(''))
  const filteredProducts = allProducts.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-start min-h-[80vh] animate-fade-in-up mt-6 md:mt-0 px-4">
      {/* Judul Halaman Pencarian */}
      <div className="w-full text-left mb-8 mt-4">
         <h2 className="font-sans-custom font-extrabold text-3xl md:text-4xl text-[#F5F4EF] tracking-tight">
           {query ? `Hasil Pencarian: "${query}"` : 'Semua Koleksi Tumbler'}
         </h2>
         <p className="mt-2 text-[#F5F4EF]/70 font-sans tracking-wide">
           Menampilkan {filteredProducts.length} produk.
         </p>
      </div>

      {/* Grid Katalog Produk (Desain Kartu Putih) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full pb-12">
        {filteredProducts.map((product) => (
          <div key={`${product.type}-${product.id}`} className="bg-white rounded-xl p-5 shadow-lg flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            
            {/* Kontainer Gambar */}
            <div 
              className="w-full aspect-[4/5] flex items-center justify-center mb-6 overflow-hidden relative cursor-pointer" 
              onClick={() => navigate(`/${product.type}/${product.id}`)}
            >
               <div className="scale-[0.6] origin-center">
                 {product.type === 'stock' ? (
                   <Tumbler color={product.color} isDark={product.isDark} isStatic={true} delay={0} />
                 ) : (
                   <Tumbler {...product.props} isStatic={true} delay={0} />
                 )}
               </div>
            </div>

            {/* Detail dan Tombol */}
            <div className="flex flex-col flex-grow">
               <h3 className="font-sans font-bold text-[#111111] text-lg leading-tight mb-2 line-clamp-2">
                 {product.title}
               </h3>
               <p className="font-sans text-[#666666] text-md font-medium mb-5">
                 {product.price}
               </p>

               <button
                 onClick={() => navigate(`/${product.type}/${product.id}`)}
                 className="mt-auto w-full bg-[#082f2c] text-white font-bold font-sans py-3 rounded-lg hover:bg-[#051c1a] hover:shadow-md transition-all tracking-wider text-sm"
               >
                 Check Out
               </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
         <div className="w-full text-center mt-20">
            <h3 className="text-2xl text-white/50 font-sans">Tidak ada tumbler yang cocok dengan pencarian Anda.</h3>
         </div>
      )}
    </div>
  );
}