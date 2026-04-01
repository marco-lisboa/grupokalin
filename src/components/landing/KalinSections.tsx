import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Handshake, GraduationCap, ArrowRight } from 'lucide-react';

const KalinSections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Conheça nossos <span className="text-primary">programas</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Kalin Partner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => { navigate('/kalin-partner', { state: { internal: true } }); window.scrollTo(0, 0); }}
            className="group cursor-pointer bg-background p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
              <Handshake className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Kalin Partner
            </h3>
            <p className="text-muted-foreground mb-6">
              Área exclusiva para parceiros do Grupo Kalin. Acesse sua conta para gerenciar informações e acompanhar resultados.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Acessar <ArrowRight className="h-4 w-4" />
            </span>
          </motion.div>

          {/* Kalin Academy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            onClick={() => { navigate('/kalin-academy', { state: { internal: true } }); window.scrollTo(0, 0); }}
            className="group cursor-pointer bg-background p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Kalin Academy
            </h3>
            <p className="text-muted-foreground mb-6">
              Simpósios e cursos para profissionais da saúde. Aprimore seus conhecimentos com os melhores especialistas.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Explorar <ArrowRight className="h-4 w-4" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KalinSections;
