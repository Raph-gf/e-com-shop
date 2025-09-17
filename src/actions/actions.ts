"use server";

import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

async function getProducts(
  page: number,
  productPerPages: number = 9,
  filters?: { search?: string; priceRange?: [number, number] }
) {
  const where = {
    name: filters?.search ? { contains: filters.search } : undefined,
    price: filters?.priceRange
      ? {
          gte: filters.priceRange[0],
          lte: filters.priceRange[1],
        }
      : undefined,
  };

  const products = await prisma.product.findMany({
    where,
    skip: (page - 1) * productPerPages,
    take: productPerPages,
    include: { images: true },
    orderBy: { id: "asc" },
  });

  const totalProducts = await prisma.product.count({ where });

  const result = await prisma.product.aggregate({
    _max: { price: true },
  });

  const highestPrice = result._max.price;

  return { totalProducts, products, highestPrice };
}

// Wrap avec unstable_cache
export const getProductsCached = unstable_cache(getProducts, ["products"], {
  revalidate: 60,
});
