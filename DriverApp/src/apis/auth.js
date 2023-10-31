import axios from "axios";
import { API_URL } from "../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

const config = {
  headers: {
    accept: "application/json",
  },
};

const onLogin = (nic, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${API_URL}/api/token/`,
        {
          username: nic,
          password,
        },
        config
      )

      .then(async (response) => {
        // console.log(response.data);
        const accessToken = response.data.access;
        try {
          // Store the access token in AsyncStorage
          await AsyncStorage.setItem("accessToken", accessToken);
          resolve(response.data);
          // console.log(accessToken);
          // console.log(jwt_decode(accessToken).role);
        } catch (error) {
          // console.log("error1");
          reject(error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { onLogin };
