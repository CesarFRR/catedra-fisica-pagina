import { User } from "lucide-react";

const team = [
  { name: "Carlos Mendoza", role: "CEO", color: "bg-primary/10 text-primary" },
  { name: "Valentina Ríos", role: "Directora Creativa", color: "bg-secondary/30 text-secondary-foreground" },
  { name: "Dr. Andrés López", role: "Director Científico", color: "bg-primary/10 text-primary" },
  { name: "Dra. Sofía Herrera", role: "Directora Científica", color: "bg-secondary/30 text-secondary-foreground" },
  { name: "Martín Delgado", role: "Director Financiero", color: "bg-primary/10 text-primary" },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-muted-foreground text-lg">
            El equipo detrás de MicroLens, uniendo ciencia, diseño y emprendimiento.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:shadow-primary/5 transition-shadow"
            >
              <div className={`w-16 h-16 rounded-full ${member.color} flex items-center justify-center mb-4`}>
                <User className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm">{member.name}</h3>
              <p className="text-muted-foreground text-xs mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
