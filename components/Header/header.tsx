import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Logo from "../../assets/svgs/Logo.svg";
import Background from "../../assets/svgs/header-weave.svg";
import CartSvg from "../../assets/svgs/cart-icon.svg";
import MenuSvg from "../../assets/svgs/menu-icon.svg";
import { width, height } from "../../src/utils/dimensions";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const Header = (props: any) => {
  const { navigate, dispatch } = useNavigation();
  return (
    <View className="w-full h-40 justify-between">
      <View className="absolute w-full h-full">
        <Background />
        
      </View>

      <View className='flex-row w-full h-28 py-7 px-3 justify-between'>

      <MenuSvg
        style={{ marginLeft: 5 }}
        width={32}
        height={32}
        color="white"
        onPress={() => dispatch(DrawerActions.openDrawer())}
      />
      <Logo width={width / 2 + 50} height={height / 7} />
      <TouchableOpacity
        style={{ width: 40, height: 40 }}
        onPress={() => navigate("Carrinho", { nome: "Rubens" })}
      >
        <CartSvg width={32} height={32} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export { Header };
