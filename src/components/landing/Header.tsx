import { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '@/assets/logo-grupo-kalin.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const specialties = [
    'Fisioterapia Neurofuncional',
    'Pélvica',
    'Esportiva',
    'Pediátrica',
    'Traumato-Ortopédica',
    'Gerontológica',
    'Nutricionista',
    'Saúde do Trabalho',
    'Pilates',
    'Reeducação Postural (RPG)',
    'Acupuntura',
    'Recovery',
    'Quiropraxia',
    'Psicologia',
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsSpecialtiesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
        }
      }, 300);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    setIsSpecialtiesOpen(false);
  };

  const handleSchedule = () => {
    window.open('https://api.seufisio.com.br/pre-cadastro/0dba64f3-6a3e-4dc5-99b0-b0e2379b264d/prospect', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10" style={{ backgroundColor: '#07580C' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={() => scrollToSection('#home')} className="flex items-center gap-3">
            <img src={logo} alt="Grupo Kalin" className="h-12 w-auto rounded" />
            <span className="font-bold text-xl text-white hidden sm:block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Grupo Kalin
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection('#home')} className="text-white/80 hover:text-white transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('#quem-somos')} className="text-white/80 hover:text-white transition-colors font-medium">
              Quem Somos
            </button>

            {/* Especialidades dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsSpecialtiesOpen(!isSpecialtiesOpen)}
                className="flex items-center gap-1 text-white/80 hover:text-white transition-colors font-medium"
              >
                Especialidades
                <ChevronDown className={`h-4 w-4 transition-transform ${isSpecialtiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSpecialtiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-lg py-2 z-50">
                  {specialties.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        scrollToSection('#galeria');
                        setIsSpecialtiesOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                  <div className="border-t border-border mt-1 pt-1">
                    <button
                      onClick={handleSchedule}
                      className="block w-full text-left px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                    >
                      Agende sua avaliação →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => navigate('/kalin-partner')} className="text-white/80 hover:text-white transition-colors font-medium">
              Kalin Partner
            </button>
            <button onClick={() => navigate('/kalin-academy')} className="text-white/80 hover:text-white transition-colors font-medium">
              Kalin Academy
            </button>
            <button onClick={() => scrollToSection('#contato')} className="text-white/80 hover:text-white transition-colors font-medium">
              Contatos
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button onClick={handleSchedule} className="gap-2 bg-white text-[#07580C] hover:bg-white/90">
              <Phone className="h-4 w-4" />
              Agende sua Avaliação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col gap-2">
              <button onClick={() => scrollToSection('#home')} className="text-white/80 hover:text-white transition-colors font-medium py-2 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('#quem-somos')} className="text-white/80 hover:text-white transition-colors font-medium py-2 text-left">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('#galeria')} className="text-white/80 hover:text-white transition-colors font-medium py-2 text-left">
                Especialidades
              </button>
              <button onClick={() => { navigate('/kalin-partner'); setIsMenuOpen(false); }} className="text-white/80 hover:text-white transition-colors font-medium py-2 text-left">
                Kalin Partner
              </button>
              <button onClick={() => { navigate('/kalin-academy'); setIsMenuOpen(false); }} className="text-white/80 hover:text-white transition-colors font-medium py-2 text-left">
                Kalin Academy
              </button>
              <button onClick={() => scrollToSection('#contato')} className="text-white/80 hover:text-white transition-colors font-medium py-2 text-left">
                Contatos
              </button>
              <Button onClick={handleSchedule} className="mt-4 gap-2 bg-white text-[#07580C] hover:bg-white/90">
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
