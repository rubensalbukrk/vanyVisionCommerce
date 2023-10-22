import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { useNavigation } from "@react-navigation/native";

export default function Detalhes() {
 const { navigate } = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#470d97",
      }}
    >
      <Text style={{ fontSize: 36, color: "#fff" }}>Detalhes</Text>

      <ButtonRoxo 
      onPress={() => navigate("Info")} 
      label="Sobre" />
    </View>
  );
}
