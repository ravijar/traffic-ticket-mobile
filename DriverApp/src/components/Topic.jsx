import styles from "./styles";
import { View, Text } from "react-native";

//component to add the topic for the needed page
const Topic = ({ navigation, topic }) => {
  return (
    <View style={styles.Topic}>
      <Text style={styles.TopicText}> {topic}</Text>
    </View>
  );
};

export default Topic;
