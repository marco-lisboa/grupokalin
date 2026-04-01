import { useState, useEffect, useCallback, useRef } from 'react';
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
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative w-full overflow-hidden mt-16 md:mt-20">
      {/* Slides track - CSS transition carousel */}
      <div
        ref={trackRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Banner ${i + 1}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] object-cover"
            />
          </div>
        ))}
      </div>

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
            onClick={() => goTo(i)}
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
