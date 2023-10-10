import React from "react";
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

const PendingFines = ({ navigation, topic }) => {
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
                style={{ height: 200 }}
              >
                <TextareaInput placeholder="Give us your suggestions/complaints" />
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
                onPress={() => navigation.navigate("Dashboard")}
              >
                <ButtonText style={styles.button}>Submit </ButtonText>
              </Button>
            </View>
          </ScrollView>
        </View>

        <Footer navigation={navigation} />
      </SafeAreaView>
    </GluestackUIProvider>
  );
};

export default PendingFines;
