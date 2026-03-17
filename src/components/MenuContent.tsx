'use client';

import { useState } from 'react';
import Link from 'next/link';

type Category = 'Semua' | 'Ayam' | 'Daging' | 'Ikan' | 'Telur' | 'Sayuran' | 'Tambahan';

interface MenuItem {
  name: string;
  category: Exclude<Category, 'Semua'>;
}

const menuData: MenuItem[] = [
  // Ayam
  { name: 'Ayam Goreng Serundeng', category: 'Ayam' },
  { name: 'Ayam Kentucky', category: 'Ayam' },
  { name: 'Ayam Kecap', category: 'Ayam' },
  { name: 'Ayam Gulai', category: 'Ayam' },
  { name: 'Ayam Bakar', category: 'Ayam' },
  { name: 'Ayam Balado', category: 'Ayam' },
  { name: 'Ayam Asam Manis', category: 'Ayam' },
  { name: 'Semur Ayam', category: 'Ayam' },
  { name: 'Opor Ayam', category: 'Ayam' },
  // Daging
  { name: 'Daging Balado', category: 'Daging' },
  { name: 'Daging Rendang', category: 'Daging' },
  { name: 'Daging Empal', category: 'Daging' },
  { name: 'Daging Asam Pedas', category: 'Daging' },
  { name: 'Semur Daging', category: 'Daging' },
  { name: 'Daging Lada Hitam', category: 'Daging' },
  { name: 'Daging Teriyaki', category: 'Daging' },
  // Ikan
  { name: 'Ikan Balado', category: 'Ikan' },
  { name: 'Ikan Pesmol', category: 'Ikan' },
  { name: 'Ikan Asam Manis', category: 'Ikan' },
  { name: 'Ikan Bakar', category: 'Ikan' },
  { name: 'Ikan Goreng', category: 'Ikan' },
  { name: 'Pepes Ikan', category: 'Ikan' },
  { name: 'Ikan Sambal Matah', category: 'Ikan' },
  // Telur
  { name: 'Telur Dadar', category: 'Telur' },
  { name: 'Telur Balado', category: 'Telur' },
  { name: 'Telur Pesmol', category: 'Telur' },
  { name: 'Telur Gulai', category: 'Telur' },
  { name: 'Semur Telur', category: 'Telur' },
  { name: 'Opor Telur', category: 'Telur' },
  // Sayuran
  { name: 'Sayur Sop', category: 'Sayuran' },
  { name: 'Sayur Bayam', category: 'Sayuran' },
  { name: 'Sayur Nangka', category: 'Sayuran' },
  { name: 'Sayur Daun Singkong', category: 'Sayuran' },
  { name: 'Sayur Lodeh', category: 'Sayuran' },
  { name: 'Sayur Asem', category: 'Sayuran' },
  { name: 'Sayur Buncis', category: 'Sayuran' },
  { name: 'Sayur Kacang Panjang', category: 'Sayuran' },
  { name: 'Sayur Labu Siam', category: 'Sayuran' },
  { name: 'Sayur Cap Cay', category: 'Sayuran' },
  { name: 'Sayur Caesim Toge', category: 'Sayuran' },
  { name: 'Kimlo', category: 'Sayuran' },
  { name: 'Gado Gado', category: 'Sayuran' },
  { name: 'Karedok', category: 'Sayuran' },
  { name: 'Urap', category: 'Sayuran' },
  // Tambahan
  { name: 'Tempe Goreng Tepung', category: 'Tambahan' },
  { name: 'Tempe Bacem', category: 'Tambahan' },
  { name: 'Tempe Orek', category: 'Tambahan' },
  { name: 'Tempe Kering', category: 'Tambahan' },
  { name: 'Tempe Balado', category: 'Tambahan' },
  { name: 'Tahu Isi', category: 'Tambahan' },
  { name: 'Tahu Bacem', category: 'Tambahan' },
  { name: 'Tahu Balado', category: 'Tambahan' },
  { name: 'Tahu Bumbu Sambal Goreng', category: 'Tambahan' },
  { name: 'Tahu Semur', category: 'Tambahan' },
  { name: 'Perkedel Tahu', category: 'Tambahan' },
  { name: 'Pepes Tahu', category: 'Tambahan' },
  { name: 'Mie Goreng', category: 'Tambahan' },
  { name: 'Perkedel', category: 'Tambahan' },
  { name: 'Bakwan Jagung', category: 'Tambahan' },
  { name: 'Bakwan Sayur', category: 'Tambahan' },
  { name: 'Soun Goreng', category: 'Tambahan' },
  { name: 'Bihun Goreng', category: 'Tambahan' },
];

