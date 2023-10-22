import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { RootStackPropsList } from "../../routes/stack";
import { ScreenProps } from "../Perfil";
import { ButtonRoxo } from "../../../components/ButtonRoxo";

export default function Welcome({ navigation }: ScreenProps) {
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
        <Text style={{ fontSize: 36, color: "#fff" }}>Vanny</Text>
        <Text style={{ fontSize: 64, fontWeight: "800", color: "#fff" }}>
          Commerce
        </Text>
      </View>
      <Image
        source={require("../../../assets/images/oculos.png")}
        style={{ width: "80%", height: 200 }}
      />
      <ButtonRoxo
        onPress={() => navigation.navigate("Drawer")}
        label="Começar"
      />
    </View>
  );
}
