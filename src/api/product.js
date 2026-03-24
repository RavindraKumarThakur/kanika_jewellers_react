export const products = [
  {
    id: 1,
    title: 'Diamond Ring',
    price: 299.99,
    image: '/assets/image/product/ring1.jpg',
    description: 'Beautiful diamond ring with 1 carat stone.',
    category: 'rings',
    inStock: true,
  },
  {
    id: 2,
    title: 'Gold Necklace',
    price: 199.99,
    image: '/assets/image/product/necklace1.jpg',
    description: 'Elegant gold necklace with pendant.',
    category: 'necklaces',
    inStock: true,
  },
  // Add more products as needed
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));