import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/stack';


export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    
  );
}