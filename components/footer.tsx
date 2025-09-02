"use client"

import { Twitter, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-full animate-pulse"></div>
              </div>
              <span className="text-foreground text-xl font-mono font-bold">Gluons Lab</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Somos os Arquitetos das Conexões Invisíveis. A força coesiva que conecta desafios a oportunidades no mundo
              digital.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-full h-full" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-full h-full" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-full h-full" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-foreground font-heading font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contato@gluonslab.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-foreground font-heading font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="/sobre" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="/servicos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="/store" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Store
              </a>
              <a href="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/contato" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Gluons Lab. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
