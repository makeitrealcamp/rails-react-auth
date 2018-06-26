import axios from 'axios';
import auth from './auth';

export default {
  list() {
    return axios({
      method: "GET",
      url: "/users",
      headers: {
        'Authorization': 'Token token=' + auth.getToken(),
      }
    });
  },

  create(data) {
    return axios({
      method: "POST",
      url: "/users",
      headers: {
        'Content-Type': 'application/json',
      },
      data: { user: data },
    });
  }
}
