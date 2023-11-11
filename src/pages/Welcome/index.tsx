import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { styled } from "nativewind";

export default function Welcome({ navigation }: any) {
  return (
    <View
      className='flex-1 font-default justify-center items-center'
    >
      <View className="flex-1 w-full h-full absolute blur-xl">
        <Image blurRadius={15} source={require("../../../assets/bg.jpg")} />
      </View>
      <View style={{ alignContent: "flex-start" }}>
        <Text className="font-default text-3xl text-white">Vanny</Text>
        <Text className='font-regular text-6xl text-white'>
          Commerce
        </Text>
      </View>
      <Image
        source={require("../../../assets/images/oculos.png")}
        style={{ width: "80%", height: 200 }}
      />
      <ButtonRoxo
        onPress={() => navigation.navigate("Drawer")}
        label="Começar"
      />
    </View>
  );
}
