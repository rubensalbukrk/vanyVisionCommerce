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
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        rowGap: 20,
        alignItems: "center",
        backgroundColor: "#6717d6",
      }}
    >
      <Card>
        <Image
          style={{
            resizeMode: "cover",
            width: "100%",
            height: 300,
          }}
          source={{ uri: imgUrl }}
        />
      </Card>

      <View style={{ width: '90%', marginHorizontal: 20 }}>
        <Text style={{color: '#fff', fontSize: 34}}>
          {name}
        </Text>
        <Text style={{color: '#fff', fontSize: 34}}>
          {descrition}
        </Text>
        
      </View>
    </View>
  );
}
