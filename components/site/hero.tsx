'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronDown, ShoppingBag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

function FloatingChip({
  className,
  emoji,
  label,
  delay,
}: {
  className: string
  emoji: string
  label: string
  delay: number
}) {
  return (
    <div
      className={`absolute hidden animate-float md:flex ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="glass flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 text-sm font-medium shadow-lg">
        <span aria-hidden className="text-base">
          {emoji}
        </span>
        {label}
      </div>
    </div>
  )
}

export function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2
        const y = (e.clientY / window.innerHeight - 0.5) * 2
        setOffset({ x, y })
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* glowing blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 size-80 animate-blob rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-10 size-96 animate-blob rounded-full bg-accent/40 blur-3xl [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/3 size-72 animate-blob rounded-full bg-mango/30 blur-3xl [animation-delay:6s]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        {/* copy */}
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-sm font-medium text-foreground/70 shadow-sm backdrop-blur">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 fill-mango text-mango"
                />
              ))}
            </span>
            Loved by 2M+ ice cream fans
          </span>

          <h1 className="mt-6 text-pretty font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Happiness in <span className="text-primary">Every Scoop</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Indulge in irresistibly creamy, small-batch ice cream crafted from
            the finest farm-fresh ingredients. Real flavor, real joy — in every
            single bite.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button size="lg" className="rounded-full px-7 text-base shadow-lg shadow-primary/25">
              Explore Flavors
              <ArrowRight className="size-4" />
            </Button>
            {/* <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-7 text-base"
            ><a href="+919241296570">    <ShoppingBag className="size-4" />
              Order Now</a>
          
            </Button> */}
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-7 text-base"
              onClick={() => {
                window.location.href = "tel:+919241296570";
              }}
            >
              <ShoppingBag className="mr-2 size-4" />
              Order Now
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            {[
              { n: '50+', l: 'Flavors' },
              { n: '320', l: 'Stores' },
              { n: '4.9', l: 'Avg Rating' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-heading text-3xl font-bold text-foreground">
                  {s.n}
                </p>
                <p className="text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3D cone */}
        <div className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center sm:h-[520px]">
          <div
            className="absolute size-72 rounded-full bg-gradient-to-b from-accent/60 to-secondary/40 blur-2xl sm:size-96"
            style={{
              transform: `translate(${offset.x * -16}px, ${offset.y * -16}px)`,
            }}
          />
          <div
            className="relative animate-float-slow transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${offset.x * 22}px, ${offset.y * 22}px)`,
            }}
          >
            <Image
              src="/images/hero-cone.png"
              alt="Triple scoop premium waffle cone with strawberry, vanilla and chocolate"
              width={520}
              height={620}
              priority
              className="h-auto w-[300px] drop-shadow-2xl sm:w-[420px]"
            />
          </div>

          <FloatingChip
            className="left-0 top-10"
            emoji="🍓"
            label="Fresh Berries"
            delay={0}
          />
          <FloatingChip
            className="right-2 top-24"
            emoji="🍫"
            label="Belgian Choco"
            delay={1.5}
          />
          <FloatingChip
            className="bottom-16 left-2"
            emoji="✨"
            label="100% Natural"
            delay={2.4}
          />
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground sm:flex"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
