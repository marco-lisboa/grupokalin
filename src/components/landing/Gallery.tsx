import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

import ortopedicaImg from '@/assets/specialty-ortopedica.jpg';
import esportivaImg from '@/assets/specialty-esportiva.jpg';
import pilatesImg from '@/assets/specialty-pilates.jpg';
import rpgImg from '@/assets/specialty-rpg.jpg';
import acupunturaImg from '@/assets/specialty-acupuntura.jpg';
import neurofuncionalImg from '@/assets/specialty-neurofuncional.jpg';
import pelvicaImg from '@/assets/specialty-pelvica.jpg';
import pediatricaImg from '@/assets/specialty-pediatrica.jpg';
import gerontologicaImg from '@/assets/specialty-gerontologica.jpg';
import nutricionistaImg from '@/assets/specialty-nutricionista.jpg';
import saudeTrabalhoImg from '@/assets/specialty-saude-trabalho.jpg';
import recoveryImg from '@/assets/specialty-recovery.jpg';
import quiropraxiaImg from '@/assets/specialty-respiratoria.jpg';
import psicologiaImg from '@/assets/specialty-psicologia.jpg';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specialties = [
    { id: 1, title: 'Fisioterapia Neurofuncional', image: neurofuncionalImg },
    { id: 2, title: 'Pélvica', image: pelvicaImg },
    { id: 3, title: 'Esportiva', image: esportivaImg },
    { id: 4, title: 'Pediátrica', image: pediatricaImg },
    { id: 5, title: 'Traumato-Ortopédica', image: ortopedicaImg },
    { id: 6, title: 'Gerontológica', image: gerontologicaImg },
    { id: 7, title: 'Nutricionista', image: nutricionistaImg },
    { id: 8, title: 'Saúde do Trabalho', image: saudeTrabalhoImg },
    { id: 9, title: 'Pilates', image: pilatesImg, cta: true },
    { id: 10, title: 'Reeducação Postural (RPG)', image: rpgImg },
    { id: 11, title: 'Acupuntura', image: acupunturaImg },
    { id: 12, title: 'Recovery', image: recoveryImg },
    { id: 13, title: 'Quiropraxia', image: quiropraxiaImg },
    { id: 14, title: 'Psicologia', image: psicologiaImg },
  ];

  const handleSchedule = () => {
    window.open('https://api.seufisio.com.br/pre-cadastro/0dba64f3-6a3e-4dc5-99b0-b0e2379b264d/prospect', '_blank');
  };

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Nossas Especialidades
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Atendimento particular
          </h3>
          <p className="text-sm text-muted-foreground">
            *Imagens meramente ilustrativas.
          </p>
        </motion.div>

        {/* Specialty cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              onClick={specialty.cta ? handleSchedule : undefined}
            >
              <img 
                src={specialty.image} 
                alt={specialty.title}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-semibold text-center text-xs md:text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {specialty.title}
                </p>
                {specialty.cta && (
                  <p className="text-white/80 text-center text-xs mt-1">Agende sua avaliação →</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button onClick={handleSchedule} size="lg">
            Agende sua avaliação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
