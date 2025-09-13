import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import StarRating from "./star-rating";
import { PlusIcon } from "@radix-ui/react-icons";
import { TProductAll } from "@/types/product-type";

type TBestProductProps = {
  bestProduct: TProductAll[];
};

export default function Carrousel({ bestProduct }: TBestProductProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {bestProduct.map((product, index) => (
          <CarouselItem
            key={product.id}
            className="className= pl-8 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 flex-[0_0_33.333%]"
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute top-1/2 -left-2 w-15 h-13 -translate-y-1/2 z-20" />
      <CarouselNext className="absolute top-1/2 -right-2 w-15 h-13 -translate-y-1/2 z-20" />
    </Carousel>
  );
}

type TBestProductCardProps = {
  product: TProductAll;
};

function ProductCard({ product }: TBestProductCardProps) {
  return (
    <Card className="h-[550px] shadow-xl rounded-2xl overflow-hidden border-none">
      <CardHeader className="p-0">
        <div className="relative h-[350px]">
          <Image
            src={product.images[0]?.url}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="px-5 py-4">
        <div className="max-w-[350px]">
          <p className="text-sm text-[#8D8D8D] mb-3">{product.type}</p>
          <p className="text-[20px] mb-2">{product.name}</p>
          <StarRating rating={product.avgRating} />
        </div>
      </CardContent>

      <CardFooter className="px-5 pb-4">
        <div className="flex justify-between w-full items-center">
          <p className="text-[25px] font-bold">
            <span className="text-sm align-super pr-1">$</span>
            {product.price}
          </p>
          <button className="bg-black rounded-3xl flex items-center justify-center w-[40px] h-[40px]">
            <PlusIcon className="w-6 h-6 text-white stroke-[10]" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
