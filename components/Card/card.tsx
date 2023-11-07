import { styled } from "nativewind";
import React from "react";
import { View, Text, Image } from "react-native";

const CardBox = styled(View);
const CardLabel = styled(Text);

export const Card = ({children}: any) => {
  return (
    <>
      <CardBox className="w-96 self-center h-56 bg-violet-400/10 mx-2 my-2 rounded-2xl shadow-lg">
        <CardLabel className="text-white text-4xl my-5 mx-4">
          Promoção semanal
        </CardLabel>
        {children}
      </CardBox>
    </>
  );
};
