import axios from 'axios';

let jwt = window.localStorage.getItem("jwt");

export default {
  isAuthenticated() {
    return jwt;
  },

  login(email, password) {
    return axios.post("/sessions", {
      email: email,
      password: password
    }).then((response) => {
      jwt = response.data.jwt;
      window.localStorage.setItem("jwt", jwt);
    });
  },

  logout() {
    jwt = null;
    window.localStorage.removeItem("jwt");
  }
}
