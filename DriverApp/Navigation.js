import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Welcome,
  ForgotPassword,
  ChangePassword,
  Dashboard,
  AccidentReporting,
  PendingFines,
  Suggestions,
  Register,
} from "./screens";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import styles from "./components/styles";
import COLORS from "./constants/colors";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

const Navigation = () => {
  const navigation = useNavigation();

  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitle: (props) => {
          // console.log(props);
          return <Text style={styles.headerText}> {props.children}</Text>;
        },
        headerStyle: { backgroundColor: COLORS.PRIMARY },
        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Dashboard")}
              style={{ paddingHorizontal: "15%" }}
            >
              <Image
                source={require("./assets/back.jpg")}
                style={styles.back}
              />
            </TouchableOpacity>
          );
        },
        headerRight: (props) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ paddingHorizontal: "15%" }}
            >
              <Image
                source={require("./assets/logout.jpg")}
                style={styles.logout}
              />
            </TouchableOpacity>
          );
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
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
        name="Dashboard"
        component={Dashboard}
        options={{ title: "Dashboard" }}
      />
      <Stack.Screen
        name="PendingFines"
        component={PendingFines}
        options={{ title: "Pending Fines" }}
      />

      <Stack.Screen
        name="AccidentReporting"
        component={AccidentReporting}
        options={{ title: "Reporting" }}
      />

      <Stack.Screen
        name="Suggestions"
        component={Suggestions}
        options={{ title: "Suggestions" }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Navigation;
