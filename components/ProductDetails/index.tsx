import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductItemProps } from "../../src/models/productItem";
import { Card } from "../Card/card";

export default function ProductDetails({ route }: any) {
  const { navigate, goBack } = useNavigation();
  const { name, descrition, price, descount, imgUrl }: ProductItemProps =
    route?.params?.item;
  return (
    <View className="flex-1 w-full bg-black">
      <View className="w-80 self-center mt-5 rounded-xl h-46 bg-violet-800/60">
        <Image className="w-80 h-44 self-center " source={{ uri: imgUrl }} />
      </View>

      <View style={{ width: "90%", marginHorizontal: 20 }}>
        <Text style={{ color: "#fff", fontSize: 34 }}>{name}</Text>
        <Text style={{ color: "#fff", fontSize: 34 }}>{descrition}</Text>
      </View>
    </View>
  );
}
