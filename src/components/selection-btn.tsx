"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function SelectionBtn() {
  const [selected, setSelected] = useState("Chair");
  const items = ["Chair", "Beds", "Sofa", "Lamps"];

  return (
    <div className="bg-[#EEEEEE] px-4 py-4 rounded-3xl mt-[32px] w-[380px] h-[57px] flex justify-between items-center">
      {items.map(item => (
        <div key={item} className="relative">
          {selected === item && (
            <motion.div
              layoutId="highlight"
              className="absolute inset-0 bg-white rounded-3xl "
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <Button
            variant="ghost"
            onClick={() => setSelected(item)}
            className=" flex text-sm text-black rounded-3xl w-[84px] h-[40px] items-center relative z-10 hover:bg-transparent"
          >
            {item}
          </Button>
        </div>
      ))}
    </div>
  );
}
