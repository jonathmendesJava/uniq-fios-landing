
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Simplified cyber grid - static and much lighter */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(74, 158, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 158, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Reduced particles from 20 to 6 for much better performance */}
      <div className="particles fixed inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-uniq-neon rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Removed scan line effect - too heavy */}

      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
