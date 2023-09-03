import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login,Welcome, ForgotPassword,ChangePassword,Dashboard,AccidentReporting,PendingFines,Suggestions,Register} from './screens'; 
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">

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
        name="Dashboard" 
        component={Dashboard}
        options={{headerShown: false}}
        />
      <Stack.Screen 
        name="PendingFines" 
        component={PendingFines}
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="AccidentReporting" 
        component={AccidentReporting}
        options={{headerShown: false}}
        />
      
      <Stack.Screen 
        name="Suggestions" 
        component={Suggestions}
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="Register" 
        component={Register}
        options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;