import { Metadata } from 'next';
import MenuContent from '@/components/MenuContent';

export const metadata: Metadata = {
  title: 'Daftar Menu | PT. Tonita Dwi Generasi - TDG Catering',
  description:
    'Jelajahi daftar menu lengkap TDG Catering — hidangan ayam, daging, ikan, telur, sayuran, dan tambahan khas nusantara. Menu dapat disesuaikan sesuai permintaan.',
  keywords: [
    'menu catering',
    'menu nusantara',
    'catering tangerang',
    'TDG catering menu',
    'PT Tonita Dwi Generasi',
  ],
};

export default function MenuPage() {
  return <MenuContent />;
}
