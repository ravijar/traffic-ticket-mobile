import styles from "./styles";
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

//component to add the header for the needed page
const Head = ({ navigation, topic }) => {
  return (
    <SafeAreaView style={styles.header}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: "5%" }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Image source={require("../assets/back.jpg")} style={styles.back} />
        </TouchableOpacity>

        <Text style={styles.headerText}> {topic}</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            source={require("../assets/logout.jpg")}
            style={styles.logout}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Head;
