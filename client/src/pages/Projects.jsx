import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectTable from "../components/ProjectTable";
import AddProjectModal from "../components/AddProjectModal";
import initialProjects from "../data/projects";

export default function Projects() {
  // Load Projects
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects
      ? JSON.parse(savedProjects)
      : initialProjects;
  });

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );
  }, [projects]);

  // Add / Update Project
  const saveProject = (project) => {
    const exists = projects.find(
      (p) => p.id === project.id
    );

    if (exists) {
      setProjects(
        projects.map((p) =>
          p.id === project.id ? project : p
        )
      );
    } else {
      setProjects([...projects, project]);
    }

    setEditingProject(null);
    setShowModal(false);
  };

  // Delete Project
  const deleteProject = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this project?"
      )
    ) {
      setProjects(
        projects.filter((project) => project.id !== id)
      );
    }
  };

  // Edit Project
  const editProject = (project) => {
    setEditingProject(project);
    setShowModal(true);
  };

  // Add New Project
  const addNewProject = () => {
    setEditingProject(null);
    setShowModal(true);
  };

  // Search
  const filteredProjects = projects.filter(
    (project) =>
      project.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Project Management
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Create, edit and manage your projects.
            </p>
          </div>

          <button
            onClick={addNewProject}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-md transition duration-300"
          >
            + Add Project
          </button>

        </div>

        {/* Search */}
        <div>
          <input
            type="text"
            placeholder="🔍 Search Project..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Project Table */}
        <ProjectTable
          projects={filteredProjects}
          onDelete={deleteProject}
          onEdit={editProject}
        />

        {/* Modal */}
        <AddProjectModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setEditingProject(null);
          }}
          onSave={saveProject}
          editingProject={editingProject}
        />

      </div>
    </DashboardLayout>
  );
}