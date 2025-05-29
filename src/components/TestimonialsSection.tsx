
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Gerente de Atendimento",
      company: "TechCorp",
      content: "Com a Uniq da Fios, conseguimos aumentar nossa eficiência em 300%. O suporte da equipe foi excepcional do início ao fim.",
      avatar: "M"
    },
    {
      name: "João Santos",
      role: "Diretor Comercial", 
      company: "VendaMais",
      content: "A integração com nosso CRM foi perfeita. Agora temos controle total sobre nossos leads e conversões.",
      avatar: "J"
    },
    {
      name: "Ana Costa",
      role: "CEO",
      company: "InovaSoluções",
      content: "Investimento que se pagou em 2 meses. A Fios entregou exatamente o que prometeu, com total profissionalismo.",
      avatar: "A"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-uniq-medium mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Empresas que já transformaram seu atendimento com a Uniq
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-uniq rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-uniq-light rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-uniq-medium font-semibold">{testimonial.company}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex text-uniq-light mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
