import './globals.css'
import type { Metadata } from 'next'
import { GlobalContextProvider } from './context/store'

export const metadata: Metadata = {
  title: 'ItFolks - challenge',
  description: 'Frontend next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
        </body>
    </html>
  )
}
