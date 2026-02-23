import type { Metadata } from 'next'
import { Nunito, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "sonner"
import './globals.css'

const _nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Instituto Palavra Bem Dita',
  description: 'Dedicado ao aprimoramento da comunicação humana. Grupos sistêmicos, processos terapêuticos, Método FLUIR e Método TEIAR.',
  generator: 'v0.app',
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
}

export const viewport = {
  themeColor: '#7ab89b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
