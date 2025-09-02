import { ServicesGrid } from "@/components/services/services-grid"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Serviços - Gluons Lab",
  description:
    "Conheça nossas soluções para fortalecer seu ecossistema digital. Integração de sistemas, APIs, nuvem e mais.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <AnimatedSection className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Nossas Soluções para Fortalecer seu Ecossistema
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos serviços especializados que conectam tecnologias e transformam desafios em oportunidades
              digitais
            </p>
          </div>

          <ServicesGrid />
        </AnimatedSection>
      </div>
    </div>
  )
}
