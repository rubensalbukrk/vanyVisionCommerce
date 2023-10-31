import React from "react";
import { View, Text, Image, FlatList, ListRenderItemInfo} from "react-native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
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
    imgUrl: `${BASE_URL}/black-sunglasses-sport-vector.png`,
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
  {
    id: 2,
    name: "Oculos 2",
    price: 80,
    descount: 15,
    descrition: "black sun glass vector transparent",
    imgUrl: `${BASE_URL}/black-sunglass-vector-on-transparent-background.png`,
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
    imgUrl: `${BASE_URL}/blue-sunglasses-icon.png`,
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
    imgUrl: `${BASE_URL}/oculos4.png`,
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
    imgUrl: `${BASE_URL}/optics-store-summer-sunglasses.png`,
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
    imgUrl: `${BASE_URL}/real-eyeglasses-default.png`,
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
    imgUrl: `${BASE_URL}/retro-filter-glasses.png`,
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
    imgUrl: `${BASE_URL}/round-glasses-with-black-frame.png`,
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
    imgUrl: `${BASE_URL}/square-round-black-frame-glasses.png`,
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
    imgUrl: `${BASE_URL}/sunglasses-black-styled.png`,
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
    imgUrl: `${BASE_URL}/sunglasses-glasses-black-fashion.png`,
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
    imgUrl: `${BASE_URL}/sunglasses-glasses-goggles-fashion.png`,
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
    imgUrl: `${BASE_URL}/sunglasses-icon.png`,
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
    imgUrl: `${BASE_URL}/sunglasses-male-black.png`,
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
    imgUrl: `${BASE_URL}/wayfarer-sunglasses-with-black-frames.png`,
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
    imgUrl: `${BASE_URL}/preview banner.png`,
    imgsUrls: {
      urls: ["www.url1.com", "www.url2.com"],
    },
  },
];

export default function Home() {
  const { navigate } = useNavigation();

  function renderItem({item}: ListRenderItemInfo<ProductItemProps>){
    return <ProductItem {...item} />
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 18,
        backgroundColor: "#6717d6",
      }}
    >
      <View style={{ width: "100%", alignSelf: "flex-start" }}>
        <Text
          style={{
            fontSize: 28,
            marginBottom: 10,
            fontWeight: "500",
            color: "#fff",
          }}
        >
          Destaques
        </Text>
        <Card>
          <Image
            style={{ width: "90%", resizeMode: "cover", height: "100%" }}
            source={{ uri: listProducts[15].imgUrl }}
          />
        </Card>
      </View>
      <FlatList
      style={{flex: 1, width: '100%', alignSelf: 'center'}}
        data={listProducts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.name}
        renderItem={renderItem}
      />
    </View>
  );
}
