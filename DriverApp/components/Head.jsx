import styles from "./styles";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";

const Head = ({ navigation, topic }) => {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
    </View>
  );
};

export default Head;
