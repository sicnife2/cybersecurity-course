import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CyberSecurity Guide - Free Comprehensive Security Education',
  description: 'Free cybersecurity education platform with interactive tutorials, real-time threat intelligence, and security tools. Learn to protect yourself online.',
  keywords: 'cybersecurity, security, education, free, tutorials, hacking, protection, privacy',
  authors: [{ name: 'CyberSecurity Community' }],
  openGraph: {
    title: 'CyberSecurity Guide - Free Security Education',
    description: 'Learn cybersecurity for free with interactive tutorials and tools',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-dark-900">
          {children}
        </div>
      </body>
    </html>
  )
} 