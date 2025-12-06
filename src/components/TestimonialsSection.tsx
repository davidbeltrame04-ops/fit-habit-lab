import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Perdeu 12kg em 4 meses",
    content: "Nunca imaginei que conseguiria resultados tão rápidos! O método é simples e eficaz. Recomendo muito!",
    rating: 5,
  },
  {
    name: "Carlos Santos",
    role: "Ganhou 8kg de massa muscular",
    content: "Estava há 2 anos estagnado. Em 6 meses de Hábitos Fit, consegui superar todos os meus limites.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Se livrou das dores crônicas",
    content: "Além de emagrecer, finalmente me livrei das dores nas costas que tinha há anos. Mudou minha vida!",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "Performance atlética",
    content: "Como atleta amador, o método me ajudou a melhorar minha performance de forma impressionante.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="depoimentos">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Veja o Que Nossos{" "}
              <span className="gradient-text">Clientes Dizem</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas com o Hábitos Fit.
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group"
              >
                {/* Quote icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-foreground text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
