import { PageProps } from '@/.next/types/app/page';
import { fetchProductBySku } from '@/utils/api';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const { sku } = resolvedParams;

  if (!sku) return notFound();

  const product = await fetchProductBySku(sku);

  if (!product) return notFound();

  return (
    <section className="flex flex-col gap-4 flex-grow items-center bg-lightBg dark:bg-darkBg">
      <div className="w-full">
        <Link
          href="/"
          className="flex items-center w-fit gap-2 text-gray-700 dark:text-gray-300 dark:hover:text-white hover:underline hover:text-black transition"
        >
          <ChevronLeft size={30} />
          <span className="text-lg">Volver</span>
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="w-full md:w-1/2 xl:w-2/3 rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-lg md:shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 rounded-lg border border-gray-300 dark:border-white/30 p-6 h-fit">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              [SKU: <span className="font-medium">{product.sku}</span>]
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {product.description}
          </p>
          <p className="text-4xl mt-4 dark:text-white">${product.price}</p>

          <ul className="mt-4 text-gray-600 dark:text-gray-300">
            {product.specifications.map((spec) => (
              <li key={spec.name}>
                <strong>{spec.name}:</strong> {spec.value}
              </li>
            ))}
          </ul>

          <div className="relative group">
            <button className="mt-6 w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
              Comprar
            </button>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 mb-1 w-max bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Esta funcionalidad no está disponible en la demo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
