import { Microscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Microscope className="w-5 h-5" />
          <span className="font-heading font-bold text-lg">MicroLens</span>
        </div>
        <p className="text-primary-foreground/70 text-sm max-w-md mx-auto">
          Proyecto académico — Microscopía accesible para potenciar la educación científica.
        </p>
        <p className="text-primary-foreground/50 text-xs mt-6">
          © 2026 MicroLens. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
