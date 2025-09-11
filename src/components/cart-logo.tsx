import Image from "next/image";
import cartIcon from "../../public/cartIcon.png";
import { cn } from "@/lib/utils";

export default function CartLogo({ className }: { className?: string }) {
  return (
    <div className="relative">
      <Image src={cartIcon} alt="cart icon" className="z-0 w-6 h-6" />
      <div
        className={cn(
          "z-10 w-5 h-5 flex justify-center rounded-2xl bg-amber-600 text-white text-sm font-bold absolute -top-0.5 -right-3",
          className
        )}
      >
        <p>0</p>
      </div>
    </div>
  );
}
