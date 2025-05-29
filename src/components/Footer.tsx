
import { Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-uniq-medium text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-uniq-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">LOGO_FIOS_HERE</span>
              </div>
              <span className="text-xl font-bold">Fios</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Transformando negócios através de soluções tecnológicas inovadoras e atendimento excepcional.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-uniq-light" />
                <span className="text-white/80">(92) 2020-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-uniq-light" />
                <span className="text-white/80">comercial@fios.net.br</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#sobre" className="block text-white/80 hover:text-white transition-colors">Sobre a Uniq</a>
              <a href="#funcionalidades" className="block text-white/80 hover:text-white transition-colors">Funcionalidades</a>
              <a href="#depoimentos" className="block text-white/80 hover:text-white transition-colors">Depoimentos</a>
              <a href="#contato" className="block text-white/80 hover:text-white transition-colors">Contato</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Soluções</h4>
            <div className="space-y-2">
              <span className="block text-white/80">Atendimento Omnichannel</span>
              <span className="block text-white/80">Gestão de Filas</span>
              <span className="block text-white/80">Relatórios Avançados</span>
              <span className="block text-white/80">Integrações CRM</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Fios. Todos os direitos reservados. | Uniq - Plataforma de Atendimento Omnichannel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
