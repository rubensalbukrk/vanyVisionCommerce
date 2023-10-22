import React from "react";
import { View, Text } from "react-native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { Card } from "../../../components/Card";
import { useNavigation } from "@react-navigation/native";

type PerfilParamList = {
  nome: string
  id: string
  avatar: string
}

export default function Home() {
  const { navigate: string } = useNavigation()
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

        <Text style={{ fontSize: 28, fontWeight: "500", color: "#fff" }}>
          Novidades
        </Text>
      </View>
      <Card>
      <Text style={{ fontSize: 34, fontWeight: "800", color: "#fff" }}>
          Atualização
        </Text>
      </Card>
      <ButtonRoxo
        onPress={() => navigate('Perfil', {
          nome: 'Rubens',
          id: 'user@232131',
          avatar: 'www.google.com',
        })}
        label="Meu perfil"
      />
    </View>
  );
}
