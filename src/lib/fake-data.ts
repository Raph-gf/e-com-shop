import { faker } from "@faker-js/faker";

export type Product = {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
};

export function generateFakeProducts(count: number = 12): Product[] {
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    type: faker.commerce.department(),
    price: Number(faker.commerce.price({ min: 50, max: 500, dec: 2 })),
    image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }), // ou faker.image.url() pour random
  }));
}
