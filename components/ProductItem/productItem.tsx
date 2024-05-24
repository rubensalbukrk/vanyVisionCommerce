import React, { useContext } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { ProductItemProps } from "../../src/models/productItem";
import { useNavigation } from "@react-navigation/native";
import { ButtonLike } from "../ButtonLike/buttonLike";
import colors from "tailwindcss/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    <View
      className="w-80 h-60 ml-4 mr-2 my-auto px-4 py-3 
                 bg-violet-500 rounded-2xl shadow-lg shadow-black"
    >
      <View className="absolute self-end bottom-full">
        <ButtonLike />
      </View>

      <TouchableOpacity
        onPress={() =>
          navigate("ProductDetails", {
            item: info,
          })
        }
      >
        <View className="flex-row">
          <MaterialCommunityIcons
            name="tag-minus-outline"
            size={22}
            color="#ffffffcc"
          />
          <Text className="text-white/80 ml-1 line-through text-xl font-medium">
           {descount}
          </Text>
          
        </View>
        <Image
          style={{
            width: "100%",
            height: 120,
          }}
          source={{ uri: imgUrl }}
        />
        <Text className="text-3xl font-default text-gray-100">{name}</Text>

        <Text className="font-default text-lg text-gray-200">{descrition}</Text>
      </TouchableOpacity>
    </View>
  );
};
