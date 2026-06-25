const items = [
  'Farm Fresh Cream',
  'No Artificial Flavors',
  'Small Batch Churned',
  '50+ Signature Flavors',
  'Free Delivery Over $25',
  'Made With Love',
]

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-choco py-4 text-primary-foreground">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex items-center gap-8 pr-8"
            aria-hidden={dup === 1}
          >
            {items.map((item) => (
              <li key={item} className="flex items-center gap-8">
                <span className="font-heading text-lg font-medium tracking-wide whitespace-nowrap">
                  {item}
                </span>
                <span className="text-mango">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
