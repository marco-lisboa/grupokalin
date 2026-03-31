import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import bannerSimposio from '@/assets/banner-simposio.jpg';
import bannerOrtopedica from '@/assets/banner-ortopedica.jpg';
import bannerEsportiva from '@/assets/banner-esportiva.jpg';
import bannerGerontologica from '@/assets/banner-gerontologica.jpg';
import bannerNeurofuncional from '@/assets/banner-neurofuncional.jpeg';
import bannerSaudeTrabalho from '@/assets/banner-saude-trabalho.jpg';
import bannerPediatrica from '@/assets/banner-pediatrica.jpg';
import bannerPilates from '@/assets/banner-pilates.jpg';
import bannerNutricionista from '@/assets/banner-nutricionista.jpg';
import bannerHeroOriginal from '@/assets/banner-hero-original.png';

const banners = [
  bannerSimposio,
  bannerOrtopedica,
  bannerEsportiva,
  bannerGerontologica,
  bannerNeurofuncional,
  bannerSaudeTrabalho,
  bannerPediatrica,
  bannerPilates,
  bannerNutricionista,
  bannerHeroOriginal,
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % banners.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + banners.length) % banners.length, -1);
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section id="home" className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mt-16 md:mt-20">
      {/* Slides */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.img
          key={current}
          src={banners[current]}
          alt={`Banner ${current + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-background/50 hover:bg-background/80 backdrop-blur-sm text-foreground rounded-full p-2 md:p-3 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-background/50 hover:bg-background/80 backdrop-blur-sm text-foreground rounded-full p-2 md:p-3 transition-colors"
        aria-label="Próximo"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-primary scale-125' : 'bg-background/60 hover:bg-background/90'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
