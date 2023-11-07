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
          marginVertical: 15,
          backgroundColor: "#4400a38f",
          shadowColor: "#3d0b98ae",
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.7,
            shadowRadius: 30
        }}
      >
        <Text style={{ color: "#fff", fontSize: 28 }}>{props.label}</Text>
      </TouchableOpacity>
    )
}