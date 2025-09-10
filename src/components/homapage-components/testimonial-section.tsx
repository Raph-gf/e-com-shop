import TestimonialCarrousel from "../testimonial-carrousel";

export default function TestimonialSection() {
  return (
    <section className="flex flex-col items-center mt-[170px] pt-6 px-5 text-black ">
      <h2 className="text-orange-400 text-[18px] mb-5 tracking-widest">TESTIMONIAL</h2>
      <h1 className="text-[42px] font-bold mb-[60px]">Our Client Reviews</h1>
      <div className="flex items-center">
        <TestimonialCarrousel />
      </div>
    </section>
  );
}
