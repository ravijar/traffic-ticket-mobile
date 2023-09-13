import axios from "axios";
import { API_URL } from "../utils/constants";

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
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { onLogin };
