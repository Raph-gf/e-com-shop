import { getProducts } from "@/actions/actions";
import CatalogueGrid from "@/components/catalogue-components/catalogue-grid";
import CataloguePageHero from "@/components/catalogue-components/catalogue-hero";

type CataloguePageProps = {
  searchParams: { page?: string };
};

export default async function CataloguePage({ searchParams }: CataloguePageProps) {
  const pageParam = await searchParams?.page;
  const page = pageParam ? parseInt(pageParam) : 1;
  const productPerPages = 9;
  const { products, totalProducts, highestPrice } = await getProducts(
    page,
    productPerPages
  );
  return (
    <main>
      <CataloguePageHero />

      <CatalogueGrid
        initialProducts={products}
        totalProducts={totalProducts}
        highestPrice={highestPrice ?? 0}
      />
    </main>
  );
}
