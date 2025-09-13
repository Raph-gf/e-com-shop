"use client";

import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import * as motion from "motion/react-client";
import { Progress } from "../ui/progress";
import { useCatalogueStore } from "@/store/useCatalogueStore";

export default function CatalogueMoreBtn() {
  const { filtered, products, visibleCount } = useCatalogueStore();

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className=" flex flex-col justify-center items-center mt-50 text-black"
      >
        <p>
          Showing 1-{visibleCount()} of {products.length} items
        </p>
        <Progress
          className="max-w-3xl h-0.5 mt-5"
          value={(visibleCount() / filtered.length) * 100}
        />

        <Button className="mt-5">
          Load more <ChevronRightIcon />
        </Button>
      </motion.div>
    </section>
  );
}
