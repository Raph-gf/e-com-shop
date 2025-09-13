import { useCatalogueStore } from "@/store/useCatalogueStore";
import * as Slider from "@radix-ui/react-slider";

export default function PriceSlider() {
  const { priceRange, setPriceRange, applyFilters } = useCatalogueStore();

  const handleSliderChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
    applyFilters();
  };

  return (
    <>
      <span className="text-black">$ {priceRange[0]}</span>
      <Slider.Root
        className="relative flex items-center w-64 h-5 select-none touch-none"
        defaultValue={priceRange}
        max={800}
        step={1}
        onValueChange={handleSliderChange}
      >
        <Slider.Track className=" bg-gray-300 relative flex-1 h-1 rounded-full">
          <Slider.Range className="absolute bg-black h-full rounded-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-white border border-gray-400 rounded-full shadow" />
        <Slider.Thumb className="block w-5 h-5 bg-white border border-gray-400 rounded-full shadow" />
      </Slider.Root>
      <span className="text-black">$ {priceRange[1]}</span>
    </>
  );
}
