const steps = [
  {
    number: "01",
    title: "Acopla el lente",
    desc: "Coloca el clip con el lente MicroLens sobre la cámara trasera de tu celular. Toma solo 5 segundos.",
  },
  {
    number: "02",
    title: "Apunta a cualquier cosa",
    desc: "Hojas, insectos, monedas, tela, tu propia piel… cualquier superficie se convierte en un laboratorio.",
  },
  {
    number: "03",
    title: "Descubre el micro mundo",
    desc: "Abre la cámara, acerca el objeto y observa detalles que nunca habías visto. Captura fotos y compártelas.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-muted-foreground text-lg">
            Tres pasos simples para explorar lo invisible.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative p-8 rounded-2xl bg-accent/50 border border-border">
              <span className="text-5xl font-bold font-heading text-primary/15 absolute top-4 right-6">
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold font-heading text-foreground mb-3 mt-6">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
