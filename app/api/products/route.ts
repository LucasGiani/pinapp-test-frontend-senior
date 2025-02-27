import { NextResponse } from 'next/server';
import db from '../../../db.json';
import { Product, ProductMetadata, ProductsResponse } from '@/app/types';
import { ITEMS_PER_PAGE } from '@/utils/constants';

export async function GET(
  request: Request
): Promise<NextResponse<ProductsResponse>> {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';
  const page = Number(searchParams.get('page') || 1);
  const size = Number(searchParams.get('size') || ITEMS_PER_PAGE);

  const products =
    (!!search &&
      db.products.filter(
        (product: Product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.sku.toLowerCase().includes(search.toLowerCase())
      )) ||
    db.products;

  const totalElements = products.length;
  const totalPages = Math.ceil(totalElements / size);
  const start = (page - 1) * size;
  const end = start + size;
  const content: Product[] = products.slice(start, end);

  const metadata: ProductMetadata = {
    page,
    size,
    totalElements,
    totalPages,
    first: page === 1 || totalPages === 0,
    last: totalPages === 0 || page === totalPages,
    empty: content.length === 0,
    numberOfElements: content.length,
  };

  return NextResponse.json({ metadata, content });
}
