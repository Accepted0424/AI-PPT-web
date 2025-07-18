import type { Metadata } from 'next'
import './globals.css'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: 'PPTX',
  description: '一款基于web端的PPT编辑器，开箱即用',
  generator: '徐小夕',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraProvider value={defaultSystem}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
