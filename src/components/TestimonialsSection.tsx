
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 border border-uniq-light/20 hover:border-uniq-neon/50 hover:shadow-neon transition-all duration-500 hover:-translate-y-2 animate-fade-up group relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Holographic accents */}
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-uniq-electric/60 rounded-tr-lg group-hover:border-uniq-neon animate-neon-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-uniq-electric/60 rounded-bl-lg group-hover:border-uniq-neon animate-neon-pulse" style={{animationDelay: '0.5s'}}></div>
              
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-6xl text-uniq-light/20 font-serif group-hover:text-uniq-neon/30 transition-colors">"</div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-neon rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 border border-uniq-light/30 group-hover:border-uniq-neon group-hover:shadow-neon transition-all duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg group-hover:text-uniq-neon transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-dark-300">{testimonial.role}</p>
                  <p className="text-sm text-uniq-light font-semibold">{testimonial.company}</p>
                </div>
              </div>
              
              <blockquote className="text-dark-200 italic leading-relaxed mb-6 group-hover:text-dark-100 transition-colors relative z-10">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex text-uniq-neon mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg mr-1 animate-glow" style={{animationDelay: `${i * 0.1}s`}}>★</span>
                ))}
              </div>

              {/* Scanning line */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-uniq-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
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
