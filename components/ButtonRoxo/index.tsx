import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const ButtonRoxo = (props: any) => {
    return (
        <TouchableOpacity
        onPress={props.onPress}
        style={{
          width: 200,
          height: 60,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#7529e1",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 28 }}>{props.label}</Text>
      </TouchableOpacity>
    )
}