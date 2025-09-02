import { WhoWeAre } from "@/components/about/who-we-are"
import { OurHistory } from "@/components/about/our-history"
import { OurValues } from "@/components/about/our-values"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Sobre Nós - Gluons Lab",
  description: "Conheça a história, valores e metodologia da Gluons Lab. Somos os arquitetos das conexões invisíveis.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <AnimatedSection className="max-w-7xl mx-auto px-6">
          <WhoWeAre />
        </AnimatedSection>

        <AnimatedSection className="max-w-7xl mx-auto px-6 mt-16" delay={0.2}>
          <OurHistory />
        </AnimatedSection>

        <AnimatedSection className="max-w-7xl mx-auto px-6 mt-16" delay={0.4}>
          <OurValues />
        </AnimatedSection>
      </div>
    </div>
  )
}
