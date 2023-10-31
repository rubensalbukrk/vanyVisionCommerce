interface imgsUrls {
    urls?: Array<string>;
  }
  
export interface ProductItemProps {
    id?: number | undefined
    name: string;
    price: number;
    descount: number;
    descrition: string;
    imgUrl: string;
    imgsUrls?: imgsUrls;
  }