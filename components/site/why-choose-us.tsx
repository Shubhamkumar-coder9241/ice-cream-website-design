import { Award, IceCream, Leaf, Truck, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const features: { icon: LucideIcon; title: string; text: string; tint: string }[] = [
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    text: 'Farm-fresh dairy, real fruit and ethically sourced cocoa — never artificial.',
    tint: 'bg-[#e7f3e0] text-[#3f7a2e]',
  },
  {
    icon: IceCream,
    title: 'Rich Creamy Taste',
    text: 'Slow-churned in small batches for that signature velvety, dreamy texture.',
    tint: 'bg-accent/50 text-[#b34a5e]',
  },
  {
    icon: Award,
    title: 'Trusted Brand',
    text: 'Three generations of scoop-makers and over 2 million happy customers.',
    tint: 'bg-mango/25 text-[#b67d1e]',
  },
  {
    icon: Truck,
    title: 'Wide Variety',
    text: '50+ flavors delivered frozen-fresh to your door across 320 stores.',
    tint: 'bg-primary/12 text-primary',
  },
]

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Why Scoopful"
        title="Crafted With Love, Made to Delight"
        description="Every batch is a promise of quality, taste and the kind of joy only great ice cream can bring."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 90} from="up" className="h-full">
            <div className="flex h-full flex-col items-start gap-4 rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <span className={`grid size-14 place-items-center rounded-2xl ${f.tint}`}>
                <f.icon className="size-7" />
              </span>
              <h3 className="font-heading text-xl font-semibold">{f.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
