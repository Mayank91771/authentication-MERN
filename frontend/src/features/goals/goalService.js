import axios from "axios";

const API_URL = "/api/goals/";

//create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `http://localhost:5000${API_URL}`,
    goalData,
    config
  );

  return response.data;
};

//get user goald
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("this is token" + token);
  const response = await axios.get(`http://localhost:5000${API_URL}`, config);

  return response.data;
};

const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log("Goal id for delete in goalservice: " + goalId);

  const response = await axios.delete(
    `http://localhost:5000${API_URL}` + goalId,
    config
  );

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
