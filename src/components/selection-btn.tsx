import { Button } from "./ui/button";

export default function SelectionBtn() {
  return (
    <div className="bg-[#EEEEEE] px-4 py-4 rounded-3xl mt-[32px] w-[342px] h-[54px] flex justify-between items-center">
      <Button variant="ghost" className="active:bg-white text-sm text-black rounded-2xl">
        Chair
      </Button>
      <Button variant="ghost" className="active:bg-white text-sm text-black rounded-2xl">
        Beds
      </Button>
      <Button variant="ghost" className="active:bg-white text-sm text-black rounded-2xl">
        Sofa
      </Button>
      <Button variant="ghost" className="active:bg-white text-sm text-black rounded-2xl">
        Lamps
      </Button>
    </div>
  );
}
