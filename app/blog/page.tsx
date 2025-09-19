import { BlogGrid } from "@/components/blog/blog-grid"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Blog - Gluons Lab",
  description:
    "Insights, tendências e conhecimento do mundo da tecnologia. Compartilhamos nossa experiência em desenvolvimento e inovação.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background/65">
      <div className="pt-10 pb-16">
        <AnimatedSection className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Insights do Nosso Laboratório
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Compartilhamos conhecimento, tendências e experiências do mundo da tecnologia e inovação
            </p>
          </div>

          <BlogGrid />
        </AnimatedSection>
      </div>
    </div>
  )
}
