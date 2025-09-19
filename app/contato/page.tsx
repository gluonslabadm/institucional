import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Contato - Gluons Lab",
  description:
    "Entre em contato com a Gluons Lab. Vamos nos conectar e descobrir como podemos fortalecer sua estrutura digital.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background/65">
      <div className="pt-10 pb-16">
        <AnimatedSection className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Vamos nos Conectar</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pronto para fortalecer sua estrutura digital? Entre em contato conosco e descubra como podemos ser a força
              coesiva que transforma seus desafios em oportunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
