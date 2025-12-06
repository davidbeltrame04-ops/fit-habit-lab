import { Button } from "@/components/ui/button";
import { Shield, Clock, Zap, Award } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="preco">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Guarantee section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-foreground">Produto com Garantia</span>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              O código de defesa do consumidor (Art. 49) garante 7 dias para solicitar reembolso. 
              <strong className="text-primary"> Nós confiamos tanto em nossos estudos que lhe garantimos 15 dias de garantia incondicional!</strong>
            </p>
          </div>

          {/* Pricing card */}
          <div className="gradient-border rounded-3xl overflow-hidden">
            <div className="bg-card p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full text-primary font-bold text-sm mb-4">
                  <Zap className="w-4 h-4" />
                  OFERTA ESPECIAL
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Acesso Completo ao Método Hábitos Fit
                </h3>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-muted-foreground line-through">R$ 97,00</span>
                  <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-bold">-80%</span>
                </div>
                <div className="mb-2">
                  <span className="text-muted-foreground">Por apenas</span>
                </div>
                <div className="flex items-start justify-center gap-1">
                  <span className="text-2xl font-bold text-foreground">R$</span>
                  <span className="text-7xl md:text-8xl font-extrabold gradient-text">19</span>
                  <span className="text-2xl font-bold text-foreground">,90</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Pagamento único, acesso vitalício
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Feature icon={<Clock className="w-5 h-5" />} text="Acesso imediato após a compra" />
                <Feature icon={<Shield className="w-5 h-5" />} text="15 dias de garantia" />
                <Feature icon={<Zap className="w-5 h-5" />} text="Lives exclusivas semanais" />
                <Feature icon={<Award className="w-5 h-5" />} text="Suporte prioritário" />
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button variant="hero" size="xl" className="w-full sm:w-auto text-xl">
                  COMPRAR AGORA
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Pagamento 100% seguro. Acesso imediato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: React.ReactNode;
  text: string;
}

const Feature = ({ icon, text }: FeatureProps) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
    <div className="text-primary">{icon}</div>
    <span className="text-sm text-foreground">{text}</span>
  </div>
);

export default PricingSection;
