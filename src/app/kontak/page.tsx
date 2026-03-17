import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Hubungi Kami | PT. Tonita Dwi Generasi',
  description:
    'Hubungi PT. Tonita Dwi Generasi (TDG Catering) via WhatsApp, telepon, atau email. Konsultasikan kebutuhan catering Anda sekarang.',
};

export default function KontakPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1B4332] pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Hubungi Kami
          </h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-green-200">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li aria-hidden="true">
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
              </li>
              <li className="text-white font-medium" aria-current="page">
                Hubungi Kami
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281951366663"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1B4332] transition-all duration-200"
            >
              <div className="w-14 h-14 bg-green-50 group-hover:bg-[#1B4332] rounded-full flex items-center justify-center mb-4 transition-colors duration-200">
                <svg
                  className="w-7 h-7 text-[#1B4332] group-hover:text-white transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.855L.057 23.617a.5.5 0 00.614.65l5.982-1.573A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.894 0-3.668-.523-5.183-1.432l-.371-.22-3.852 1.013 1.03-3.758-.242-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-gray-800 mb-1">
                WhatsApp
              </h3>
              <p className="text-[#1B4332] font-medium">+62 819 513 6663</p>
              <p className="text-sm text-gray-500 mt-1">Chat langsung dengan kami</p>
            </a>

            {/* Telepon */}
            <a
              href="tel:+628139868 1880"
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1B4332] transition-all duration-200"
            >
              <div className="w-14 h-14 bg-green-50 group-hover:bg-[#1B4332] rounded-full flex items-center justify-center mb-4 transition-colors duration-200">
                <svg
                  className="w-7 h-7 text-[#1B4332] group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-gray-800 mb-1">
                Telepon
              </h3>
              <p className="text-[#1B4332] font-medium">+62 813 9868 1880</p>
              <p className="text-sm text-gray-500 mt-1">Senin – Sabtu, 08.00 – 17.00</p>
            </a>

            {/* Email */}
            <a
              href="mailto:tonitacatering.tdg@gmail.com"
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1B4332] transition-all duration-200"
            >
              <div className="w-14 h-14 bg-green-50 group-hover:bg-[#1B4332] rounded-full flex items-center justify-center mb-4 transition-colors duration-200">
                <svg
                  className="w-7 h-7 text-[#1B4332] group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-gray-800 mb-1">
                Email
              </h3>
              <p className="text-[#1B4332] font-medium break-all">
                tonitacatering.tdg@gmail.com
              </p>
              <p className="text-sm text-gray-500 mt-1">Balasan dalam 1x24 jam</p>
            </a>
          </div>
        </div>
      </section>

      {/* Form & Address Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="font-heading text-2xl font-bold text-gray-800 mb-2">
                Kirim Pesan
              </h2>
              <p className="text-gray-500 mb-6 text-sm">
                Isi formulir di bawah dan tim kami akan segera merespons Anda.
              </p>
              <ContactForm />
            </div>

            {/* Right: Address & Map */}
            <div className="space-y-8">
              {/* Kantor */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E5A100] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-[#E5A100]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 mb-1">
                      Kantor
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Jl. Tanimbar Blok C-259, Cimone Mas Permai,
                      <br />
                      Kel. Cimone Jaya, Kec. Karawaci,
                      <br />
                      Kota Tangerang, Banten
                    </p>
                  </div>
                </div>
              </div>

              {/* Dapur */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1B4332] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-[#1B4332]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-800 mb-1">
                      Dapur Produksi
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Jl. Bunga Raya Blok D4 No.10, Griya Sangiang Mas,
                      <br />
                      Kel. Gebang Raya, Kec. Periuk,
                      <br />
                      Kota Tangerang, Banten
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="w-full h-52 bg-gray-200 flex flex-col items-center justify-center gap-2">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-500 text-sm font-medium">Google Maps</span>
                  <span className="text-gray-400 text-xs">Tangerang, Banten</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/6281951366663"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 shadow-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.122 1.522 5.855L.057 23.617a.5.5 0 00.614.65l5.982-1.573A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.894 0-3.668-.523-5.183-1.432l-.371-.22-3.852 1.013 1.03-3.758-.242-.387A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Chat via WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
