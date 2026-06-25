import {
  Boxes,
  IceCreamCone,
  IceCream2,
  Package,
  GlassWater,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const categories: { name: string; icon: LucideIcon; count: string; tint: string }[] = [
  { name: 'Ice Cream Tubs', icon: Boxes, count: '24 items', tint: 'bg-berry/15 text-berry' },
  { name: 'Cones', icon: IceCreamCone, count: '18 items', tint: 'bg-mango/20 text-[#b67d1e]' },
  { name: 'Bars', icon: IceCream2, count: '15 items', tint: 'bg-primary/12 text-primary' },
  { name: 'Family Packs', icon: Package, count: '12 items', tint: 'bg-choco/15 text-choco' },
  { name: 'Sundaes', icon: GlassWater, count: '20 items', tint: 'bg-accent/50 text-[#b34a5e]' },
  { name: 'Special Editions', icon: Sparkles, count: '8 items', tint: 'bg-secondary text-secondary-foreground' },
]

export function Categories() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Browse"
          title="Shop by Category"
          description="From single cones to share-worthy family packs, there's a perfect treat for every craving."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 70} from="scale">
              <a
                href="#products"
                className="group flex h-full flex-col items-center gap-3 rounded-3xl border border-border/60 bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <span
                  className={`grid size-16 place-items-center rounded-2xl ${c.tint} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <c.icon className="size-7" />
                </span>
                <span className="font-heading font-semibold leading-tight">
                  {c.name}
                </span>
                <span className="text-xs text-muted-foreground">{c.count}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
