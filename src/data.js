export const PALETTE = [
  '#A5C4E1', '#C1C099', '#D19C4C', '#C65D5B', 
  '#5B7E6B', '#1C1D1B', '#F4F4F4', '#DDA2A6'
];

export const STOCK_DATA = {
  'cloud-white': {
    title: 'Cloud White',
    color: '#F4F4F4',
    isDark: false,
    price: 'Rp 399.000',
    description: 'Tumbler tahan banting kami yang khas dengan sentuhan warna putih minimalis yang murni. Cocok untuk suasana apa pun.',
    reviews: [
      { id: 1, user: 'Pak Budi', rating: 5, text: 'Estetik dan praktis. Es tetap beku selama lebih dari 18 jam!' },
      { id: 2, user: 'Indrabujug', rating: 4, text: 'Gelas harian terbaik yang pernah saya punya. Sangat direkomendasikan.' }
    ]
  },
  'blush-pink': {
    title: 'Blush Pink',
    color: '#DDA2A6',
    isDark: false,
    price: 'Rp 399.000',
    description: 'Warna pink yang lembut dan elegan yang memberikan kesan chic pada meja kerja atau perlengkapan gym Anda.',
    reviews: [
      { id: 1, user: 'Joko Wi', rating: 5, text: 'Warnanya cantik banget aslinya!' }
    ]
  },
  'sage-green': {
    title: 'Sage Green',
    color: '#5B7E6B',
    isDark: false,
    price: 'Rp 399.000',
    description: 'Terinspirasi dari alam, warna hijau sage ini memberikan ketenangan dalam setiap tegukan.',
    reviews: [
      { id: 1, user: 'Budi H.', rating: 5, text: 'Warna hijaunya kalem, build quality-nya solid.' }
    ]
  },
  'obsidian-black': {
    title: 'Obsidian Black',
    color: '#1C1D1B',
    isDark: true,
    price: 'Rp 399.000',
    description: 'Kuat, misterius, dan tak lekang oleh waktu. Finishing matte hitam ini sangat tahan terhadap bekas sidik jari.',
    reviews: [
      { id: 1, user: 'Basu D.', rating: 5, text: 'Keren banget buat dibawa ngantor.' }
    ]
  }
};

export const COLLAB_DATA = {
  'jjk': {
    title: 'Poignée X Jujutsu Kaisen',
    description: 'Edisi terbatas yang menampilkan seni ikonik dari Jujutsu Kaisen. Koleksi wajib bagi para penggemar.',
    price: 'Rp 590.000',
    props: { patternId: 'jjkPattern', handleColor: '#111111', headColor: '#901A1E', lidBaseColor: '#1A3E8A' }
  },
  'vagabond': {
    title: 'Poignée X Vagabond',
    description: 'Terinspirasi dari guratan kuas mahakarya Takehiko Inoue. Menghadirkan semangat samurai ke dalam hidrasi Anda.',
    price: 'Rp 590.000',
    props: { patternId: 'vagabondPattern', handleColor: '#F5F5F5', headColor: '#E0E0E0' }
  },
  'chainsaw': {
    title: 'Poignée X Chainsaw Man',
    description: 'Desain yang berani dan liar khas Chainsaw Man. Dibuat untuk mereka yang berani tampil beda.',
    price: 'Rp 590.000',
    props: { patternId: 'collabPattern', handleColor: '#1E195E', headColor: '#1E195E', lidBaseColor: '#1A3E8A' }
  }
};