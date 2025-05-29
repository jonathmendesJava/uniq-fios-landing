
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-white py-16 border-t border-uniq-light/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-uniq-light/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-uniq-electric/10 rounded-full blur-2xl"></div>
        <div className="cyber-grid absolute inset-0 opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-neon rounded-xl flex items-center justify-center border border-uniq-light/30 group-hover:border-uniq-neon transition-all duration-300">
                  <div className="w-8 h-8 bg-uniq-neon rounded-lg flex items-center justify-center text-dark-900 font-bold text-sm">
                    F
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-uniq-neon rounded-full animate-neon-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-glow">Fios</span>
                <span className="text-uniq-light text-xs font-medium">UNIQ PLATFORM</span>
              </div>
            </div>
            <p className="text-dark-200 leading-relaxed">
              Transformando negócios através de soluções tecnológicas inovadoras e atendimento excepcional.
            </p>
            
            {/* Social proof */}
            <div className="glass rounded-lg p-4 border border-uniq-light/20">
              <div className="flex items-center justify-between text-sm">
                <div className="text-center">
                  <div className="text-uniq-neon font-bold">500+</div>
                  <div className="text-dark-400 text-xs">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-uniq-electric font-bold">98%</div>
                  <div className="text-dark-400 text-xs">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-neon-green font-bold">24/7</div>
                  <div className="text-dark-400 text-xs">Suporte</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-uniq-neon">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group hover:bg-uniq-light/5 p-2 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5 text-uniq-light group-hover:text-uniq-neon transition-colors" />
                <span className="text-dark-200 group-hover:text-white transition-colors">(92) 2020-1234</span>
              </div>
              <div className="flex items-center space-x-3 group hover:bg-uniq-light/5 p-2 rounded-lg transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-uniq-light group-hover:text-uniq-neon transition-colors" />
                <span className="text-dark-200 group-hover:text-white transition-colors">WhatsApp Business</span>
              </div>
              <div className="flex items-center space-x-3 group hover:bg-uniq-light/5 p-2 rounded-lg transition-all duration-300">
                <Mail className="w-5 h-5 text-uniq-light group-hover:text-uniq-neon transition-colors" />
                <span className="text-dark-200 group-hover:text-white transition-colors">comercial@fios.net.br</span>
              </div>
              <div className="flex items-center space-x-3 group hover:bg-uniq-light/5 p-2 rounded-lg transition-all duration-300">
                <MapPin className="w-5 h-5 text-uniq-light group-hover:text-uniq-neon transition-colors" />
                <span className="text-dark-200 group-hover:text-white transition-colors">Manaus, AM</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-uniq-neon">Links Rápidos</h4>
            <div className="space-y-3">
              <a href="#sobre" className="block text-dark-200 hover:text-uniq-neon transition-colors duration-300 hover:translate-x-1 transform">Sobre a Uniq</a>
              <a href="#funcionalidades" className="block text-dark-200 hover:text-uniq-neon transition-colors duration-300 hover:translate-x-1 transform">Funcionalidades</a>
              <a href="#depoimentos" className="block text-dark-200 hover:text-uniq-neon transition-colors duration-300 hover:translate-x-1 transform">Depoimentos</a>
              <a href="#contato" className="block text-dark-200 hover:text-uniq-neon transition-colors duration-300 hover:translate-x-1 transform">Contato</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-uniq-neon">Soluções</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-dark-200">
                <div className="w-2 h-2 bg-uniq-electric rounded-full animate-neon-pulse"></div>
                <span>Atendimento Omnichannel</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-200">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-neon-pulse" style={{animationDelay: '0.5s'}}></div>
                <span>Gestão de Filas</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-200">
                <div className="w-2 h-2 bg-neon-purple rounded-full animate-neon-pulse" style={{animationDelay: '1s'}}></div>
                <span>Relatórios Avançados</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-200">
                <div className="w-2 h-2 bg-uniq-glow rounded-full animate-neon-pulse" style={{animationDelay: '1.5s'}}></div>
                <span>Integrações CRM</span>
              </div>
            </div>
            
            {/* Trust badges */}
            <div className="glass rounded-lg p-3 border border-uniq-light/20">
              <div className="text-xs text-dark-300 text-center">
                <div className="mb-1">🔒 Certificado SSL</div>
                <div>⚡ LGPD Compliant</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-uniq-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-400 text-sm">
              © 2024 Fios. Todos os direitos reservados. | Uniq - Plataforma de Atendimento Omnichannel
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-dark-400">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-neon-pulse"></div>
                <span>Sistema Online</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-dark-400">
                <div className="w-2 h-2 bg-uniq-neon rounded-full animate-neon-pulse" style={{animationDelay: '0.5s'}}></div>
                <span>Suporte Ativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
