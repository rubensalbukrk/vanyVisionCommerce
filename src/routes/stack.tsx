import * as React from "react";
import {View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons'
import { Preload } from "../pages/Preload/preload";
import Home from "../pages/Home";
import Pagamento from "../pages/Pagamento";
import Cart from "../pages/Cart";
import Welcome from "../pages/Welcome";
import ProductDetails from "../../components/ProductDetails";


const LogoTitle = () => {
  return <Image style={{
                  width: 230, 
                  height: 80, 
                  resizeMode: 'contain'}} 
                  source={require('../../assets/images/oculos.png')} />
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#d0b7ff',
        drawerInactiveTintColor: "#ffffff80",
        drawerActiveTintColor: "#ffffff",
        drawerStyle: {
          backgroundColor: '#4303bb'
        }
      }}
    >
      <Drawer.Screen name="Home" component={Home} 
      options={{ 
        headerStyle: {
          backgroundColor: '#4303bb'
        },
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
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen 
        options={{
          title: "Detalhes de Produto",
          headerShown: true,
          headerTintColor: '#ffffff',
          headerStyle: {backgroundColor: '#6a00ff'},
        }}
        name="ProductDetails" component={ProductDetails} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
export default Router;
