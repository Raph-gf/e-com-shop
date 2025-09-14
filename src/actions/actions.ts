"use server";

import prisma from "@/lib/prisma";

export async function getProducts(
  page: number,
  productPerPages: number = 9,
  filters?: { search: string; priceRange: [number, number] }
) {
  const where = {
    // Penser a mettre le mode insensitive lors du switch sur postgresql
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
  });

  const totalProducts = await prisma.product.count({
    where,
  });

  console.log(totalProducts, products);

  return { totalProducts, products };
}
