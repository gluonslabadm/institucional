import { HeroSlider } from "@/components/hero-slider"
import { ServiceHighlights } from "@/components/service-highlights"
import { AboutPreview } from "@/components/about-preview"
import { BlogPreview } from "@/components/blog-preview"
import { CTASection } from "@/components/cta-section"
import { AnimatedSection } from "@/components/animated-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative z-10">
        {/* Hero Section with Slider */}
        <HeroSlider />

        {/* Service Highlights */}
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 mt-16" delay={0.1}>
          <ServiceHighlights />
        </AnimatedSection>

        {/* About Us Preview */}
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 mt-16" delay={0.2}>
          <AboutPreview />
        </AnimatedSection>

        {/* Blog Preview */}
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 mt-16" delay={0.3}>
          <BlogPreview />
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 mt-16" delay={0.4}>
          <CTASection />
        </AnimatedSection>
      </div>
    </div>
  )
}
