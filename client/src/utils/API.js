import axios from "axios";

export default {
  // Gets all bets
  getBets: function () {
    return axios.get("/api/bets");
  },
  // Gets the bet with the given id
  getBet: function (id) {
    return axios.get("/api/bets/" + id);
  },
  // Saves a bet to the database
  saveBets: function (betData) {
    return axios.post("/api/bets", betData);
  },
  //Updates a bet
  update: function (id, betData) {
    return axios.put("/api/bets/" + id, betData)
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Authenticates a user
  authenticateUser: function(userData) {
    return axios.post("/auth/login", userData);
  },
  // Sign up a user
  signUp: function(userData) {
    return axios.post("/auth/SignUp", userData);
  }
};
