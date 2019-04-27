import axios from "axios";

if (process.env.NODE_ENV === "development")
  axios.defaults.baseURL = "http://localhost:5000/api/";
else axios.defaults.baseURL = "http://localhost:5000/api/";

/// #if MOCK_API
//import accounts from "./mock/accounts";
//import players from "./mock/players";
//import matches from "./mock/matches";
/// #else
import accounts from "./accounts";
import players from "./players";
import matches from "./matches";
import champions from "./champions";
/// #endif

export default {
  accounts,
  players,
  matches,
  champions
};
