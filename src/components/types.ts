import { ReactNode } from "react";

export interface Product {
  name: ReactNode;
  quantity: any;
  pictureUrl: string | undefined;
  description: ReactNode;
  imgUrl: string;
  title: string;
  price: number;
  id: string;
}
