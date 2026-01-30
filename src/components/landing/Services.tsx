import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Activity, Dumbbell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Activity,
      title: 'Fisioterapia Geral',
      description: 'Tratamento completo para reabilitação e alívio de dores',
      features: [
        'Tratamento de dores musculares e articulares',
        'Reabilitação pós-cirúrgica',
        'Recuperação de lesões esportivas',
        'Tratamento de problemas posturais',
        'Fisioterapia respiratória',
        'Terapia manual e liberação miofascial',
      ],
      gradient: 'from-primary/10 to-primary/5',
    },
    {
      icon: Dumbbell,
      title: 'Pilates Clínico',
      description: 'Fortalecimento e bem-estar com acompanhamento profissional',
      features: [
        'Fortalecimento muscular global',
        'Melhora da postura e flexibilidade',
        'Prevenção de lesões',
        'Alívio de dores na coluna',
        'Condicionamento físico',
        'Aulas individuais ou em pequenos grupos',
      ],
      gradient: 'from-accent to-secondary',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Nossos Serviços
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Cuidado especializado para{' '}
            <span className="text-primary">cada necessidade</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Oferecemos serviços de fisioterapia e pilates com profissionais qualificados, 
            equipamentos modernos e um ambiente acolhedor para sua recuperação.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />
                <CardHeader className="relative pb-4">
                  <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
