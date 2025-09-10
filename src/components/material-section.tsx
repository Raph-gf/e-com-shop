import Image from "next/image";
import LinkButton from "./link-button";

export default function MaterialSection() {
  return (
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
  );
}
