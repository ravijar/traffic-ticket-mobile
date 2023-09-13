import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePick() {
  // Initialize state to hold the selected image URI
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Launch the image library and configure options for the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
      <View style={{ alignItems: "center" }}>
        
        {/* Display the selected image if available */}
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 150 }} />
        )}
      </View>
    </View>
  );
}
