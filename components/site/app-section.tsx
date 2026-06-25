import Image from 'next/image'
import { Bell, ShoppingBag, Star } from 'lucide-react'
import { Reveal } from './reveal'

// deterministic pseudo-QR pattern (decorative)
const qr = Array.from({ length: 49 }, (_, i) => (i * 7 + (i % 5) * 3 + 2) % 3 === 0)

function QrCodeArt() {
  return (
    <div className="grid size-28 grid-cols-7 gap-0.5 rounded-xl bg-card p-2.5 shadow-inner">
      {qr.map((on, i) => (
        <span
          key={i}
          className={on ? 'rounded-[2px] bg-foreground' : 'bg-transparent'}
        />
      ))}
    </div>
  )
}

function StoreButton({ store, sub }: { store: string; sub: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-2xl bg-foreground px-5 py-2.5 text-background transition-transform hover:-translate-y-0.5"
    >
      <ShoppingBag className="size-6" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide opacity-80">
          {sub}
        </span>
        <span className="block font-heading text-base font-semibold">
          {store}
        </span>
      </span>
    </a>
  )
}

export function AppSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 text-primary-foreground shadow-xl sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-background/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-10 size-80 rounded-full bg-background/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <Reveal from="left">
            <span className="inline-flex items-center rounded-full bg-background/20 px-3.5 py-1 text-sm font-semibold backdrop-blur">
              Scoopful App
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
              Order in taps. Smile in minutes.
            </h2>
            <p className="mt-3 max-w-md text-pretty leading-relaxed opacity-90">
              Track deliveries in real time, unlock app-only flavors and earn a
              free scoop with every 5 orders. Happiness has never been this
              fast.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <StoreButton sub="Download on the" store="App Store" />
              <StoreButton sub="Get it on" store="Google Play" />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <QrCodeArt />
              <p className="max-w-[160px] text-sm opacity-90">
                Scan to download and claim your welcome scoop.
              </p>
            </div>
          </Reveal>

          {/* Phone mockup */}
          <Reveal from="right" className="flex justify-center">
            <div className="relative w-[260px]">
              <div className="rounded-[2.5rem] border-[6px] border-foreground/90 bg-card p-3 shadow-2xl">
                <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-border" />
                <div className="relative h-[420px] overflow-hidden rounded-[1.6rem] bg-secondary">
                  <Image
                    src="/images/app-scene.png"
                    alt="Scoopful mobile app showing ice cream selection"
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between rounded-2xl bg-card/85 px-3 py-2 text-foreground backdrop-blur">
                    <span className="font-heading text-sm font-bold">
                      Good evening
                    </span>
                    <Bell className="size-4" />
                  </div>
                  <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-card/90 p-3 text-foreground backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-sm font-semibold">
                        Choco Fudge Brownie
                      </span>
                      <span className="flex items-center gap-1 text-xs">
                        <Star className="size-3.5 fill-mango text-mango" /> 4.9
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-heading text-lg font-bold text-primary">
                        $6.99
                      </span>
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        Add to cart
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
