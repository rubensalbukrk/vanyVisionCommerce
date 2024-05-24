import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const ButtonRoxo = ({...props}: any) => {
    return (
        <TouchableOpacity
        className={`${props.className}` + `${`w-52 h-12 rounded-xl justify-center items-center bg-violet-100/30
        active:bg-violet-200/0 transition duration-700 ease-in-out active:duration-150`}`}
        onPress={props.onPress}
      {...props}
      >
        <Text className='text-xl active:text-clip font-medium active:text-slate-50/0 text-slate-50'>{props.label}</Text>
      </TouchableOpacity>
    )
}