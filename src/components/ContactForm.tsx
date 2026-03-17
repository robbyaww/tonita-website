'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    pesan: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    alert(
      `Terima kasih, ${formData.nama}! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.`
    );
    setFormData({ nama: '', email: '', telepon: '', pesan: '' });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="nama"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nama Lengkap <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          required
          value={formData.nama}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap Anda"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-colors text-gray-900 placeholder-gray-400"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Alamat Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="contoh@email.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-colors text-gray-900 placeholder-gray-400"
        />
      </div>

      <div>
        <label
          htmlFor="telepon"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nomor Telepon
        </label>
        <input
          type="tel"
          id="telepon"
          name="telepon"
          value={formData.telepon}
          onChange={handleChange}
          placeholder="+62 8xx xxxx xxxx"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-colors text-gray-900 placeholder-gray-400"
        />
      </div>

      <div>
        <label
          htmlFor="pesan"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Pesan <span className="text-red-500">*</span>
        </label>
        <textarea
          id="pesan"
          name="pesan"
          required
          rows={5}
          value={formData.pesan}
          onChange={handleChange}
          placeholder="Tuliskan pertanyaan atau kebutuhan catering Anda di sini..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent transition-colors text-gray-900 placeholder-gray-400 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1B4332] hover:bg-[#163a2b] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Mengirim...
          </>
        ) : (
          'Kirim Pesan'
        )}
      </button>
    </form>
  );
}
