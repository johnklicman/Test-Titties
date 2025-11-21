import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Slater Painting | Professional Painting & Staining in Greenville, SC',
  description: 'Expert painting and staining services for homes and businesses in Greenville, SC. Licensed, insured, and locally trusted.',
  keywords: ['painting', 'staining', 'Greenville SC', 'house painting', 'commercial painting'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

