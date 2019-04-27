import axios from "axios";
export default {
  async fetchChampions() {
    return await axios({
      method: "GET",
      url: "/champions",
      data: null
    })
      .then(response => {
        return response.data;
      })
      .catch(function(error) {
        console.error(error);
        return error.response;
      });
  }
};
