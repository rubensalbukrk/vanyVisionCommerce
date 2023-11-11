import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const ButtonRoxo = (props: any) => {
    return (
        <TouchableOpacity
        className='w-52 h-12 rounded-xl justify-center items-center bg-violet-100/90
                 active:bg-violet-900
                 active:rotate-100
                 active:scale-150'
        onPress={props.onPress}
      >
        <Text className='text-xl active:text-2xl font-default text-slate-50'>{props.label}</Text>
      </TouchableOpacity>
    )
}