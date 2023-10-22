import React from "react";
import { View, Text } from "react-native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { Card } from "../../../components/Card";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
   const  {navigate} = useNavigation()
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
          id: 'uid@-1',
          avatar: 'www.google.com'
        })}
        label="Meu perfil"
      />
    </View>
  );
}
