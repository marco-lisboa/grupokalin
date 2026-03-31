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
    <section id="quem-somos" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Quem Somos
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Compromisso com sua{' '}
              <span className="text-primary">saúde e qualidade de vida</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O Fisioterapeuta, Dr. Rodrigo Kalinka, após se destacar com o seu atendimento e carisma na clínica onde trabalhava, decide abrir a sua própria clínica onde pretende continuar com o seu excelente trabalho, acolhendo os seus pacientes e criando uma relação de fidelidade.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A clínica Kalin trabalhará com todo tipo de reabilitações na área da fisioterapia, e também com profissionais como nutricionista, fonoaudiólogo, psicólogo, terapeuta ocupacional, educador físico, estética, quiropraxia, entre outros.
            </p>

            {/* Differentials list */}
            <div className="grid sm:grid-cols-2 gap-3">
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
