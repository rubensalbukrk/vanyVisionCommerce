import React from "react";
import { View, Text } from "react-native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { Card } from "../../../components/Card";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 14,
        paddingVertical: 18,
        backgroundColor: "#6717d6",
      }}
    >
      <View style={{ width: '100%', alignSelf: 'flex-start' }}>
        <Text style={{ fontSize: 28, marginBottom: 10, fontWeight: "500", color: "#fff" }}>
          Destaques
        </Text>
        <Card>
        <Text style={{ fontSize: 34, fontWeight: "800", color: "#fff" }}>
          OBTENHA OS MELHORES DESCONTOS
        </Text>
      </Card>
      </View>
    

      
    </View>
  );
}
