export type Flavor =
  | 'Chocolate'
  | 'Vanilla'
  | 'Oreo'
  | 'Mango'
  | 'Butterscotch'
  | 'American Nuts'

export type Product = {
  id: string
  name: string
  flavor: Flavor
  rating: number
  reviews: number
  image: string
  badge?: string
}

export const products: Product[] = [
  {
    id: 'choco-fudge',
    name: 'Chocolate Brownie',
    flavor: 'Chocolate',
    rating: 4.9,
    reviews: 1284,
    image: '/images/product-choco-tub.jpg',
    badge: 'Bestseller',
  },
  {
    id: 'vanilla-bean',
    name: 'Oreo ',
    flavor: 'Oreo',
    rating: 4.8,
    reviews: 932,
    image: '/images/product-vanilla-cone.jpeg',
  },
  {
    id: 'strawberry-bar',
    name: 'Strawberry Cream Bar',
    flavor: 'Vanilla',
    rating: 4.7,
    reviews: 611,
    image: '/images/product-strawberry-bar.jpeg',
    badge: 'New',
  },
  {
    id: 'mango-sundae',
    name: 'Aamras',
    flavor: 'Mango',
    rating: 4.9,
    reviews: 845,
    image: '/images/product-mango-sundae.jpeg',
  },
  {
    id: 'butterscotch',
    name: 'Crunchy Butterscotch',
    flavor: 'Butterscotch',
    rating: 4.8,
    reviews: 723,
    image: '/images/product-butterscotch.avif',
  },
  {
    id: 'mixed-fruit',
    name: 'American Nuts',
    flavor: 'American Nuts',
    rating: 4.6,
    reviews: 498,
    image: '/images/product-american-nuts.jpg',
    badge: 'Limited',
  },
  {
    id: 'family-pack',
    name: 'Family Pack',
    flavor: 'Oreo',
    rating: 4.9,
    reviews: 1502,
    image: '/images/product-family-pack.avif',
    badge: 'Value',
  },
  {
    id: 'choco-cone',
    name: 'Twister',
    flavor: 'Chocolate',
    rating: 4.7,
    reviews: 388,
    image: '/images/twister.jpg',
  },
]

export const flavors: { name: Flavor; color: string }[] = [
  { name: 'Chocolate', color: '#5b3a29' },
  { name: 'Vanilla', color: '#e7c98f' },
  { name: 'Oreo', color: '#ee6f8e' },
  { name: 'Mango', color: '#f4b740' },
  { name: 'Butterscotch', color: '#c98b3c' },
  { name: 'American Nuts', color: '#a8447e' },
]
