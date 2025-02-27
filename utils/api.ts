import { Product, ProductsResponse } from '@/app/types';
import { API_URL, ITEMS_PER_PAGE } from './constants';

export async function fetchProducts({
  page = 1,
  search = '',
  size = ITEMS_PER_PAGE,
}: Partial<{
  page: number;
  search: string;
  size: number;
}> = {}): Promise<ProductsResponse> {
  const res = await fetch(
    `${API_URL}/products?search=${encodeURIComponent(search)}&page=${page}&size=${size}`
  );

  if (!res.ok) {
    if (res.status === 404) {
      return {
        metadata: {
          page: 1,
          size: ITEMS_PER_PAGE,
          totalElements: 0,
          totalPages: 0,
          first: true,
          last: true,
          empty: true,
          numberOfElements: 0,
        },
        content: [],
      };
    }
    throw new Error(
      `Error ${res.status}: No se pudieron obtener los productos`
    );
  }
  return res.json();
}

export async function fetchProductBySku(sku: string): Promise<Product | null> {
  const res = await fetch(`${API_URL}/products/${sku}`);
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`Error ${res.status}: No se pudo obtener el producto`);
  }
  return res.json();
}
