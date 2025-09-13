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

export type TProductAll = {
  id: string;
  name: string;
  type: string;
  price: number;
  images: TProductImage[];
  description: string;
  avgRating: number;
  createdAt: Date;
  updatedAt: Date;
};
