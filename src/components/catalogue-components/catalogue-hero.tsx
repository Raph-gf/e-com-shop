import * as motion from "motion/react-client";
import Image from "next/image";

export default function CataloguePageHero() {
  return (
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
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full absolute z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="m-w-[1000px] flex flex-col justify-center text-center items-center gap-4 text-7xl">
          <span>Search For Your Favorite Interior </span>
          <span>Minimalist & Modern Furnitures</span>
          <div className="flex flex-col text-center">
            <span className="text-lg">Turn your room into a lot more minimalist</span>
            <span className="text-lg">and modern with ease and speed</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
