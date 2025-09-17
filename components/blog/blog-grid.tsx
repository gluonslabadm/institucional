import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    slug: "futuro-integracao-sistemas",
    title: "O Futuro da Integração de Sistemas",
    excerpt:
      "Como as novas tecnologias estão revolucionando a forma como conectamos diferentes plataformas e criamos ecossistemas digitais mais robustos...",
    content: "Artigo completo sobre integração de sistemas...",
    date: "15 Jan 2025",
    readTime: "8 min",
    author: "Equipe Gluons Lab",
    category: "Tecnologia",
    image: "/futuristic-system-integration-visualization.png",
    featured: true,
  },
  {
    id: 2,
    slug: "seguranca-nuvem-melhores-praticas",
    title: "Segurança em Nuvem: Melhores Práticas",
    excerpt:
      "Descubra as estratégias essenciais para manter seus dados seguros na era da computação em nuvem e como implementar uma arquitetura de segurança robusta...",
    content: "Artigo completo sobre segurança em nuvem...",
    date: "12 Jan 2025",
    readTime: "6 min",
    author: "Equipe Gluons Lab",
    category: "Segurança",
    image: "/cloud-security-digital-fortress.png",
    featured: false,
  },
  {
    id: 3,
    slug: "apis-linguagem-universal-sistemas",
    title: "APIs: A Linguagem Universal dos Sistemas",
    excerpt:
      "Entenda como as APIs se tornaram o elemento fundamental para a comunicação entre aplicações e como desenvolver APIs robustas e escaláveis...",
    content: "Artigo completo sobre APIs...",
    date: "08 Jan 2025",
    readTime: "10 min",
    author: "Equipe Gluons Lab",
    category: "Desenvolvimento",
    image: "/api-connections-network-visualization.png",
    featured: false,
  },
  {
    id: 4,
    slug: "automacao-processos-empresariais",
    title: "Automação de Processos Empresariais",
    excerpt:
      "Como a automação inteligente está transformando a forma como as empresas operam e como implementar soluções que realmente fazem a diferença...",
    content: "Artigo completo sobre automação...",
    date: "05 Jan 2025",
    readTime: "7 min",
    author: "Equipe Gluons Lab",
    category: "Automação",
    image: "/placeholder.svg?key=automation",
    featured: false,
  },
  {
    id: 5,
    slug: "inteligencia-artificial-negocios",
    title: "IA nos Negócios: Além do Hype",
    excerpt:
      "Uma análise realista sobre como a inteligência artificial pode ser aplicada de forma prática nos negócios, com casos de uso reais e resultados mensuráveis...",
    content: "Artigo completo sobre IA...",
    date: "02 Jan 2025",
    readTime: "12 min",
    author: "Equipe Gluons Lab",
    category: "Inteligência Artificial",
    image: "/placeholder.svg?key=ai-business",
    featured: false,
  },
  {
    id: 6,
    slug: "devops-cultura-ferramentas",
    title: "DevOps: Cultura Antes das Ferramentas",
    excerpt:
      "Por que a transformação DevOps vai muito além das ferramentas e como construir uma cultura de colaboração que realmente funciona...",
    content: "Artigo completo sobre DevOps...",
    date: "28 Dez 2024",
    readTime: "9 min",
    author: "Equipe Gluons Lab",
    category: "DevOps",
    image: "/placeholder.svg?key=devops",
    featured: false,
  },
]

export function BlogGrid() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="space-y-12">
      {/* Featured Post */}
      {featuredPost && (
        <Card className="bg-muted border border-border/20 hover:border-primary transition-colors duration-300 group h-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 lg:bg-gradient-to-r lg:from-transparent lg:to-background/60"></div>
              <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">Destaque</Badge>
            </div>

            <CardContent className="p-8 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4 border-primary/20 text-primary">
                {featuredPost.category}
              </Badge>

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
                  Ler Artigo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </div>
        </Card>
      )}

      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs">
                {post.category}
              </Badge>
            </div>

            <CardContent className="p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8">
        <Button variant="outline" size="sm" disabled className="border-border text-muted-foreground bg-transparent">
          Anterior
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted bg-transparent">
          2
        </Button>
        <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted bg-transparent">
          3
        </Button>
        <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted bg-transparent">
          Próximo
        </Button>
      </div>
    </div>
  )
}
