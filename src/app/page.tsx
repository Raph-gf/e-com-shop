import Image from "next/image";
import cartIcon from "../../public/cartIcon.png";
import CartLogo from "@/components/logo";

export default function HomePage() {
  return (
    <section className="w-full relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=3058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="landing page background image"
        fill
        className="z-0 object-cover "
      />

      <div className="absolute w-full z-10 flex items-center px-10 py-5 justify-between text-lg text-white">
        <h1>E-Com-Shop</h1>

        <ul className="flex gap-12">
          <li>Furniture</li>
          <li>Shop</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>

        <CartLogo />
      </div>
      <div className="w-full absolute z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-2 text-7xl">
          <span>Make Your Interior More</span>
          <span>Minimalist & Modern</span>
          <div className="flex flex-col items-center">
            <span className="text-lg">Turn your room into a lot more minimalist</span>
            <span className="text-lg">and modern with ease and speed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
