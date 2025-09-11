import CataloguePageHero from "@/components/catalogue-components/productpage-hero";
import { TestimonialCard } from "@/components/testimonial-carrousel";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function CataloguePage() {
  return (
    <main>
      <section className="w-full relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=3058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="landing page background image"
          fill
          className="z-0 object-cover"
          priority
        />
        <CataloguePageHero />
      </section>

      <section className="mt-5 px-5 text-black">
        <h1 className="text-[30px] mb-5 text-center">Our Collection of Product</h1>
        <div className="flex justify-center">
          <Input className="w-full max-w-[950px] rounded-2xl" placeholder="Search..." />
        </div>
      </section>

      <section className="mt-10 px-5 text-black max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-bold">Showing 1-12 of 24 items</h2>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem magnam esse,
            rem praesentium quod natus numquam?
          </p>
        </div>

        <div
          className="
            mt-10
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            justify-items-center
          "
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <TestimonialCard key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
