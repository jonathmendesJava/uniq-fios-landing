
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle, Zap } from "lucide-react";

const CTASection = () => {
  const handleContactSpecialist = () => {
    window.open('https://wa.me/559220201234?text=Olá,%20tenho%20interesse%20na%20Uniq%20com%20a%20Fios!', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-hero-dark relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-uniq-neon/20 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-uniq-electric/30 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-purple/20 rounded-full blur-2xl animate-neon-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-neon-green/15 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '3s'}}></div>
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="inline-block px-6 py-2 glass rounded-full border border-uniq-light/30 mb-6">
            <span className="text-uniq-neon text-sm font-medium uppercase tracking-wider">PRONTO PARA COMEÇAR?</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
            Vamos transformar seu <span className="text-gradient-neon">atendimento</span>?
          </h2>
          
          <p className="text-xl text-dark-200 leading-relaxed max-w-3xl mx-auto">
            Junte-se a centenas de empresas que já revolucionaram seus resultados com a Uniq. 
            A <span className="text-uniq-neon font-semibold">Fios</span> está pronta para configurar, implementar e acompanhar seu sucesso.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleContactSpecialist}
              size="lg"
              className="btn-neon text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-neon-strong group relative overflow-hidden"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span className="relative z-10">Falar com especialista</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="glass rounded-xl p-4 border border-uniq-light/30 group">
              <div className="flex items-center space-x-3 text-white/80">
                <MessageCircle className="w-5 h-5 text-uniq-neon animate-neon-pulse" />
                <div className="text-left">
                  <p className="text-sm font-medium group-hover:text-uniq-neon transition-colors">Resposta em até 1 hora</p>
                  <p className="text-xs text-dark-300">Demonstração gratuita</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center text-white animate-fade-up group" style={{animationDelay: '0.1s'}}>
              <div className="glass rounded-2xl p-6 border border-uniq-light/20 hover:border-uniq-neon/50 transition-all duration-300">
                <Zap className="w-8 h-8 text-uniq-electric mx-auto mb-3 animate-neon-pulse" />
                <div className="text-3xl font-bold mb-2 text-uniq-neon animate-glow">15 dias</div>
                <div className="text-dark-300 group-hover:text-uniq-light transition-colors">Implementação rápida</div>
              </div>
            </div>
            <div className="text-center text-white animate-fade-up group" style={{animationDelay: '0.2s'}}>
              <div className="glass rounded-2xl p-6 border border-uniq-light/20 hover:border-uniq-neon/50 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-neon-green mx-auto mb-3 animate-neon-pulse" style={{animationDelay: '0.5s'}} />
                <div className="text-3xl font-bold mb-2 text-neon-green animate-glow">24/7</div>
                <div className="text-dark-300 group-hover:text-uniq-light transition-colors">Suporte disponível</div>
              </div>
            </div>
            <div className="text-center text-white animate-fade-up group" style={{animationDelay: '0.3s'}}>
              <div className="glass rounded-2xl p-6 border border-uniq-light/20 hover:border-uniq-neon/50 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-neon rounded-full mx-auto mb-3 flex items-center justify-center animate-neon-pulse" style={{animationDelay: '1s'}}>
                  <span className="text-white font-bold">✓</span>
                </div>
                <div className="text-3xl font-bold mb-2 text-uniq-glow animate-glow">100%</div>
                <div className="text-dark-300 group-hover:text-uniq-light transition-colors">Satisfação garantida</div>
              </div>
            </div>
          </div>

          {/* Trust badge */}
          <div className="mt-12 animate-fade-up" style={{animationDelay: '0.4s'}}>
            <div className="glass rounded-xl p-4 border border-uniq-light/30 inline-block">
              <div className="flex items-center space-x-4 text-sm text-dark-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-neon-pulse"></div>
                  <span>SSL Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-uniq-neon rounded-full animate-neon-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>LGPD Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-purple rounded-full animate-neon-pulse" style={{animationDelay: '1s'}}></div>
                  <span>ISO 27001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
