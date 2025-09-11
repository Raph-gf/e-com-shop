import Carrousel from "../best-selling-carrousel";
import LinkButton from "../link-button";
import SelectionBtn from "../selection-btn";

export default function BestSellingSection() {
  return (
    <section className="flex flex-col items-center mt-[170px] text-4xl font-bold pt-6 px-5 text-black bg-[#F7F7F7]">
      <h1 className="mt-[50px]">Best Selling Product</h1>
      <SelectionBtn />
      <div className="mt-[80px]"></div>
      <Carrousel />
      <div className="mt-[60px] mb-[50px]">
        <LinkButton text="View All" />
      </div>
    </section>
  );
}
