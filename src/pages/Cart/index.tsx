import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ListRenderItemInfo,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { useCart } from "../../contexts/CartContext/cartContext";
import BlurredLine from "../../../components/Line/Line";
import { CartItemProps } from "../../models/cartItem";
import { CartItem } from "../../../components/CartItem/CartItem";
import Background from '../../../assets/svgs/header-weave.svg'


export default function Cart({ route }: any) {
  const { navigate, goBack } = useNavigation();
  const { cartState, addItem, removeItem, clearCart } = useCart();


  function renderItem({ item }: ListRenderItemInfo<CartItemProps>) {
    return <CartItem {...item} />;
  }

  return (

    <View className="flex w-screen h-screen bg-violet-50/100 items-center">
      <View  className="w-screen h-screen absolute rotate-180">
    

      </View>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        className="flex px-4 flex-col w-screen h-96 max-h-96 z-10"
        keyExtractor={(item) => item.name}
        data={cartState.items}
        renderItem={renderItem}
      />

      <View style={{width: '95%'}} className="flex flex-2 flex-col h-34 my-2 bg-white/20 rounded-3xl shadow-md ">
        <View className="flex flex-row h-8 justify-between pt-2 px-4">
          <Text className="text-gray-300 text-lg">Subtotal</Text>
          <Text className="text-gray-300 text-xl">R$ 100,00</Text>
        </View>
        <View className="flex flex-row h-8 justify-between py-1 px-4">
          <Text className="text-gray-300 text-lg">Frete</Text>
          <Text className="text-gray-300 text-xl">R$ 10,00</Text>
        </View>
        <BlurredLine />
        <View className="flex flex-row h-10 justify-between px-4">
          <Text className="text-gray-100 text-lg">Total</Text>
          <Text className="text-gray-100 text-2xl">R$ 110,00</Text>
        </View>
      </View>
      <ButtonRoxo
        label="FINALIZAR"
        className="w-80 h-14 mt-3 justify-center 
        rounded-lg items-center  text-white "
      />
    </View>
  );
}
