'use client'

import { useState } from 'react'
import { Clock, MapPin, Navigation, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type Store = {
  id: string
  name: string
  address: string
  hours: string
  x: number
  y: number
}

const stores: Store[] = [
  { id: 's1', name: 'Scoopful Seaside', address: '12 Marine Drive, Bayfront', hours: '10am – 11pm', x: 22, y: 38 },
  { id: 's2', name: 'Scoopful Downtown', address: '88 Cedar Avenue, City Center', hours: '11am – 12am', x: 54, y: 26 },
  { id: 's3', name: 'Scoopful Parkside', address: '5 Maple Lane, Greenwood', hours: '10am – 10pm', x: 70, y: 58 },
  { id: 's4', name: 'Scoopful Mall', address: 'Level 2, Sunrise Mall', hours: '10am – 11pm', x: 38, y: 70 },
]

export function StoreLocator() {
  const [active, setActive] = useState(stores[0].id)

  return (
    <section id="stores" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Find Us"
          title="A Scoop Near You"
          description="320 parlours and counting. Find your nearest Scoopful and treat yourself today."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Map UI */}
          <Reveal from="left">
            <div className="relative h-80 overflow-hidden rounded-[2rem] border border-border/60 bg-[#dfeede] shadow-sm sm:h-[460px]">
              {/* stylized map lines */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(120,150,120,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,150,120,0.18) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
              <div className="absolute left-0 top-1/3 h-3 w-full -rotate-3 bg-[#cfe3cf]" />
              <div className="absolute left-1/2 top-0 h-full w-3 rotate-2 bg-[#cfe3cf]" />
              <div className="absolute bottom-6 right-8 size-28 rounded-full bg-[#bfe0ea]/70 blur-sm" />

              {stores.map((s) => {
                const isActive = active === s.id
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-label={s.name}
                    onClick={() => setActive(s.id)}
                    style={{ left: `${s.x}%`, top: `${s.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-full"
                  >
                    <span
                      className={cn(
                        'grid place-items-center rounded-full text-primary-foreground shadow-lg transition-all duration-300',
                        isActive
                          ? 'size-11 animate-bounce bg-primary'
                          : 'size-8 bg-primary/70 hover:bg-primary',
                      )}
                    >
                      <MapPin className={isActive ? 'size-6' : 'size-4'} />
                    </span>
                    {isActive && (
                      <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-card px-3 py-1 text-xs font-semibold shadow-md">
                        {s.name}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Store list */}
          <Reveal from="right" className="flex flex-col gap-4">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-sm">
              <Search className="size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter your area or zip code"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <Button size="sm" className="rounded-full">
                Search
              </Button>
            </div>

            <div className="flex flex-col gap-3">
              {stores.map((s) => {
                const isActive = active === s.id
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(s.id)}
                    className={cn(
                      'flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200',
                      isActive
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-border/60 bg-card hover:border-primary/40',
                    )}
                  >
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-heading font-semibold">
                        {s.name}
                      </span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {s.address}
                      </span>
                      <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="size-3.5" /> {s.hours}
                      </span>
                    </span>
                    <Navigation className="ml-auto size-4 shrink-0 text-primary" />
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
