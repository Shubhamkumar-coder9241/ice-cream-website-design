export type Flavor =
  | 'Chocolate'
  | 'Vanilla'
  | 'Strawberry'
  | 'Mango'
  | 'Butterscotch'
  | 'Mixed Fruit'

export type Product = {
  id: string
  name: string
  flavor: Flavor
  price: number
  oldPrice?: number
  rating: number
  reviews: number
  image: string
  badge?: string
}

export const products: Product[] = [
  {
    id: 'choco-fudge',
    name: 'Choco Fudge Brownie',
    flavor: 'Chocolate',
    price: 6.99,
    oldPrice: 8.49,
    rating: 4.9,
    reviews: 1284,
    image: '/images/product-choco-tub.png',
    badge: 'Bestseller',
  },
  {
    id: 'vanilla-bean',
    name: 'Madagascar Vanilla Bean',
    flavor: 'Vanilla',
    price: 4.99,
    rating: 4.8,
    reviews: 932,
    image: '/images/product-vanilla-cone.png',
  },
  {
    id: 'strawberry-bar',
    name: 'Strawberry Cream Bar',
    flavor: 'Strawberry',
    price: 3.49,
    rating: 4.7,
    reviews: 611,
    image: '/images/product-strawberry-bar.png',
    badge: 'New',
  },
  {
    id: 'mango-sundae',
    name: 'Alphonso Mango Sundae',
    flavor: 'Mango',
    price: 5.99,
    oldPrice: 7.49,
    rating: 4.9,
    reviews: 845,
    image: '/images/product-mango-sundae.png',
  },
  {
    id: 'butterscotch',
    name: 'Crunchy Butterscotch',
    flavor: 'Butterscotch',
    price: 5.49,
    rating: 4.8,
    reviews: 723,
    image: '/images/product-butterscotch.png',
  },
  {
    id: 'mixed-fruit',
    name: 'Wild Mixed Berry',
    flavor: 'Mixed Fruit',
    price: 6.49,
    rating: 4.6,
    reviews: 498,
    image: '/images/product-mixed-fruit.png',
    badge: 'Limited',
  },
  {
    id: 'family-pack',
    name: 'Neapolitan Family Pack',
    flavor: 'Strawberry',
    price: 12.99,
    oldPrice: 15.99,
    rating: 4.9,
    reviews: 1502,
    image: '/images/product-family-pack.png',
    badge: 'Value',
  },
  {
    id: 'choco-cone',
    name: 'Double Chocolate Cone',
    flavor: 'Chocolate',
    price: 4.49,
    rating: 4.7,
    reviews: 388,
    image: '/images/product-vanilla-cone.png',
  },
]

export const flavors: { name: Flavor; color: string }[] = [
  { name: 'Chocolate', color: '#5b3a29' },
  { name: 'Vanilla', color: '#e7c98f' },
  { name: 'Strawberry', color: '#ee6f8e' },
  { name: 'Mango', color: '#f4b740' },
  { name: 'Butterscotch', color: '#c98b3c' },
  { name: 'Mixed Fruit', color: '#a8447e' },
]
