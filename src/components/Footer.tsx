const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">
                <span className="gradient-text">Hábitos</span>
                <span className="text-foreground"> Fit</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Transforme seu corpo e sua vida
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#beneficios" className="hover:text-primary transition-colors">
                Benefícios
              </a>
              <a href="#metodo" className="hover:text-primary transition-colors">
                Método
              </a>
              <a href="#depoimentos" className="hover:text-primary transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hábitos Fit. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
