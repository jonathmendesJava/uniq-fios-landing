
const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-uniq-electric/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="animate-fade-up">
            <div className="inline-block px-6 py-2 glass rounded-full border border-uniq-light/30 mb-6">
              <span className="text-uniq-neon text-sm font-medium uppercase tracking-wider">SOBRE A PLATAFORMA</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
              O que é a <span className="text-gradient-neon">Uniq</span>?
            </h2>
            <p className="text-xl text-dark-200 leading-relaxed">
              A Uniq é uma plataforma de atendimento omnichannel que centraliza todos os canais de comunicação da sua empresa em um só lugar. 
              <span className="text-uniq-neon font-semibold"> WhatsApp, Instagram, Facebook, telefone e chat do site</span> - 
              tudo integrado para você nunca perder um cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white text-glow">
                Por que a <span className="text-uniq-neon">Fios</span> é a escolha ideal?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-neon rounded-full flex-shrink-0 mt-1 border border-uniq-light/30 group-hover:border-uniq-neon group-hover:shadow-neon transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-uniq-neon/20 animate-neon-pulse"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-uniq-neon transition-colors">Configuração Especializada</h4>
                    <p className="text-dark-200 leading-relaxed">Nossa equipe configura a Uniq do zero, adaptada às necessidades do seu negócio.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-neon rounded-full flex-shrink-0 mt-1 border border-uniq-light/30 group-hover:border-uniq-neon group-hover:shadow-neon transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-uniq-electric/20 animate-neon-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-uniq-neon transition-colors">Implantação Completa</h4>
                    <p className="text-dark-200 leading-relaxed">Cuidamos de toda a implementação e treinamento da sua equipe.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-neon rounded-full flex-shrink-0 mt-1 border border-uniq-light/30 group-hover:border-uniq-neon group-hover:shadow-neon transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-uniq-glow/20 animate-neon-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-uniq-neon transition-colors">Suporte Contínuo</h4>
                    <p className="text-dark-200 leading-relaxed">Acompanhamos seu sucesso com suporte técnico e consultoria estratégica.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-3xl p-8 border border-uniq-light/30 hover:border-uniq-neon/50 transition-all duration-500 group">
                {/* Holographic corner */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-uniq-neon rounded-tr-lg animate-neon-pulse"></div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-hover rounded-xl p-6 text-center border border-uniq-light/20 group-hover:border-uniq-neon/40 transition-all duration-300">
                    <div className="text-3xl font-bold text-uniq-neon animate-glow mb-2">95%</div>
                    <div className="text-dark-300 text-sm">Satisfação</div>
                  </div>
                  <div className="glass-hover rounded-xl p-6 text-center border border-uniq-light/20 group-hover:border-uniq-neon/40 transition-all duration-300">
                    <div className="text-3xl font-bold text-uniq-electric animate-glow mb-2">24h</div>
                    <div className="text-dark-300 text-sm">Suporte</div>
                  </div>
                  <div className="glass-hover rounded-xl p-6 text-center border border-uniq-light/20 group-hover:border-uniq-neon/40 transition-all duration-300">
                    <div className="text-3xl font-bold text-uniq-glow animate-glow mb-2">100+</div>
                    <div className="text-dark-300 text-sm">Clientes</div>
                  </div>
                  <div className="glass-hover rounded-xl p-6 text-center border border-uniq-light/20 group-hover:border-uniq-neon/40 transition-all duration-300">
                    <div className="text-3xl font-bold text-neon-green animate-glow mb-2">15 dias</div>
                    <div className="text-dark-300 text-sm">Implementação</div>
                  </div>
                </div>

                {/* Scanning line effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-uniq-neon to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
