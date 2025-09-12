import { Button } from "../ui/button";
import * as motion from "motion/react-client";
import CatalogueCard from "./catalogue-card";
import { TProduct } from "@/types/product-type";

type TCatalogueGridProps = {
  products: TProduct[];
};

export default function CatalogueGrid({ products }: TCatalogueGridProps) {
  return (
    <>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-bold">Showing 1-12 of 24 items</h2>
        <p className="mt-2 text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem magnam esse,
          rem praesentium quod natus numquam?
        </p>
      </div>

      <div className="flex justify-center items-center mt-8  space-x-4 text-white">
        <h2 className="text-black">Price range</h2>
        <Button>$50.00 $100.00</Button>
        <Button>$100.00 $200.00</Button>
        <Button>$300.00 $400.00</Button>
        <Button>+ $400.00</Button>
      </div>

      <div
        className="
            mt-20
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-y-10
            gap-x-6
            justify-items-center
          "
      >
        {products.map((product, index) => (
          <div key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.003 }}
              whileTap={{ scale: 0.95 }}
            >
              <CatalogueCard product={product} />
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}
