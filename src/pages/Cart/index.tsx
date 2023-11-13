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
      <Text>
       {`olá ${route?.params?.nome}`}
      </Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          width: "90%",
          marginVertical: '10%',
          maxHeight: 900,
          borderRadius: 40,

        }}
        keyExtractor={(item) => item.id.toString()}
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
              <Text style={{color: '#fff', fontSize: 20}}>Nome: {item.name}</Text>
              <Text style={{color: '#fff', fontSize: 20}}>Local X: {item.price}</Text>
              <Text style={{color: '#fff', fontSize: 20}}>Local Y: {item.descount}</Text>
              <Text style={{color: '#fff', fontSize: 20}}>Estado: {item.descrition}</Text>
              
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
       <TouchableOpacity
              onPress={() => navigate("Home")}
              >
                <Text>
                  Voltar
                </Text>
              </TouchableOpacity>
      <View
        style={{
          rowGap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: "column",
          width: "100%",
          height: 100,
          marginBottom: 40

        }}
      >
        <ButtonRoxo 
        label='Limpar'
        onPress={() => clearCart()} />
        <ButtonRoxo
          label="Encontrar"
        />
  
      </View>
    </View>
  );
}
