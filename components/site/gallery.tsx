import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const items = [
  { src: '/images/gallery-1.png', alt: 'Assorted colorful ice cream scoops flat lay', span: 'row-span-2' },
  { src: '/images/gallery-2.png', alt: 'Hand holding a melting double-scoop cone' },
  { src: '/images/gallery-3.png', alt: 'Macro close-up of a chocolate ice cream scoop' },
  { src: '/images/gallery-4.png', alt: 'Three colorful popsicle bars with fresh fruit', span: 'row-span-2' },
  { src: '/images/product-mango-sundae.png', alt: 'Mango sundae in a tall glass' },
  { src: '/images/product-mixed-fruit.png', alt: 'Mixed berry ice cream cup' },
]

export function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Gallery"
        title="A Feast For The Eyes"
        description="A little scroll-stopping inspiration from our scoop studio."
      />
      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal
            key={item.src + i}
            delay={i * 70}
            from="scale"
            className={cn('group relative overflow-hidden rounded-3xl', item.span)}
          >
            <div className="relative size-full overflow-hidden rounded-3xl border border-border/60 bg-secondary/50">
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
