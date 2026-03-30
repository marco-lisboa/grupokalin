import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

// Import specialty images
import ortopedicaImg from '@/assets/specialty-ortopedica.jpg';
import esportivaImg from '@/assets/specialty-esportiva.jpg';
import pilatesImg from '@/assets/specialty-pilates.jpg';
import rpgImg from '@/assets/specialty-rpg.jpg';
import acupunturaImg from '@/assets/specialty-acupuntura.jpg';
import respiratoriaImg from '@/assets/specialty-respiratoria.jpg';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specialties = [
    { id: 1, title: 'Traumato-Ortopédica', image: ortopedicaImg },
    { id: 2, title: 'Fisioterapia Esportiva', image: esportivaImg },
    { id: 3, title: 'Pilates', image: pilatesImg },
    { id: 4, title: 'Reeducação Postural (RPG)', image: rpgImg },
    { id: 5, title: 'Acupuntura', image: acupunturaImg },
    { id: 6, title: 'Quiropraxia', image: respiratoriaImg },
  ];

  const handleSchedule = () => {
    window.open('https://api.seufisio.com.br/pre-cadastro/0dba64f3-6a3e-4dc5-99b0-b0e2379b264d/prospect', '_blank');
  };

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Nossas especialidades
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Atendimento particular
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fisioterapia nas áreas: <span className="text-foreground font-medium">Neurofuncional, Pélvica, Esportiva, Pediátrica, Traumato-Ortopédica, Gerontológica, Saúde do Trabalho, Pilates, Reeducação Postural (RPG), Acupuntura, Recovery, Quiropraxia</span>. E ainda: <span className="text-foreground font-medium">Nutricionista, Psicologia</span>.
            </p>
            
            <p className="text-sm text-muted-foreground mb-8">
              *Imagens meramente ilustrativas.
            </p>

            <Button onClick={handleSchedule} size="lg">
              Agende sua avaliação
            </Button>
          </motion.div>

          {/* Right side - Specialty cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <img 
                  src={specialty.image} 
                  alt={specialty.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-background font-semibold text-center text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {specialty.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
