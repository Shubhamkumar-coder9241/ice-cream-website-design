'use client'

import { useState } from 'react'
import { Mail, Check, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center text-primary-foreground shadow-2xl shadow-primary/30 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-mango/30 blur-3xl" />

            <span className="relative inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-medium">
              <Gift className="size-4" />
              Get 15% off your first order
            </span>

            <h2 className="relative mt-5 text-balance font-heading text-3xl font-bold sm:text-4xl">
              Join the Sweet Club
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-pretty leading-relaxed text-primary-foreground/85">
              Subscribe for exclusive flavor drops, secret offers and a little
              scoop of joy delivered to your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setDone(true)
              }}
              className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="flex flex-1 items-center gap-2 rounded-full bg-card px-4 text-foreground">
                <Mail className="size-4 shrink-0 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                  aria-label="Email address"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="secondary"
                className="rounded-full px-6"
              >
                {done ? (
                  <>
                    <Check className="size-4" />
                    Subscribed
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>
            <p className="relative mt-3 text-xs text-primary-foreground/70">
              No spam, just sprinkles. Unsubscribe anytime.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
