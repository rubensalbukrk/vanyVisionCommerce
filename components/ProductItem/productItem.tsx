import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { ProductItemProps } from "../../src/models/productItem";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";

const ItemBox = styled(
  View,
  "flex flex-1 w-80 h-30 my-3 px-4 py-3 bg-violet-400/10 shadow-lg rounded-2xl self-center"
);
const ItemLabels = styled(Text, 'text-white text-2xl')

export const ProductItem = ({
  id,
  name,
  descrition,
  price,
  descount,
  imgUrl,
  imgsUrls,
}: ProductItemProps) => {
  const { navigate } = useNavigation();
  const info: Object = {
    id: id,
    name: name,
    descrition: descrition,
    price: price,
    descount: descount,
    imgUrl: imgUrl,
  };

  return (
    <ItemBox>
      <TouchableOpacity
        onPress={() =>
          navigate("ProductDetails", {
            item: info,
          })
        }
      >
        <Image
          style={{
            width: "100%",
            height: 150,
          }}
          source={{ uri: imgUrl }}
        />
        <ItemLabels>{name}</ItemLabels>
        <ItemLabels>{price}</ItemLabels>
        <ItemLabels>{descount}</ItemLabels>
        <ItemLabels>{descrition}</ItemLabels>
      </TouchableOpacity>
    </ItemBox>
  );
};
