import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { Microscope } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Microscope className="w-5 h-5 text-primary" />
            <span className="font-heading font-bold text-lg text-foreground">MicroLens</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Cómo funciona</a>
            <a href="#equipo" className="hover:text-foreground transition-colors">Equipo</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <HeroSection />
        <WhatIsSection />
        <HowItWorksSection />
        <UseCasesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
