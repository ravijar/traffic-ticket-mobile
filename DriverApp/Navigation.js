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
  OTP,
  ForgotUpdate,
} from "./src/screens";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import styles from "./src/components/styles";
import COLORS from "./src/constants/colors";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { setSignedIn } from "./src/redux/auth/actions";

const Stack = createStackNavigator();

const Navigation = ({ isSignedIn, setSignedIn }) => {
  const navigation = useNavigation();

  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        //header component for all screens
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
                source={require("./src/assets/back.jpg")}
                style={styles.back}
              />
            </TouchableOpacity>
          );
        },
        headerRight: (props) => {
          return (
            <TouchableOpacity
              onPress={async () => {
                await setSignedIn(false);
                navigation.navigate("Login");
              }}
              style={{ paddingHorizontal: "15%" }}
            >
              <Image
                source={require("./src/assets/logout.jpg")}
                style={styles.logout}
              />
            </TouchableOpacity>
          );
        },
      }}
    >
      {/* code need to be changed.just for testing */}
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: "Dashboard", headerLeft: null }}
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
        </>
      ) : (
        <>
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
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OTP"
            component={OTP}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotUpdate"
            component={ForgotUpdate}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen //now
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
          /> */}
        </>
      )}
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

const mapDispatchToProps = {
  setSignedIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

// export default Navigation;
