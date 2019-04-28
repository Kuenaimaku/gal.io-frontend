import * as aTypes from "../action-types";
import * as mTypes from "../mutation-types";
import api from "@/api";
import Axios from "axios";

const state = {
  loggingIn: false,
  loggedIn: false,
  user: !! localStorage.getItem("vuex")
};

const getters = {
  user: state => state.user,
  loggedIn: state => state.loggedIn
};

const actions = {
  async [aTypes.LOG_IN]({ commit }, [username, password]) {
    commit(mTypes.LOGGING_IN);

    try {
      const res = await api.accounts.login(username, password);
      window.localStorage.setItem("jwtToken", res.data.token);
      commit(mTypes.LOG_IN, res.data.user);
    } catch (err) {
      commit(mTypes.LOG_OUT);
      throw err;
    }
  },
  async [aTypes.LOG_OUT]({ commit }) {
    window.localStorage.removeItem("jwtToken");
    commit(mTypes.LOG_OUT);
  }
};

const mutations = {
  [mTypes.LOG_IN](state, user) {
    state.user = user;
    state.loggedIn = false;
    state.loggedIn = true;
  },
  [mTypes.LOGGING_IN](state) {
    state.loggingIn = true;
  },
  [mTypes.LOG_OUT](state) {
    state.user = null;
    state.loggingIn = false;
    state.loggedIn = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
