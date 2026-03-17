import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sertifikasi & Legalitas',
  description:
    'Lihat seluruh sertifikasi dan legalitas PT. Tonita Dwi Generasi — bukti komitmen kami terhadap standar kualitas, keamanan pangan, dan kehalalan.',
};

const certifications = [
  {
    title: 'Akta Perusahaan',
    detail: 'No. AHU-0014797.AH.01.01.TAHUN 2016',
  },
  {
    title: 'Nomor Induk Berusaha (NIB)',
    detail: 'Terdaftar resmi di sistem OSS',
  },
  {
    title: 'Sertifikat Halal MUI',
    detail: 'Dijamin halal oleh Majelis Ulama Indonesia',
  },
  {
    title: 'Sertifikat Laik Higiene Sanitasi Jasa Boga',
    detail: 'Memenuhi standar higiene & sanitasi jasa boga',
  },
  {
    title: 'Sertifikat Kursus Higiene Sanitasi Makanan',
    detail: 'Tenaga kerja terlatih dalam sanitasi makanan',
  },
  {
    title: 'Sertifikat Pelatihan Implementasi Sistem Jaminan Halal',
    detail: 'Sistem jaminan halal yang terimplementasi',
  },
  {
    title: 'Sertifikat ISO 22000:2018 & HACCP Awareness',
    detail: 'Standar internasional keamanan pangan',
  },
  {
    title: 'Hasil Uji Laboratorium Makanan (Mikrobiologi)',
    detail: 'Uji keamanan mikrobiologis produk makanan',
  },
  {
    title: 'Hasil Uji Laboratorium Air',
    detail: 'Kualitas air yang digunakan terjamin bersih',
  },
  {
    title: 'Hasil Uji Laboratorium Alat',
    detail: 'Peralatan masak terbukti bersih & aman',
  },
  {
    title: 'Medical Check Up Karyawan',
    detail: 'Seluruh karyawan menjalani pemeriksaan kesehatan rutin',
  },
  {
    title: 'Rekomendasi Dinas Tenaga Kerja dan Transmigrasi',
    detail: 'Direkomendasikan oleh Disnaker setempat',
  },
  {
    title: 'Izin Lokasi & Izin Usaha',
    detail: 'Operasional berdasarkan izin resmi pemerintah',
  },
];

function ShieldCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a.75.75 0 0 1 .688.452l1.607 3.693 3.986.43a.75.75 0 0 1 .42 1.286l-2.91 2.673.798 3.93a.75.75 0 0 1-1.1.806L12 12.768l-3.49 1.997a.75.75 0 0 1-1.1-.806l.798-3.93-2.91-2.673a.75.75 0 0 1 .42-1.286l3.986-.43L11.312 1.952A.75.75 0 0 1 12 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckBadgeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SertifikasiPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="pt-20 pb-14"
        style={{ backgroundColor: '#1B4332' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center gap-2 text-sm mb-4" aria-label="Breadcrumb">
            <Link
              href="/"
              className="text-green-300 hover:text-white transition-colors duration-200"
            >
              Beranda
            </Link>
            <span className="text-green-500">/</span>
            <span className="text-white font-medium">Sertifikasi &amp; Legalitas</span>
          </nav>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight"
          >
            Sertifikasi &amp; Legalitas
          </h1>
          <p className="mt-4 text-green-200 text-base sm:text-lg max-w-2xl mx-auto">
            Bukti nyata komitmen kami terhadap standar kualitas, keamanan pangan, dan kehalalan yang terverifikasi.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
            style={{ backgroundColor: '#E5A100' }}
          >
            <CheckBadgeIcon />
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold font-heading mb-4"
            style={{ color: '#1B4332' }}
          >
            Kepercayaan Dibangun di Atas Standar
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            PT. Tonita Dwi Generasi beroperasi dengan mematuhi seluruh regulasi dan standar yang berlaku di
            industri jasa boga Indonesia. Setiap sertifikasi yang kami miliki adalah bukti keseriusan kami
            dalam menjaga kualitas, kebersihan, kehalalan, serta keamanan pangan bagi seluruh konsumen.
            Kami percaya bahwa kepercayaan klien dibangun dari transparansi dan akuntabilitas yang nyata.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold font-heading mb-3"
              style={{ color: '#1B4332' }}
            >
              Daftar Sertifikasi Resmi
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              Seluruh dokumen legalitas dan sertifikasi berikut dipegang oleh PT. Tonita Dwi Generasi
              sebagai bentuk kepatuhan dan profesionalisme.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex items-start gap-4 group"
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300"
                  style={{ backgroundColor: '#E5A10020', color: '#1B4332' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    aria-hidden="true"
                    style={{ color: '#1B4332' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold text-base leading-snug font-heading"
                    style={{ color: '#1B4332' }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{cert.detail}</p>
                </div>

                {/* Accent line on hover */}
                <div
                  className="absolute left-0 top-0 h-full w-1 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: '#E5A100' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-2xl p-10 sm:p-14"
            style={{ backgroundColor: '#1B4332' }}
          >
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
              style={{ backgroundColor: '#E5A100' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-4">
              Percayakan Kebutuhan Catering Anda kepada Kami
            </h2>
            <p className="text-green-200 text-base sm:text-lg leading-relaxed mb-8">
              Dengan rekam jejak lebih dari 30 tahun dan seluruh sertifikasi yang lengkap, kami siap
              memastikan setiap sajian yang kami hadirkan memenuhi standar kualitas, higiene, dan
              kehalalan tertinggi untuk Anda dan tim Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281951366663"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#E5A100', color: '#1B4332' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Hubungi via WhatsApp
              </a>

              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base border-2 border-white text-white transition-all duration-200 hover:bg-white hover:text-green-900 active:scale-95"
              >
                Kirim Pesan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
