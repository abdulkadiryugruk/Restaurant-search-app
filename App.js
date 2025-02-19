import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultShowScreen from './screens/ResultShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen 
        name="SearchScreen"
        component={SearchScreen} 
        />
        <Stack.Screen 
        name="ResultsShow"
        component={ResultShowScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

