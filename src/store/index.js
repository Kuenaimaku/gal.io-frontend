import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import createLogger from "vuex/dist/logger";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules,
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState()] : [createPersistedState()]
});

export default store;
