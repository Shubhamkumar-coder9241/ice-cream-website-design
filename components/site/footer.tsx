import { IceCreamCone, MapPin, Phone, Mail } from 'lucide-react'

const columns = [
  {
    title: 'Explore',
    links: ['Our Flavors', 'Best Sellers', 'New Arrivals', 'Gift Cards', 'Store Locator'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Careers', 'Press', 'Sustainability', 'Franchise'],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Track Order'],
  },
]

function Social({ label, path }: { label: string; path: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full bg-card/10 text-primary-foreground/80 transition-colors hover:bg-card/20 hover:text-primary-foreground"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d={path} />
      </svg>
    </a>
  )
}

const socials = [
  {
    label: 'Instagram',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12C21.33 1.35 20.66.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z',
  },
  {
    label: 'Facebook',
    path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.12 11.88v-8.4H7.08v-3.48h3.04V9.42c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88v2.25h3.32l-.53 3.48h-2.79v8.4C19.61 23.04 24 18.07 24 12.07z',
  },
  {
    label: 'Twitter',
    path: 'M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93zM17.61 20.64h2.04L6.49 3.24H4.3z',
  },
  {
    label: 'YouTube',
    path: 'M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.6 15.6V8.4l6.27 3.6z',
  },
]

export function Footer() {
  return (
    <footer className="bg-choco text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <IceCreamCone className="size-5" />
              </span>
              <span className="font-heading text-xl font-bold">Scoopful</span>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-primary-foreground/70">
              Crafting moments of pure joy since 1987. Small batches, big smiles,
              and a scoop of happiness in every tub.
            </p>
            <div className="mt-6 space-y-2 text-sm text-primary-foreground/70">
              <p className="flex items-center gap-2">
                <MapPin className="size-4" /> 21 Sundae Street, Sweet City
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4" /> +1 (800) 555-SCOOP
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4" /> hello@scoopo.com
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-primary-foreground/15 pt-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Scoopful Ice Cream Co. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <Social key={s.label} label={s.label} path={s.path} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
