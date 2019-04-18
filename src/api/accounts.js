import axios from "axios"

export default {
	async login(username, password) {
		return await axios({
			method: "POST",
			url: "/login",
			data: {
				username: username,
				password: password
			}
		});
	},
	debug: false
}