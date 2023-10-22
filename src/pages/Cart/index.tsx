import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonRoxo } from "../../../components/ButtonRoxo";
import { Card } from "../../../components/Card";

export default function Cart() {
  const { navigate, goBack } = useNavigation();

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: '10%',
        backgroundColor: "#6717d6",
      }}
    >
      <Card>
        <Image
          resizeMode="cover"
          style={{ width: "50%", height: "100%", borderRadius: 20 }}
          source={require("../../../assets/images/oculos/OFERTA1.jpeg")}
        />
        <Text style={{ color: "#ffffff" }}></Text>
      </Card>
      <Card>
        <Image
          resizeMode="cover"
          style={{ width: "50%", height: "100%", borderRadius: 20 }}
          source={require("../../../assets/images/oculos/OFERTA2.jpeg")}
        />
        <Text style={{ color: "#ffffff" }}></Text>
      </Card>
      <Card>
        <Image
          resizeMode="cover"
          style={{ width: "50%", height: "100%", borderRadius: 20 }}
          source={require("../../../assets/images/oculos/OFERTA4.jpeg")}
        />
        <Text style={{ color: "#ffffff" }}></Text>
      </Card>
      <Card>
        <Image
          resizeMode="cover"
          style={{ width: "50%", height: "100%", borderRadius: 20 }}
          source={require("../../../assets/images/oculos/QUADRADO.jpeg")}
        />
        <Text style={{ color: "#ffffff" }}></Text>
      </Card>
      <Card>
        <Image
          resizeMode="cover"
          style={{ width: "50%", height: "100%", borderRadius: 20 }}
          source={require("../../../assets/images/oculos/rayban.jpeg")}
        />
        <Text style={{ color: "#ffffff" }}></Text>
      </Card>
    </ScrollView>

  );
}
