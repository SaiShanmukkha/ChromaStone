import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SessionProvider from '@utils/sessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@utils/authOptions'
import NavBar from '@components/nav'
import { NextThemeProvider } from '@components/nextThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChromaStone',
  applicationName: 'ChromaStone',
  description: 'Code and Creativity: My Journey Through the World of Software and Technology',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center justify-center`}>
        <SessionProvider session={session}>
          <NextThemeProvider
            attribute="class"
            defaultTheme={session?.user.profile.themePreference}
          >
            <NavBar />
            <div className='mt-14 w-full globalMaxW'>
              {children}
            </div>
          </NextThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
