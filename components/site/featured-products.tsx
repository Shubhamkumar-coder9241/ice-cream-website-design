import { products } from '@/lib/data'
import { ProductCard } from './product-card'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function FeaturedProducts() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Featured"
        title="Our Most-Loved Scoops"
        description="Hand-churned favorites that keep our fans coming back for more. Pick your pint and let the joy begin."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {products.slice(0, 4).map((product, i) => (
          <Reveal key={product.id} delay={i * 80} from="up">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
