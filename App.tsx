import "react-native-gesture-handler";
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes/stack";
import { CartProvider } from "./src/contexts/CartContext/cartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </CartProvider>
  );
}
