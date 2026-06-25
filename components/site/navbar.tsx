'use client'

import { useEffect, useState } from 'react'
import { IceCream, Menu, ShoppingBag, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Flavors', href: '#flavors' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Special Offers', href: '#offers' },
  { label: 'About Us', href: '#about' },
  { label: 'Store Locator', href: '#stores' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6">
        <nav
          className={cn(
            'flex items-center justify-between rounded-full border border-transparent px-4 py-2.5 transition-all duration-300 sm:px-5',
            scrolled
              ? 'glass border-border/60 shadow-[0_10px_40px_-12px_rgba(226,55,68,0.25)]'
              : 'bg-transparent',
          )}
        >
          <a href="#home" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-md">
              <IceCream className="size-5" />
            </span>
            <span className="font-heading text-xl font-bold tracking-tight">
              Scoopful
            </span>
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button className="hidden rounded-full sm:inline-flex" size="sm">
              <ShoppingBag className="size-4" />
              Order Now
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full bg-secondary text-secondary-foreground xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-3xl border border-border/60 p-3 shadow-xl xl:hidden">
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <Button className="w-full rounded-full">
                  <ShoppingBag className="size-4" />
                  Order Now
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
