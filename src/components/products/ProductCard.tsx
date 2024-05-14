import { Product } from "@prisma/client";
import { formatCurrency } from "../../utils/index";
import Image from "next/image";
import Link from "next/link";
import AddProductButton from "./AddProductButton";
import { products } from '../../prisma/data/products';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={``}>
      <div className="border bg-white">
        <div className="relative w-full h-96">
          <Image
            width={400}
            height={500}
            layout="responsive"
            objectFit="cover"
            src={`/products/${product.image}.jpg`}
            alt={`${product.name} product image`}
          />
        </div>
        <div className="p-5">
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <p className="mt-5 font-black text-4xl text-amber-500">
            {formatCurrency(product.price)}
          </p>
            <AddProductButton
              product={product}
            />
        </div>
      </div>
    </Link>
  );
}