const categories: Category[] = ['Semua', 'Ayam', 'Daging', 'Ikan', 'Telur', 'Sayuran', 'Tambahan'];

const categoryIcons: Record<Category, string> = {
  Semua: '🍽️',
  Ayam: '🍗',
  Daging: '🥩',
  Ikan: '🐟',
  Telur: '🥚',
  Sayuran: '🥦',
  Tambahan: '🫘',
};

const categoryColors: Record<Exclude<Category, 'Semua'>, string> = {
  Ayam: 'bg-orange-50 border-orange-200',
  Daging: 'bg-red-50 border-red-200',
  Ikan: 'bg-blue-50 border-blue-200',
  Telur: 'bg-yellow-50 border-yellow-200',
  Sayuran: 'bg-green-50 border-green-200',
  Tambahan: 'bg-amber-50 border-amber-200',
};

const categoryBadgeColors: Record<Exclude<Category, 'Semua'>, string> = {
  Ayam: 'bg-orange-100 text-orange-700',
  Daging: 'bg-red-100 text-red-700',
  Ikan: 'bg-blue-100 text-blue-700',
  Telur: 'bg-yellow-100 text-yellow-700',
  Sayuran: 'bg-green-100 text-green-700',
  Tambahan: 'bg-amber-100 text-amber-700',
};

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');

  const filteredMenu =
    activeCategory === 'Semua'
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  const countByCategory = (cat: Category) =>
    cat === 'Semua' ? menuData.length : menuData.filter((i) => i.category === cat).length;

  return (
    <>
      {/* Page Header */}
      <section className="bg-white pt-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Link href="/" className="hover:text-[#E5A100] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-[#1B4332] font-medium">Daftar Menu</span>
          </nav>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4332]">
            Daftar Menu
          </h1>
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl">
            Hidangan khas nusantara yang lezat dan bergizi, disiapkan dengan bahan-bahan segar
            pilihan dan bumbu rempah terbaik.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                      isActive
                        ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-md'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#1B4332] hover:text-[#1B4332]'
                    }`}
                  >
                    <span>{categoryIcons[cat]}</span>
                    <span>{cat}</span>
                    <span
                      className={`ml-0.5 text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {countByCategory(cat)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result count */}
          <p className="text-sm text-gray-500 mb-6">
            Menampilkan{' '}
            <span className="font-semibold text-[#1B4332]">{filteredMenu.length}</span> menu
            {activeCategory !== 'Semua' && (
              <>
                {' '}dalam kategori{' '}
                <span className="font-semibold text-[#1B4332]">{activeCategory}</span>
              </>
            )}
          </p>

          {/* Menu Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {filteredMenu.map((item, index) => (
              <div
                key={`${item.category}-${index}`}
                className={`bg-white rounded-xl border-2 p-4 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
                  categoryColors[item.category]
                }`}
              >
                <span className="text-2xl sm:text-3xl" role="img" aria-label={item.category}>
                  {categoryIcons[item.category]}
                </span>
                <p className="text-sm font-medium text-gray-800 leading-snug">{item.name}</p>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    categoryBadgeColors[item.category]
                  }`}
                >
                  {item.category}
                </span>
              </div>
            ))}
          </div>

          {/* Custom Menu Note */}
          <div className="mt-10 bg-[#1B4332]/5 border border-[#1B4332]/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#E5A100]/20 rounded-full flex items-center justify-center text-2xl">
              📋
            </div>
            <div>
              <h3 className="font-heading font-semibold text-[#1B4332] text-lg mb-1">
                Menu Dapat Disesuaikan
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Semua menu di atas dapat disesuaikan sesuai permintaan konsumen. Kami siap
                membantu menyusun paket menu yang sesuai dengan selera, anggaran, dan kebutuhan
                acara Anda.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-10 bg-gradient-to-br from-[#1B4332] to-[#2d6a4f] rounded-2xl p-8 sm:p-10 text-center text-white">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
              Ingin Menu Khusus?
            </h2>
            <p className="text-green-100 mb-6 max-w-xl mx-auto">
              Konsultasikan kebutuhan menu Anda langsung dengan tim kami. Kami siap menyusun
              menu yang pas untuk setiap acara dan selera.
            </p>
            <a
              href="https://wa.me/6281951366663?text=Halo%20TDG%20Catering%2C%20saya%20ingin%20konsultasi%20menu%20khusus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#E5A100] hover:bg-[#cc8f00] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.859L.057 23.012a.75.75 0 00.93.93l5.153-1.475A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.784-.538-5.35-1.473l-.384-.23-3.058.876.876-3.058-.23-.384A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Request Menu via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
