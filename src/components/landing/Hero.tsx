import { useState, useEffect, useCallback } from 'react';
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
import bannerHeroOriginal from '@/assets/banner-hero-original.jpeg';

const banners = [
  bannerNeurofuncional,
  bannerSimposio,
  bannerOrtopedica,
  bannerEsportiva,
  bannerGerontologica,
  bannerSaudeTrabalho,
  bannerPediatrica,
  bannerPilates,
  bannerNutricionista,
  bannerHeroOriginal,
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative mt-16 w-full overflow-hidden md:mt-20">
      <div
        className="flex w-full transition-transform duration-500 ease-in-out will-change-transform"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Banner ${i + 1}`}
              className="block w-full h-auto"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80 md:left-6 md:p-3"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80 md:right-6 md:p-3"
        aria-label="Próximo"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-4">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
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
