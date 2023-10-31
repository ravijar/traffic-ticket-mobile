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

//box to add details to update the password
const ForgotUpdateBox = ({ nic, navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const onSubmit = () => {
    if (newPassword === confirmNewPassword) {
      return new Promise((resolve, reject) => {
        axios
          .put(
            `${API_URL}/api/users/update_password/`, // Replace with your endpoint URL
            {
              nic,
              new_password: newPassword,
            }
          )
          .then(() => {
            alert("Password changed successfully");
            // Clear the input fields if needed

            setNewPassword("");
            setConfirmNewPassword("");
          })
          .catch((error) => {
            // reject(error);
            alert("Invalid NIC or password");
            // Handle error, you can display an alert or a message here
          });
      });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <View style={styles.registerContainer}>
      {/* <View style={{ marginTop: "5%" }}>
        <Text style={styles.formText}>NIC Number:{nic}</Text>
      </View> */}
      <View style={{ marginTop: "10%" }}>
        <Text style={styles.formText}>New Password:</Text>
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
        <Text style={styles.formText}>Confirm Password:</Text>
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
            marginTop: "20%",
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
    </View>
  );
};

export default ForgotUpdateBox;
