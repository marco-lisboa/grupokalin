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
      name: 'Daiane Santos',
      role: 'Aluna de Pilates',
      content: 'Excelente profissionais, atendimento impecável. O Pilates também é perfeito, super aconchegante. Super recomendo!!!!!',
      rating: 5,
      initials: 'DS',
    },
    {
      id: 2,
      name: 'Vera Lucia',
      role: 'Paciente de Fisioterapia Neurofuncional',
      content: 'Carinho, acolhimento e profissionalismo, é o q recebemos da Kalin. Dr. Rodrigo um profissional exemplar e muito competente. Vocês estão de parabéns.',
      rating: 5,
      initials: 'VL',
    },
    {
      id: 3,
      name: 'Lilian Fosse',
      role: 'Paciente de Fisioterapia',
      content: 'Super recomendo o trabalho de recuperação/reabilitação da Fisioterapeuta Dra. Thabita!!! Ela cuidou de mim em mais de 10 sessões de fisioterapia que tive que fazer por dores na minha Cervical devido a hérnia que tenho na cervical!\nSempre com uma abordagem humanizada além das técnicas que diminuíram muito as minhas dores e o meu quadro no geral melhoraram muito no acompanhamento dela! Super recomendo!!!',
      rating: 5,
      initials: 'LF',
    },
    {
      id: 4,
      name: 'Camila Abreu',
      role: 'Paciente de Fisioterapia Pélvica',
      content: 'Amei a experiência, fiz minha fisioterapia pélvica com a fisioterapeuta Dra. Thábita. Excelente profissional!\nMe ajudou muito no meu parto. 💕',
      rating: 5,
      initials: 'CA',
    },
    {
      id: 5,
      name: 'Sra. Vânia Pinheiro',
      role: 'Paciente de Fisioterapia Neurofuncional',
      content: 'Hoje quero deixar registrado o quanto sou grata por ter encontrado um fisioterapeuta tão especial como o Dr. Rodrigo Kalinka. Mais do que um excelente profissional, ele é um ser humano incrível, que cuida de cada paciente com dedicação, atenção e muito carinho. Em cada atendimento é possível perceber o compromisso verdadeiro com a recuperação e o bem-estar de quem está ali. Dr. Rodrigo escuta com atenção, orienta com paciência, explica cada etapa do tratamento e sempre transmite confiança e esperança. A fisioterapia vai muito além de exercícios, e com o Dr. Rodrigo Kalinka aprendemos isso todos os dias: é cuidado, respeito e amor pelo que faz.\n\nMinha admiração e gratidão por todo o profissionalismo, competência e humanidade. Que mais pessoas tenham a oportunidade de ser atendidas por um profissional tão dedicado.\nRecomendo o trabalho do Dr. Rodrigo Kalinka com todo o coração! ⭐️👏',
      rating: 5,
      initials: 'VP',
    },
    {
      id: 6,
      name: 'Patrícia Lopes',
      role: 'Paciente de fisioterapia Neurofuncional',
      content: 'Quero expressar minha imensa gratidão por ter o Dr. Rodrigo Kalinka pelo atendimento humanizado que sempre me deu. Estou em tratamento há 3 anos e não largo por nada.',
      rating: 5,
      initials: 'PL',
    },
    {
      id: 7,
      name: 'Regina Sant\'Anna',
      role: 'Paciente de fisioterapia Neurofuncional',
      content: 'Agradeço por cuidar de mim. Muito competente e atencioso. Recomendo demais.',
      rating: 5,
      initials: 'RS',
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
    const timer = setInterval(nextSlide, 8000);
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
          className="max-w-4xl mx-auto px-4 md:px-0"
        >
          <div className="relative">
            {/* Prev Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 rounded-full z-10 bg-background shadow-lg border border-border hover:bg-primary hover:text-white transition-colors h-10 w-10 md:h-12 md:w-12 flex"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 rounded-full z-10 bg-background shadow-lg border border-border hover:bg-primary hover:text-white transition-colors h-10 w-10 md:h-12 md:w-12 flex"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

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
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed whitespace-pre-line">
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

            {/* Dots */}
            <div className="flex items-center justify-center mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-primary/20'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
