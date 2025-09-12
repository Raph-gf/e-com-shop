import Image from "next/image";
import Hero from "../hero";
import * as motion from "motion/react-client";

export default function HeroSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="w-full relative h-screen blur-[2px]"
      >
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=3058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="landing page background image"
          fill
          className="z-0 object-cover"
          priority
        />
      </motion.div>
      <Hero />
    </section>
  );
}
