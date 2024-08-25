/*
  This example requires some changes to your config:
  
  
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  
*/
const products = [
  {
    id: 1,
    name: 'Savarkar:Echoes From Forgotton Past',
    href: '/Genre',
    price: 'Rs.481',
    imageSrc: 'https://m.media-amazon.com/images/I/812ao-DsKzL._SL1500_.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Rendezvous With Rama',
    href: '/Genre',
    price: 'Rs.350',
    imageSrc: 'https://www.booksbykilo.in/media/books/BBK/9780575077331-New.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Those Who are Loved',
    href: '/Genre',
    price: 'Rs.177',
    imageSrc: 'https://www.booksbykilo.in/media/books/BBK/9781472223227.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'I LOVE YOU',
    href: '/Genre',
    price: 'Rs.134',
    imageSrc: 'https://www.booksbykilo.in/media/books/BBK/9780007165001.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"style={{ width: 350, height: 450 }}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}