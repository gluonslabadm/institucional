"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Integração de Sistemas",
    shortDescription:
      "Conectamos diferentes plataformas e sistemas para criar um ecossistema digital coeso e eficiente.",
    longDescription:
      "Nossa expertise em integração de sistemas permite que sua empresa conecte diferentes plataformas, aplicações e bases de dados de forma seamless. Desenvolvemos soluções personalizadas que eliminam silos de informação, automatizam processos e garantem que todos os seus sistemas trabalhem em harmonia. Utilizamos as melhores práticas de arquitetura de software e padrões de integração para criar conexões robustas, escaláveis e seguras.",
    image: "/futuristic-system-integration-visualization.png",
  },
  {
    id: 2,
    title: "Desenvolvimento de APIs",
    shortDescription: "Criamos APIs robustas e seguras que facilitam a comunicação entre diferentes aplicações.",
    longDescription:
      "Desenvolvemos APIs RESTful e GraphQL de alta performance que servem como a espinha dorsal da comunicação entre seus sistemas. Nossas APIs são projetadas com foco em segurança, escalabilidade e facilidade de uso. Implementamos autenticação robusta, documentação completa e monitoramento em tempo real. Seja para integrar sistemas internos ou criar plataformas para terceiros, nossas APIs garantem comunicação eficiente e confiável.",
    image: "/api-connections-network-visualization.png",
  },
  {
    id: 3,
    title: "Soluções em Nuvem",
    shortDescription: "Migramos e otimizamos sua infraestrutura para a nuvem, garantindo escalabilidade e performance.",
    longDescription:
      "Transformamos sua infraestrutura tradicional em uma arquitetura de nuvem moderna e eficiente. Oferecemos serviços completos de migração, desde o planejamento estratégico até a implementação e otimização contínua. Trabalhamos com as principais plataformas de nuvem (AWS, Azure, Google Cloud) para garantir alta disponibilidade, escalabilidade automática e redução de custos operacionais. Implementamos práticas de DevOps e automação para acelerar deployments e melhorar a confiabilidade.",
    image: "/placeholder.svg?key=cloud1",
  },
  {
    id: 4,
    title: "Segurança Digital",
    shortDescription: "Implementamos as melhores práticas de segurança para proteger seus dados e sistemas.",
    longDescription:
      "Protegemos seus ativos digitais com soluções de segurança abrangentes e atualizadas. Nossa abordagem inclui análise de vulnerabilidades, implementação de controles de acesso, criptografia de dados, monitoramento de segurança 24/7 e planos de resposta a incidentes. Seguimos os frameworks de segurança mais rigorosos e mantemos conformidade com regulamentações como LGPD, ISO 27001 e outras normas relevantes para seu setor.",
    image: "/cloud-security-digital-fortress.png",
  },
  {
    id: 5,
    title: "Análise de Dados e Big Data",
    shortDescription: "Transformamos seus dados em insights valiosos para tomada de decisões estratégicas.",
    longDescription:
      "Ajudamos sua empresa a extrair valor máximo dos seus dados através de soluções avançadas de analytics e big data. Desenvolvemos pipelines de dados robustos, implementamos ferramentas de visualização interativas e criamos modelos preditivos que impulsionam a tomada de decisões. Nossa expertise inclui data warehousing, processamento em tempo real, machine learning e inteligência artificial aplicada aos seus desafios de negócio.",
    image: "/placeholder.svg?key=data1",
  },
  {
    id: 6,
    title: "Automação de Processos",
    shortDescription: "Automatizamos workflows complexos para aumentar eficiência e reduzir erros operacionais.",
    longDescription:
      "Identificamos e automatizamos processos manuais repetitivos, criando workflows inteligentes que aumentam a produtividade e reduzem custos operacionais. Utilizamos tecnologias como RPA (Robotic Process Automation), workflows baseados em eventos e integração de sistemas para criar soluções de automação personalizadas. Nosso foco é liberar sua equipe para atividades estratégicas enquanto garantimos execução consistente e livre de erros.",
    image: "/placeholder.svg?key=auto1",
  },
]

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.id}
            className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors group cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.shortDescription}</p>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                Ver Detalhes →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-border">
          <DialogHeader className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 text-muted-foreground hover:text-foreground"
              onClick={() => setSelectedService(null)}
            >
              <X className="w-4 h-4" />
            </Button>
            <DialogTitle className="text-2xl font-heading font-bold text-foreground pr-8">
              {selectedService?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedService && (
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={selectedService.image || "/placeholder.svg"}
                  alt={selectedService.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed text-base">{selectedService.longDescription}</p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Solicitar Orçamento</Button>
                <Button variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
                  Saiba Mais
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
