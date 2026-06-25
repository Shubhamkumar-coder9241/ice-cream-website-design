'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Review = {
  name: string
  role: string
  text: string
  rating: number
  tint: string
}

const reviews: Review[] = [
  {
    name: 'Aria Mehta',
    role: 'Verified Buyer',
    text: 'Absolutely the creamiest ice cream I have ever had. The choco fudge brownie tastes like it came straight from a fine-dining dessert menu!',
    rating: 5,
    tint: 'bg-primary text-primary-foreground',
  },
  {
    name: 'Daniel Okoye',
    role: 'Foodie & Blogger',
    text: 'The mango sundae is unreal — real Alphonso flavor and not too sweet. Delivery was frozen solid and arrived in perfect condition.',
    rating: 5,
    tint: 'bg-choco text-cream',
  },
  {
    name: 'Sofia Rossi',
    role: 'Verified Buyer',
    text: 'My kids are obsessed with the strawberry bars. Clean ingredients I can actually trust. Scoopful is now a freezer staple at home.',
    rating: 5,
    tint: 'bg-mango text-[#5a3d0c]',
  },
  {
    name: 'Liam Chen',
    role: 'Verified Buyer',
    text: 'Butterscotch crunch is dangerously good. The texture is so smooth and the praline bits add the perfect crunch. 10/10 would recommend.',
    rating: 5,
    tint: 'bg-berry text-white',
  },
]

export function Reviews() {
  const [index, setIndex] = useState(0)
  const count = reviews.length

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Happy Customers"
          title="Sweet Words From Our Fans"
        />

        <div className="relative mt-12 overflow-hidden rounded-[2rem]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="w-full shrink-0 px-1"
              >
                <div className="mx-auto flex max-w-2xl flex-col items-center rounded-[2rem] border border-border/60 bg-card p-8 text-center shadow-sm sm:p-12">
                  <Quote className="size-9 text-primary/30" />
                  <blockquote className="mt-4 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
                    “{r.text}”
                  </blockquote>
                  <div className="mt-5 flex">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="size-5 fill-mango text-mango" />
                    ))}
                  </div>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span
                      className={`grid size-12 place-items-center rounded-full font-heading text-lg font-bold ${r.tint}`}
                    >
                      {r.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                    <span className="text-left">
                      <span className="block font-heading font-semibold">
                        {r.name}
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        {r.role}
                      </span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous review"
            onClick={prev}
            className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-primary' : 'w-2.5 bg-border'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next review"
            onClick={next}
            className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
