import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const milestones = [
  {
    year: '1985',
    title: 'A humble cart',
    text: 'Grandpa Rao started hand-churning ice cream from a single cart on the seaside promenade.',
  },
  {
    year: '1998',
    title: 'First parlour',
    text: 'Demand grew, and our first Scoopful parlour opened its doors with 12 signature flavors.',
  },
  {
    year: '2012',
    title: 'Going nationwide',
    text: 'We crossed 100 stores while staying true to our small-batch, all-natural roots.',
  },
  {
    year: '2024',
    title: '2 million smiles',
    text: 'Today we deliver frozen-fresh joy to over 2 million happy customers across 320 stores.',
  },
]

export function BrandStory() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Our Story"
        title="Three Generations of Pure Joy"
        description="From a seaside cart to a beloved household name — our recipe has always been the same: real ingredients and a whole lot of love."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal from="left" className="flex flex-col gap-6">
          <div className="rounded-3xl border border-border/60 bg-primary/5 p-7">
            <h3 className="font-heading text-2xl font-bold text-primary">
              Our Mission
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              To spread everyday happiness through honest, handcrafted ice cream
              that families can trust and treasure.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-choco/5 p-7">
            <h3 className="font-heading text-2xl font-bold text-choco">
              Our Vision
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              A world where every neighborhood has a scoop of joy within reach —
              made sustainably, served with a smile.
            </p>
          </div>
        </Reveal>

        <Reveal from="right">
          <ol className="relative ml-3 border-l-2 border-dashed border-primary/30">
            {milestones.map((m, i) => (
              <li key={m.year} className="relative pb-9 pl-8 last:pb-0">
                <span className="absolute -left-[11px] top-1 grid size-5 place-items-center rounded-full bg-primary ring-4 ring-background">
                  <span className="size-1.5 rounded-full bg-primary-foreground" />
                </span>
                <span className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
                  {m.year}
                </span>
                <h4 className="mt-1 font-heading text-xl font-semibold">
                  {m.title}
                </h4>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
