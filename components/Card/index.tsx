import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export const Card = ({ children }) => {
  return (
    <View
      style={{
        width: "80%",
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: "#9b53ff",
      }}
    >
      {children}
    </View>
  );
};
