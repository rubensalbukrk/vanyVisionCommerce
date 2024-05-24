import React from "react";
import { View, Image, Text } from "react-native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import Logo from "../../../assets/svgs/Logo.svg";
import Background from "../../../assets/svgs/svg-background-welcome.svg"
import { height, width } from "../../utils/dimensions";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const {navigate} = useNavigation()

  return (
    <View className="flex-1  justify-center items-center">
      <View className="flex-1 absolute w-full h-full">
        <Background />
      </View>
      <View className='w-80'>
        <Logo width="80%" height={height / 3} fill="white" />
      </View>

      <Text className="font-default text-6xl text-white">Commerce</Text>

      <ButtonRoxo
        onPress={() => navigate("Drawer")}
        label="Vamos lá"
        style={{marginTop: height / 6}}
      />
    </View>
  );
}
