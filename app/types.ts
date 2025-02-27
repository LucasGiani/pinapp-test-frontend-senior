export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  image: string;
  category: {
    id: string;
    name: string;
  };
  brand: string;
  price: number;
  stock: number;
  specifications: { name: string; value: string | number }[];
}

export interface ProductMetadata {
  page: number;
  first: boolean;
  last: boolean;
  size: number;
  empty: boolean;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
}

export interface ProductsResponse {
  metadata: ProductMetadata;
  content: Product[];
}
