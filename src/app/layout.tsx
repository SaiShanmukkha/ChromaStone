import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChromaStone',
  description: 'Code and Creativity: My Journey Through the World of Software and Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center justify-center`}>
        <NavBar />
        <div className='mt-14 w-full globalMaxW'>
          {children}
        </div>
      </body>
    </html>
  )
}
