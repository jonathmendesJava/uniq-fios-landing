
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Users } from "lucide-react";

const HeroSection = () => {
  const handleContactSpecialist = () => {
    window.open('https://wa.me/559220201234?text=Olá,%20tenho%20interesse%20na%20Uniq%20com%20a%20Fios!', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-uniq-light/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transforme seu atendimento com a plataforma 
              <span className="text-uniq-light"> Uniq</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Uma solução inteligente, completa e personalizada, entregue pela Fios para sua empresa vender mais e atender melhor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContactSpecialist}
                size="lg"
                className="bg-white text-uniq-medium hover:bg-uniq-gray text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Falar com especialista
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-uniq-medium text-lg px-8 py-4 rounded-full transition-all duration-300"
              >
                Ver demonstração
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{animationDelay: '0.3s'}}>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 rounded-2xl p-4 text-center">
                  <Phone className="w-8 h-8 text-white mx-auto mb-2 animate-spin-slow" />
                  <span className="text-white text-sm">Telefone</span>
                </div>
                <div className="bg-white/20 rounded-2xl p-4 text-center">
                  <MessageCircle className="w-8 h-8 text-white mx-auto mb-2 animate-pulse" />
                  <span className="text-white text-sm">WhatsApp</span>
                </div>
                <div className="bg-white/20 rounded-2xl p-4 text-center">
                  <Users className="w-8 h-8 text-white mx-auto mb-2 animate-float" />
                  <span className="text-white text-sm">Equipe</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/30 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">Cliente conectado via WhatsApp</span>
                  </div>
                </div>
                <div className="bg-white/30 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">Atendimento distribuído automaticamente</span>
                  </div>
                </div>
                <div className="bg-white/30 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">Relatório em tempo real</span>
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
