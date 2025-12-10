import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#FFD700]">
        <div className="relative h-64 bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#DC143C] transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#DC143C]">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">{product.netWeight}</span>
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <span className="text-xs bg-[#00AA00] text-white px-2 py-1 rounded-full font-semibold">
              All Natural
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

