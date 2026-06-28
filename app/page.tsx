import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Marquee } from '@/components/site/marquee'
import { Categories } from '@/components/site/categories'
import { FeaturedProducts } from '@/components/site/featured-products'
import { BestSellers } from '@/components/site/best-sellers'
import { FlavorExplorer } from '@/components/site/flavor-explorer'
import { SpecialOffers } from '@/components/site/special-offers'
import { WhyChooseUs } from '@/components/site/why-choose-us'
import { Reviews } from '@/components/site/reviews'
import { Gallery } from '@/components/site/gallery'
import { BrandStory } from '@/components/site/brand-story'
import { StoreLocator } from '@/components/site/store-locator'
import { Faq } from '@/components/site/faq'
import { AppSection } from '@/components/site/app-section'
import { Newsletter } from '@/components/site/newsletter'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <FeaturedProducts />
      <BestSellers />
      <FlavorExplorer />
      <WhyChooseUs />
      <Reviews />
      <Gallery />
      <BrandStory />
      <StoreLocator />
      <AppSection />
      <Faq />
      
      <Footer />
    </main>
  )
}
