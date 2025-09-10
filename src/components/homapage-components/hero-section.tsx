import Image from "next/image";
import Hero from "../hero";
import Navbar from "../navbar";

export default function HeroSection() {
  return (
    <section className="w-full relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=3058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="landing page background image"
        fill
        className="z-0 object-cover"
        priority
      />
      <Navbar />
      <Hero />
    </section>
  );
}
