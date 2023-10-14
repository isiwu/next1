import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Logo from './load/logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  login,
  log,
}: {
  children: React.ReactNode,
  login: React.ReactNode,
  log: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Loading /> */}
        {/* <div>gfhhfh</div> */}
        <Suspense fallback={<Logo />}>
          {login}
          {log}
          {children}
        </Suspense>
      </body>
    </html>
  )
}
