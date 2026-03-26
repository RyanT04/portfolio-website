import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Ryan Tang Kwang Loke | Software Engineer',
  description: 'Portfolio of Ryan Tang Kwang Loke - Software Engineer specializing in full-stack development, cloud infrastructure, and AI integration. University of Southampton BEng Software Engineering.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'Go', 'TypeScript', 'AWS', 'Malaysia'],
  authors: [{ name: 'Ryan Tang Kwang Loke' }],
  openGraph: {
    title: 'Ryan Tang Kwang Loke | Software Engineer',
    description: 'Portfolio of Ryan Tang Kwang Loke - Software Engineer',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-96x96.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
