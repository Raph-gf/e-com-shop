import Link from "next/link";
import CartLogo from "./cart-logo";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "absolute w-full z-10 flex items-center px-10 mt-4 py-5 justify-between text-lg text-white",
        className
      )}
    >
      <Link href="/">
        <h1>E-Com-Shop</h1>
      </Link>
      <ul className="flex gap-12">
        <li>Furniture</li>
        <Link href="/products?page=1">
          <li>Shop</li>
        </Link>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <CartLogo />
    </nav>
  );
}
