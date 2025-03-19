import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from './src/List';
import List1 from './src/List1';
import api_fetched_file from './src/Api_fetched_file';
import Reduxuse from './redux/Reduxuse';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import store from "./redux/store";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from "react-redux";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Store } from "./redux_toolkit_use/store/Store";
// type RootStackParamList = {
//   List: undefined;
//   List1: { store: string[]; setStore: React.Dispatch<React.SetStateAction<string[]>> };
// };
function App1(){
  return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'List') {
              iconName = 'home';
            } else if (route.name === 'List1') {
              iconName = 'list';
            } else if (route.name === 'API Data') {
              iconName = 'globe';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: '#3E3364', 
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray'
        })}>
          <Tab.Screen name="List" component={List} options={{ headerShown: false }} />
          <Tab.Screen name="List1" component={List1} options={{ headerShown: false }} />
        </Tab.Navigator>
  );
}
function App() {
  return (
    <Provider 
    // store={store}
    store={Store}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List"
         screenOptions={{
            cardStyle: {
              backgroundColor: 'transparent',
            },
            headerStyle: {
              backgroundColor: '#3E3364',
            },
            headerTitleStyle: {
              color: 'white'
            }
          }}>
        <Stack.Screen 
          name="TODO LIST" 
          component={App1} 
        />
        <Stack.Screen 
          name="List1" 
          component={List1} 
          options={{
            headerTitle: 'Back to List',
            headerBackTitleVisible: true
          }}
        />
        {/* <Stack.Screen 
          name="api_fetched_file" 
          component={api_fetched_file} 
          options={{ title: 'API Fetched Data' }}
        />
        <Stack.Screen 
          name="Reduxuse"
          component={Reduxuse}
          options={{ title: 'Reduxuse' }}
        /> */}
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}
export default App;