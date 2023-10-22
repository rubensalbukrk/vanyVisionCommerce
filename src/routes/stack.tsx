import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Perfil from "../pages/Perfil";
import Welcome from "../pages/Welcome";
import Info from "../pages/Info";


declare global {
  namespace ReactNavigation {
   interface RootParamList {
      Welcome: undefined;
      Drawer: undefined;
      Home: undefined;
      Perfil: {
        id: string,
        nome: string,
        avatar: string,
      };
      Details: undefined;
      Info: undefined;
    }
  }
}

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: "#6717d6"},
      headerTintColor: "#ffffff",
      drawerInactiveTintColor: "#8748e0",
      drawerActiveTintColor: "#ffffff",
      drawerStyle: {backgroundColor: "#6717d6"}
    }}
    >
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
      <Stack.Group>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Group>
      <Stack.Group
      screenOptions={{
        presentation: 'modal'
      }}
      >
      <Stack.Screen name="Info" component={Info} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
export default Router;
