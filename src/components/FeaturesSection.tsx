
import { MessageCircle, Users, BarChart3, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Atendimento Omnichannel",
      description: "WhatsApp, Instagram, Facebook e telefone integrados em uma única plataforma.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Fila Automática",
      description: "Distribuição inteligente de atendimentos por agentes disponíveis e especializações.",
      color: "bg-green-500"
    },
    {
      icon: BarChart3,
      title: "Dashboard em Tempo Real",
      description: "Relatórios completos e métricas de performance para otimizar seu atendimento.",
      color: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Integrações Avançadas",
      description: "Conecte com seu CRM, automações de vendas e ferramentas de marketing.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-uniq-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-uniq-medium mb-6">
            Funcionalidades que fazem a diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a Uniq pode revolucionar o atendimento da sua empresa com recursos poderosos e intuitivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto animate-fade-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-bold text-uniq-medium mb-4">
              Outros recursos inclusos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-uniq-light rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700">Chatbots inteligentes</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-uniq-light rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700">Templates de mensagem</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-uniq-light rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700">Histórico completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
