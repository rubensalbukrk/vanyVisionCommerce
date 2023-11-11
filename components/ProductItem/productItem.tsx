import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { ProductItemProps } from "../../src/models/productItem";
import { useNavigation } from "@react-navigation/native";


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
    <View className="w-80 h-64 ml-4 mr-2 my-3 px-4 py-3 
                 bg-violet-500/20 blur-3xl rounded-2xl">
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
            height: 120,
          }}
          source={{ uri: imgUrl }}
        />
        <Text className="text-lg text-violet-50">{name}</Text>
        <Text className="text-lg text-violet-50">{price}</Text>
        <Text className="text-lg text-violet-50">{descount}</Text>
        <Text className="text-lg text-violet-50">{descrition}</Text>
      </TouchableOpacity>
    </View>
  );
};
