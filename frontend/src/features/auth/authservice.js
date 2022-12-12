import axios from "axios";

const API_URL = "/api/users/";

//Register User
const register = async (userData) => {
  const response = await axios.post(
    `http://localhost:5000${API_URL}`,
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(
    `http://localhost:5000${API_URL}login`,
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout User
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
