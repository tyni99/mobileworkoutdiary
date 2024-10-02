import * as React from 'react';
import Segmented from './components/seg'; 
import List from './components/list';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './components/settings';



const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Segmented">
        <Stack.Screen name="Add workout" component={Segmented} />
        <Stack.Screen name="List" component={List} /> 
        <Stack.Screen name="Settings" component={Settings} /> 
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
