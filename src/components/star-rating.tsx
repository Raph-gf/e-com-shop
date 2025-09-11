"use client";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";

import React from "react";

export default function StarRating() {
  return (
    <div className="flex flex-col gap-3">
      <Rating defaultValue={4}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton className="text-yellow-500" size={15} key={index} />
        ))}
      </Rating>
    </div>
  );
}
