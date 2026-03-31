import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      value: '(21) 98035-9990',
      href: 'https://wa.me/5521980663946?text=Ol%C3%A1!',
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'adm@kalin.com.br',
      href: 'mailto:adm@kalin.com.br',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Ed. Ponto Norte Empresarial - Av. Dom Helder Câmara, 5644 - Sala 910 - Engenho de Dentro - Rio de Janeiro/RJ - CEP: 20771-034',
      subtext: 'Referência: Próximo ao Norte Shopping',
      href: 'https://maps.google.com/?q=Av.+Dom+Helder+Câmara,+5644+-+Engenho+de+Dentro,+Rio+de+Janeiro',
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      value: 'Seg-Sex: 8h às 20h | Sáb: 8h às 12h',
      href: null,
    },
  ];

  const handleSchedule = () => {
    window.open('https://api.seufisio.com.br/pre-cadastro/0dba64f3-6a3e-4dc5-99b0-b0e2379b264d/prospect', '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Contato
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Entre em{' '}
            <span className="text-primary">contato</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Estamos prontos para ajudá-lo. Entre em contato para agendar sua avaliação 
            ou tirar suas dúvidas sobre nossos serviços.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                      {'subtext' in item && item.subtext && (
                        <p className="text-muted-foreground text-xs mt-1">{item.subtext}</p>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="pt-4 flex flex-col gap-3"
            >
              <p className="text-sm text-muted-foreground">Siga-nos nas redes sociais:</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/grupokalin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-5 w-5" />
                  @grupokalin
                </a>
                <a
                  href="https://www.linkedin.com/company/grupokalin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Linkedin className="h-5 w-5" />
                  grupokalin
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-background p-8 rounded-2xl border border-border shadow-sm text-center">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto mb-6">
                <ExternalLink className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Agende sua Avaliação
              </h3>
              <p className="text-muted-foreground mb-6">
                Faça seu pré-cadastro no nosso sistema e agende sua avaliação de forma rápida e prática.
              </p>
              <Button onClick={handleSchedule} size="lg" className="w-full gap-2">
                <ExternalLink className="h-4 w-4" />
                Fazer Pré-Cadastro
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
