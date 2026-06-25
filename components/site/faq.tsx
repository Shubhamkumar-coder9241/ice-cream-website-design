'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How is the ice cream delivered fresh?',
    a: 'Every order ships in insulated packaging with dry ice, keeping your scoops frozen solid for up to 48 hours in transit. Most local orders arrive same day.',
  },
  {
    q: 'Are your ingredients really all-natural?',
    a: 'Yes. We use farm-fresh dairy, real fruit and ethically sourced cocoa, with no artificial colors, flavors or preservatives in any of our recipes.',
  },
  {
    q: 'Do you offer vegan or sugar-free options?',
    a: 'Absolutely. We have a growing range of plant-based and no-added-sugar flavors. Just filter by your preference in the Flavor Explorer above.',
  },
  {
    q: 'What is your return or refund policy?',
    a: 'If anything arrives less than perfect, contact us within 24 hours with a photo and we will send a replacement or full refund — no questions asked.',
  },
  {
    q: 'Can I order custom flavors for events?',
    a: 'Yes! We cater weddings, parties and corporate events with custom flavors and branded tubs. Reach out via the contact section to plan your order.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, Scooped & Answered"
      />
      <div className="mt-12 flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <Reveal key={f.q} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-heading text-lg font-semibold">
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      'grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  >
                    <Plus className="size-5" />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
