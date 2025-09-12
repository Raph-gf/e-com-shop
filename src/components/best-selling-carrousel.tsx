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
import { generateFakeProducts, Product } from "@/lib/fake-data";

export default function Carrousel() {
  const fakeProducts = generateFakeProducts(9);
  return (
    <Carousel>
      <CarouselContent>
        {fakeProducts.map((product, index) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-5"
          >
            <ProductCard fakeproduct={product} />
          </CarouselItem>
        ))}
        {/* <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-5">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-5">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-5">
          <ProductCard />
        </CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

type ProductProps = {
  fakeproduct: Product;
};

function ProductCard({ fakeproduct }: ProductProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Image
          // src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src={fakeproduct.image}
          alt="product image"
          width={217}
          height={255}
          className="w-full"
        />
      </CardHeader>
      <CardContent>
        <div className="mb-8 max-w-[250px]">
          {/* <p className="text-sm text-[#8D8D8D] mb-2">Chair</p> */}
          <p className="text-sm text-[#8D8D8D] mb-2">{fakeproduct.type}</p>
          {/* <p className="text-[20px] mb-1">Sakarias Armchair</p> */}
          <p className="text-[20px] mb-1">{fakeproduct.name}</p>
          <span>
            <StarRating />
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full items-center mb-9 mt-3">
          <p className="text-[25px] font-bold">
            {/* <span className="text-sm align-super pr-1">$</span>396 */}
            <span className="text-sm align-super pr-1">$</span>
            {fakeproduct.price}
          </p>
          <button className=" bg-black rounded-3xl flex items-center justify-center w-[40px] h-[40px]">
            <PlusIcon className="w-6 h-6 text-white stroke-[10]" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
