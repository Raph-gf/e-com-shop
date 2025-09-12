import CatalogueCard from "@/components/catalogue-components/catalogue-card";
import CataloguePageHero from "@/components/catalogue-components/catalogue-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function CataloguePage() {
  return (
    <main>
      <section>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="w-full relative h-screen blur-[2px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="landing page background image"
            fill
            className="z-0 object-cover"
            priority
          />
        </motion.div>

        <CataloguePageHero />
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 px-5 text-black"
        >
          <h1 className="text-[70px] mt-20 mb-10 text-center">
            Our Collection of Product
          </h1>
          <div className="flex justify-center">
            <Input className="w-full max-w-[950px] rounded-2xl" placeholder="Search..." />
          </div>
        </motion.div>
      </section>

      <section className="mt-10 px-5 text-black max-w-[1440px] mx-auto">
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
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.003 }}
                whileTap={{ scale: 0.95 }}
              >
                <CatalogueCard />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" flex flex-col justify-center items-center mt-50 text-black"
        >
          <p>Showing 1-12 of 24 items</p>
          <Progress className="max-w-3xl h-0.5 mt-5" value={33} />

          <Button className="mt-5">
            Load more <ChevronRightIcon />
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
