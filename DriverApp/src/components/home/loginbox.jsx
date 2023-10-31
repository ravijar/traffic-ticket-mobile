import {
  Input,
  InputField,
  Button,
  ButtonText,
  Link,
  LinkText,
} from "@gluestack-ui/themed";
import styles from "../styles";
import { View, Text } from "react-native";
import React, { useState } from "react";
import { onLogin } from "../../apis/auth";
import { setSignedIn, setUserNIC } from "../../redux/auth/actions";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

const Loginbox = ({ navigation, setSignedIn, setUserNIC }) => {
  const [nic, setNic] = useState("200023003421");
  const [password, setPassword] = useState("nimesh");

  const onSubmit = () => {
    onLogin(nic, password)
      .then(async (res) => {
        const token = await AsyncStorage.getItem("accessToken");
        const decoded = await jwt_decode(token).role;
        // console.log(decoded);

        if (decoded === "driver") {
          await setSignedIn(true);
          setUserNIC(nic);
          navigation.navigate("Dashboard");
        } else {
          alert("Unauthorized access");
        }
      })
      .catch((err) => {
        alert("Invalid Login Credentials");
        console.log("err", err);
      });
  };

  return (
    <View style={styles.container2}>
      <View style={{ marginTop: "15%", marginBottom: "15%" }}>
        <Text style={styles.formText}>NIC Number:</Text>
        <Input
          style={styles.input}
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            placeholder="NIC Number"
            value={nic}
            onChangeText={(text) => setNic(text)}
          />
        </Input>
        <Text style={styles.formText}>Password:</Text>
        <Input
          style={styles.input}
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            placeholder="Password"
            value={password}
            type="password"
            onChangeText={(text) => setPassword(text)}
          />
        </Input>
      </View>
      <Button
        style={styles.button}
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={onSubmit}
      >
        <ButtonText>Sign In </ButtonText>
      </Button>

      <View style={{ flexDirection: "row" }}>
        <Text size="lg">Don't have an account? </Text>
        <Link onPress={() => navigation.navigate("Register")}>
          <LinkText size="sm">Sign Up</LinkText>
        </Link>
      </View>

      <Link onPress={() => navigation.navigate("ForgotPassword")}>
        <LinkText size="sm">Forgot Password</LinkText>
      </Link>

      <Link onPress={() => navigation.navigate("ChangePassword")}>
        <LinkText size="sm">Change Password</LinkText>
      </Link>
    </View>
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
  nic: state.auth.nic,
});

const mapDispatchToProps = {
  setSignedIn,
  setUserNIC,
};
export default connect(mapStateToProps, mapDispatchToProps)(Loginbox);
