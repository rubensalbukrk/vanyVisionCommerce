import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProductItemProps } from "../../models/productItem";
import BackgroundProduct from "../../../assets/svgs/view-product-bg-wave.svg";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function ProductDetails({ route }: any ) {
  const { navigate, goBack } = useNavigation();
  const [total, setTotal] = useState(Number);
  const [count, setCount] = useState(Number);
  const { name, descrition, price, descount, imgUrl }: ProductItemProps =
    route?.params?.item;

  return (
    <View className="flex-1 mt-20 w-full bg-black rounded-t-3xl">
      <View className="absolute w-full h-full">
        <BackgroundProduct />
      </View>
      <View className="w-full gap-2 self-center mt-5 rounded-full h-46 bg-violet-800/70">
        <Image className="w-full h-44 self-center " source={{ uri: imgUrl }} />
      </View>
      <View className="flex w-92 h-50 py-2 px-3 rounded-xl">
        <Text className="text-5xl font-default text-white/80">{name}</Text>
        <Text className="text-3xl font-default text-white/80">
          {descrition}
        </Text>

        <Text className="font-medium mx-1 mt-8  text-5xl text-white/80">
          DESCONTO
        </Text>

        <View className="flex-row justify-between items-center">
          <Text className="font-light line-through text-7xl text-white/70">
            {descount}
          </Text>

          <View className="flex-row px-1 justify-between items-center shadow-lg shadow-black self-end w-32 h-12 bg-violet-600 rounded-full">
            <TouchableOpacity
              onPress={() => setCount(count - 1)}
              className="w-10 h-10 justify-center items-center rounded-full bg-violet-900"
            >
              <Ionicons name="md-remove-outline" size={24} color="white" />
            </TouchableOpacity>

            <Text className="font-default text-lg text-white/80 ">{count}</Text>
            
            <TouchableOpacity
              onPress={() => setCount(count + 1)}
              className="w-10 h-10 justify-center items-center rounded-full bg-violet-900"
            >
              <Ionicons name="add-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text className='font-default text-3xl text-white/80'>Preço {price}</Text>
        <View className="flex-row gap-3 w-full h-20 items-center">
         
          <Text className="font-default text-3xl text-white/80">Total</Text>
          <Text className="font-light text-5xl text-white/80">{price * count}</Text>
        </View>

        <TouchableOpacity
        className='flex-row w-60 h-14 mt-2 bg-violet-300/40 rounded-xl justify-evenly items-center self-center'
        >
          <Text className='font-medium text-3xl text-white/90 self-center'>
            Adicionar
          </Text>
          <FontAwesome5 name="cart-plus" size={36} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
