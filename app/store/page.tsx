import { StoreGrid } from "@/components/store/store-grid"
import { AnimatedSection } from "@/components/animated-section"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Construction } from "lucide-react"

export const metadata = {
  title: "Store - Gluons Lab",
  description:
    "Ferramentas úteis e soluções SaaS da Gluons Lab. Em breve, novas ferramentas para impulsionar seu negócio.",
}

export default function StorePage() {
  return (
    <div className="min-h-screen bg-background/65">
      <div className="pt-10 pb-16">
        <AnimatedSection className="max-w-7xl mx-auto px-6">
          {/* Construction Banner */}
         
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Gluons Store</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ferramentas SaaS desenvolvidas pela Gluons Lab para acelerar e simplificar seus processos digitais
            </p>
          </div>

          <StoreGrid />
          <Alert className="mb-12 bg-primary/10 border-primary/20 mt-24">
            <Construction className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground">
              <strong>Em Construção:</strong> Nosso laboratório está finalizando ferramentas incríveis para você.
              Lançamento em breve!
            </AlertDescription>
          </Alert>

        </AnimatedSection>
      </div>
    </div>
  )
}
