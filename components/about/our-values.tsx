import { Card, CardContent } from "@/components/ui/card"
import { Network, Lightbulb, Zap, Users, Shield } from "lucide-react"

const values = [
  {
    icon: Network,
    title: "Conexão",
    description:
      "Acreditamos que as melhores soluções surgem quando conectamos pessoas, tecnologias e ideias de forma inteligente.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Buscamos constantemente novas formas de resolver problemas complexos com criatividade e tecnologia de ponta.",
  },
  {
    icon: Zap,
    title: "Força",
    description:
      "Desenvolvemos soluções robustas e confiáveis que resistem ao teste do tempo e às demandas do mercado.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Trabalhamos em parceria com nossos clientes, criando um ambiente de confiança mútua e crescimento conjunto.",
  },
  {
    icon: Shield,
    title: "Integridade",
    description:
      "Mantemos os mais altos padrões éticos em todos os nossos projetos, priorizando transparência e qualidade.",
  },
]

export function OurValues() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Nossa Metodologia e Valores
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Os princípios fundamentais que guiam nossa abordagem e definem nossa identidade
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <Card
            key={index}
            className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary transition-colors group"
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
