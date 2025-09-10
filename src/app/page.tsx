import Carrousel from "@/components/best-selling-carrousel";
import GridSection from "@/components/grid-section";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SelectionBtn from "@/components/selection-btn";
import Image from "next/image";
import LinkButton from "@/components/link-button";
import TestimonialCarrousel from "@/components/testimonial-carrousel";

export default function HomePage() {
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
        <Navbar />
        <Hero />
      </section>

      <section className="grid grid-cols-4 gap-8 text-[#1E1E1E] px-[80px] mt-[148px] mx-auto w-full">
        <div className=" flex flex-col text-4xl font-bold pt-6 px-5">
          <span>Why</span>
          <span>Choosing Us</span>
        </div>

        <GridSection
          title="Luxury facility"
          text=" The advantage of hiring a workspace with us is that givees you comfortable
            service and all-around facilities."
        />
        <GridSection
          title="Affordable Price"
          text="You can get a workspace of the highst quality at an affordable price and still
            enjoy the facilities that are oly here."
        />
        <GridSection
          title="Many Choices"
          text=" We provide many unique work space choices so that you can choose the workspace
            to your liking."
        />
      </section>

      <section className="flex flex-col items-center mt-[170px] text-4xl font-bold pt-6 px-5 text-black bg-[#F7F7F7]">
        <h1 className="mt-[50px]">Best Selling Product</h1>
        <SelectionBtn />
        <div className="mt-[80px]"></div>
        <Carrousel />
        <div className="mt-[60px] mb-[50px]">
          <LinkButton text="View All" />
        </div>
      </section>

      <section className="flex text-black gap-36 mt-[230px]">
        <div className="relative">
          <div className="w-[450px] h-[350px] bg-[#F7F7F7] rounded-2xl absolute -top-20 z-0"></div>
          <div className="w-[450px] h-[301px] bg-[#F7F7F7] rounded-2xl absolute -right-16 top-14 z-0"></div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1683134345915-2c7b617b7ef4?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="homepage experience section image"
            width={629}
            height={470}
            className="rounded-r-2xl relative z-10 shadow-2xl w-[629] h-[445] object-cover"
          />
        </div>
        <div className="flex flex-col w-[532px] gap-y-6">
          <h2 className="text-orange-400 tracking-widest">EXPERIENCE</h2>
          <h1 className="text-[42px] font-bold">We Provide You The Best Experience</h1>
          <p className="text-base/8 mb-5 ">
            You don’t have to worry about the result because all of these interiors are
            made by people who are professionals in their fields with an elegant and
            lucurious style and with premium quality materials
          </p>
          <LinkButton text="More infos" />
        </div>
      </section>

      <section className="flex text-black gap-36 mt-[360px]">
        <div className="flex flex-col w-[532px] gap-y-6 ml-[80px]">
          <h2 className="text-orange-400 tracking-widest">MATERIALS</h2>
          <h1 className="text-[42px] font-bold">
            Very Serious Materials For Making Furniture
          </h1>
          <p className="text-base/8 ">
            Because panto was very serious about designing furniture for our environment,
            using a very expensive and famous capital but at a relatively low price
          </p>
          <LinkButton text="More infos" />
        </div>

        <div className="flex gap-3 relative">
          <div className=" flex flex-col gap-y-3 -translate-y-38 ">
            <Image
              src="https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Materials image section"
              width={223}
              height={230}
              className="rounded-2xl h-[250]"
            />
            <Image
              src="https://images.unsplash.com/photo-1630585308572-f53438fc684f?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Materials image section 2"
              width={223}
              height={250}
              className="rounded-2xl h-[338]"
            />
          </div>

          <div className="relative">
            <div className="w-[450px] h-[350px] bg-[#F7F7F7] rounded-2xl absolute -top-20 -right-7 z-0"></div>
            <Image
              src="https://plus.unsplash.com/premium_photo-1683133939183-edd5476e6200?q=80&w=3306&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="homepage experience section image"
              width={629}
              height={470}
              className="rounded-l-2xl relative z-10 shadow-2xl w-[629] h-[445] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-[170px] pt-6 px-5 text-black bg-[#F7F7F7]">
        <h2 className="text-orange-400 text-[18px] mb-5 tracking-widest">TESTIMONIAL</h2>
        <h1 className="text-[42px] font-bold mb-[60px]">Our Client Reviews</h1>
        <div className="flex items-center">
          <TestimonialCarrousel />
        </div>
      </section>

      <footer></footer>
    </main>
  );
}
