import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src="/modern-tech-team-working-with-holographic-displays.png" alt="Equipe Gluons Lab" className="rounded-lg shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Somos os Arquitetos das Conexões Invisíveis
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Na Gluons Lab, acreditamos que a verdadeira inovação acontece quando diferentes elementos se conectam de
            forma harmoniosa. Como as partículas fundamentais que mantêm a matéria unida, somos a força coesiva que
            transforma ideias em soluções digitais robustas.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Nossa missão é ser o elo fundamental entre tecnologia e negócios, criando conexões que fortalecem e
            impulsionam o sucesso digital.
          </p>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
            Conheça nossa História
          </Button>
        </div>
      </div>
    </section>
  )
}
