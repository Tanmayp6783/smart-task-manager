import API from "./api";

export const registerUser = async (userData) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post("/auth/login", userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const getProfile = async () => {
  const response = await API.get("/profile");
  return response.data;
};

export const updateProfile = async (data) => {
  const response = await API.put("/profile", data);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};