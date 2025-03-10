import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from './src/List';
import List1 from './src/List1';
import bottom from './src/tab/bottom';
import bottom1 from './src/tab/bottom1';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// type RootStackParamList = {
//   List: undefined;
//   List1: { store: string[]; setStore: React.Dispatch<React.SetStateAction<string[]>> };
// };
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="List1" component={List1} />
        </Stack.Navigator>
        <Tab.Navigator>
          <Tab.Screen name="bottom" component={bottom} />
          <Tab.Screen name="bottom1" component={bottom1} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}