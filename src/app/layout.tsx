import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
// import About from "@/app/about/page"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Janvi's Portfolio",
  description: "Personal portfolio showcasing my work and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <About/> */}
      </body>
    </html>
  )
}