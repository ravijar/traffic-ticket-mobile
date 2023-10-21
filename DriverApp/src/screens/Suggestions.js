import React, { useState } from "react";
import { SafeAreaView, View, TextInput } from "react-native";
import styles from "../components/styles";
import Footer from "../components/Footer";
import Topic from "../components/Topic";
import {
  Textarea,
  TextareaInput,
  GluestackUIProvider,
  config,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { KeyboardAvoidingView } from "react-native";

const PendingFines = ({ navigation, topic }) => {
  const [suggestion, setSuggestion] = useState("");

  const onSubmit = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${API_URL}/api/suggestions/`,
          {
            suggestion,
          },
          config
        )

        .then(() => {
          alert("Your suggestion/complaint has been submitted successfully");
          setSuggestion("");
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  return (
    <GluestackUIProvider config={config.theme}>
      <SafeAreaView style={styles.containerWhite}>
        {/* <Head navigation={navigation} topic={"SUGGESTIONS"}/> */}
        <Topic navigation={navigation} topic={"SUGGESTIONS/COMPLAINTS"} />

        <View style={{ flex: 1 }}>
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={styles.scrollViewContent}
          >
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.containerWhite}
          > */}
            <View
              style={{
                marginTop: "30%",
                alignItems: "center",
                marginBottom: "10%",
              }}
            >
              <Textarea
                size="md"
                isReadOnly={false}
                isInvalid={false}
                isDisabled={false}
                w="100%"
                style={{ width: 300, height: 200 }}
              >
                <TextareaInput
                  placeholder="Give us your suggestions/complaints"
                  value={suggestion}
                  onChangeText={(text) => setSuggestion(text)}
                />
              </Textarea>
            </View>

            <View style={{ width: "30%", alignSelf: "center" }}>
              <Button
                style={styles.button}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={onSubmit}
              >
                <ButtonText style={styles.button}>Submit </ButtonText>
              </Button>
            </View>
          </ScrollView>
          {/* </KeyboardAvoidingView> */}
        </View>

        <Footer navigation={navigation} />
      </SafeAreaView>
    </GluestackUIProvider>
  );
};

export default PendingFines;
