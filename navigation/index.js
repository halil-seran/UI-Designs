import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MainScreen } from "../screens/MainScreen";
import { Neumorphism } from "../screens/Neumorphism";

const Stack = createNativeStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={createScreenOptions}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Neumorphism" component={Neumorphism} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
