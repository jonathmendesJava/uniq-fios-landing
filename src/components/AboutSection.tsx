
import ContactForm from "./ContactForm";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 h-48 bg-uniq-electric/5 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center animate-fade-up">
            <div className="inline-block px-6 py-2 glass rounded-full border border-uniq-light/30 mb-6">
              <span className="text-uniq-neon text-sm font-medium uppercase tracking-wider">SOBRE A PLATAFORMA</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              O que é a <span className="text-gradient-neon">Uniq</span>?
            </h2>
            <p className="text-lg md:text-xl text-dark-200 leading-relaxed max-w-4xl mx-auto">
              A Uniq é uma plataforma de atendimento omnichannel que centraliza todos os canais de comunicação da sua empresa em um só lugar. 
              <span className="text-uniq-neon font-semibold"> WhatsApp, Instagram, Facebook, telefone e chat do site</span> - 
              tudo integrado para você nunca perder um cliente.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start animate-fade-up" style={{animationDelay: '0.2s'}}>
            {/* Informações sobre a Fios */}
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Por que a <span className="text-uniq-neon">Fios</span> é a escolha ideal?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-neon rounded-full flex-shrink-0 mt-1 border border-uniq-light/30 group-hover:border-uniq-neon transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-uniq-neon/20"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-uniq-neon transition-colors">Configuração Especializada</h4>
                    <p className="text-dark-200 leading-relaxed">Nossa equipe configura a Uniq do zero, adaptada às necessidades do seu negócio.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-neon rounded-full flex-shrink-0 mt-1 border border-uniq-light/30 group-hover:border-uniq-neon transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-uniq-electric/20"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-uniq-neon transition-colors">Implantação Completa</h4>
                    <p className="text-dark-200 leading-relaxed">Cuidamos de toda a implementação e treinamento da sua equipe.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-neon rounded-full flex-shrink-0 mt-1 border border-uniq-light/30 group-hover:border-uniq-neon transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-uniq-glow/20"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-uniq-neon transition-colors">Suporte Contínuo</h4>
                    <p className="text-dark-200 leading-relaxed">Acompanhamos seu sucesso com suporte técnico e consultoria estratégica.</p>
                  </div>
                </div>

                {/* Simplified mobile stats */}
                <div className="grid grid-cols-2 gap-4 lg:hidden mt-8">
                  <div className="glass-hover rounded-xl p-4 text-center border border-uniq-light/20">
                    <div className="text-2xl font-bold text-uniq-neon mb-1">95%</div>
                    <div className="text-dark-300 text-sm">Satisfação</div>
                  </div>
                  <div className="glass-hover rounded-xl p-4 text-center border border-uniq-light/20">
                    <div className="text-2xl font-bold text-uniq-electric mb-1">24h</div>
                    <div className="text-dark-300 text-sm">Suporte</div>
                  </div>
                  <div className="glass-hover rounded-xl p-4 text-center border border-uniq-light/20">
                    <div className="text-2xl font-bold text-uniq-glow mb-1">100+</div>
                    <div className="text-dark-300 text-sm">Clientes</div>
                  </div>
                  <div className="glass-hover rounded-xl p-4 text-center border border-uniq-light/20">
                    <div className="text-2xl font-bold text-neon-green mb-1">15 dias</div>
                    <div className="text-dark-300 text-sm">Implementação</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
