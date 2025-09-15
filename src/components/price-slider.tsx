"use client";

import { TProduct } from "@/types/product-type";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

type PriceSliderProps = {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  highestPrice: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
};

export default function PriceSlider({
  priceRange,
  setPriceRange,
  highestPrice,
  setCurrentPage,
  setFilteredProducts,
}: PriceSliderProps) {
  const handleSliderChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
    if (values[0] === 0 && values[1] === highestPrice) {
      setCurrentPage(1);
      setFilteredProducts([]);
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 mb-10 space-x-7 text-white">
      <h2 className="text-black font-bold">Price range</h2>
      <span className="text-black">$ {priceRange[0]}</span>
      <Slider.Root
        className="relative flex items-center w-64 h-5 select-none touch-none"
        defaultValue={priceRange}
        max={highestPrice}
        step={100}
        onValueChange={handleSliderChange}
      >
        <Slider.Track className=" bg-gray-300 relative flex-1 h-1 rounded-full">
          <Slider.Range className="absolute bg-black h-full rounded-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-white border border-gray-400 rounded-full shadow" />
        <Slider.Thumb className="block w-5 h-5 bg-white border border-gray-400 rounded-full shadow" />
      </Slider.Root>
      <span className="text-black">$ {priceRange[1]}</span>
    </div>
  );
}
