import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Layanan Kami",
  description:
    "Layanan catering profesional PT. Tonita Dwi Generasi: Catering Harian, Catering Buffet/Event, dan Nasi Box/Snack Box untuk berbagai kebutuhan.",
};

const services = [
  {
    title: "Catering Harian",
    description:
      "Layanan katering harian yang dirancang khusus untuk memenuhi kebutuhan makan staff, karyawan pabrik, dan karyawan kantoran setiap hari. Kami memastikan menu bergizi, lezat, dan siap tepat waktu sesuai jadwal operasional perusahaan Anda.",
    features: [
      "Menu bervariasi setiap hari",
      "Pengiriman tepat waktu",
      "Kapasitas besar untuk perusahaan",
      "Menu dapat disesuaikan kebutuhan",
      "Higenis dan terjamin kehalalannya",
    ],
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    imageAlt: "Catering harian untuk karyawan",
    badge: "Paling Populer",
  },
  {
    title: "Catering Buffet / Event",
    description:
      "Layanan katering prasmanan untuk berbagai acara formal maupun informal. Kami melayani acara kantor, meeting, workshop, seminar, gathering keluarga, syukuran, resepsi pernikahan, dan berbagai acara spesial lainnya dengan tampilan sajian yang menarik.",
    features: [
      "Dekorasi prasmanan profesional",
      "Pilihan menu lengkap nusantara",
      "Tim pelayan berpengalaman",
      "Peralatan makan lengkap tersedia",
      "Fleksibel untuk berbagai skala acara",
    ],
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    imageAlt: "Catering buffet prasmanan untuk event",
    badge: null,
  },
  {
    title: "Nasi Box / Snack Box / Meal Box",
    description:
      "Layanan katering dengan kemasan praktis berupa nasi kotak maupun nasi bungkus. Cocok untuk rapat, seminar, acara pelatihan, atau kebutuhan pengiriman massal. Dikemas higienis dengan tampilan rapi dan menu yang lezat.",
    features: [
      "Kemasan rapi dan higienis",
      "Cocok untuk pengiriman massal",
      "Nasi kotak & nasi bungkus tersedia",
      "Snack box untuk kudapan rapat",
      "Label kemasan dapat dikustomisasi",
    ],
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    imageAlt: "Nasi box dan snack box catering",
    badge: null,
  },
];

const specialMenus = [
  {
    title: "Nasi Tumpeng",
    description:
      "Hidangan tumpeng khas Indonesia yang penuh makna simbolis. Cocok untuk perayaan ulang tahun perusahaan, syukuran, peresmian, atau momen spesial lainnya. Dibuat dengan bahan-bahan pilihan dan disajikan dengan tampilan yang memukau.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    imageAlt: "Nasi Tumpeng khas Indonesia",
  },
  {
    title: "Healthy Meal Box",
    description:
      "Menu makanan sehat yang diformulasikan untuk mendukung gaya hidup sehat karyawan Anda. Komposisi gizi seimbang dengan bahan-bahan segar pilihan, rendah lemak, dan kaya serat. Pilihan tepat untuk perusahaan yang peduli kesehatan karyawan.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    imageAlt: "Healthy meal box makanan sehat",
  },
];

const distributionSteps = [
  {
    step: 1,
    title: "Pembelian Bahan Baku",
    description: "Pemilihan dan pembelian bahan baku berkualitas dari pemasok terpercaya.",
  },
  {
    step: 2,
    title: "Penerimaan & Pengecekan Bahan Baku",
    description: "Setiap bahan baku yang datang diperiksa kualitas, kesegaran, dan kelayakannya.",
  },
  {
    step: 3,
    title: "Penyortiran Bahan Baku",
    description: "Bahan baku disortir untuk memisahkan yang layak pakai sesuai standar kualitas kami.",
  },
  {
    step: 4,
    title: "Penyimpanan Bahan Baku",
    description: "Bahan baku disimpan dengan sistem penyimpanan yang tepat untuk menjaga kesegaran.",
  },
  {
    step: 5,
    title: "Pencucian & Persiapan Pengolahan",
    description: "Bahan baku dicuci bersih dan dipersiapkan sebelum masuk tahap pengolahan.",
  },
  {
    step: 6,
    title: "Proses Pengolahan Menjadi Masakan",
    description: "Tim juru masak berpengalaman mengolah bahan menjadi hidangan lezat khas nusantara.",
  },
  {
    step: 7,
    title: "Quality Control",
    description: "Setiap masakan melalui pengecekan rasa, tampilan, dan standar higienitas sebelum dikemas.",
  },
  {
    step: 8,
    title: "Pengemasan Makanan",
    description: "Makanan dikemas secara higienis dengan kemasan yang sesuai jenis layanan.",
  },
  {
    step: 9,
    title: "Pengiriman ke Konsumen",
    description: "Makanan diantarkan tepat waktu ke lokasi konsumen dalam kondisi optimal.",
  },
];

