import { ReactNode } from "react";

export interface Product {
  quantity: any;
  pictureUrl: string | undefined;
  description: ReactNode;
  imgUrl: string;
  title: string;
  price: number;
  id: string;
}
