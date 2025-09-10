import Image from "next/image";
import LinkButton from "../link-button";

export default function ExperienceSection() {
  return (
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
          You don’t have to worry about the result because all of these interiors are made
          by people who are professionals in their fields with an elegant and lucurious
          style and with premium quality materials
        </p>
        <LinkButton text="More infos" />
      </div>
    </section>
  );
}
