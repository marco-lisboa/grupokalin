import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-grupo-kalin.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#quem-somos', label: 'Quem Somos' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#galeria', label: 'Especialidades' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={() => scrollToSection('#home')} className="flex items-center gap-3">
            <img src={logo} alt="Grupo Kalin" className="h-12 w-auto" />
            <span className="font-bold text-xl text-primary hidden sm:block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Grupo Kalin Fisioterapia
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection('#contato')}
              className="gap-2"
            >
              <Phone className="h-4 w-4" />
              Agende sua Avaliação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contato')}
                className="mt-4 gap-2"
              >
                <Phone className="h-4 w-4" />
                Agende sua Avaliação
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
