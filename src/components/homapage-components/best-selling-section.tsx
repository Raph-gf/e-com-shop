import Link from "next/link";
import Carrousel from "../best-selling-carrousel";
import LinkButton from "../link-button";
import SelectionBtn from "../selection-btn";
import prisma from "@/lib/prisma";

export default async function BestSellingSection() {
  const bestProducts = await prisma.product.findMany({
    where: {
      avgRating: {
        gt: 4.2,
      },
    },
    include: { images: true },
  });

  return (
    <section className="flex flex-col items-center mt-[170px] text-4xl pt-6 px-5 text-black bg-[#F7F7F7]">
      <h1 className="mt-[50px]">Best Selling Product</h1>
      <SelectionBtn />

      <div className="mt-[80px]">
        <Carrousel bestProduct={bestProducts} />
      </div>

      <div className="mt-[60px] mb-[50px]">
        <Link href="/products">
          <LinkButton text="View All" />
        </Link>
      </div>
    </section>
  );
}
