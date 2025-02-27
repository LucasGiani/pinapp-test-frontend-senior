import { fetchProducts } from '@/utils/api';
import ProductList from '@/components/product/ProductList';
import { notFound } from 'next/navigation';

export default async function ProductsPage() {
  try {
    const initialData = await fetchProducts();

    return (
      <section className="flex flex-col flex-grow gap-5">
        <ProductList
          initialProducts={initialData.content}
          initialMetadata={initialData.metadata}
        />
      </section>
    );
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return notFound();
  }
}
