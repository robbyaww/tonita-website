import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Layanan", href: "/layanan" },
  { label: "Menu", href: "/menu" },
  { label: "Sertifikasi", href: "/sertifikasi" },
  { label: "Kontak", href: "/kontak" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B4332" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                style={{ backgroundColor: "#E5A100", color: "#1B4332" }}
              >
                TDG
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">TDG Catering</p>
                <p className="text-xs" style={{ color: "#E5A100" }}>
                  PT. Tonita Dwi Generasi
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Layanan jasa boga terpercaya dengan pengalaman 30+ tahun melayani
              berbagai kebutuhan katering korporat dan event di Tangerang dan
              sekitarnya.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3
              className="font-semibold text-base mb-4"
              style={{ color: "#E5A100" }}
            >
              Navigasi
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3
              className="font-semibold text-base mb-4"
              style={{ color: "#E5A100" }}
            >
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.845L.057 23.57a.75.75 0 00.92.922l5.763-1.47A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.504-5.25-1.385l-.376-.214-3.892.993.998-3.799-.234-.389A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                <a
                  href="https://wa.me/6281951366663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  +62 819 513 6663
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+6281398681880"
                  className="hover:text-white transition-colors duration-200"
                >
                  +62 813 9868 1880
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:tonitacatering.tdg@gmail.com"
                  className="hover:text-white transition-colors duration-200 break-all"
                >
                  tonitacatering.tdg@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Address */}
          <div>
            <h3
              className="font-semibold text-base mb-4"
              style={{ color: "#E5A100" }}
            >
              Alamat Kantor
            </h3>
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <address className="not-italic leading-relaxed">
                Jl. Tanimbar Blok C-259,
                <br />
                Cimone Mas Permai,
                <br />
                Kel. Cimone Jaya, Kec. Karawaci,
                <br />
                Kota Tangerang, Banten
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-400">
            &copy; 2024 PT. Tonita Dwi Generasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
