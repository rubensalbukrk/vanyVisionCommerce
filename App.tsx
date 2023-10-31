import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes/stack";
import { CartProvider } from "./src/contexts/CartContext/cartContext";
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from "./config/gluestack-ui.config"

export default function App() {
  return (
    <GluestackUIProvider config={config}>
    <CartProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </CartProvider>
    </GluestackUIProvider>
  );
}
