import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { useNavigation } from "@react-navigation/native";

export default function Info() {
  const { navigate, goBack } = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6717d6",
      }}
    >
      <View style={{ alignContent: "flex-start" }}>
        <Text style={{ fontSize: 36, color: "#fff" }}>Detalhes do produto</Text>
        <Text style={{ fontSize: 64, fontWeight: "800", color: "#fff" }}>
          Nome:
          Preço:
          Categoria:
          Desconto:
          
        </Text>
      </View>
      <Image
        source={require("../../../assets/images/oculos.png")}
        style={{ width: "80%", height: 200 }}
      />
      <ButtonRoxo
        onPress={() => goBack()}
        label="Voltar"
      />
    </View>
  );
}
