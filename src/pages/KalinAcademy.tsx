import { motion } from 'framer-motion';
import { Construction, GraduationCap, Presentation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-grupo-kalin.png';
import { Link } from 'react-router-dom';

const KalinAcademy = () => {
  const cards = [
    {
      icon: Presentation,
      title: 'Simpósio',
      description: 'Participe dos nossos simpósios com os melhores profissionais da área de fisioterapia e saúde.',
    },
    {
      icon: GraduationCap,
      title: 'Cursos',
      description: 'Cursos de capacitação e atualização profissional para fisioterapeutas e estudantes.',
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      {/* Header */}
      <header className="bg-background border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Grupo Kalin" className="h-10 w-auto" />
            <span className="font-bold text-lg text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Grupo Kalin Fisioterapia
            </span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">Voltar ao site</Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Em construção */}
        <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
          <Construction className="h-5 w-5" />
          <span className="text-sm font-medium">Página em Construção</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Kalin <span className="text-primary">Academy</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl w-full">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-2xl w-fit mb-2">
                    <card.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                  <Button className="mt-6 w-full" variant="outline" disabled>
                    Em breve
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KalinAcademy;
