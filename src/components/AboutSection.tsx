
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-uniq-medium mb-6">
              O que é a Uniq?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A Uniq é uma plataforma de atendimento omnichannel que centraliza todos os canais de comunicação da sua empresa em um só lugar. WhatsApp, Instagram, Facebook, telefone e chat do site - tudo integrado para você nunca perder um cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-uniq-medium">
                Por que a Fios é a escolha ideal?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-uniq-light rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Configuração Especializada</h4>
                    <p className="text-gray-600">Nossa equipe configura a Uniq do zero, adaptada às necessidades do seu negócio.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-uniq-light rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Implantação Completa</h4>
                    <p className="text-gray-600">Cuidamos de toda a implementação e treinamento da sua equipe.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-uniq-light rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Suporte Contínuo</h4>
                    <p className="text-gray-600">Acompanhamos seu sucesso com suporte técnico e consultoria estratégica.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-uniq rounded-3xl p-8 border border-uniq-light/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                    <div className="text-2xl font-bold text-uniq-medium">95%</div>
                    <div className="text-sm text-gray-600">Satisfação</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                    <div className="text-2xl font-bold text-uniq-medium">24h</div>
                    <div className="text-sm text-gray-600">Suporte</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                    <div className="text-2xl font-bold text-uniq-medium">100+</div>
                    <div className="text-sm text-gray-600">Clientes</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-lg">
                    <div className="text-2xl font-bold text-uniq-medium">15 dias</div>
                    <div className="text-sm text-gray-600">Implementação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
