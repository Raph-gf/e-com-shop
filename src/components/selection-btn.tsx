import { Button } from "./ui/button";

export default function SelectionBtn() {
  return (
    <div className="bg-[#EEEEEE] px-4 py-4 rounded-3xl mt-[32px] w-[380px] h-[54px] flex justify-between items-center">
      <Button
        variant="ghost"
        className="active:bg-white text-sm text-black rounded-3xl w-[84px] h-[45px]"
      >
        Chair
      </Button>
      <Button
        variant="ghost"
        className="active:bg-white text-sm text-black rounded-3xl w-[84px] h-[45px]"
      >
        Beds
      </Button>
      <Button
        variant="ghost"
        className="active:bg-white text-sm text-black rounded-3xl w-[84px] h-[45px]"
      >
        Sofa
      </Button>
      <Button
        variant="ghost"
        className="active:bg-white text-sm text-black rounded-3xl w-[84px] h-[45px]"
      >
        Lamps
      </Button>
    </div>
  );
}
