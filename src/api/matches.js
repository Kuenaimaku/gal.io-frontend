import axios from "axios";
export default {
  async fetchMatches() {
    return await axios({
      method: "GET",
      url: "/matches/",
      data: null
    })
      .then(response => {
        return response.data;
      })
      .catch(function(error) {
        console.error(error);
        return error.response;
      });
  },
  async getMatch(id) {
    return await axios({
      method: "GET",
      url: "/matches/" + id,
      data: null
    })
      .then(response => {
        if (response.data.id === null) return null;
        return response.data;
      })
      .catch(function(error) {
        console.error(error);
        return error.response;
      });
  },
  async createMatch(match, team1, team2, user){
    return await axios({
      method: "POST",
      url: "/matches/",
      data: {
        match: match,
        team1: team1,
        team2: team2,
        user: user
      },
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("jwtToken")
      }
    })
  }
};
