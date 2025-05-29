
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Users, Zap } from "lucide-react";

const HeroSection = () => {
  const handleContactSpecialist = () => {
    window.open('https://wa.me/559220201234?text=Olá,%20tenho%20interesse%20na%20Uniq%20com%20a%20Fios!', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-hero-dark relative overflow-hidden">
      {/* Simplified background elements - much lighter */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 bg-uniq-neon/5 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-uniq-electric/8 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 glass rounded-full border border-uniq-light/30 mb-4">
                <span className="text-uniq-neon text-sm font-medium">🚀 NOVA GERAÇÃO DE ATENDIMENTO</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transforme seu atendimento com a plataforma 
                <span className="text-gradient-neon"> Uniq</span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-dark-200 leading-relaxed">
              Uma solução inteligente, completa e personalizada, entregue pela 
              <span className="text-uniq-neon font-semibold"> Fios </span>
              para sua empresa vender mais e atender melhor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContactSpecialist}
                size="lg"
                className="btn-neon text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="relative z-10">Falar com especialista</span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-uniq-light/30 text-uniq-neon hover:bg-uniq-light/10 hover:border-uniq-neon text-lg px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Ver demonstração
              </Button>
            </div>

            {/* Simplified stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-uniq-neon">300%</div>
                <div className="text-dark-300 text-sm">Eficiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-uniq-neon">24/7</div>
                <div className="text-dark-300 text-sm">Suporte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-uniq-neon">15 dias</div>
                <div className="text-dark-300 text-sm">Setup</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{animationDelay: '0.3s'}}>
            <div className="relative glass rounded-3xl p-8 border border-uniq-light/30 hover:border-uniq-neon/50 transition-all duration-300 group">              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="glass-hover rounded-2xl p-4 text-center transition-all duration-300">
                  <Phone className="w-8 h-8 text-uniq-neon mx-auto mb-2" />
                  <span className="text-white text-sm font-medium">Telefone</span>
                </div>
                <div className="glass-hover rounded-2xl p-4 text-center transition-all duration-300">
                  <MessageCircle className="w-8 h-8 text-uniq-electric mx-auto mb-2" />
                  <span className="text-white text-sm font-medium">WhatsApp</span>
                </div>
                <div className="glass-hover rounded-2xl p-4 text-center transition-all duration-300">
                  <Users className="w-8 h-8 text-uniq-glow mx-auto mb-2" />
                  <span className="text-white text-sm font-medium">Equipe</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="glass rounded-lg p-4 border border-uniq-light/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                    <span className="text-white text-sm font-medium">Cliente conectado via WhatsApp</span>
                  </div>
                </div>
                <div className="glass rounded-lg p-4 border border-uniq-light/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-uniq-electric rounded-full"></div>
                    <span className="text-white text-sm font-medium">Atendimento distribuído automaticamente</span>
                  </div>
                </div>
                <div className="glass rounded-lg p-4 border border-uniq-light/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                    <span className="text-white text-sm font-medium">Relatório em tempo real</span>
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

export default HeroSection;
