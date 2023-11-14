import { CartItemProps } from "./cartItem";

interface imgsUrls {
    urls?: Array<string>;
  }
  
export interface ProductItemProps extends Omit<CartItemProps, "name" | "descount" | "imgUrl"> {
    id: number;
    name: string;
    price: number;
    descount: number;
    descrition?: string;
    imgUrl: string;
    imgsUrls?: imgsUrls;
  }