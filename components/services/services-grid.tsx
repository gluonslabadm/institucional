"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {  ArrowRight } from "lucide-react"
import Link from "next/link"

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
    title: "Analise de Segurança",
    shortDescription: "Criamos relatórios detalhados para identificar vulnerabilidades e fortalecer a segurança do seu sistema.",
    longDescription:
      "Em um cenário onde as ameaças digitais são constantes e sofisticadas, a segurança proativa é fundamental. Nosso serviço de Análise de Segurança oferece uma avaliação 360 graus dos seus ativos digitais, abrangendo aplicações, redes, infraestrutura em nuvem e processos internos. Simulamos ataques controlados e utilizamos as mais modernas ferramentas para descobrir e documentar brechas de segurança, desde configurações incorretas até vulnerabilidades complexas. Nosso relatório final serve como um guia estratégico, capacitando sua empresa a proteger dados sensíveis, garantir conformidade com regulamentações (como a LGPD) e, acima de tudo, preservar a confiança de seus clientes e parceiros.",
    image: "/seguranca_1.jpg",
  },
  {
    id: 3,
    title: "Soluções em Nuvem",
    shortDescription: "Migramos e otimizamos sua infraestrutura para a nuvem, garantindo escalabilidade e performance.",
    longDescription:
      "Transformamos sua infraestrutura tradicional em uma arquitetura de nuvem moderna e eficiente. Oferecemos serviços completos de migração, desde o planejamento estratégico até a implementação e otimização contínua. Trabalhamos com as principais plataformas de nuvem (AWS, Azure, Google Cloud) para garantir alta disponibilidade, escalabilidade automática e redução de custos operacionais. Implementamos práticas de DevOps e automação para acelerar deployments e melhorar a confiabilidade.",
    image: "/nuvem_1.jpg",
  },
  {
    id: 4,
    title: "Segurança Digital",
    shortDescription: "Implementamos as melhores práticas de segurança para proteger seus dados e sistemas.",
    longDescription:
      "Nossa abordagem à segurança digital é baseada em uma arquitetura robusta e de múltiplas camadas, seguindo os princípios de Zero Trust. Implementamos e gerenciamos um ecossistema de segurança completo, que inclui gestão de identidade e acesso (IAM), criptografia de dados em trânsito e em repouso, e soluções avançadas de detecção e resposta (EDR/XDR). Através de nossas soluções de SIEM e SOC, realizamos o monitoramento de segurança 24/7, correlacionando eventos para caçar ameaças ativamente. Além de garantir conformidade com frameworks como ISO 27001 e LGPD, nosso foco é elevar a maturidade de segurança da sua organização, criando uma defesa resiliente e adaptável.", 
    image: "/cloud-security-digital-fortress.png",
  },
  {
    id: 5,
    title: "Análise de Dados e Big Data",
    shortDescription: "Transformamos seus dados em insights valiosos para tomada de decisões estratégicas.",
    longDescription:
      "Nós projetamos e implementamos ecossistemas de dados modernos, prontos para a era da Inteligência Artificial. Nossa abordagem abrange a construção de arquiteturas escaláveis, como Data Lakehouses, e a orquestração de pipelines de dados via processos de ELT (Extract, Load, Transform) de alta performance. Desenvolvemos e treinamos modelos de Machine Learning customizados para desafios como previsão de churn, detecção de anomalias e otimização de precificação, aplicando práticas de MLOps para garantir o ciclo de vida, monitoramento e performance contínua dos modelos em produção. Nosso objetivo é transformar seus dados em um ativo estratégico governado, impulsionando uma cultura verdadeiramente data-driven.",
    image: "/analitic_1.jpg",
  },
  {
    id: 6,
    title: "Automação de Processos",
    shortDescription: "Automatizamos workflows complexos para aumentar eficiência e reduzir erros operacionais.",
    longDescription:
      "Nós transformamos a automação de tarefas em uma orquestração de processos de ponta a ponta. Iniciamos com Process Mining para descobrir gargalos e ineficiências ocultas, utilizando modelagem em BPMN para desenhar workflows otimizados e resilientes. Nossas soluções integram plataformas de RPA (Robotic Process Automation), iPaaS (Integration Platform as a Service) e APIs customizadas para criar um sistema nervoso digital que opera com precisão e escalabilidade. O foco é construir uma arquitetura de hiperautomação, onde cada processo é não apenas automatizado, mas também monitorado, gerenciado e continuamente otimizado através de analytics, garantindo governança e performance excepcionais.",
    image: "/automacao_1.jpg",
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
            className="bg-card/50 backdrop-blur-sm hover:border-primary border-border/50 hover:bg-card/70 transition-colors group cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.shortDescription}</p>
              <Button variant="ghost" size="sm" className="group p-1 h-auto text-white hover:text-black font-bold">
                Ver Detalhes
                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="custom-dialog-content max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-border hover:border-primary">
          <DialogHeader className="relative">
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

              <div className="prose prose-invert max-w-none text-justify">
                <p className="text-muted-foreground leading-relaxed text-base">{selectedService.longDescription}</p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted px-8 py-3 bg-primary/90 shadow-xl shadow-primary/40 hover:border-primary/70">
                  <Link href="/contato">
                    Solicitar Orçamento
                  </Link>
                </Button>
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
