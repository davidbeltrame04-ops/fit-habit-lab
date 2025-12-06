import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Funciona para quem nunca treinou na vida?",
    answer: "Uma vantagem das pessoas que nunca treinaram é que você vai aprender sem vícios, sem manias, e do jeito certo. Vale ressaltar que aquela pessoa que você admira quanto ao corpo, saúde ou desempenho, um dia deu o primeiro passo (como você está tendo a oportunidade agora).",
  },
  {
    question: "Como vou ter acesso ao curso?",
    answer: "Você terá acesso instantâneo a uma versão em PDF deste guia, juntamente com links de download para os bônus. O acesso é imediato logo após a confirmação do pagamento. Se pagar no Boleto pode levar até 3 dias úteis para a compensação.",
  },
  {
    question: "Em quanto tempo vou ter resultados?",
    answer: "Você pode começar a ver os resultados no aprendizado com extrema rapidez… Em alguns dias depois de começar. Quanto mais você fizer disso parte de sua rotina diária, mais rápido você vai obter os resultados que deseja.",
  },
  {
    question: "Funciona para ganhar massa muscular?",
    answer: "Sim! O treinamento de força, que é um dos pilares da nossa base, é o principal tipo de treino causador da hipertrofia. Outro detalhe é que com a progressão e a sobrecarga sempre conseguimos estimular o seu corpo ao aumento da massa muscular.",
  },
  {
    question: "Posso treinar em casa?",
    answer: "Sim! O método foi desenvolvido para ser flexível. Você pode treinar em casa, na academia, ao ar livre ou onde preferir. Adaptamos os exercícios para diferentes ambientes e níveis de equipamento.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-card/30 relative overflow-hidden" id="faq">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Dúvidas{" "}
              <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tire suas dúvidas sobre o método Hábitos Fit.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none data-[state=open]:ring-1 data-[state=open]:ring-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="xl">
              QUERO MUDAR DE VIDA AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
