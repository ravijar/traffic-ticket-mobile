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

const Loginbox = ({ navigation }) => {
  return (
    <View style={styles.container2}>
      <View style={{ marginTop: "15%", marginBottom: "15%" }}>
        <Input
          style={styles.input}
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="NIC Number" />
        </Input>

        <Input
          style={styles.input}
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Password" />
        </Input>
      </View>
      <Button
        style={styles.button}
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <ButtonText style={styles.button}>Sign In </ButtonText>
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
      {/* </View> */}
    </View>
  );
};

export default Loginbox;
