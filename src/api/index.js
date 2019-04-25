import axios from "axios";

if (process.env.NODE_ENV === "development")
  axios.defaults.baseURL = "https://localhost:44371/api/";
else axios.defaults.baseURL = "https://localhost:44371/api/";

/// #if MOCK_API
//import accounts from "./mock/accounts";
//import players from "./mock/players";
//import matches from "./mock/matches";
/// #else
import accounts from "./accounts";
import players from "./players";
import matches from "./matches";
/// #endif

export default {
  accounts,
  players,
  matches
};
