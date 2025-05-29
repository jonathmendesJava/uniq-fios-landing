
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDemoRequest = () => {
    window.open('https://wa.me/559220201234?text=Olá,%20tenho%20interesse%20na%20Uniq%20com%20a%20Fios!', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Funcionalidades', id: 'funcionalidades' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <header className="fixed top-0 w-full bg-dark-900/80 backdrop-blur-2xl border-b border-uniq-light/20 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-neon rounded-xl flex items-center justify-center border border-uniq-light/30 transition-all duration-300 group-hover:border-uniq-neon group-hover:shadow-neon">
                <div className="w-8 h-8 bg-uniq-neon rounded-lg flex items-center justify-center text-dark-900 font-bold text-sm">
                  F
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-uniq-neon rounded-full animate-neon-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl text-glow">Fios</span>
              <span className="text-uniq-light text-xs font-medium">UNIQ PLATFORM</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-uniq-neon transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Button 
            onClick={handleDemoRequest}
            className="hidden md:flex btn-neon border-neon hover:border-neon-hover text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Solicite uma demonstração</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 border border-uniq-light/30 rounded-lg hover:border-uniq-neon transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass rounded-xl border border-uniq-light/20 animate-fade-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-uniq-neon transition-all duration-300 font-medium text-left py-2 border-b border-uniq-light/10 hover:border-uniq-neon/30"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={handleDemoRequest}
                className="btn-neon border-neon text-white px-6 py-3 rounded-xl mt-4 w-full"
              >
                <span className="relative z-10">Solicite uma demonstração</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
