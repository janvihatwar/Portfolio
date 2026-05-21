import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import About from "@/app/about/page"
import Projects from "./projects/page"
import Contact from "./contact/page"
import ExperiencePage from "./experiance/page"
import TechPage from "./tech/page"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Janvi&apos;s Portfolio",
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
        <About/>
        <TechPage/>
        <ExperiencePage/>
        <Projects/>
        <Contact/>
      </body>
    </html>
  )
}