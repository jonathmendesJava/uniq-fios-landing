
import { MessageCircle, Users, BarChart3, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Atendimento Omnichannel",
      description: "WhatsApp, Instagram, Facebook e telefone integrados em uma única plataforma.",
      color: "neon-blue",
      gradient: "from-uniq-light to-uniq-electric"
    },
    {
      icon: Users,
      title: "Fila Automática",
      description: "Distribuição inteligente de atendimentos por agentes disponíveis e especializações.",
      color: "neon-green",
      gradient: "from-neon-green to-uniq-glow"
    },
    {
      icon: BarChart3,
      title: "Dashboard em Tempo Real",
      description: "Relatórios completos e métricas de performance para otimizar seu atendimento.",
      color: "neon-purple",
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      icon: Zap,
      title: "Integrações Avançadas",
      description: "Conecte com seu CRM, automações de vendas e ferramentas de marketing.",
      color: "neon-cyan",
      gradient: "from-uniq-neon to-uniq-light"
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-uniq-light/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="cyber-grid absolute inset-0 opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-6 py-2 glass rounded-full border border-uniq-light/30 mb-6">
            <span className="text-uniq-neon text-sm font-medium uppercase tracking-wider">RECURSOS AVANÇADOS</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
            Funcionalidades que fazem a <span className="text-gradient-neon">diferença</span>
          </h2>
          <p className="text-xl text-dark-200 max-w-3xl mx-auto">
            Descubra como a Uniq pode revolucionar o atendimento da sua empresa com recursos poderosos e intuitivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="glass rounded-2xl p-8 border border-uniq-light/20 hover:border-uniq-neon/50 hover:shadow-neon transition-all duration-500 hover:-translate-y-2 animate-fade-up group relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Holographic corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-uniq-electric/50 group-hover:border-uniq-neon"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-uniq-electric/50 group-hover:border-uniq-neon"></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-neon transition-all duration-300 relative`}>
                  <Icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-neon-pulse"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-uniq-neon transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-dark-200 leading-relaxed group-hover:text-dark-100 transition-colors">
                  {feature.description}
                </p>

                {/* Scanning effect */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-uniq-neon to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 border border-uniq-light/30 hover:border-uniq-neon/50 max-w-4xl mx-auto animate-fade-up group" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold text-white mb-6 text-glow">
              Outros recursos <span className="text-uniq-neon">inclusos</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group/item">
                <div className="w-16 h-16 bg-gradient-neon rounded-full mx-auto mb-4 flex items-center justify-center border border-uniq-light/30 group-hover/item:border-uniq-neon group-hover/item:shadow-neon transition-all duration-300">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <span className="text-dark-200 font-medium group-hover/item:text-uniq-neon transition-colors">Chatbots inteligentes</span>
              </div>
              <div className="text-center group/item">
                <div className="w-16 h-16 bg-gradient-neon rounded-full mx-auto mb-4 flex items-center justify-center border border-uniq-light/30 group-hover/item:border-uniq-neon group-hover/item:shadow-neon transition-all duration-300">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <span className="text-dark-200 font-medium group-hover/item:text-uniq-neon transition-colors">Templates de mensagem</span>
              </div>
              <div className="text-center group/item">
                <div className="w-16 h-16 bg-gradient-neon rounded-full mx-auto mb-4 flex items-center justify-center border border-uniq-light/30 group-hover/item:border-uniq-neon group-hover/item:shadow-neon transition-all duration-300">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <span className="text-dark-200 font-medium group-hover/item:text-uniq-neon transition-colors">Histórico completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
