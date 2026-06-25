'use client'

import { useEffect, useState } from 'react'
import { Check, Copy, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

function useCountdown(target: number) {
  const [left, setLeft] = useState(target - Date.now())
  useEffect(() => {
    const id = setInterval(() => setLeft(target - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])
  const clamped = Math.max(left, 0)
  return {
    hours: Math.floor(clamped / 3_600_000),
    minutes: Math.floor((clamped / 60_000) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  }
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="grid min-w-14 place-items-center rounded-2xl bg-background/15 px-3 py-2 font-mono text-2xl font-bold tabular-nums backdrop-blur sm:text-3xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1.5 text-xs uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  )
}

export function SpecialOffers() {
  const [target] = useState(() => Date.now() + 1000 * 60 * 60 * 8 + 1000 * 60 * 42)
  const { hours, minutes, seconds } = useCountdown(target)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText('SCOOP25')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="offers" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Sweet Deals"
        title="Special Offers & Discounts"
        description="Limited-time treats that taste even better at a discount. Grab them before the timer melts away."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Main deal with countdown */}
        <Reveal className="lg:col-span-2" from="left">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-xl sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-background/10 blur-2xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/20 px-3 py-1 text-sm font-semibold backdrop-blur">
                <Tag className="size-4" /> Flash Sale
              </span>
              <h3 className="mt-4 max-w-md text-balance font-heading text-3xl font-bold sm:text-4xl">
                Up to 40% off all family packs
              </h3>
              <p className="mt-2 max-w-md opacity-90">
                Stock your freezer with everyone's favorites. Free delivery on
                orders over $30.
              </p>
            </div>
            <div className="relative mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <TimeBox value={hours} label="Hours" />
                <span className="font-heading text-2xl font-bold">:</span>
                <TimeBox value={minutes} label="Mins" />
                <span className="font-heading text-2xl font-bold">:</span>
                <TimeBox value={seconds} label="Secs" />
              </div>
              <Button variant="secondary" size="lg" className="rounded-full">
                Shop the Sale
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Coupon */}
        <Reveal from="right">
          <div className="flex h-full flex-col justify-between rounded-[2rem] border border-dashed border-primary/40 bg-card p-8 shadow-sm">
            <div>
              <h3 className="font-heading text-2xl font-bold">First order treat</h3>
              <p className="mt-2 text-muted-foreground">
                New here? Enjoy <span className="font-semibold text-foreground">25% off</span> your
                first scoop box with this coupon.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between gap-2 rounded-2xl border border-border bg-secondary/60 px-4 py-3">
                <span className="font-mono text-lg font-bold tracking-widest text-primary">
                  SCOOP25
                </span>
                <Button size="sm" variant="ghost" className="rounded-full" onClick={copy}>
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Valid for new customers only. Cannot be combined with other offers.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
