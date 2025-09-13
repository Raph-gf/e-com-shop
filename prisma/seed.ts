import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const products = [
  {
    name: "Sakarias Armchair",
    type: "Chair",
    price: 200,
    description:
      "Comfortable armchair with a modern design, perfect for any living room.",
    images: {
      create: [
        {
          url: "https://plus.unsplash.com/premium_photo-1693252886111-7b9f89b92903?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1598300055367-2f3c6b0e7c56?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    avgRating: 4.2,
  },
  {
    name: "Minimalist Dining Table",
    type: "Table",
    price: 450,
    description: "Sleek dining table in natural wood, ideal for minimalistic interiors.",
    images: {
      create: [
        {
          url: "https://images.unsplash.com/photo-1723627390002-e6cf868e631c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1600566754698-3b0e5e64c8f0?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    avgRating: 4.5,
  },
  {
    name: "Comfort Sofa",
    type: "Sofa",
    price: 800,
    description: "Luxurious sofa with soft cushions, perfect for lounging in style.",
    images: {
      create: [
        {
          url: "https://plus.unsplash.com/premium_photo-1661699082515-24e99b178ff7?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isMain: true,
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    avgRating: 4.7,
  },
  {
    name: "Elegant Floor Lamp",
    type: "Lamp",
    price: 120,
    description: "Minimalist floor lamp with soft warm light, perfect for living rooms.",
    images: {
      create: [
        {
          url: "https://images.unsplash.com/photo-1646107543597-e95b90ba4081?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb29yJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D",
          isMain: true,
        },
        {
          url: "https://plus.unsplash.com/premium_photo-1683133764435-ed8431904a54?q=80&w=3108&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    avgRating: 4.0,
  },
  {
    name: "Wooden Coffee Table",
    type: "Table",
    price: 250,
    description: "Simple coffee table in oak wood, perfect for any living space.",
    images: {
      create: [
        {
          url: "https://plus.unsplash.com/premium_photo-1680546330888-f995d2d64571?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmUlMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },
    avgRating: 4.3,
  },
  {
    name: "Scandinavian Armchair",
    type: "Chair",
    price: 180,
    description: "Minimalist armchair with light wooden legs and soft fabric.",
    images: {
      create: [
        {
          url: "https://images.unsplash.com/photo-1614597795732-f7607f30a491?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1708752681731-3b09d9e838bf?q=80&w=1595&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    avgRating: 4.1,
  },
  {
    name: "Modern Sofa",
    type: "Sofa",
    price: 750,
    description: "Compact modern sofa with clean lines, perfect for apartments.",
    images: {
      create: [
        {
          url: "https://plus.unsplash.com/premium_photo-1664299181307-a1b431d1ff85?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1682662046610-fbdb3db4bd74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    avgRating: 4.4,
  },
  {
    name: "Minimal Desk Lamp",
    type: "Lamp",
    price: 80,
    description: "Compact desk lamp with adjustable arm, perfect for workspaces.",
    images: {
      create: [
        {
          url: "https://plus.unsplash.com/premium_photo-1732730224410-70874334f758?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1657772608811-d8d1bb1b6092?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    avgRating: 4.2,
  },
  {
    name: "Oak Dining Chair",
    type: "Chair",
    price: 150,
    description: "Elegant dining chair in oak wood, minimalist design.",
    images: {
      create: [
        {
          url: "https://images.unsplash.com/photo-1701421047895-1dc3908c3268?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1701421047999-eacdc479e8bd?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    avgRating: 4.0,
  },
];

async function main() {
  await prisma.productImage.deleteMany();

  await prisma.product.deleteMany();

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("✅ 9 products seeded with images");
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
