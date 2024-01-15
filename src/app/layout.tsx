import Providers from '@/components/ui/Providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {Toaster} from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Context Window',
  description: 'Your Window to Context to Any Doc!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <Providers>
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Toaster/>
    </html>
   </Providers>
  )
}
