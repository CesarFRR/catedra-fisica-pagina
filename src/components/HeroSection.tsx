import heroImg from "@/assets/hero-microscope.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/30" />
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium font-heading tracking-wide">
            Proyecto Académico
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
            Ve lo invisible.{" "}
            <span className="text-primary">Solo con tu celular.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            MicroLens es un lente microscópico que se acopla a la cámara de cualquier smartphone, 
            transformándola en un microscopio portátil. Sin baterías, sin apps — pura óptica.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#como-funciona" className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm transition-transform hover:scale-105">
              Descubre cómo funciona
            </a>
            <a href="#equipo" className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-heading font-semibold text-sm hover:bg-accent transition-colors">
              Conoce al equipo
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={heroImg}
              alt="MicroLens acoplado a un smartphone sobre mesa de laboratorio"
              className="relative rounded-2xl shadow-2xl shadow-primary/10 max-w-full w-[500px]"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
