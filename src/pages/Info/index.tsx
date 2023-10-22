import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { ButtonRoxo } from "../../../components/ButtonRoxo";

export default function Info({ navigation }) {
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
        <Text style={{ fontSize: 36, color: "#fff" }}>Versão de Software</Text>
        <Text style={{ fontSize: 64, fontWeight: "800", color: "#fff" }}>
          1.0.3
        </Text>
      </View>
      <Image
        source={require("../../../assets/images/oculos.png")}
        style={{ width: "80%", height: 200 }}
      />
      <ButtonRoxo
        onPress={() => navigation.goBack()}
        label="Voltar"
      />
    </View>
  );
}
