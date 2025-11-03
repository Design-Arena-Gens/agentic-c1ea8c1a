import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  weight: ['300', '400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'VitaSync - Smart Nutrition Tracking',
  description: 'Achieve your health goals with intelligent tracking and personalized guidance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
