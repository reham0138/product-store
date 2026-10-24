

const Footer = () => {
  return (
   
     <footer className="mt-12 bg-brand-navy text-brand-yellow">
      <div className="flex flex-col items-center gap-4 px-6 py-8 text-center md:flex-row md:justify-between md:text-left">
        <span className="text-lg font-bold text-brand-yellow">Reham Store</span>
          <ul className="flex gap-4">
            <li>
              <a href="#home" className="hover:text-brand-cream">Home</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/reham-mayea-b94a4a422" target="_blank" className="hover:text-brand-cream">Contact</a>
            </li>
          </ul>
  
      </div>
    </footer>
  )

  
  
}

export default Footer
