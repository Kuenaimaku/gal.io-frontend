export default {
  /**
   * @brief Mock login function
   * @param {string} username
   * @param {string} password
   *
   * @returns fake axios return object if username and password are equal and not empty, returns 403 otherwise
   */
  async login(username, password) {
    if (username === password && username !== "")
      return await {
        headers: {
          Bearer: "dummy-JWT-token"
        },
        status: 200,
        body: {
          id: 0,
          username: username,
          email: `${username[0]}@${password[0]}.com`,
          country: "GB",
          date_created: null,
          last_login: null,

          is_admin: username === "admin",
          is_mod: username === "mod",
          is_supporter: username === "supporter",
          is_banned: username === "banned",

          can_upload: true,
          can_report: true,
          can_message: true,
          can_submit: true,
          can_connect: true
        }
      };
    else {
      throw {
        status: 403
      };
    }
  },
  debug: true
};
