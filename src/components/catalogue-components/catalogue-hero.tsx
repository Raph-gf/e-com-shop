import * as motion from "motion/react-client";
import Image from "next/image";

export default function CataloguePageHero() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="w-full px-14 relative h-screen "
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
        className="w-full absolute z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  backdrop-blur-[0.8px]  p-8 rounded-xl border-none"
      >
        <div className="px-16 h-[300px]">
          <div className="text-7xl text-white text-center mb-4 flex flex-col gap-y-6">
            <h1>Search For Your Favorite Interior</h1>
            <span className="text-5xl">Minimalist & Modern Furnitures</span>
          </div>

          <p className="mt-4 text-lg text-white text-center">
            Turn your room into a lot more minimalist and modern with ease and speed
          </p>
        </div>
      </motion.div>
    </section>
  );
}
