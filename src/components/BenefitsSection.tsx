import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Ganhar massa muscular e definição sem passar horas na academia.",
  "Emagrecer e manter o peso sem efeito sanfona.",
  "Eliminar dores e desconfortos no corpo.",
  "Aumentar sua performance (força, velocidade, resistência).",
  "Ter acompanhamento semanal em lives exclusivas.",
  "Garantia incondicional de 15 dias — ou seu dinheiro de volta.",
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="beneficios">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              O Que Você{" "}
              <span className="gradient-text">Vai Aprender</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tudo o que você precisa para transformar seu corpo e sua vida em um só lugar.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group gradient-border p-6 rounded-xl hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-lg group-hover:text-primary transition-colors">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://ambienteseguro.org.ua/c/3ddb9815d3" target="_blank" rel="noopener noreferrer">
                QUERO COMEÇAR AGORA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
