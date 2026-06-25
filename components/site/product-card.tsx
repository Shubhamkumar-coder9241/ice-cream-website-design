'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Check, Heart, Plus, Star } from 'lucide-react'
import type { Product } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl bg-secondary/50">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          aria-label="Add to wishlist"
          aria-pressed={liked}
          onClick={() => setLiked((v) => !v)}
          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-card/80 text-foreground/70 shadow backdrop-blur transition-colors hover:text-primary"
        >
          <Heart className={cn('size-4', liked && 'fill-primary text-primary')} />
        </button>
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
        />
      </div>

      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
        {product.flavor}
      </span>
      <h3 className="mt-1 font-heading text-lg font-semibold leading-snug">
        {product.name}
      </h3>

      <div className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
        <Star className="size-4 fill-mango text-mango" />
        <span className="font-medium text-foreground">{product.rating}</span>
        <span>({product.reviews.toLocaleString()})</span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5">
          <span className="font-heading text-xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <Button
          size="sm"
          onClick={() => setAdded(true)}
          className="rounded-full"
          variant={added ? 'secondary' : 'default'}
        >
          {added ? (
            <>
              <Check className="size-4" /> Added
            </>
          ) : (
            <>
              <Plus className="size-4" /> Add
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
