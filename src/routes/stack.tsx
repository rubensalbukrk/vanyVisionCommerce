import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Preload } from "../pages/Preload/preload";
import Home from "../pages/Home";
import Pagamento from "../pages/Pagamento";
import Cart from "../pages/Cart";
import Welcome from "../pages/Welcome";
import ProductDetails from "../pages/ProductDetails";
import { Header } from "../../components/Header/header";
import colors from 'tailwindcss/colors'


declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      Home: undefined | string
      Drawer: undefined | string
      Carrinho: {
        nome?: string;
      };
      Pagamento: undefined | string
      ProductDetails: {
        item: Object | undefined
      },
      Preload: undefined
    }
  }
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
          backgroundColor: colors.violet[900]
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} 
      options={{ 
        headerStyle: {
          zIndex: 1
        },
        header: () => <Header />,
      }}
      />
      <Drawer.Screen name="Carrinho" component={Cart}
      options={{ 
        headerStyle: {
          zIndex: 1
        },
        header: () => <Header />
        
      }}
      />
      <Drawer.Screen name="Pagamento" component={Pagamento}
      options={{ 
        headerStyle: {
          zIndex: 0
        },
        header: () => <Header />,
      }}
      />
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
          presentation: 'containedTransparentModal',
          headerShown: false,
        }}
        name="ProductDetails" component={ProductDetails} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
export default Router;
