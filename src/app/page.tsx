import Carrousel from "@/components/home-carrousel";
import GridSection from "@/components/grid-section";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SelectionBtn from "@/components/selection-btn";
import Image from "next/image";
import LinkButton from "@/components/link-button";

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
          <div className="w-[450px] h-[301px] bg-[#F7F7F7] rounded-2xl absolute -right-16 top-5 z-0"></div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1683134345915-2c7b617b7ef4?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="homepage experience section image"
            width={629}
            height={470}
            className="rounded-2xl relative z-10 shadow-2xl w-[629] h-[445] object-cover"
          />
        </div>
        <div className="flex flex-col w-[532px] gap-y-5">
          <h2 className="text-orange-400 tracking-widest">EXPERIENCE</h2>
          <h1 className="text-[42px] font-bold">We Provide You The Best Experience</h1>
          <p>
            You don’t have to worry about the result because all of these interiors are
            made by people who are professionals in their fields with an elegant and
            lucurious style and with premium quality materials
          </p>
          <LinkButton text="More infos" />
        </div>
      </section>
    </main>
  );
}
