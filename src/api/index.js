import axios from "axios";

if (process.env.NODE_ENV === "development")
  axios.defaults.baseURL = "https://localhost:44371/api/";
  //axios.defaults.baseURL = "http://localhost:5000/api/";
else axios.defaults.baseURL = "https://localhost:44371/api/";

import accounts from "./accounts";
import players from "./players";
import matches from "./matches";
import champions from "./champions";

export default {
  accounts,
  players,
  matches,
  champions
};
