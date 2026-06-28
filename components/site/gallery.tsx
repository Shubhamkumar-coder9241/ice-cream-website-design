import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const items = [
  { src: 'https://content3.jdmagicbox.com/comp/def_content_category/kwality-walls/1862863-kwality-walls-1001-66etm.jpg', alt: 'Assorted colorful ice cream scoops flat lay', span: 'row-span-2' },
  { src: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/9f77f976-317d-4266-90ed-c29811f14914_290590.JPG', alt: 'Hand holding a melting double-scoop cone' },
  { src: 'https://b.zmtcdn.com/data/dish_photos/06f/f5fea3c0ccf4c1f8cb747187fb20406f.jpeg', alt: 'Macro close-up of a chocolate ice cream scoop' },
  { src: 'https://content3.jdmagicbox.com/comp/def_content_category/kwality-walls/kwality-walls-450-nn0kd.jpg', alt: 'Three colorful popsicle bars with fresh fruit', span: 'row-span-2' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYK0eUWJqeaMprZ7fPEyqf9iA3FZfXvEIjg&s', alt: 'Mango sundae in a tall glass' },
  { src: 'https://pbs.twimg.com/media/HBBqd_jbMAAqenL.jpg', alt: 'Mixed berry ice cream cup' },
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
