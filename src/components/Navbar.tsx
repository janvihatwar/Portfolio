import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
        <Link href="/" className="flex items-center space-x-2">
          {/* Add your logo - replace '/logo.png' with your actual logo path */}
          <Image 
            src="/images/jh-logo11.png" 
            alt="Janvi Hatwar" 
            width={48}
            height={48}
            className="rounded-full w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[60px] md:h-[60px]"
          />
          
        </Link>
        
        <div className="space-x-3 sm:space-x-4 md:space-x-6 text-sm sm:text-base">
          <Link 
            href="/" 
            className="text-[#1a1a1a] dark:text-white hover:text-[#0066ff] dark:hover:text-[#0066ff] transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-[#1a1a1a] dark:text-white hover:text-[#0066ff] dark:hover:text-[#0066ff] transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className="text-[#1a1a1a] dark:text-white hover:text-[#0066ff] dark:hover:text-[#0066ff] transition-colors duration-200"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="text-[#1a1a1a] dark:text-white hover:text-[#0066ff] dark:hover:text-[#0066ff] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}