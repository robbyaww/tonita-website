import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tentang Kami | PT. Tonita Dwi Generasi',
  description:
    'Kenali PT. Tonita Dwi Generasi (TDG Catering) — perusahaan catering nusantara terpercaya sejak 1985 yang berlokasi di Tangerang, Banten. Pelajari sejarah, visi misi, tim manajemen, dan fasilitas kami.',
}

const milestones = [
  {
    year: '1985',
    title: 'Berdirinya CV. Tonita',
    description:
      'Perjalanan kami dimulai dengan berdirinya CV. Tonita, sebuah usaha catering yang berfokus pada masakan khas nusantara. Dengan dedikasi penuh terhadap kualitas dan cita rasa, kami mulai melayani berbagai kebutuhan katering di wilayah Tangerang.',
  },
  {
    year: '2016',
    title: 'Transformasi menjadi PT. Tonita Dwi Generasi',
    description:
      'Pada 16 Maret 2016, usaha keluarga ini bertransformasi menjadi PT. Tonita Dwi Generasi (TDG) — generasi kedua yang membawa semangat baru, standar lebih tinggi, dan jangkauan layanan yang lebih luas. Dengan pengalaman 30+ tahun, kami siap melayani klien korporat maupun perorangan secara profesional.',
  },
]

const misiItems = [
  'Menjaga kualitas dan cita rasa tiap masakan dengan mementingkan kebersihan dan kehalalan makanan.',
  'Memberikan pelayanan terbaik terhadap seluruh konsumen.',
  'Melakukan quality control yang ketat dalam produksi dan distribusi makanan.',
]

const teamMembers = [
  {
    name: 'Ir. Medtry, ST., MT',
    role: 'Komisaris',
    initials: 'IM',
  },
  {
    name: 'Novita Hartono, SE',
    role: 'Direktur',
    initials: 'NH',
  },
]

const divisions = ['Keuangan', 'Pembelian', 'Produksi', 'Akomodasi']

const facilities = [
  {
    name: 'Ruang Racik',
    description:
      'Area persiapan bahan baku yang bersih dan terorganisir untuk memastikan setiap bahan diproses dengan higienis.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    alt: 'Ruang Racik Dapur TDG Catering',
  },
  {
    name: 'Ruang Cuci',
    description:
      'Fasilitas pencucian berstandar tinggi untuk menjamin kebersihan bahan baku dan peralatan masak sebelum proses pengolahan.',
    image:
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80',
    alt: 'Ruang Cuci Dapur TDG Catering',
  },
  {
    name: 'Ruang Dapur',
    description:
      'Dapur industri lengkap dengan peralatan modern untuk mengolah makanan dalam skala besar tanpa mengorbankan kualitas.',
    image:
      'https://images.unsplash.com/photo-1565117531952-51c3a987ad66?w=600&q=80',
    alt: 'Ruang Dapur TDG Catering',
  },
]

export default function TentangPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white pt-20 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-3" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="transition-colors hover:text-[#E5A100]">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-[#1B4332]" aria-current="page">
                Tentang Kami
              </li>
            </ol>
          </nav>
          <h1 className="font-heading text-3xl font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            Tentang Kami
          </h1>
        </div>
      </section>

      {/* Sejarah */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Sejarah Perusahaan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Perjalanan panjang kami dalam menghadirkan cita rasa nusantara
              terbaik selama lebih dari tiga dekade.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-[#1B4332]/20 md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col items-center gap-6 md:flex-row ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-5/12">
                    <div
                      className={`rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm ${
                        index % 2 === 1 ? 'md:text-right' : ''
                      }`}
                    >
                      <h3 className="font-heading text-xl font-bold text-[#1B4332]">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Year badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1B4332] shadow-lg ring-4 ring-white">
                      <span className="font-heading text-sm font-bold text-[#E5A100]">
                        {milestone.year}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden w-5/12 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Visi &amp; Misi
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Landasan yang mengarahkan setiap langkah kami dalam melayani.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Visi */}
            <div className="flex flex-col rounded-2xl bg-[#1B4332] p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E5A100]">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#E5A100]">
                Visi
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-green-100">
                Menjadi catering terbaik dengan memberikan pelayanan yang
                profesional dan maksimal untuk kepuasan pelanggan.
              </p>
            </div>

            {/* Misi */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1B4332]">
                <svg
                  className="h-6 w-6 text-[#E5A100]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#1B4332]">
                Misi
              </h3>
              <ol className="mt-4 space-y-4">
                {misiItems.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#E5A100] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="leading-relaxed text-gray-700">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Tim Manajemen */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Tim Manajemen
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Dipimpin oleh para profesional berpengalaman di bidang jasa boga.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl gap-8 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Avatar */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1B4332] shadow-md ring-4 ring-[#E5A100]/30">
                  <span className="font-heading text-2xl font-bold text-[#E5A100]">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-heading mt-5 text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <span className="mt-2 inline-block rounded-full bg-[#1B4332]/10 px-4 py-1 text-sm font-semibold text-[#1B4332]">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Struktur Organisasi
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Organisasi yang terstruktur untuk memastikan operasional yang
              optimal.
            </p>
          </div>

          <div className="flex flex-col items-center gap-0">
            {/* Komisaris */}
            <OrgBox label="Komisaris" accent />

            <OrgConnector />

            {/* Direktur */}
            <OrgBox label="Direktur" />

            <OrgConnector />

            {/* General Manager */}
            <OrgBox label="General Manager" />

            {/* Horizontal connector to divisions */}
            <div className="flex w-full flex-col items-center">
              <div className="h-8 w-0.5 bg-[#1B4332]/30" />
              {/* Horizontal line */}
              <div className="relative flex w-full max-w-2xl items-start justify-between px-4">
                <div className="absolute left-1/2 top-0 h-0.5 w-full -translate-x-1/2 bg-[#1B4332]/30" />
                {divisions.map((div) => (
                  <div
                    key={div}
                    className="relative flex flex-col items-center"
                    style={{ width: '25%' }}
                  >
                    <div className="h-8 w-0.5 bg-[#1B4332]/30" />
                    <div className="rounded-lg border-2 border-[#E5A100] bg-white px-3 py-2 text-center shadow-sm">
                      <span className="font-heading text-xs font-semibold text-[#1B4332] sm:text-sm">
                        {div}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Dapur */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              Fasilitas Dapur
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Dapur kami dilengkapi dengan fasilitas lengkap dan berstandar
              industri untuk memastikan setiap hidangan dibuat dengan kondisi
              terbaik.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div
                key={facility.name}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-heading text-lg font-bold text-white">
                    {facility.name}
                  </span>
                </div>
                <div className="p-5">
                  <p className="leading-relaxed text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B4332] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Tertarik Bekerja Sama dengan Kami?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-green-200">
            Hubungi kami sekarang dan konsultasikan kebutuhan katering Anda
            bersama tim profesional TDG Catering.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/6281951366663"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#E5A100] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#cc8f00] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E5A100] focus:ring-offset-2 focus:ring-offset-[#1B4332]"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi via WhatsApp
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white hover:text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1B4332]"
            >
              Lihat Halaman Kontak
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function OrgBox({
  label,
  accent = false,
}: {
  label: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-xl px-8 py-3 text-center shadow-md ${
        accent
          ? 'bg-[#E5A100] text-white'
          : 'border-2 border-[#1B4332] bg-white text-[#1B4332]'
      }`}
    >
      <span className="font-heading text-sm font-bold sm:text-base">
        {label}
      </span>
    </div>
  )
}

function OrgConnector() {
  return <div className="h-8 w-0.5 bg-[#1B4332]/30" />
}
