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
  title: 'Weagle International | Premium Indian Spice Exporter & Manufacturer',
  description: 'Weagle International: Your trusted partner for Indian spice exports. Weagle supplies premium blended spices, pure powders, and seasonings globally. ISO & FDA compliant.',
  keywords: ['Weagle', 'Weagle International', 'Weagle spice exporter', 'Indian spice export', 'B2B spice supplier', 'bulk spice import', 'spice distributor', 'blended spices', 'pure spice powders'],
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
  icons: {
    icon: '/weagle-logo.svg',
    shortcut: '/weagle-logo.svg',
    apple: '/logo.png',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Weagle International',
              alternateName: 'Weagle',
              url: 'https://weagleinternational.com',
              logo: 'https://weagleinternational.com/logo.png',
              description: 'Weagle International is a premier exporter and manufacturer of high-quality Indian spices since 2019. We supply blended spices, pure spice powders, and custom seasonings to global markets including USA, UK, EU, Nigeria, and Ghana.',
              foundingDate: '2019',
              sameAs: [
                'https://linkedin.com/company/weagle-international',
                'https://instagram.com/weagleinternational'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-7200550188',
                email: 'info@weagleinternational.com',
                contactType: 'sales',
                areaServed: ['US', 'GB', 'EU', 'NG', 'GH', 'IN'],
                availableLanguage: ['English', 'French', 'Spanish', 'German', 'Arabic', 'Portuguese']
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressLocality: 'India'
              },
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'Blended Spices & Masalas',
                    description: 'Premium blended spice mixes for global export'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'Pure Spice Powders',
                    description: 'Single-origin pure spice powders'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Product',
                    name: 'International Herbs and Seasonings',
                    description: 'Custom seasoning blends for foodservice'
                  }
                }
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '1'
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://weagleinternational.com/#localbusiness',
              name: 'Weagle International',
              image: 'https://weagleinternational.com/logo.png',
              telephone: '+91-7200550188',
              email: 'info@weagleinternational.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN'
              },
              geo: {
                '@type': 'GeoCoordinates',
                addressCountry: 'IN'
              },
              url: 'https://weagleinternational.com',
              priceRange: '$$',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
              }
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
