const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Gerente de Atendimento",
      company: "TechCorp",
      content: "Com a Uniq da Fios, conseguimos aumentar nossa eficiência em 300%. O suporte da equipe foi excepcional do início ao fim.",
      avatar: "M",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Diretor Comercial", 
      company: "VendaMais",
      content: "A integração com nosso CRM foi perfeita. Agora temos controle total sobre nossos leads e conversões.",
      avatar: "J",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "CEO",
      company: "InovaSoluções",
      content: "Investimento que se pagou em 2 meses. A Fios entregou exatamente o que prometeu, com total profissionalismo.",
      avatar: "A",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-uniq-electric/10 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-6 py-2 glass rounded-full border border-uniq-light/30 mb-6">
            <span className="text-uniq-neon text-sm font-medium uppercase tracking-wider">DEPOIMENTOS</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-glow">
            O que nossos <span className="text-gradient-neon">clientes</span> dizem
          </h2>
          <p className="text-xl text-dark-200">
            Empresas que já transformaram seu atendimento com a Uniq
          </p>
        </div>

        {/* Grid com depoimentos e imagem da plataforma */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna dos depoimentos */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass rounded-2xl p-6 border border-uniq-light/20 hover:border-uniq-neon/50 hover:shadow-neon transition-all duration-500 animate-fade-up group relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Holographic accents */}
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-uniq-electric/60 rounded-tr-lg group-hover:border-uniq-neon"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-uniq-electric/60 rounded-bl-lg group-hover:border-uniq-neon"></div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-neon rounded-full flex items-center justify-center text-white font-bold text-lg border border-uniq-light/30 group-hover:border-uniq-neon group-hover:shadow-neon transition-all duration-300 flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <h4 className="font-bold text-white text-lg group-hover:text-uniq-neon transition-colors">{testimonial.name}</h4>
                      <p className="text-sm text-dark-300">{testimonial.role}</p>
                      <p className="text-sm text-uniq-light font-semibold">{testimonial.company}</p>
                    </div>
                    
                    <blockquote className="text-dark-200 leading-relaxed mb-3 group-hover:text-dark-100 transition-colors">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex text-uniq-neon">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-lg mr-1">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coluna da imagem da plataforma */}
          <div className="lg:sticky lg:top-8">
            <div className="glass rounded-2xl p-8 border border-uniq-light/20 hover:border-uniq-neon/50 transition-all duration-500 animate-fade-up group relative overflow-hidden" style={{animationDelay: '0.3s'}}>
              {/* Holographic accents */}
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-uniq-electric/60 rounded-tr-lg group-hover:border-uniq-neon"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-uniq-electric/60 rounded-bl-lg group-hover:border-uniq-neon"></div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-uniq-neon transition-colors">
                  Nossa <span className="text-gradient-neon">Plataforma</span>
                </h3>
                <p className="text-dark-200">
                  Veja como é fácil e intuitivo usar nossa solução
                </p>
              </div>

              {/* Imagem da plataforma */}
              <div className="relative rounded-xl overflow-hidden border border-uniq-light/30 group-hover:border-uniq-neon/50 transition-all duration-300">
                <div className="aspect-[4/3]">
                  <img 
                    src="/lovable-uploads/c7a1daca-0163-4b99-971d-a61fa9b85e07.png"
                    alt="Interface da Plataforma Uniq - Dashboard de atendimento omnichannel"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay com efeito cyber */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Features da plataforma */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-uniq-neon rounded-full mr-3 animate-glow"></div>
                  <span className="text-dark-200">Interface intuitiva e moderna</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-uniq-electric rounded-full mr-3 animate-glow" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-dark-200">Dashboard completo em tempo real</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-neon-green rounded-full mr-3 animate-glow" style={{animationDelay: '1s'}}></div>
                  <span className="text-dark-200">Integração fácil com seu sistema</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-6 border border-uniq-light/30 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '0.5s'}}>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-uniq-neon animate-glow mb-2">500+</div>
                <div className="text-dark-300 text-sm">Empresas atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-uniq-electric animate-glow mb-2">98%</div>
                <div className="text-dark-300 text-sm">Taxa de satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green animate-glow mb-2">24/7</div>
                <div className="text-dark-300 text-sm">Suporte disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
