import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useCart } from "../../src/contexts/CartContext/cartContext";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { height, width } from "../../src/utils/dimensions";
import MyView from '../../assets/svgs/CARD2.svg'


export const CartItem = ({ ...props }) => {
  const { removeItem } = useCart();
  const [totalItemCart, setTotal] = useState(Number);
  const [countItemCart, setCount] = useState(Number);

  const { name, price, descount, countItem, totalItem, imgUrl } = props;

  return (
    <View
      key={props.id}
      className="flex w-80 items-center justify-center self-center
          rounded-2xl my-2 bg-white/25
          "
    >
 
      <View className="flex flex-col w-80 h-28">
        <Image
          resizeMode="stretch"
          style={{
            width: "70%",
            height: "100%",
          }}
          source={{ uri: props.imgUrl }}
        />
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            position: "absolute",
            top: 10,
            right: -30,
            opacity: 0.7
          }}
          onPress={() => removeItem(props.id)}
        >
          <Ionicons name="close-circle-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row w-80 px-2 h-10 justify-between">
        <Text className="left-0 text-white font-bold text-xl">{name}</Text>
        <Text className="left-0 text-white font-light text-lg">
          Total R$ {totalItem}
        </Text>
      </View>

      <View className="flex-row w-80  justify-between">
        <Text className="w-32 h-6 self-end text-center text-gray-300 bg-white/20 rounded-r-full rounded-b-full">
          {" "}
          {descount} % Desconto
        </Text>

        <View className="flex-row px-1 bottom-1 right-1 justify-between items-center self-end w-24 h-8 bg-violet-400 rounded-full">
          <TouchableOpacity
            onPress={() => setCount(countItemCart - 1)}
            className="w-7 h-7 justify-center items-center rounded-full bg-violet-500"
          >
            <Ionicons name="remove-circle-outline" size={24} color="white" />
          </TouchableOpacity>

          <Text className="font-default text-lg text-white/80 ">
            {countItemCart}
          </Text>

          <TouchableOpacity
            onPress={() => setCount(countItemCart + 1)}
            className="w-7 h-7 justify-center items-center rounded-full bg-violet-500"
          >
            <Ionicons name="add-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
