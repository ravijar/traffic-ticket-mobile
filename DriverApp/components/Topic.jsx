import styles from "./styles";
import { View, Text } from "react-native";

const Topic = ({ navigation, topic }) => {
  return (
    <View style={styles.Topic}>
      <Text style={styles.TopicText}> {topic}</Text>
    </View>
  );
};

export default Topic;
