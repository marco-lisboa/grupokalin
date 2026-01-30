import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder images - will be replaced with actual clinic photos
  const galleryItems = [
    { id: 1, title: 'Sala de Fisioterapia', category: 'Estrutura' },
    { id: 2, title: 'Equipamentos Modernos', category: 'Equipamentos' },
    { id: 3, title: 'Studio de Pilates', category: 'Pilates' },
    { id: 4, title: 'Atendimento Personalizado', category: 'Atendimento' },
    { id: 5, title: 'Recepção', category: 'Estrutura' },
    { id: 6, title: 'Área de Exercícios', category: 'Equipamentos' },
  ];

  return (
    <section id="galeria" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Galeria
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Conheça nosso{' '}
            <span className="text-primary">espaço</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Um ambiente pensado para proporcionar conforto e bem-estar durante todo o seu tratamento.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Camera className="h-12 w-12 text-primary/40 mb-4" />
                <p className="text-primary/60 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {item.title}
                </p>
                <span className="text-primary/40 text-sm mt-1">{item.category}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <p className="font-semibold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.title}
                  </p>
                  <span className="text-sm opacity-80">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about photos */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          * As fotos da clínica serão adicionadas em breve
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;
