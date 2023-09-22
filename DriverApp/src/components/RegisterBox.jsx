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

//box to add details needed for registration
const RegisterBox = ({ navigation }) => {
  return (
    <View style={styles.registerContainer}>
      <View style={{ marginTop: "5%", marginLeft: "5%" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>
            <Text size="lg">FIRST NAME</Text>
          </Text>
          <Input
            style={styles.input2}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="" />
          </Input>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>
            <Text size="lg">LAST NAME </Text>
          </Text>
          <Input
            style={styles.input2}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="" />
          </Input>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", marginRight: 65 }}>
            <Text size="lg">NIC</Text>
          </Text>
          <Input
            style={styles.input2}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="" />
          </Input>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", marginRight: 20 }}>
            <Text size="lg">ADDRESS</Text>
          </Text>
          <Input
            style={styles.input2}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="" />
          </Input>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", marginRight: 35 }}>
            <Text size="lg">MOBILE</Text>
          </Text>
          <Input
            style={styles.input2}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="" />
          </Input>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", marginRight: 8 }}>
            <Text size="lg">PASSWORD</Text>
          </Text>
          <Input
            style={styles.input2}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="" />
          </Input>
        </View>
      </View>

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
          onPress={() => navigation.navigate("Login")}
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
