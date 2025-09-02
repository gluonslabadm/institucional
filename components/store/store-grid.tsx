"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

const products = [
  {
    id: 1,
    title: "API Monitor Pro",
    description: "Monitore suas APIs em tempo real com alertas inteligentes e relatórios detalhados.",
    price: "R$ 99,90",
    image: "/placeholder.svg?key=api-monitor",
    category: "Monitoramento",
    features: ["Monitoramento 24/7", "Alertas em tempo real", "Relatórios detalhados"],
  },
  {
    id: 2,
    title: "Data Sync Master",
    description: "Sincronize dados entre diferentes sistemas de forma automática e segura.",
    price: "R$ 149,90",
    image: "/placeholder.svg?key=data-sync",
    category: "Integração",
    features: ["Sincronização automática", "Múltiplas fontes", "Backup seguro"],
  },
  {
    id: 3,
    title: "Cloud Optimizer",
    description: "Otimize custos e performance da sua infraestrutura em nuvem.",
    price: "R$ 199,90",
    image: "/placeholder.svg?key=cloud-opt",
    category: "Otimização",
    features: ["Análise de custos", "Recomendações IA", "Dashboard executivo"],
  },
  {
    id: 4,
    title: "Security Scanner",
    description: "Escaneie vulnerabilidades em seus sistemas e receba relatórios de segurança.",
    price: "R$ 79,90",
    image: "/placeholder.svg?key=security",
    category: "Segurança",
    features: ["Scan automatizado", "Relatórios LGPD", "Alertas críticos"],
  },
  {
    id: 5,
    title: "Workflow Builder",
    description: "Crie e automatize workflows complexos sem necessidade de programação.",
    price: "R$ 129,90",
    image: "/placeholder.svg?key=workflow",
    category: "Automação",
    features: ["Interface visual", "Integrações nativas", "Templates prontos"],
  },
  {
    id: 6,
    title: "Performance Tracker",
    description: "Monitore performance de aplicações e identifique gargalos rapidamente.",
    price: "R$ 89,90",
    image: "/placeholder.svg?key=performance",
    category: "Performance",
    features: ["Métricas em tempo real", "Análise de gargalos", "Histórico detalhado"],
  },
]

export function StoreGrid() {
  const { toast } = useToast()

  const handleComingSoon = () => {
    toast({
      title: "Lançamento em breve!",
      description: "Esta ferramenta estará disponível muito em breve. Cadastre-se para ser notificado.",
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card
          key={product.id}
          className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors group"
        >
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">{product.category}</Badge>
          </div>

          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <span className="text-lg font-bold text-primary">{product.price}</span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>

            <div className="space-y-2 mb-6">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleComingSoon}
              >
                Comprar
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:bg-muted bg-transparent"
                onClick={handleComingSoon}
              >
                Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
