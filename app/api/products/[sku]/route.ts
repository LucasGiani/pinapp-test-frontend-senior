import { NextResponse } from 'next/server';
import db from '../../../../db.json';
import { Product } from '@/app/types';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sku: string }> }
) {
  const sku = (await params).sku;
  const product = db.products.find((product: Product) => product.sku === sku);
  if (!product) {
    return NextResponse.json(
      { message: 'Producto no encontrado' },
      { status: 404 }
    );
  }
  return NextResponse.json(product);
}
