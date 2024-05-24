import React from "react";
import { height, width } from "../../utils/dimensions";
import {
  View,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from "react-native";
import { Card } from "../../../components/Card/card";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../../api/api";
import { ProductItem } from "../../../components/ProductItem/productItem";
import { ProductItemProps } from "../../models/productItem";


const listProducts: ProductItemProps[] = [
  {
    id: 1,
    name: "Oculos 1",
    price: 80,
    descount: 15,
    descrition: "black sun glasses sport vector",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.png?alt=media&token=48847c71-d0a8-4056-b3b5-2da89c724b3e',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    }
  },
  {
    id: 2,
    name: "Oculos 2",
    price: 80,
    descount: 15,
    descrition: "black sun glass vector transparent",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA2.png?alt=media&token=fb0e29d7-4e2a-486a-a227-224c330dc7a5',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 3,
    name: "Oculos 3",
    price: 80,
    descount: 20,
    descrition: "blue sun glasses icon",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA3.png?alt=media&token=508f6dfe-1b04-422c-b552-b86b57925341',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 4,
    name: "Oculos 4",
    price: 125,
    descount: 10,
    descrition: "A moda do verão!",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 5,
    name: "Oculos 5",
    price: 160,
    descount: 12,
    descrition: "opctic store summber sun glasses",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 6,
    name: "Oculos 6",
    price: 125,
    descount: 14,
    descrition: "real eye glasses default",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 7,
    name: "Oculos 7",
    price: 80,
    descount: 100,
    descrition: "retro filter glasses",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 8,
    name: "Oculos 8",
    price: 80,
    descount: 100,
    descrition: "round glasses with black frame",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 9,
    name: "Oculos 9",
    price: 80,
    descount: 100,
    descrition: "square round black glasses frame",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 10,
    name: "Oculos 10",
    price: 80,
    descount: 100,
    descrition: "sun glasses styled with black",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 11,
    name: "Oculos 11",
    price: 80,
    descount: 100,
    descrition: "glasses sun black fashion",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 12,
    name: "Oculos 12",
    price: 80,
    descount: 100,
    descrition: "googgles fashion sun",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 13,
    name: "Oculos 13",
    price: 80,
    descount: 100,
    descrition: "icon fashion sun glasses",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 14,
    name: "Oculos 14",
    price: 80,
    descount: 100,
    descrition: "male black glasses fun",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 15,
    name: "Oculos 15",
    price: 80,
    descount: 100,
    descrition: "way frames glasses with black frame",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 16,
    name: "Oculos 16",
    price: 80,
    descount: 100,
    descrition: "Escolha o seu estilo!",
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/vanycommerce-21d3a.appspot.com/o/OFERTA1.jpeg?alt=media&token=5319df1b-33a1-46c0-9836-7e7ab8a886d4',
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
];

export default function Home() {
  const { navigate } = useNavigation();

  function renderItem({ item }: ListRenderItemInfo<ProductItemProps>) {
    return <ProductItem {...item} />;
  }

  return (
    <View style={{zIndex: 10}} className="flex-1 w-full bg-violet-50/100">
      
      <View
      className='absolute bottom-64 w-full h-80'
      >
       <FlatList
        horizontal={true}
        style={{ width: "100%"}}
        data={listProducts}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item?.name}
        renderItem={renderItem}
      />
      </View>
      
      
    </View>
  );
}
