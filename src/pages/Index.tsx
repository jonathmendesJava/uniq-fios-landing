
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
      {/* Cyber grid background */}
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      {/* Floating particles */}
      <div className="particles fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-uniq-neon rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Scan line effect */}
      <div className="fixed top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-uniq-neon to-transparent opacity-60 animate-scan-line pointer-events-none" />

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
