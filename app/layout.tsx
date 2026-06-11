import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'HybrixAI - AI Voice Agents & Business Automation',
  description:
    'AI voice agents that answer calls, book appointments, capture leads and support customers 24/7.',
  keywords: [
    'AI voice agent',
    'AI receptionist',
    'AI phone answering',
    'AI automation',
    'business automation'
  ],
  openGraph: {
    title: 'HybrixAI',
    description: 'AI Voice Agents for Businesses',
    url: 'https://hybrixai.com',
    siteName: 'HybrixAI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        <script async src="https://assets.calendly.com/assets/external/widget.js"></script>
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
