import { getProducts } from "@/actions/actions";
import CatalogueGrid from "@/components/catalogue-components/catalogue-grid";
import CataloguePageHero from "@/components/catalogue-components/catalogue-hero";

type CataloguePageProps = {
  searchParams: { page?: string };
};

export default async function CataloguePage({ searchParams }: CataloguePageProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const productPerPages = 9;
  const { products, totalProducts } = await getProducts(page, productPerPages);

  return (
    <main>
      <CataloguePageHero />

      <CatalogueGrid initialProducts={products} totalProducts={totalProducts} />
    </main>
  );
}
