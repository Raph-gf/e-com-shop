type TProductImage = {
  url: string;
};

export type TProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: TProductImage[];
};
