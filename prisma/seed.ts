import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const product = {
  name: "Sakarias Armchair",
  type: "Chair",
  price: 200,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem magnam esse, rem praesentium quod natus numquam?",
  images: {
    create: [
      { url: "https://picsum.photos/400/400", isMain: true },
      { url: "https://picsum.photos/400/401" },
    ],
  },
  avgRating: 4,
};

async function main() {
  const newProduct = await prisma.product.create({
    data: product,
  });
  console.log("Product created:", newProduct);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
