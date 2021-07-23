import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import App from "./pages/App";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from './store/index'
import {LogBox} from 'react-native'
LogBox.ignoreAllLogs()

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Search",
              cardStyle: { backgroundColor: "white" },
            }}
          />
          <Stack.Screen
            name="App"
            component={App}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
