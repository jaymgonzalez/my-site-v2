'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
        >
          <div className="relative group/spotlight">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              <a
                href="#content"
                className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
              >
                Skip to Content
              </a>

              {children}
            </div>
          </div>
        </body>
      </html>
    </QueryClientProvider>
  )
}
