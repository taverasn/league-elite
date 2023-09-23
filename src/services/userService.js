// Imports
import { setToken, getUserFromToken, removeToken } from "./tokenService";

// Variables
//const DATABASE_BASE_URL = "http://localhost:3001/api/users/";
const DATABASE_BASE_URL =
  "https://le-backend-214abcbfd759.herokuapp.com/api/users/";

// Functions
function signup(user) {
  return fetch(DATABASE_BASE_URL + "signup", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.ok) return response.json();
      // error handling
      throw new Error("Email already taken");
    })
    .then((data) => setToken(data.token));
}

function login(credentials) {
  return fetch(DATABASE_BASE_URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (response.ok) return response.json();
      // error handling
      throw new Error("Bad Credentials");
    })
    .then((data) => setToken(data.token));
}

function logout() {
  removeToken();
}

function getUser() {
  return getUserFromToken();
}

// Export Functions

export { signup, login, logout, getUser };
