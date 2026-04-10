import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Users, Target, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada paciente é único. Desenvolvemos tratamentos específicos para suas necessidades.',
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Utilizamos técnicas modernas e comprovadas para garantir sua recuperação.',
    },
    {
      icon: Sparkles,
      title: 'Ambiente Acolhedor',
      description: 'Espaço confortável e equipado para proporcionar a melhor experiência.',
    },
  ];

  const differentials = [
    'Equipe de fisioterapeutas especializados',
    'Equipamentos de última geração',
    'Tratamentos baseados em evidências científicas',
    'Acompanhamento contínuo da evolução',
    'Horários flexíveis para sua comodidade',
    'Localização de fácil acesso',
  ];

  return (
    <section id="quem-somos" className="py-20 lg:py-32 bg-secondary/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Quem Somos
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Compromisso com sua{' '}
              <span className="text-primary">saúde e qualidade de vida</span>
            </h2>
            
            <div className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-4">
              <p>O Espaço Kalin fundado pelo Fisioterapeuta Dr. Rodrigo Kalinka foi projetado para um ambiente especializado em saúde, movimento e reabilitação, criado para oferecer cuidado individualizado e acolhedor a cada paciente e aluno.</p>
              <p>Com identidade visual em tons de verde, o espaço transmite calma, segurança e bem-estar, refletindo diretamente o compromisso com um atendimento humanizado e baseado em evidências científicas. atendendo desde pacientes com dores crônicas até pessoas que buscam condicionamento físico seguro e orientado.</p>
              <p>O estúdio é equipado com aparelhos clássicos de Pilates, área para avaliação fisioterapêutica e espaço de atendimento personalizado. A equipe é formada por profissionais fisioterapeutas qualificados.</p>
              <p>O atendimento é organizado, respeitando horários pré-estabelecidos, comunicação via aplicativo e planejamento de turmas para garantir qualidade, conforto e segurança durante as sessões.</p>
              <p>Com uma proposta centrada na prevenção, reabilitação e educação em saúde, o Espaço Kalin vem se consolidando como referência em cuidado fisioterapêutico e método Pilates na região.</p>
            </div>

            {/* Differentials list */}
            <div className="grid sm:grid-cols-2 gap-3 text-left w-full max-w-lg mx-auto lg:mx-0">
              {differentials.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                className="bg-background p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
