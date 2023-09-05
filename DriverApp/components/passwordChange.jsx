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

const PasswordChangeBox = ({ navigation }) => {
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
          <InputField placeholder="NIC" />
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
        <InputField placeholder="Current Password" />
      </Input>

      <Input
        style={styles.input}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="New Password" />
      </Input>

      <Input
        style={styles.input}
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Confirm New Password" />
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
            onPress={() => navigation.navigate("Login")}
          >
            <ButtonText style={styles.button}>Change</ButtonText>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default PasswordChangeBox;
