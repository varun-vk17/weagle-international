import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Weagle International - Premium Indian Spice Exports | B2B Spice Supplier',
  description: 'Import Indian Spices With Complete Peace of Mind. Trusted B2B spice exporter supplying blended spices, pure spice powders, and seasonings to USA, UK, EU, Nigeria, and Ghana. ISO & FDA compliant.',
  keywords: ['Indian spice export', 'B2B spice supplier', 'bulk spice import', 'spice distributor', 'blended spices', 'pure spice powders', 'seasonings export', 'ISO certified spices', 'FDA compliant spices'],
  authors: [{ name: 'Weagle International' }],
  creator: 'Weagle International',
  publisher: 'Weagle International',
  metadataBase: new URL('https://weagleinternational.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weagleinternational.com',
    title: 'Weagle International - Premium Indian Spice Exports | B2B Spice Supplier',
    description: 'Import Indian Spices With Complete Peace of Mind. Trusted B2B spice exporter supplying blended spices, pure spice powders, and seasonings to USA, UK, EU, Nigeria, and Ghana.',
    siteName: 'Weagle International',
    images: [
      {
        url: '/product_spice.png',
        width: 1200,
        height: 630,
        alt: 'Weagle International - Premium Export Quality Spices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weagle International - Premium Indian Spice Exports',
    description: 'Import Indian Spices With Complete Peace of Mind. ISO & FDA compliant B2B spice supplier.',
    images: ['/product_spice.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
