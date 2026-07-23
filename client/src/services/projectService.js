import API from "./api";

export const getProjects = async () => {
  const response = await API.get("/projects");
  return response.data;
};

export const createProject = async (project) => {
  const response = await API.post("/projects", project);
  return response.data;
};

export const updateProject = async (id, project) => {
  const response = await API.put(`/projects/${id}`, project);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await API.delete(`/projects/${id}`);
  return response.data;
};