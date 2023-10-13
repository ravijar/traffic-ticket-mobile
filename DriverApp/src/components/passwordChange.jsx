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

//box to add details to change the password
const PasswordChangeBox = ({ navigation }) => {
  const [NIC, setNIC] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const onSubmit = () => {
    if (newPassword === confirmNewPassword) {
      return new Promise((resolve, reject) => {
        axios
          .put(
            `${API_URL}/api/users/change_password/`, // Replace with your endpoint URL
            {
              nic: NIC,
              old_password: currentPassword,
              new_password: newPassword,
            }
          )
          .then(() => {
            alert("Password changed successfully");
            // Clear the input fields if needed
            setNIC("");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
          })
          .catch((error) => {
            reject(error);
            // Handle error, you can display an alert or a message here
          });
      });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <View style={styles.registerContainer}>
      <View style={{ marginTop: "5%" }}>
        <Input
          style={styles.input}
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
      </View>

      <Input
        style={styles.input}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Current Password"
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
        />
      </Input>

      <Input
        style={styles.input}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="New Password"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
      </Input>

      <Input
        style={styles.input}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
        />
      </Input>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Button
          style={styles.button}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => navigation.navigate("Login")}
        >
          <ButtonText style={styles.button}>Back</ButtonText>
        </Button>

        <View style={{ marginLeft: "20%" }}>
          <Button
            style={styles.button}
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={onSubmit}
          >
            <ButtonText style={styles.button}>Change</ButtonText>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default PasswordChangeBox;
