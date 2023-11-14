import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { Card } from "../../../components/Card/card";
import { useCart } from "../../contexts/CartContext/cartContext";
import { Feather } from '@expo/vector-icons'


export default function Cart({route}: any) {
  const { navigate, goBack } = useNavigation();
  const { cartState, addItem, removeItem, clearCart } = useCart();
  
  return (
    <View
      style={{
        rowGap: 10,
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6717d6",
      }}
    >

      <FlatList
      showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          width: "90%",
          marginVertical: '10%',
          maxHeight: 900,
          borderRadius: 40,

        }}
        keyExtractor={(item) => item.name}
        data={cartState.items}
        renderItem={({ item, index }) => {
          return (
            <View
            key={item.id}
              style={{
                marginVertical: 10,
                width: "95%",
                backgroundColor: "#ffffff60",
                height: 200,
                paddingHorizontal: 20,
                borderRadius: 40,
                alignSelf: 'center',
                alignItems: 'center',
                rowGap: 2,
                justifyContent: 'center'
              }}
            >
              <Image style={{position: 'absolute', top: 10, left: 15,width: 50, height: 50, borderRadius: 40}} source={{ uri: item.imgUrl}} />
              <Text style={{color: '#fff', fontSize: 20}}>{item.name}</Text>
              <Text style={{color: '#fff', fontSize: 20}}>Preço{item.price}</Text>
              <Text style={{color: '#fff', fontSize: 20}}>Qt. {item.countItem}</Text>
              <Text style={{color: '#fff', fontSize: 20}}>Total{item.totalItem}</Text>
              <Text style={{color: '#fff', fontSize: 20}}>Desconto {item.descount}</Text>
              
              <TouchableOpacity 
              style={{width: 70, height: 70, position: 'absolute', top: 20, right: 10}}
              onPress={() => removeItem(item.id)}
              >
                <Feather name="delete" color="white" size={22} />
              </TouchableOpacity>

             
            </View>
          );
        }}
      />

     
    </View>
  );
}
