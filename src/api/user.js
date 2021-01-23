import api from "@/api/index";

export default {
  getCurrentUser: () => {
    return api.syncGet({ url: "/login/session/" });
  },
  login: (username, password) => {
    return api.get({ url: "/login/" + username + "/" + password });
  },
  signup: (username, password) => {
    return api.get({ url: "/register/" + username + "/" + password });
  },
  logout: () => {
    return api.get({ url: "/logout/" });
  },
  update: (data) => {
    return api.post({ url: "/setting", data: data });
  },
};
