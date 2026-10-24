import { useState } from 'react'
import logo from '../assets/mad-svgrepo-com.svg'

const  Header = ()=> {
  const [isOpen, setIsOpen] = useState(false)

  return (
    
    <header className="sticky top-0 z-10 bg-brand-navy shadow-md">


      <div className=" flex flex-wrap items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Store logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-brand-yellow">Store</span>
        </a>
         {/* the button only shows when in mobile view */}
        <button
          type="button"
          className="rounded p-2 text-brand-cream hover:bg-brand-blue md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-2 py-2 md:flex-row md:gap-6 md:py-0">
            <li>
              <a
                href="#home"
                className="text-brand-yellow hover:text-brand-cream"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-brand-yellow hover:text-brand-cream"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header