import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

interface PerfilParams {
  nome: string;
  id: string;
  avatar: string;
}

export default function Perfil() {
  const { navigate, goBack } = useNavigation();
  const { id, nome, avatar } = useRoute().params as PerfilParams;
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
        <Text style={{ fontSize: 22, color: "#fff" }}>
          ID do usuário é {id}
        </Text>
        <Text style={{ fontSize: 22, color: "#fff" }}>
          Nome do usuário: {nome}
        </Text>
        <Text style={{ fontSize: 22, color: "#fff" }}>Link {avatar} </Text>
      </View>

      <TouchableOpacity
        onPress={() => goBack()}
        style={{
          position: "absolute",
          bottom: "20%",
          width: 100,
          height: 30,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#7529e1",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
