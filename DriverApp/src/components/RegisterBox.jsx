import {
  Input,
  InputField,
  Button,
  ButtonText,
  Link,
  LinkText,
} from "@gluestack-ui/themed";
import styles from "./styles";
import { View, Text } from "react-native";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

//box to add details needed for registration
const RegisterBox = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [NIC, setNIC] = useState("");
  // const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [licenseID, setLicenseID] = useState("");

  const onSubmit = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      NIC === "" ||
      licenseID === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill in all the required fields.");
      return; // Exit the function early
    }
    if (password === confirmPassword) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${API_URL}/api/users/driver_signup/`, {
            first_name: firstName,
            last_name: lastName,
            nic: NIC,
            license_id: licenseID,
            email,
            password,
          })

          .then(() => {
            alert("User successfully registered");
            setFirstName("");
            setLastName("");
            setNIC("");
            setLicenseID("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
          })
          .catch((error) => {
            alert("User registration failed");
            reject(error);
          });
      });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <View style={styles.registerContainer}>
      <View>
        <Input
          style={styles.input2}
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
        </Input>
      </View>

      <Input
        style={styles.input2}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </Input>

      <Input
        style={styles.input2}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="NIC"
          value={NIC}
          onChangeText={(text) => setNIC(text)}
        />
      </Input>
      <Input
        style={styles.input2}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="License ID"
          value={licenseID}
          onChangeText={(text) => setLicenseID(text)}
        />
      </Input>
      <Input
        style={styles.input2}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </Input>

      <Input
        style={styles.input2}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </Input>

      <Input
        style={styles.input2}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </Input>
      <View
        style={{
          marginTop: "5%",
        }}
      >
        <Button
          style={styles.button}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={onSubmit}
        >
          <ButtonText style={styles.button}>Sign Up</ButtonText>
        </Button>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text size="lg">Already have an account? </Text>
        <Link onPress={() => navigation.navigate("Login")}>
          <LinkText size="sm">Sign In</LinkText>
        </Link>
      </View>
    </View>
  );
};

export default RegisterBox;
