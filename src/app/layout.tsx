import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './header';
import Footer from './footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ken Urata - Front-end Engineer',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-full">
      <body className={`${inter.className} h-full min-h-full bg-gray-950 bg-sf bg-cover bg-center`}>
        <div className="min-h-screen w-screen flex flex-col text-white">
          <div className="flex-none">
            <Header />
          </div>
          <main className="flex-auto flex items-center justify-center">
            {children}
          </main>
          <div className="flex-none">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
