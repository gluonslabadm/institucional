import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

// Mock data - in real app this would come from CMS
const blogPosts = [
  {
    slug: "futuro-integracao-sistemas",
    title: "O Futuro da Integração de Sistemas",
    excerpt: "Como as novas tecnologias estão revolucionando a forma como conectamos diferentes plataformas...",
    content: `
      <p>A integração de sistemas sempre foi um desafio fundamental no mundo da tecnologia empresarial. Com a crescente complexidade dos ecossistemas digitais, a necessidade de conectar diferentes plataformas, aplicações e bases de dados tornou-se mais crítica do que nunca.</p>
      
      <h2>O Estado Atual da Integração</h2>
      <p>Hoje, as empresas lidam com uma média de 1,200 aplicações diferentes em seus ambientes de TI. Essa fragmentação cria silos de informação que impedem a eficiência operacional e a tomada de decisões baseada em dados.</p>
      
      <h2>Tecnologias Emergentes</h2>
      <p>Novas abordagens como APIs GraphQL, arquiteturas orientadas a eventos e plataformas de integração como serviço (iPaaS) estão revolucionando como pensamos sobre conectividade de sistemas.</p>
      
      <h2>O Papel da Inteligência Artificial</h2>
      <p>A IA está começando a desempenhar um papel crucial na automação de processos de integração, desde o mapeamento automático de dados até a detecção proativa de problemas de conectividade.</p>
      
      <h2>Conclusão</h2>
      <p>O futuro da integração de sistemas será caracterizado por maior automação, inteligência e simplicidade. As empresas que adotarem essas novas abordagens estarão melhor posicionadas para competir na economia digital.</p>
    `,
    date: "15 Jan 2025",
    readTime: "8 min",
    author: "Equipe Gluons Lab",
    category: "Tecnologia",
    image: "/futuristic-system-integration-visualization.png",
  },
  // Add other posts here...
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post não encontrado - Gluons Lab",
    }
  }

  return {
    title: `${post.title} - Gluons Lab Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background/65">
      <div className="pt-10 pb-16">
        <AnimatedSection className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{post.category}</Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-border/50">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <span>Por {post.author}</span>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Gostou do artigo?</p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Compartilhar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-foreground hover:bg-muted bg-transparent"
                  >
                    Salvar
                  </Button>
                </div>
              </div>

              <Link href="/blog">
                <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
                  Ver mais artigos
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
