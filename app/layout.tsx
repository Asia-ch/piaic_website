"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/layout/Header' 
import Footer from './components/widgets/Footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
        <Header/>
        {children}
        <Footer/>
        </ChakraProvider>
        </body>
    </html>
  )
}