export default function LayananPage() {
  return (
    <main>
      {/* Page Header */}
      <section
        className="pt-20"
        style={{ backgroundColor: "#1B4332" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li className="text-green-400" aria-hidden="true">
                /
              </li>
              <li className="text-white font-medium" aria-current="page">
                Layanan Kami
              </li>
            </ol>
          </nav>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Layanan Kami
          </h1>
          <p className="mt-4 text-green-100 text-lg max-w-2xl">
            Solusi katering profesional untuk berbagai kebutuhan Anda — dari
            catering harian, buffet event, hingga nasi box praktis.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="font-heading text-3xl sm:text-4xl font-bold"
              style={{ color: "#1B4332" }}
            >
              Layanan Utama
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Kami menyediakan tiga layanan utama yang dapat disesuaikan dengan
              kebutuhan dan skala acara Anda.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-10 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {service.badge && (
                    <span
                      className="absolute top-4 left-4 text-white text-sm font-semibold px-3 py-1 rounded-full shadow"
                      style={{ backgroundColor: "#E5A100" }}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h3
                    className="font-heading text-2xl sm:text-3xl font-bold mb-4"
                    style={{ color: "#1B4332" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#1B4332" }}
                          aria-hidden="true"
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/6281951366663"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#1B4332" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.855L0 24l6.335-1.492A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.373l-.36-.213-3.727.977.994-3.634-.234-.374A9.818 9.818 0 1112 21.818z" />
                    </svg>
                    Tanya via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Spesial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="font-heading text-3xl sm:text-4xl font-bold"
              style={{ color: "#1B4332" }}
            >
              Menu Spesial
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Hidangan istimewa untuk momen yang tak terlupakan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialMenus.map((menu) => (
              <div
                key={menu.title}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={menu.image}
                    alt={menu.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 font-heading text-2xl font-bold text-white">
                    {menu.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {menu.description}
                  </p>
                  <a
                    href="https://wa.me/6281951366663"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-semibold text-sm hover:underline transition-colors"
                    style={{ color: "#E5A100" }}
                  >
                    Pesan Sekarang
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alur Distribusi */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="font-heading text-3xl sm:text-4xl font-bold"
              style={{ color: "#1B4332" }}
            >
              Alur Distribusi
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Setiap hidangan kami melewati proses yang terstandarisasi untuk
              menjamin kualitas dan keamanan pangan.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: "#D1FAE5" }}
              aria-hidden="true"
            />

            <ol className="space-y-0">
              {distributionSteps.map((item, index) => (
                <li key={item.step} className="relative flex gap-6 sm:gap-10">
                  {/* Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-heading font-bold text-white text-base sm:text-lg shadow-md"
                      style={{
                        backgroundColor:
                          item.step === 7 ? "#E5A100" : "#1B4332",
                      }}
                    >
                      {item.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`pb-10 pt-2 ${
                      index === distributionSteps.length - 1 ? "pb-0" : ""
                    }`}
                  >
                    <h3
                      className="font-heading text-lg sm:text-xl font-semibold"
                      style={{
                        color: item.step === 7 ? "#E5A100" : "#1B4332",
                      }}
                    >
                      {item.title}
                      {item.step === 7 && (
                        <span
                          className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full text-white align-middle"
                          style={{ backgroundColor: "#E5A100" }}
                        >
                          Key Step
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#1B4332" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Konsultasikan Menu Anda
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Tim kami siap membantu Anda memilih menu yang tepat sesuai acara,
            jumlah tamu, dan anggaran. Hubungi kami sekarang untuk konsultasi
            gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281951366663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#E5A100" }}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.855L0 24l6.335-1.492A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.373l-.36-.213-3.727.977.994-3.634-.234-.374A9.818 9.818 0 1112 21.818z" />
              </svg>
              Hubungi via WhatsApp
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors hover:bg-white"
              style={{ color: "white" }}
            >
              Lihat Daftar Menu
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            Atau hubungi kami di{" "}
            <a
              href="tel:+6281398681880"
              className="underline hover:text-white transition-colors"
            >
              +62 813 9868 1880
            </a>{" "}
            /{" "}
            <a
              href="mailto:tonitacatering.tdg@gmail.com"
              className="underline hover:text-white transition-colors"
            >
              tonitacatering.tdg@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
