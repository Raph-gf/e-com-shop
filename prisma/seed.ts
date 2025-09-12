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
          url: "https://images.unsplash.com/photo-1598300055366-c5e90b99f7b8?auto=format&fit=crop&w=400&q=80",
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
          url: "https://images.unsplash.com/photo-1600566754697-bab2dbf2b3ee?auto=format&fit=crop&w=400&q=80",
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
          url: "https://images.unsplash.com/photo-1616627986603-5d0b33e22b92?auto=format&fit=crop&w=400&q=80",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1616627986604-1fbe04db6f5c?auto=format&fit=crop&w=400&q=80",
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
          url: "https://images.unsplash.com/photo-1601924582971-7f1b812f3c3d?auto=format&fit=crop&w=400&q=80",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1601924582972-9f1e5b8c7f50?auto=format&fit=crop&w=400&q=80",
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
          url: "https://images.unsplash.com/photo-1616627986605-2c8f2e31c6a5?auto=format&fit=crop&w=400&q=80",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1616627986606-1a7e32c6b2b0?auto=format&fit=crop&w=400&q=80",
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
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1586023492126-34b2c045efd8?auto=format&fit=crop&w=400&q=80",
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
          url: "https://images.unsplash.com/photo-1616627986607-3b5c1d7c6f9e?auto=format&fit=crop&w=400&q=80",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1616627986608-4d2c3b6c7d1a?auto=format&fit=crop&w=400&q=80",
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
          url: "https://images.unsplash.com/photo-1601924582973-8b1d1c7f3a4f?auto=format&fit=crop&w=400&q=80",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1601924582974-7a2d2e6b8c3e?auto=format&fit=crop&w=400&q=80",
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
          url: "https://images.unsplash.com/photo-1586023492127-1a2b3c045efd?auto=format&fit=crop&w=400&q=80",
          isMain: true,
        },
        {
          url: "https://images.unsplash.com/photo-1586023492128-2b3c4d045efe?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    avgRating: 4.0,
  },
];

async function main() {
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
