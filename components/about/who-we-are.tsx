export function WhoWeAre() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Quem Somos</h1>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
            <p>
              Na Gluons Lab, somos mais do que uma empresa de desenvolvimento de software. Somos os arquitetos das
              conexões invisíveis que mantêm o mundo digital unido e funcionando em perfeita harmonia.
            </p>
            <p>
              Inspirados pelas partículas fundamentais que dão coesão à matéria, acreditamos que a verdadeira inovação
              acontece quando diferentes elementos tecnológicos se conectam de forma inteligente e robusta.
            </p>
            <p>
              Nossa equipe é composta por especialistas apaixonados por tecnologia, que compartilham a visão de ser a
              força coesiva que transforma desafios complexos em oportunidades digitais extraordinárias.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="/modo_5.jpg"
            alt="Equipe Gluons Lab trabalhando com tecnologia avançada"
            className="rounded-lg shadow-2xl w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
        </div>
      </div>
    </section>
  )
}
