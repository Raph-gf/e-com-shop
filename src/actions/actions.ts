"use server";

import prisma from "@/lib/prisma";

export async function getProducts(page: number, productPerPages = 9) {
  const products = await prisma.product.findMany({
    skip: (page - 1) * productPerPages,
    take: productPerPages,
    include: { images: true },
  });

  const total = await prisma.product.count();
  console.log(total, products);

  return { total, products };
}
