import { Mail, Phone, MapPin, Twitter, Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@gluonslab.com",
    href: "mailto:contato@gluonslab.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (11) 9999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "São Paulo, SP - Brasil",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/gluonslab",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/gluonslab",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/gluonslab",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Informações de Contato</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Estamos sempre prontos para conversar sobre como podemos ajudar a fortalecer sua infraestrutura digital. Entre
          em contato através de qualquer um dos canais abaixo.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <detail.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                  {detail.href ? (
                    <a href={detail.href} className="text-foreground hover:text-primary transition-colors font-medium">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{detail.value}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Redes Sociais</h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card/70 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Horário de Atendimento</h3>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>Segunda a Sexta: 9h às 18h</p>
            <p>Sábado: 9h às 12h</p>
            <p>Domingo: Fechado</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
