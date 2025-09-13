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

      <CatalogueGrid initialProducts={products} />

      <CatalogueMoreBtn />
    </main>
  );
}
