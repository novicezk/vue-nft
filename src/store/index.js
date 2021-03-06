import { createStore } from 'vuex';
import api from '@/api/user';

export default createStore({
  state: {
    user: undefined
  },
  getters: {
    getCurrentUser: (state) => () => {
      if (state.user) {
        if (state.user.anonymous) {
          return null;
        }
        return state.user;
      }
      let user = api.getCurrentUser();
      if (user.username) {
        state.user = user;
        return user;
      } else {
        state.user = {
          anonymous: true
        };
        return null;
      }
    },
  },
  actions: {
    setCurrentUser: ({ commit }, user) => {
      commit('setCurrentUser', user);
    }
  },
  mutations: {
    setCurrentUser(state, user) {
      state.user = user;
    },
  },
  modules: {
  }
})
