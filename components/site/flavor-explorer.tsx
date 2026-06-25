'use client'

import { useMemo, useState } from 'react'
import { flavors, products, type Flavor } from '@/lib/data'
import { ProductCard } from './product-card'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const filters: ('All' | Flavor)[] = ['All', ...flavors.map((f) => f.name)]

export function FlavorExplorer() {
  const [active, setActive] = useState<'All' | Flavor>('All')

  const filtered = useMemo(
    () =>
      active === 'All'
        ? products
        : products.filter((p) => p.flavor === active),
    [active],
  )

  return (
    <section id="flavors" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Flavor Explorer"
          title="Find Your Perfect Flavor"
          description="Filter by your craving and discover a scoop made just for your mood."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => {
            const color =
              f === 'All' ? undefined : flavors.find((x) => x.name === f)?.color
            const isActive = active === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'border-transparent bg-primary text-primary-foreground shadow-md'
                    : 'border-border/60 bg-card text-foreground/80 hover:border-primary/40 hover:text-primary',
                )}
              >
                {color && (
                  <span
                    aria-hidden
                    className="size-3 rounded-full ring-1 ring-black/10"
                    style={{ backgroundColor: color }}
                  />
                )}
                {f}
              </button>
            )
          })}
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={i * 60} from="scale">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
