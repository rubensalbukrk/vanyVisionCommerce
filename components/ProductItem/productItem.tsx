import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { ProductItemProps } from "../../src/models/productItem";
import { useNavigation } from "@react-navigation/native";

export const ProductItem = ({id, name, descrition, price,descount,imgUrl,imgsUrls}: ProductItemProps) => {
  const {navigate} = useNavigation()
  const info: Object =
    {
      id: id,
      name: name,
      descrition: descrition,
      price: price,
      descount: descount,
      imgUrl: imgUrl
    };
  
  return (
    <View
      style={{
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        width: "90%",
        height: 280,
        marginVertical: 20,
        backgroundColor: "#9b53ff",
      }}
    >
      <TouchableOpacity onPress={() => navigate("ProductDetails", {
        item: info
      })}>
      <Image
        style={{
          width: '100%',
          height: 200,
        }}
        source={{ uri: imgUrl }}
      />
      <Text style={{ color: "#ffff" }}>{name}</Text>
      <Text style={{ color: "#ffff" }}>{price}</Text>
      <Text style={{ color: "#ffff" }}>{descount}</Text>
      <Text style={{ color: "#ffff" }}>{descrition}</Text>
      </TouchableOpacity>
    </View>
  );
};
