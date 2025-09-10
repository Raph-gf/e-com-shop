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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function TestimonialCard() {
  return (
    <Card className="w-[450px] h-[550px] max-w-sm shadow-xl">
      <CardHeader className="h-[255px]">
        <Image
          src="https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product image"
          width={217}
          height={255}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <div className="mb-8 w-full rounded-2xl flex flex-col justify-center items-center bg-white py-2.5 px-11">
          <div className=" -translate-y-6">
            <div className="relative h-15 w-15 rounded-full ring-8 ring-white bg-yellow-400 overflow-hidden">
              <Avatar className="h-full w-full">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>BU</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <p className="text-[22px] font-extrabold text-black mb-2">Bang Upin</p>
          <p className="text-sm text-[#8D8D8D] mb-5">Pedagang Asongan</p>
          <p className="text-sm mb-6 text-center">
            “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“
          </p>
          <span className="mb-1.5">
            <StarRating />
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialCarrousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/3 pl-10">
          <TestimonialCard />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/3 pl-10">
          <TestimonialCard />
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/3 pl-10">
          <TestimonialCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
