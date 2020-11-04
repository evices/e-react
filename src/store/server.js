import axios from "axios";

const API_URL = "https://evices-react.herokuapp.com/";

const register = (username, email, password) => {
  console.log('user server', username, email, password)

  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  }).then((response) => {
    console.log('signup response', response)
  });
};

const login = (username, password) => {
  let auth = {
    username,
    password
  };
  return axios
    .post(API_URL + "signin", {}, {
      auth
    })
    .then((response) => {
      console.log('login response', response)
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};


