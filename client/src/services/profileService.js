import API from "./api";

// Get Logged-in User Profile
export const getProfile = async () => {
  try {
    const response = await API.get("/profile");
    return response.data.user;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to fetch profile",
      }
    );
  }
};

// Update User Profile
export const updateProfile = async (profileData) => {
  try {
    const response = await API.put("/profile", profileData);
    return response.data.user;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to update profile",
      }
    );
  }
};