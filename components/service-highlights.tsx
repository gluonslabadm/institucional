import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Network, Cloud, Zap, Shield } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Network,
    title: "Integração de Sistemas",
    description: "Conectamos diferentes plataformas e sistemas para criar um ecossistema digital coeso e eficiente.",
  },
  {
    icon: Cloud,
    title: "Soluções em Nuvem",
    description: "Migramos e otimizamos sua infraestrutura para a nuvem, garantindo escalabilidade e performance.",
  },
  {
    icon: Zap,
    title: "Desenvolvimento de APIs",
    description: "Criamos APIs robustas e seguras que facilitam a comunicação entre diferentes aplicações.",
  },
  {
    icon: Shield,
    title: "Segurança Digital",
    description: "Implementamos as melhores práticas de segurança para proteger seus dados e sistemas.",
  },
]

export function ServiceHighlights() {
  return (
    <section className="py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Conectando Desafios a Oportunidades
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nossos serviços são projetados para fortalecer a estrutura digital do seu negócio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-muted border border-border/20 hover:border-primary transition-colors duration-300 group h-full"
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/servicos">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Ver Todos os Serviços
          </Button>
        </Link>
      </div>
    </section>
  )
}