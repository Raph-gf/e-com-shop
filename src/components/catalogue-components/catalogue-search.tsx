import * as motion from "motion/react-client";
import { Input } from "../ui/input";

export default function CatalogueSearch() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-10 px-5 text-black"
      >
        <h1 className="text-[70px] mt-20 mb-10 text-center">Our Collection of Product</h1>
        <div className="flex justify-center">
          <Input className="w-full max-w-[950px] rounded-2xl" placeholder="Search..." />
        </div>
      </motion.div>
    </section>
  );
}
