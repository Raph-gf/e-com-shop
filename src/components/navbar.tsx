import CartLogo from "./cart-logo";

export default function Navbar() {
  return (
    <nav className="absolute w-full z-10 flex items-center px-10 mt-4 py-5 justify-between text-lg text-white">
      <h1>E-Com-Shop</h1>
      <ul className="flex gap-12">
        <li>Furniture</li>
        <li>Shop</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <CartLogo />
    </nav>
  );
}
