import { ReactNode } from "react";

export interface Product {
  pictureUrl: string | undefined;
  description: ReactNode;
  imgUrl: string;
  title: string;
  price: number;
  id: string;
}
