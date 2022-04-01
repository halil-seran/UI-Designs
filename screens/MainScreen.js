import React from "react";
import {
  Screen,
  HeaderTitle,
  UiButtons,
  ButtonTitle,
} from "../screen-components/MainScreen-component";

export const MainScreen = ({ navigation }) => {
  return (
    <Screen>
      <HeaderTitle>Please choose a UI</HeaderTitle>
      <UiButtons onPress={() => navigation.navigate("Neumorphism")}>
        <ButtonTitle>Neumorphism</ButtonTitle>
      </UiButtons>
    </Screen>
  );
};
