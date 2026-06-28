'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Eye, Heart, Star } from 'lucide-react'
import { products } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const picks = [products[0], products[3], products[6]]

function BestSellerCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const [liked, setLiked] = useState(false)
  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/60 p-6 shadow-sm transition-all duration-300 hover:shadow-2xl sm:p-8',
        index === 0 && 'bg-primary text-primary-foreground',
        index === 1 && 'bg-card',
        index === 2 && 'bg-choco text-cream',
      )}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-background/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">
          #{index + 1} Best Seller
        </span>
        <button
          type="button"
          aria-label="Add to wishlist"
          aria-pressed={liked}
          onClick={() => setLiked((v) => !v)}
          className="grid size-9 place-items-center rounded-full bg-background/20 backdrop-blur transition-transform hover:scale-110"
        >
          <Heart className={cn('size-4', liked && 'fill-current')} />
        </button>
      </div>

      <div className="relative mx-auto my-6 aspect-square w-full max-w-[220px]">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 80vw, 30vw"
          className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:rotate-3"
        />
      </div>

      <div className="mt-auto">
        <div className="flex items-center gap-1 text-sm opacity-90">
          <Star className="size-4 fill-current" />
          {product.rating} · {product.reviews.toLocaleString()} reviews
        </div>
        <h3 className="mt-1 font-heading text-2xl font-bold">{product.name}</h3>
        <p className="mt-1 text-sm opacity-80">{product.flavor} · Premium tub</p>
        <div className="mt-5 flex items-center justify-end gap-3">
          <Button
            variant={index === 1 ? 'default' : 'secondary'}
            className="rounded-full"
          >
            <Eye className="size-4" />
            Quick View
          </Button>
        </div>
      </div>
    </div>
  )
}

export function BestSellers() {
  return (
    <section id="best-sellers" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Crowd Favorites"
        title="This Month's Best Sellers"
        description="The scoops everyone is talking about — spotlighted just for you."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {picks.map((p, i) => (
          <Reveal key={p.id} delay={i * 100} from="up" className="h-full">
            <BestSellerCard product={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
