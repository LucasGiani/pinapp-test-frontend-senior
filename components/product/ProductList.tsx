'use client';
import { useState, useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Product, ProductMetadata } from '@/app/types';
import { fetchProducts } from '@/utils/api';
import { useInView } from 'react-intersection-observer';
import { ITEMS_PER_PAGE } from '@/utils/constants';
import EmptyState from './EmptyState';
import ProductSkeleton from './ProductSkeleton';
import ProductCard from './ProductCard';
import SearchInput from './SearchInput';

export default function ProductList({
  initialProducts,
  initialMetadata,
}: {
  initialProducts: Product[];
  initialMetadata: ProductMetadata;
}) {
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const [isFloating, setIsFloating] = useState<boolean>(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);

  const { ref: endPageRef, inView: endPageInView } = useInView();

  const { data, isError, isFetching, fetchNextPage, isRefetching } =
    useInfiniteQuery({
      queryKey: ['products', debouncedSearch],
      queryFn: ({ pageParam }) =>
        fetchProducts({ page: pageParam, search: debouncedSearch }),
      initialPageParam: 1,
      initialData: {
        pages: [{ content: initialProducts, metadata: initialMetadata }],
        pageParams: [1],
      },
      getNextPageParam: (lastPage) =>
        lastPage.metadata.last ? undefined : lastPage.metadata.page + 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 5, // En cache por 5 min
    });

  useEffect(() => {
    if (endPageInView) fetchNextPage();
  }, [fetchNextPage, endPageInView]);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    const handleScroll = () => {
      if (searchContainerRef.current) {
        const { bottom } = searchContainerRef.current.getBoundingClientRect();
        setIsFloating(bottom < 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = data ? data.pages.flatMap((page) => page.content) : [];

  return (
    <div className="flex flex-col flex-grow gap-8">
      <div ref={searchContainerRef} className="flex flex-col gap-4 md:gap-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Productos
        </h1>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div
        className={`fixed top-0 left-0 z-50 w-full py-4 px-6 md:px-8 lg:px-10 bg-white dark:bg-darkBg dark:border-b dark:border-white/30 shadow-md transition-all duration-500 ease-in-out transform ${
          isFloating ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          isFloating
        />
      </div>

      {!isFetching && isError && (
        <EmptyState
          title="Error al cargar productos"
          message="Ocurrió un problema con la conexión. Intenta nuevamente más tarde."
          isError={isError}
        />
      )}

      {!isFetching && !products.length && (
        <EmptyState
          title="No se encontraron productos"
          message="No hay productos que coincidan con tu búsqueda."
          isError={false}
        />
      )}

      {!isRefetching && !!products.length && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </ul>
      )}

      {isFetching && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </ul>
      )}

      <div ref={endPageRef} />
    </div>
  );
}
