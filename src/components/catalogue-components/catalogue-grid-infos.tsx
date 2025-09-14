import { TProduct } from "@/types/product-type";

type Props = {
  filteredProducts: TProduct[];
  filteredTotalProducts: number;
};

export default function CatalogueGridInfos({
  filteredProducts,
  filteredTotalProducts,
}: Props) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="font-bold">
        Showing 1-{filteredProducts.length} of {filteredTotalProducts} items
      </h2>
      <p className="mt-2 text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem magnam esse, rem
        praesentium quod natus numquam?
      </p>
    </div>
  );
}
