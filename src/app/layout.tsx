import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Sora } from 'next/font/google'
import './globals.css'
import { COMPANY_INFO } from '@/constants'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.siteUrl),
  title: {
    default: 'DoQmentor | Global Documentation and Business Consulting',
    template: '%s | DoQmentor',
  },
  description:
    'DoQmentor helps businesses with documentation, licensing, registration, trademark, passport, attestation, and cross-border consulting services.',
  keywords: [
    'DoQmentor',
    'business consulting',
    'documentation services',
    'passport services',
    'embassy attestation',
    'company registration',
    'trademark registration',
    'import export licence',
    'GST registration',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: COMPANY_INFO.siteUrl,
    siteName: COMPANY_INFO.name,
    title: 'DoQmentor | Global Documentation and Business Consulting',
    description:
      'Trusted support for documentation, licensing, registration, attestation, and business growth services.',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'DoQmentor logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DoQmentor | Global Documentation and Business Consulting',
    description:
      'Trusted support for documentation, licensing, registration, attestation, and business growth services.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/logo.png', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
