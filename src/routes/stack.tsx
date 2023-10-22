import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Perfil from "../pages/Perfil";
import Welcome from "../pages/Welcome";

declare global {
  namespace ReactNavitation {
   interface RootParamList {
      Welcome: undefined
      Drawer: undefined
      Home: undefined
      Perfil: {
        nome: string,
        id: string,
        avatar: string
      }
      Details: undefined
    }
  }
}

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Details" component={Detalhes} />
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
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}
export default Router;
