import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons'
import Home from "../pages/Home";
import Pagamento from "../pages/Pagamento";
import Cart from "../pages/Cart";
import Welcome from "../pages/Welcome";
import ItemDetails from "../pages/ItemDetails";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      Home: undefined;
      Drawer: undefined;
      Carrinho: {
        id?: string;
        nome?: string;
        avatar?: string;
      };
      Pagamento: undefined;
      ItemDetails: undefined;
    }
  }
}
const LogoTitle = () => {
  return <Image style={{width: 80, height: 30, resizeMode: 'cover'}} source={require('../../assets/images/oculos.png')} />
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#6717d6"},
        headerTintColor: "#ffffff",
        drawerInactiveTintColor: "#ffffff80",
        drawerActiveTintColor: "#ffffff",
        drawerStyle: { backgroundColor: "#6717d6" },
      }}
    >
      <Drawer.Screen name="Home" component={Home} 
      options={{ 
        headerTitle: () => <LogoTitle />,
        headerRight: () => 
          <TouchableOpacity style={{width: 40, height: 40}} onPress={() => alert('Abrir carrinho')}>
            <Feather name="shopping-cart" size={28} color="white" />
          </TouchableOpacity>
      }}
      />
      <Drawer.Screen name="Carrinho" component={Cart} />
      <Drawer.Screen name="Pagamento" component={Pagamento} />
    </Drawer.Navigator>
  );
}

function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
export default Router;
