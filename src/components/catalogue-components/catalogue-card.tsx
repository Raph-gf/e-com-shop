import { PlusIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import * as motion from "motion/react-client";
import { TProduct } from "@/types/product-type";

type ProductProps = {
  product: TProduct;
};

export default function CatalogueCard({ product }: ProductProps) {
  const mainImage =
    product.images[0]?.url ??
    "https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
      <Card className="w-[400px] h-[550px] shadow-xl rounded-2xl overflow-hidden border-none">
        <div className="relative h-[450px]">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <CardContent className="px-7 py-5">
          <p className="text-lg font-bold text-black mb-5">{product.name}</p>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex space-x-3">
              <span className="text-sm line-through text-[#8D8D8D]">
                $ {product.price}
              </span>

              <span className="text-sm font-bold text-black">$ {product.price - 20}</span>
            </div>
            <div>
              <button className=" bg-black rounded-3xl flex items-center justify-center w-[30px] h-[30px]">
                <PlusIcon className="w-4 h-4 text-white stroke-[10]" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
