import { Heart, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo-grupo-kalin.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#quem-somos', label: 'Quem Somos' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background/90">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Grupo Kalin" className="h-12 w-auto brightness-0 invert" />
              <span className="font-bold text-xl text-background" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Grupo Kalin Fisioterapia
              </span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Cuidando da sua saúde e bem-estar com excelência em fisioterapia e pilates. 
              Seu corpo merece o melhor cuidado.
            </p>
            <a
              href="https://www.instagram.com/grupokalin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @grupokalin
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (00) 00000-0000
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@grupokalin.com.br"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contato@grupokalin.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Rua Exemplo, 123 - Centro</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Grupo Kalin. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1 text-background/60 text-sm">
              Feito com <Heart className="h-4 w-4 text-red-400 fill-red-400" /> para sua saúde
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
