import React from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function Detalhes({navigation}) {
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
      
      <Button 
      onPress={() => navigation.navigate('Info')}
      title="Informações" 
      style={{ backgroundColor: "#030105" }} />
    </View>
  );
}
