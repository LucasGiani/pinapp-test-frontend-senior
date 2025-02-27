import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/app/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li className="relative bg-blue-50 dark:bg-gray-700 rounded-lg shadow-lg shadow-gray-400 dark:shadow-none dark:border-gray-700 hover:shadow-lg transition-transform hover:scale-105 cursor-pointer group flex flex-col">
      <Link
        href={`/products/${product.sku}`}
        className="flex flex-col flex-grow"
      >
        <div className="relative w-full h-52 rounded-t-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-4 flex flex-col flex-grow justify-between gap-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {product.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Marca: {product.brand}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Categoría: {product.category.name}
          </p>
          <p className="dark:text-white text-2xl font-bold mt-2">
            ${product.price}
          </p>
          <button className="mt-auto w-full py-2 rounded-lg text-white font-semibold bg-primary transition-colors group-hover:bg-blue-700">
            Ver Detalle
          </button>
        </div>
      </Link>
    </li>
  );
}
