import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export const Card = ({ children }: any) => {
  return (
    <View
      style={{
        width: '100%',
        height: 200,
        marginVertical: 12,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#9b53ff",
      }}
    >
      {children}
    </View>
  );
};
