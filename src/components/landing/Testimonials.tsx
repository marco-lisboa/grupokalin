import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Paciente de Fisioterapia',
      content: 'Depois de anos sofrendo com dores nas costas, finalmente encontrei alívio com o tratamento do Grupo Kalin. Os profissionais são extremamente atenciosos e competentes.',
      rating: 5,
      initials: 'MS',
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Aluno de Pilates',
      content: 'O pilates mudou minha vida! Minha postura melhorou significativamente e as dores que eu sentia praticamente desapareceram. Recomendo demais!',
      rating: 5,
      initials: 'JS',
    },
    {
      id: 3,
      name: 'Ana Oliveira',
      role: 'Paciente de Reabilitação',
      content: 'Após minha cirurgia no joelho, o acompanhamento da fisioterapia foi essencial para minha recuperação. Equipe incrível e resultados excelentes!',
      rating: 5,
      initials: 'AO',
    },
    {
      id: 4,
      name: 'Carlos Ferreira',
      role: 'Paciente de Fisioterapia',
      content: 'Profissionais muito qualificados e atenciosos. O ambiente é acolhedor e os resultados do tratamento superaram minhas expectativas.',
      rating: 5,
      initials: 'CF',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Depoimentos
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            O que nossos{' '}
            <span className="text-primary">pacientes dizem</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos pacientes é nossa maior recompensa. 
            Veja o que eles têm a dizer sobre nossa clínica.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-gradient-to-br from-secondary/50 to-accent/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/10" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonials[currentIndex].initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-primary/20'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
