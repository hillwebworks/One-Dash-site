import { getProductBySlug, getAllProducts } from '@/lib/products';
import ProductClient from '@/components/ProductClient';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
