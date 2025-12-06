import { Button } from "@/components/ui/button";

const timelineData = [
  {
    period: "1º e 2º Mês",
    color: "from-primary to-primary/70",
    items: [
      "Descobrindo seu status físico",
      "Sair do sedentarismo",
      "Familiarização com o treino",
      "Treino em qualquer lugar",
      "Melhorando a disposição",
      "Ganhar força",
    ],
  },
  {
    period: "3º e 4º Mês",
    color: "from-secondary to-secondary/70",
    items: [
      "+ 2 kg de massa muscular",
      "- 5% de gordura corporal",
      "+ Velocidade no treino",
      "+ 1 kg de massa muscular",
      "- 2% de gordura corporal",
    ],
  },
  {
    period: "5º e 6º Mês",
    color: "from-primary to-secondary",
    items: [
      "MUITO mais autoestima",
      "Desafios frequentes",
      "Você 3x melhor do que estava",
      "Preparar para o próximo nível",
      "Supino e agachamento com seu próprio corpo",
    ],
  },
];

const TimelineSection = () => {
  return (
    <section className="py-24 bg-card/50 relative overflow-hidden" id="metodo">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Quais as <span className="gradient-text">Vantagens</span> do Método
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Independente do seu nível de treinamento, seja você uma pessoa completamente sedentária ou altamente treinada, esse método vai te ajudar.
            </p>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {timelineData.map((phase, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="glass-card rounded-2xl p-6 h-full hover:scale-[1.02] transition-all duration-300">
                  {/* Period badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${phase.color} text-primary-foreground font-bold text-sm mb-6`}>
                    {phase.period}
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color} mt-2 flex-shrink-0`} />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector line (hidden on last item) */}
                {index < timelineData.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="xl">
              QUERO MUDAR DE VIDA AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
