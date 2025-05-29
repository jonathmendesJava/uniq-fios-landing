
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  const handleContactSpecialist = () => {
    window.open('https://wa.me/559220201234?text=Olá,%20tenho%20interesse%20na%20Uniq%20com%20a%20Fios!', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-uniq-light/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos transformar seu atendimento?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Junte-se a centenas de empresas que já revolucionaram seus resultados com a Uniq. 
            A Fios está pronta para configurar, implementar e acompanhar seu sucesso.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleContactSpecialist}
              size="lg"
              className="bg-white text-uniq-medium hover:bg-uniq-gray text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Falar com especialista</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <div className="text-white/80 text-center">
              <p className="text-sm">Resposta em até 1 hora</p>
              <p className="text-xs">Demonstração gratuita</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center text-white animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl font-bold mb-2">15 dias</div>
              <div className="text-white/80">Implementação rápida</div>
            </div>
            <div className="text-center text-white animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Suporte disponível</div>
            </div>
            <div className="text-center text-white animate-fade-up" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Satisfação garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
