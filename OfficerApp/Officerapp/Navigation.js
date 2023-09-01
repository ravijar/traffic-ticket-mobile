// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import LoginScreen from './screens/Login'; // Create this file later
import {Login, Signup, Welcome, ForgotPassword, ChangePassword, DashBoard} from './screens'; // Create these files later
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        
        <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        options={{headerShown: false}}
        />

        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
        />

        <Stack.Screen 
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="ChangePassword" 
        component={ChangePassword}
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="DashBoard" 
        component={DashBoard}
        options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
