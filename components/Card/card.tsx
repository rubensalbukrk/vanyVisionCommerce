import { styled } from "nativewind";
import React from "react";
import { View, Text, Image } from "react-native";

export const Card = (props: any) => {
  return (
    <>
      <Text className="text-violet-600 text-2xl mt-4 mx-6">
        {props.title}
        </Text>
      <View className="w-full self-center h-44
        mx-2 my-2 rounded-lg bg-violet-600/30" >
        
        <Image
        resizeMode="cover"
          style={{ width: "100%", borderRadius: 50, height: '100%', alignSelf: 'center' }}
          source={props.img}
        />
      </View>
    </>
  );
};
