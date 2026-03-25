import { Microscope, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Microscopio portátil",
    desc: "Un pequeño lente de alta magnificación que revela el mundo microscópico a través de tu teléfono.",
  },
  {
    icon: Smartphone,
    title: "Compatible con cualquier celular",
    desc: "Se acopla con un clip universal a la cámara de cualquier smartphone, sin importar marca o modelo.",
  },
  {
    icon: Zap,
    title: "Sin baterías ni apps",
    desc: "Funciona con pura óptica. Solo abre tu cámara, enfoca y explora. Así de sencillo.",
  },
];

const WhatIsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            ¿Qué es MicroLens?
          </h2>
          <p className="text-muted-foreground text-lg">
            Un kit de microscopía DIY diseñado para acercar la ciencia a estudiantes, 
            familias y curiosos de todas las edades.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
