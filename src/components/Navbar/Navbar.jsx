import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
  const [isOpen, setIsOpen] = useState (false);
  const [scrolled, setScrolled] = useState (false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Personajes", href: "/characters" },
    { name: "Mapa", href: "/mapa" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? "bg-bg-navbar/90 backdrop-blur-md shadow-card" : "bg-bg-navbar/40 backdrop-blur-sm"} border-b border-border-main/30`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between h-16 md:h-20">

                <Link to="/" className="font-cinzel text-xl md:text-2xl font-semibold tracking-wider text-text-primary hover:text-accent transition-colors duration-300">
                    Hallownest
                </Link>

                <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
                    {navLinks.map (link => (
                        <li key={link.name}>
                            <Link to={link.href} className="block px-4 py-2 font-cinzel text-sm uppercase tracking-widest text-text-secondary transition-colors duration-300 hover:text-accent">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button onClick={() => setIsOpen (!isOpen)} className="md:hidden p-2 rounded-md text-text-secondary hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                        )}
                    </svg>
                </button>

            </div>

        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-bg-navbar/95 backdrop-blur-md border-b border-border-main/30`}>
            
            <ul className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map (link => (
                    <li key={link.name}>
                        <Link to={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 font-cinzel text-sm uppercase tracking-widest text-text-secondary hover:text-accent hover:bg-accent/5 rounded-sm transition-all duration-200">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        
        </div>
    
    </nav>
  );
}