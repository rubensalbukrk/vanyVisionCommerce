import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductItemProps } from "../../models/productItem";
import BackgroundProduct from '../../../assets/svgs/view-product-bg-wave.svg'

export default function ProductDetails({ route }: any) {
  const { navigate, goBack } = useNavigation();
  const { name, descrition, price, descount, imgUrl }: ProductItemProps =
    route?.params?.item;

  return (
    <View className="flex-1 mt-20 w-full bg-black rounded-t-3xl">
      <View className='absolute w-full h-full'>
        <BackgroundProduct />
      </View>
      <View className="w-full gap-2 self-center mt-10 rounded-full h-46 bg-violet-800/70">
        <Image className="w-full h-44 self-center " source={{ uri: imgUrl }} />
      </View>
      <View
        className='w-92 h-52 gap-3 py-2 px-3 rounded-xl'
      >
        <Text
          className='text-5xl font-default text-white/80'
        >
          {name}
        </Text>
        <Text
          className='text-4xl font-default text-white/80'
        >
          {descrition}
        </Text>
      </View>
    </View>
  );
}
