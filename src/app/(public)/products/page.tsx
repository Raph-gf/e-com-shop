import CatalogueGrid from "@/components/catalogue-components/catalogue-grid";
import CataloguePageHero from "@/components/catalogue-components/catalogue-hero";
import CatalogueMoreBtn from "@/components/catalogue-components/catalogue-morebtn";
import CatalogueSearch from "@/components/catalogue-components/catalogue-search";
import prisma from "@/lib/prisma";

export default async function CataloguePage() {
  const products = await prisma.product.findMany({
    include: { images: true },
  });

  return (
    <main>
      <CataloguePageHero />
      <CatalogueSearch />

      <section className="mt-10 px-5 text-black max-w-[1440px] mx-auto">
        <CatalogueGrid products={products} />
      </section>

      <CatalogueMoreBtn />
    </main>
  );
}
