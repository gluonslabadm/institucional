import { Card, CardContent } from "@/components/ui/card"

const milestones = [
  {
    year: "2025",
    title: "Fundação",
    description: "Nascemos com a missão de conectar tecnologias e criar soluções inovadoras para empresas visionárias.",
  },
  {
    year: "2025.2",
    title: "Primeiros Projetos",
    description: "Desenvolvemos nossas primeiras integrações de sistemas, estabelecendo nossa reputação no mercado.",
  },
  {
    year: "2025.3",
    title: "Expansão de Serviços",
    description: "Ampliamos nosso portfólio para incluir soluções em nuvem e analise da segurança de sowftwares.",
  },
  {
    year: "2026",
    title: "Reconhecimento",
    description: "Fomos reconhecidos como uma das empresas mais inovadoras em integração de sistemas.",
  },
  {
    year: "2026.2",
    title: "Crescimento Sustentável",
    description: "Consolidamos nossa posição como líderes em conectividade digital e soluções tecnológicas.",
  },
  {
    year: "2026.3",
    title: "Futuro Conectado",
    description: "Continuamos evoluindo, sempre buscando novas formas de fortalecer o ecossistema digital.",
  },
]

export function OurHistory() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nossa História</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Uma jornada de inovação e conexões que transformaram desafios em oportunidades
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-2xl font-heading font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative z-10">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
              </div>

              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
