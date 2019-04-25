import axios from "axios";
import { registerLogFormatter } from "bs-logger";

export default {
  async login(username, password) {
    return await axios({
      method: "POST",
      url: "/account",
      data: {
        Username: username,
        Password: password
      }
    });
	},
	async register(username, email, password, confirm){
		return await axios({
      method: "PUT",
      url: "/account",
      data: {
				Username: username,
				Email: email,
				Password: password,
        Confirm: confirm
      }
    });
	},
  debug: false
};
