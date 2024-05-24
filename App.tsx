import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes/stack";
import { Preload } from "./src/pages/Preload/preload";
import { CartProvider } from "./src/contexts/CartContext/cartContext";
import { 
  useFonts, 
  Rubik_300Light, 
  Rubik_400Regular,
  Rubik_500Medium  
} from '@expo-google-fonts/rubik'


export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium
  })

  if(!fontsLoaded){
    return <Preload />
  }
  
  return (
    <CartProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </CartProvider>
  
  );
}
