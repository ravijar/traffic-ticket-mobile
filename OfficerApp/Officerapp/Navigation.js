import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Welcome,
  ForgotPassword,
  ChangePassword,
  DashBoard,
  AddNewFine,
  VehicleDetails,
  DriverFineHistory,
  Message,
  OTPscreen,
} from "./screens"; // Create these files later

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        
        {/* Define navigation screens with their respective components */}

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }} // hide the navigation header
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddNewFine"
          component={AddNewFine}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="VehicleDetails"
          component={VehicleDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DriverFineHistory"
          component={DriverFineHistory}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Message"
          component={Message}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="OTPscreen"
          component={OTPscreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
