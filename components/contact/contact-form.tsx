"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    })

    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardContent className="p-8">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Envie sua Mensagem</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-foreground">
                Nome
              </Label>
              <Input
                id="firstName"
                name="firstName"
                required
                className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-foreground">
                Sobrenome
              </Label>
              <Input
                id="lastName"
                name="lastName"
                required
                className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                placeholder="Seu sobrenome"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">
              Assunto
            </Label>
            <Input
              id="subject"
              name="subject"
              required
              className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
              placeholder="Como podemos ajudar?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Mensagem
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              className="bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
              placeholder="Conte-nos mais sobre seu projeto ou necessidade..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground text-center">
            Ao enviar esta mensagem, você concorda com nossa política de privacidade e termos de uso.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
