import { useMemo } from "react";

export default function FooterSection() {
  return (
    <footer className="mt-[230px]  px-[186px] text-black w-full bg-[#F7F7F7]">
      <div className="pt-[118px] grid grid-cols-12 gap-x-[110px]">
        <div className="col-span-5">
          <h2 className=" font-extrabold text-2xl tracking-widest mb-7">PANTO</h2>
          <p className="text-base/8 max-w-[300px]">
            The advantage of hiring a workspace with us is that givees you comfortable
            service and all-around facilities.
          </p>
        </div>
        <div className="col-span-2">
          <h2 className="text-orange-400 tracking-widest mb-7">Services</h2>
          <ul className="space-y-4 whitespace-nowrap">
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className="text-orange-400 tracking-widest mb-7">Furniture</h2>
          <ul className="space-y-4 whitespace-nowrap">
            <li>Beds</li>
            <li>Chair</li>
            <li>All</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h2 className="text-orange-400 tracking-widest mb-7">Follow us</h2>
          <ul className="space-y-4 whitespace-nowrap">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-[120px] pb-[58px]  ">
        <p>Copyright &copy; 2025 {}</p>
        <div className="flex gap-x-8">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
