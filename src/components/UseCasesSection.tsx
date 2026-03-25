import usecaseBug from "@/assets/usecase-bug.jpg";
import usecaseLeaf from "@/assets/usecase-leaf.jpg";
import usecaseFabric from "@/assets/usecase-fabric.jpg";
import usecaseSkin from "@/assets/usecase-skin.jpg";
import usecaseCoin from "@/assets/usecase-coin.jpg";

const cases = [
  { img: usecaseBug, label: "Insectos", desc: "Alas, patas y detalles fascinantes" },
  { img: usecaseLeaf, label: "Hojas", desc: "Células vegetales a simple vista" },
  { img: usecaseFabric, label: "Telas", desc: "Fibras y tejidos ampliados" },
  { img: usecaseSkin, label: "Piel", desc: "Poros y texturas del cuerpo" },
  { img: usecaseCoin, label: "Monedas", desc: "Grabados y micro detalles" },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            ¿Qué puedes observar?
          </h2>
          <p className="text-muted-foreground text-lg">
            Todo lo que te rodea esconde un mundo microscópico fascinante.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cases.map((c) => (
            <div key={c.label} className="group relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={c.img}
                alt={`Vista microscópica de ${c.label.toLowerCase()}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={512}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-primary-foreground font-heading font-semibold text-lg">{c.label}</h3>
                <p className="text-primary-foreground/80 text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
