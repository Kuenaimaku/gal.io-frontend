import axios from "axios"

export default {
	async fetchPlayers() {
		return await axios({
			method: "GET",
			url: "/players",
			data: null
		})
		.then(response => {
			console.log(response);
			return response.data;
		})
		.catch(function(error) {
			console.error(error)
			return error.response;
		});
	},
	async validate(name) {
		return await axios({
			method: "GET",
			url: "/players/" + name,
			data: null
		})
		.then(response => {
			if(response.data.id === null)
				return null
			return response.data;
		})
		.catch(function(error) {
			console.error(error)
			return error.response;
		});
	},
	async createPlayer(object) {
		return await axios({
			method: "PUT",
			url: "/players",
			haders: {},
			data: {
				name: object.name,
				summonerName: object.summonerName,
				notes: object.notes
			}
		})
		.then(response => {
			if(response.data.id === null)
				return null
			return response;
		})
		.catch(function(error) {
			console.error(error)
			return error.response;
		});
	},
	async removePlayer(id) {
		return await axios({
			method: "DELETE",
			url: "/players/" + id,
			data: null
		})
		.then(response => {
			if(response.data.id === null)
				return null
			return response;
		})
		.catch(function(error) {
			console.error(error)
			return error.response;
		});
	}
}