import { fetchProducts } from '@/utils/api';
import ProductList from '@/components/product/ProductList';

export default async function ProductsPage() {
  const initialData = await fetchProducts();

  return (
    <section className="flex flex-col flex-grow gap-5">
      <ProductList
        initialProducts={initialData.content}
        initialMetadata={initialData.metadata}
      />
    </section>
  );
}
