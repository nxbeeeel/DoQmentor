import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DoQmentor - Global Business Consulting',
  description: 'Empowering your vision with comprehensive global consulting services for documentation, licensing, and business expansion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: 'light !important' }}>
      <body className={inter.className} style={{ colorScheme: 'light !important', background: '#1e3a8a !important' }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
