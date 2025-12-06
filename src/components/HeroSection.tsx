import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Método Científico Comprovado</span>
          </div>

          {/* Logo/Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-up delay-100">
            <span className="gradient-text">Hábitos</span>
            <span className="text-foreground"> Fit</span>
          </h1>

          {/* Headline */}
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 animate-fade-up delay-200">
            Treine <span className="text-primary">MENOS</span> tempo, conquiste{" "}
            <span className="text-secondary">MAIS</span> resultados
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-300">
            Ganhe massa muscular, elimine gordura, se livre das dores e aumente sua performance com nosso método exclusivo.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-16 animate-fade-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="https://ambienteseguro.org.ua/c/3ddb9815d3" target="_blank" rel="noopener noreferrer">
                QUERO COMEÇAR AGORA
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up delay-500">
            <TrustBadge 
              icon={<CheckCircle className="w-6 h-6 text-primary" />}
              title="Método Testado"
              subtitle="e Atualizado"
            />
            <TrustBadge 
              icon={<Zap className="w-6 h-6 text-secondary" />}
              title="Envio Imediato"
              subtitle="Após a Compra"
            />
            <TrustBadge 
              icon={<Star className="w-6 h-6 text-primary" />}
              title="Produto"
              subtitle="Exclusivo"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const TrustBadge = ({ icon, title, subtitle }: TrustBadgeProps) => (
  <div className="glass-card rounded-xl p-4 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
    <div className="p-2 rounded-lg bg-muted/50">
      {icon}
    </div>
    <div className="text-left">
      <p className="font-bold text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

export default HeroSection;
