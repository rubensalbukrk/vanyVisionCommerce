import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { useNavigation } from "@react-navigation/native";

export default function Pagamento() {
  const { navigate, goBack } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#470d97",
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: '12%',
          width: "90%",
          height: 100,
          paddingHorizontal: 15,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#8747ff",
          borderRadius: 30,
        }}
      >
        <Text style={{ fontSize: 16, color: "#fff" }}>
          Atenção, toda e qualquer forma de pagamento fica responsavel por
          servidores privados, todos os seus dados estão seguros!
        </Text>
      </View>

      <Text
        style={{
          position: "absolute",
          top: "5%",
          fontSize: 36,
          color: "#fff",
        }}
      >
        Formas de pagamento
      </Text>
      <View
        style={{
          width: "80%",
          height: 200,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#8747ff",
          borderRadius: 30,
          marginVertical: '30%',
          shadowColor: "#5c04fe",
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.7,
            shadowRadius: 30
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: 50,
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "#712bf3",
          }}
        >
          <Text style={{ color: "#ffffffdb", fontSize: 22, marginLeft: "5%" }}>
            Cartão de crédito
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "100%",
            height: 50,
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "#712bf3",
          }}
        >
          <Text style={{ color: "#ffffffdb", fontSize: 22, marginLeft: "5%" }}>
            Pix
          </Text>
        </TouchableOpacity>
      </View>

      <ButtonRoxo onPress={() => goBack()} label="Voltar" />
    </View>
  );
}
