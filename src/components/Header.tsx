
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleDemoRequest = () => {
    window.open('https://wa.me/559220201234?text=Olá,%20tenho%20interesse%20na%20Uniq%20com%20a%20Fios!', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-uniq-gray z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gradient-uniq rounded-lg flex items-center justify-center">
            <span className="text-uniq-medium font-bold text-xl">LOGO_FIOS_HERE</span>
          </div>
          <span className="text-uniq-medium font-semibold text-lg">Fios</span>
        </div>
        
        <Button 
          onClick={handleDemoRequest}
          className="bg-uniq-light hover:bg-uniq-medium text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Solicite uma demonstração
        </Button>
      </div>
    </header>
  );
};

export default Header;
