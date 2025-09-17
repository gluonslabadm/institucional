import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "O Futuro da Integração de Sistemas",
    excerpt: "Como as novas tecnologias estão revolucionando a forma como conectamos diferentes plataformas...",
    date: "15 Jan 2025",
    image: "/futuristic-system-integration-visualization.png",
  },
  {
    id: 2,
    title: "Segurança em Nuvem: Melhores Práticas",
    excerpt: "Descubra as estratégias essenciais para manter seus dados seguros na era da computação em nuvem...",
    date: "12 Jan 2025",
    image: "/cloud-security-digital-fortress.png",
  },
  {
    id: 3,
    title: "APIs: A Linguagem Universal dos Sistemas",
    excerpt: "Entenda como as APIs se tornaram o elemento fundamental para a comunicação entre aplicações...",
    date: "08 Jan 2025",
    image: "/api-connections-network-visualization.png",
  },
]

export function BlogPreview() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Insights do Nosso Laboratório
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compartilhamos conhecimento e tendências do mundo da tecnologia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="bg-muted border border-border/20 hover:border-primary transition-colors duration-300 group h-full overflow-hidden"
          >
            <div className="relative">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <Button
                variant="ghost"
                size="sm"
                className="group p-1 h-auto text-white hover:text-black font-bold"
              >
              Ler mais
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
          Ver Todos os Artigos
        </Button>
      </div>
    </section>
  )
}
