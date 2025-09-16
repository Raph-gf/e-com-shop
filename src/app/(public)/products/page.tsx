import { getProducts } from "@/actions/actions";
import CatalogueGrid from "@/components/catalogue-components/catalogue-grid";
import CataloguePageHero from "@/components/catalogue-components/catalogue-hero";

type CataloguePageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CataloguePage({ searchParams }: CataloguePageProps) {
  const params = await searchParams;

  const pageParam = params?.page ? Number(params.page) : 1;
  const page = pageParam ? pageParam : 1;
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
