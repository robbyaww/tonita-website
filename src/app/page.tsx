import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
          alt="Catering Nusantara TDG"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACIQAAIBBAIDAQAAAAAAAAAAAAECAwQREiExBRNB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIDEQASIf/aAAwDAQACEQMRAD8AqHbWt3pdTBeTz2ryGSMlH3UjGCPYx71VDSmFr2k6jZX8MDzqjmVFVjg9X4wPFaLNnLLQq5bSALiC0pYUJJVQpY5J65o5xrFtNSWuXJKiiHgGMf/Z"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(27, 67, 50, 0.82)" }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-4 inline-block px-4 py-1 rounded-full border border-yellow-400 text-yellow-400 text-sm font-medium tracking-widest uppercase">
            PT. Tonita Dwi Generasi
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Catering Nusantara Terpercaya{" "}
            <span style={{ color: "#E5A100" }}>Sejak 1985</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kami hadir memberikan layanan katering profesional dengan cita rasa
            masakan nusantara terbaik untuk kebutuhan harian, buffet, dan
            berbagai acara spesial Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281951366663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#E5A100" }}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Kami
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-lg border-2 border-white transition-all duration-200 hover:bg-white hover:text-green-900 hover:scale-105"
            >
              Lihat Menu
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Tentang Kami Ringkas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#E5A100" }}
            >
              Tentang Kami
            </span>
            <h2
              className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4"
              style={{ color: "#1B4332" }}
            >
              PT. Tonita Dwi Generasi
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              PT. Tonita Dwi Generasi (TDG) adalah perusahaan jasa boga yang
              berpengalaman melayani kebutuhan katering korporat dan acara di
              wilayah Tangerang dan sekitarnya. Berdiri sejak 16 Maret 2016
              sebagai kelanjutan dari CV. Tonita (berdiri 1985), kami membawa
              warisan cita rasa masakan nusantara dengan standar kualitas dan
              kehigienisan modern.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                value: "30+",
                label: "Tahun Pengalaman",
                desc: "Melayani sejak 1985",
              },
              {
                value: "20+",
                label: "Klien Korporat",
                desc: "Perusahaan nasional terkemuka",
              },
              {
                value: "17",
                label: "Tenaga Profesional",
                desc: "Tim berpengalaman & terlatih",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                style={{ borderTopColor: "#E5A100", borderTopWidth: "4px" }}
              >
                <div
                  className="font-heading text-5xl font-bold mb-2"
                  style={{ color: "#E5A100" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-semibold text-lg mb-1"
                  style={{ color: "#1B4332" }}
                >
                  {stat.label}
                </div>
                <div className="text-gray-500 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 font-semibold transition-colors duration-200 hover:underline"
              style={{ color: "#1B4332" }}
            >
              Pelajari Lebih Lanjut
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
            </Link>
          </div>
        </div>
      </section>

      {/* Layanan Kami */}
      <section className="py-20" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#E5A100" }}
            >
              Layanan Kami
            </span>
            <h2
              className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4"
              style={{ color: "#1B4332" }}
            >
              Solusi Katering Lengkap
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Kami menyediakan berbagai layanan katering yang dapat disesuaikan
              dengan kebutuhan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Catering Harian */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#e8f5e9" }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="#1B4332"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3
                className="font-heading text-xl font-bold mb-3"
                style={{ color: "#1B4332" }}
              >
                Catering Harian
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Layanan katering harian untuk staff, karyawan, atau pekerja
                pabrik maupun kantoran. Menu bervariasi setiap hari dengan cita
                rasa nusantara yang lezat dan bergizi.
              </p>
              <Link
                href="/layanan"
                className="inline-flex items-center gap-1 mt-6 font-semibold text-sm transition-colors duration-200 hover:underline"
                style={{ color: "#E5A100" }}
              >
                Selengkapnya
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
              </Link>
            </div>

            {/* Catering Buffet/Event */}
            <div
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col text-white"
              style={{ backgroundColor: "#1B4332" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(229, 161, 0, 0.2)" }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="#E5A100"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.5V19a2 2 0 002 2h14a2 2 0 002-2v-5.5M3 13.5h18M3 13.5L5.5 6h13L21 13.5M9 7V3m6 4V3"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">
                Catering Buffet / Event
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow">
                Layanan katering prasmanan untuk berbagai acara: acara kantor,
                meeting, workshop, seminar, syukuran, resepsi, dan acara
                keluarga lainnya.
              </p>
              <Link
                href="/layanan"
                className="inline-flex items-center gap-1 mt-6 font-semibold text-sm transition-opacity duration-200 hover:opacity-80"
                style={{ color: "#E5A100" }}
              >
                Selengkapnya
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
              </Link>
            </div>

            {/* Nasi Box/Snack Box */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#e8f5e9" }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="#1B4332"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
                  />
                </svg>
              </div>
              <h3
                className="font-heading text-xl font-bold mb-3"
                style={{ color: "#1B4332" }}
              >
                Nasi Box / Snack Box
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Layanan katering dengan kemasan praktis berupa nasi kotak maupun
                nasi bungkus. Cocok untuk acara rapat, seminar, atau kebutuhan
                konsumsi massal lainnya.
              </p>
              <Link
                href="/layanan"
                className="inline-flex items-center gap-1 mt-6 font-semibold text-sm transition-colors duration-200 hover:underline"
                style={{ color: "#E5A100" }}
              >
                Selengkapnya
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mengapa Memilih Kami */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#E5A100" }}
            >
              Keunggulan Kami
            </span>
            <h2
              className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4"
              style={{ color: "#1B4332" }}
            >
              Mengapa Memilih TDG?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Kami berkomitmen memberikan layanan terbaik dengan standar kualitas
              tertinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                ),
                title: "Bersertifikat Halal MUI",
                desc: "Semua produk telah mendapatkan sertifikasi halal resmi dari MUI, menjamin kehalalan setiap sajian.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "30+ Tahun Pengalaman",
                desc: "Berpengalaman sejak 1985, kami memahami kebutuhan dan selera pelanggan dengan sangat baik.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ),
                title: "Quality Control Ketat",
                desc: "Setiap masakan melalui proses quality control yang ketat untuk memastikan standar kualitas terjaga.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                    />
                  </svg>
                ),
                title: "Bahan Baku Segar",
                desc: "Menggunakan bahan baku segar pilihan yang dipilih setiap hari untuk menjaga kualitas dan kesegaran.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-green-100 hover:shadow-md transition-all duration-200 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#e8f5e9", color: "#1B4332" }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="font-heading font-bold text-lg mb-2"
                  style={{ color: "#1B4332" }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Klien Kami */}
      <section className="py-20" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#E5A100" }}
            >
              Dipercaya Oleh
            </span>
            <h2
              className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4"
              style={{ color: "#1B4332" }}
            >
              Klien Korporat Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Kami telah melayani lebih dari 20 perusahaan terkemuka di wilayah
              Tangerang dan sekitarnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "PT. Indofood Fortuna Makmur",
                location: "Cikokol, Tangerang",
                initial: "IF",
              },
              {
                name: "PT. Indofood CBP Sukses Makmur",
                location: "Bitung, Tangerang",
                initial: "IC",
              },
              {
                name: "PT. Panarub Industry",
                location: "Pasar Baru, Tangerang",
                initial: "PI",
              },
            ].map((client) => (
              <div
                key={client.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-sm font-heading"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  {client.initial}
                </div>
                <div>
                  <p
                    className="font-semibold font-heading"
                    style={{ color: "#1B4332" }}
                  >
                    {client.name}
                  </p>
                  <p className="text-gray-500 text-sm">{client.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#1B4332" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold tracking-widest uppercase mb-4"
            style={{
              backgroundColor: "rgba(229, 161, 0, 0.2)",
              color: "#E5A100",
            }}
          >
            Hubungi Kami
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Siap Memesan?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Hubungi kami via WhatsApp untuk konsultasi menu dan pemesanan.
            Kami siap melayani kebutuhan katering Anda.
          </p>
          <a
            href="https://wa.me/6281951366663"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-bold text-lg bg-white transition-all duration-200 hover:bg-gray-100 hover:scale-105 shadow-xl"
            style={{ color: "#1B4332" }}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi via WhatsApp
          </a>
          <p className="text-gray-400 text-sm mt-6">
            Atau email kami di{" "}
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
